import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
} from 'react-native';
import {api} from '../utils/api';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});

const PostDetail = ({navigation}) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postId = navigation.getParam('postId');
    getPost(postId);
    getComments(postId);
  }, [navigation]);

  const getPost = postId => {
    api(`/posts/${postId}`).then(postDetail => {
      setPost({postDetail});
    });
  };

  const getComments = postId => {
    api(`/posts/${postId}/comments`).then(commentDetail => {
      setComments({commentDetail});
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title} testID="post-title">
          {post?.title}
        </Text>
        <Text>{post?.body}</Text>
        <Text style={styles.title}>Comments</Text>
        <FlatList
          data={comments}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetail;
