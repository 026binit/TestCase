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
  },
});

const GameApp = () => {
  const [unArrangedWordLists, setUnArrangedWordLists] = useState([
    {id: 'un-1', word: 'john'},
    {id: 'un-2', word: 'you'},
    {id: 'un-3', word: 'snow'},
    {id: 'un-4', word: 'nothing'},
    {id: 'un-5', word: 'know'},
  ]);
  const [arrangedWordLists, setArrangedWordLists] = useState([
    {id: 'arrn-1', word: 'you'},
    {id: 'arrn-2', word: 'know'},
    {id: 'arrn-3', word: 'nothing'},
    {id: 'arrn-4', word: 'john'},
    {id: 'arrn-5', word: 'snow'},
  ]);

  return (
    <ScrollView style={STYLES.container}>
      <View>
        <Text>Game Time</Text>
      </View>

      <View style={STYLES.marginTop20}>
        <Text style={STYLES.headingTxt}>
          Arrange the words to form a sentence
        </Text>

        <View style={STYLES.box1}>
          {arrangedWordLists.map(item => (
            <TouchableOpacity key={item?.id} style={STYLES.boxItem}>
              <Text>{item?.word}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={STYLES.marginTop20}>
        <Text style={STYLES.headingTxt}>Arranged Words</Text>

        <View style={STYLES.box1}>
          {unArrangedWordLists.map(item => (
            <TouchableOpacity key={item?.id} style={STYLES.boxItem}>
              <Text>{item?.word}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View>
        <Text style={STYLES.wrongAnsTxt}>Wrong Answer</Text>
      </View>

      <TouchableOpacity style={STYLES.btnStyle}>
        <Text style={STYLES.btnTxt}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GameApp;
