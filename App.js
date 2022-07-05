/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Counter,
  LoginSubmission,
  HomeScreen,
  GameApp,
  PostLists,
  PostDetail,
} from './src';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostLists" component={PostLists} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*
<SafeAreaView>
      <GameApp text={'My name is Binit Jha'} />
    </SafeAreaView>
*/
