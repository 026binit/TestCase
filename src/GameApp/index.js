import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const STYLES = StyleSheet.create({
  container: {
    margin: 15,
  },
  headingTxt: {
    color: '#000',
    fontSize: 20,
  },
  box1: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  boxItem: {
    borderWidth: 1,
    borderColor: '#333FFF',
    flexWrap: 'wrap',
    marginRight: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  marginTop20: {
    marginTop: 20,
  },
  wrongAnsTxt: {
    color: 'red',
    fontSize: 18,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: '#3391FF',
    padding: 10,
    marginTop: 20,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
});

function generateRandomString(text) {
  const array = text.split(' ');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const GameApp = ({text}) => {
  const [question, setQuestion] = useState(generateRandomString(text));
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState(null);

  const unselectWord = word => {
    const newAnswerArray = answer.filter(item => item !== word);
    const newQuestionArray = [...question, word];
    setAnswer(newAnswerArray);
    setQuestion(newQuestionArray);
    resetResult();
  };

  const checkResult = () => {
    if (answer.join(' ') === text) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const resetResult = () => {
    setResult(null);
  };

  const selectWord = word => {
    const newQuestionArray = question.filter(item => item !== word);
    const newAnswerArray = [...answer, word];
    setQuestion(newQuestionArray);
    setAnswer(newAnswerArray);
    resetResult();
  };

  return (
    <ScrollView style={STYLES.container}>
      <View>
        <Text>Game Time</Text>
      </View>

      <View style={STYLES.marginTop20}>
        <Text style={STYLES.headingTxt}>
          Arrange the words to form a sentence
        </Text>

        <View accessibilityLabel="questions" style={STYLES.box1}>
          {question?.length > 0 ? (
            <>
              {question.map(item => (
                <TouchableOpacity
                  onPress={() => selectWord(item)}
                  key={`un-${item}`}
                  style={STYLES.boxItem}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </>
          ) : null}
        </View>
      </View>

      <View style={STYLES.marginTop20}>
        <Text style={STYLES.headingTxt}>Arranged Words</Text>

        <View accessibilityLabel="answers" style={STYLES.box1}>
          {answer?.length > 0 ? (
            <>
              {answer.map(item => (
                <TouchableOpacity
                  onPress={() => unselectWord(item)}
                  key={`an-${item}`}
                  style={STYLES.boxItem}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </>
          ) : null}
        </View>
      </View>

      {result !== null ? (
        <View style={STYLES.paddingVertical10}>
          <Text style={STYLES.wrongAnsTxt}>
            {result ? 'Correct answer' : 'Wrong answer'}
          </Text>
        </View>
      ) : null}

      <TouchableOpacity onPress={checkResult} style={STYLES.btnStyle}>
        <Text style={STYLES.btnTxt}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GameApp;
