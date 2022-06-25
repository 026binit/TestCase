import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';

import axios from 'axios';

const ENDPOINT_URL = 'https://reqres.in/api/users';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  txtStyle: {
    fontSize: 22,
  },
});

const HomeScreen = ({route}) => {
  const [userDetail, setUserDetail] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const id = route?.params?.id;
  const isUserDetailAvailable = Object.keys(userDetail).length;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        //  const res = await axios.get(`https://reqres.in/api/users/${id}`);
        const res = await axios.get('https://reqres.in/api/users/2');
        setUserDetail(res?.data?.data);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        Alert.alert(error?.message);
      }
    }
    fetchData();
  }, [id]);
  return (
    <View style={STYLES.container}>
      {isFetching && <ActivityIndicator size={'large'} color="green" />}

      {!isFetching && isUserDetailAvailable ? (
        <View>
          <Image style={STYLES.imgStyle} source={{uri: userDetail?.avatar}} />

          <Text style={STYLES.txtStyle}>
            User Name: {userDetail?.first_name} {userDetail?.last_name}
          </Text>
        </View>
      ) : null}

      {!isFetching && !isUserDetailAvailable ? (
        <Text>User Detail not available</Text>
      ) : null}
    </View>
  );
};

export default HomeScreen;
