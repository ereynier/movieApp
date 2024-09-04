import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  return (
    <View>
      <Link href="/(drawer)/home/movie/1" asChild>
        <Text>Movie 1</Text>
      </Link>
      <Text>Home</Text>
    </View>
  );
};

export default Page;
