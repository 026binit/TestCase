import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'orangered',
  },
  paddingVertical5: {
    paddingVertical: 5,
  },
  txtBold: {
    fontWeight: '700',
  },
});

const PostDetail = ({navigation, route}) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postId = route?.params.postId;
    getComments(postId);
  }, [route]);

  const getComments = async postId => {
    setLoading(true);
    try {
      const postDetailRes = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );
      setLoading(false);
      setComments(postDetailRes?.data);
    } catch (error) {
      Alert.alert(JSON.stringify(error));
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>Comments</Text>
        {loading && <ActivityIndicator size={'large'} />}
        <FlatList
          data={comments}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.paddingVertical5}>
                <Text style={styles.txtBold}>Commented By:-</Text> {item?.name}
              </Text>
              <Text style={styles.paddingVertical5}>
                <Text style={styles.txtBold}>UserEmail:-</Text> {item?.email}
              </Text>
              <Text style={styles.paddingVertical5}>
                <Text style={styles.txtBold}>Comment:-</Text> {item?.body}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostDetail;
