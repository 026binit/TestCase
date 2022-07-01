/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Counter, LoginSubmission, HomeScreen, GameApp} from './src';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <GameApp />
    </SafeAreaView>
  );
};

export default App;

/*
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginSubmission} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
*/
