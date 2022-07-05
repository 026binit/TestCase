import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {api} from '../utils/api';

const styles = StyleSheet.create({
  row: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

// Types
export const PostRow = ({item, index, onPress}) => (
  <TouchableOpacity
    testID={`post-row-${index}`}
    style={styles.row}
    onPress={onPress}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

const PostList = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    api('/posts')
      .then(postRes => {
        setPosts(postRes);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err?.message);
      });
  };
  return (
    <SafeAreaView>
      <FlatList
        testID="post-list"
        data={posts}
        renderItem={({item, index}) => (
          <PostRow
            item={item}
            index={index}
            onPress={() => navigation.navigate('Post', {postId: item.id})}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => {
          if (loading) {
            return <Text testID="loading-message">Loading</Text>;
          }

          if (error) {
            return <Text testID="error-message">{error}</Text>;
          }

          return <Text testID="no-results">Sorry, no results found.</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default PostList;
