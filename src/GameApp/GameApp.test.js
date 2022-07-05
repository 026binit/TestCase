import React from 'react';
import {
  render,
  fireEvent,
  within,
  cleanup,
} from '@testing-library/react-native';

import GameApp from './index';

test('Should render passed text as words', () => {
  // render the component
  const {getByLabelText} = render(<GameApp text={'Hello Binit, how r u'} />);

  // query elements
  const questions = getByLabelText('questions');
  const oneButton = within(questions).getByText('Hello');

  // add assertions
  expect(oneButton).toBeDefined();
});

test('Should be able to select the word', () => {
  // render the component
  const {getByText, getByLabelText} = render(
    <GameApp text={'Hello Binit, how r u'} />,
  );

  //query element
  const button = getByText('Hello');

  //select word
  fireEvent.press(button);
  const answers = getByLabelText('answers');
  const selectedButton = within(answers).getByText('Hello');

  //add assertions
  expect(selectedButton).toBeDefined();
});

test('Should be able to unselect word', () => {
  //render the component
  const {getByText, getByLabelText} = render(
    <GameApp text={'Hello Binit, how r u'} />,
  );

  //query element
  const button = getByText('Hello');

  //select word
  fireEvent.press(button);
  const answers = getByLabelText('answers');
  const selectedButton = within(answers).getByText('Hello');

  //add assertions
  expect(selectedButton).toBeDefined();

  // un-select word
  fireEvent.press(selectedButton);
  const questions = getByLabelText('questions');
  const unselectedButton = within(questions).getByText('Hello');

  expect(unselectedButton).toBeDefined();
});

test('Should show an error when a wrong answer is submitted', () => {
  // render the component
  const {getByText} = render(<GameApp text={'Hello Binit, how r u'} />);

  // query element
  const button = getByText('Hello');
  fireEvent.press(button);
  const submitButton = getByText('Submit');
  fireEvent.press(submitButton);
  const failureMessage = getByText('Wrong answer');
  expect(failureMessage).toBeDefined();
});

test('Should clear error message when we click the button again', () => {
  // render the component
  const {getByText, queryByText} = render(
    <GameApp text={'Hello Binit, how r u'} />,
  );

  // query element
  const submitButton = getByText('Submit');
  fireEvent.press(submitButton);
  const failureMessage = getByText('Wrong answer');
  expect(failureMessage).toBeDefined();

  //check if error message dissapears
  const button = getByText('Hello');
  fireEvent.press(button);
  expect(queryByText('Wrong answer')).toBeNull();
});

test('Should show win message when a correct answer is submitted', () => {
  // render the component
  const {getByText} = render(<GameApp text={'Hello Binit, how r u'} />);

  const buttonOne = getByText('Hello');
  fireEvent.press(buttonOne);

  const buttonTwo = getByText('Binit,');
  fireEvent.press(buttonTwo);

  const buttonThree = getByText('how');
  fireEvent.press(buttonThree);

  const buttonFour = getByText('r');
  fireEvent.press(buttonFour);

  const buttonFive = getByText('u');
  fireEvent.press(buttonFive);

  // check result
  const submitButton = getByText('Submit');
  fireEvent.press(submitButton);

  const successMessage = getByText('Correct answer');
  expect(successMessage).toBeDefined();
});
