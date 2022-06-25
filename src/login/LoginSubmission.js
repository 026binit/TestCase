import React, {useState} from 'react';
import {Text, View, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import Login from './Login';
//import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// const ENDPOINT_URL =
//   'https://e2c168f9-97f3-42e1-8b31-57f4ab52a3bc.mock.pstmn.io/api/login';
const ENDPOINT_URL = 'https://reqres.in/api/users';
// @ts-ignore

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// @ts-ignore
export default ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSubmit = async data => {
    try {
      setIsLoading(true);
      if (data?.username && data?.password) {
        const res = await axios.post(ENDPOINT_URL, JSON.stringify(data));
        const id = res?.data?.id || '';
        setIsLoading(false);
        navigation.navigate('Home', {id});
      } else {
        throw new Error('Username and Password is required!');
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert(error?.message);
    }
  };
  return (
    <View style={STYLES.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <Login onSubmit={handleOnSubmit} />
      )}
    </View>
  );
};

/*
  {status === 'pending' ? <Spinner /> : null}
  <Text>{errorMessage}</Text>
*/
