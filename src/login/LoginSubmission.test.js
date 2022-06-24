import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginSubmission from './LoginSubmission';

import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});

jest.mock('@react-navigation/native-stack', () => ({
  createStackNavigator: jest.fn(),
}));

describe('first describe', () => {
  it('first -> first it', () => {});
});
