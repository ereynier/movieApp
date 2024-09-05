import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';

import MovieCard from '~/components/MovieCard';
import { getSearchResults, getTrending } from '~/services/api';
import { Container, Title, Main, Subtitle } from '~/tamagui.config';
import useDebounce from '~/utils/useDebounce';

const Page = () => {
  const [searchString, setSearchString] = React.useState('');
  const debouncedString = useDebounce(searchString, 300);

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  const searchQuery = useQuery({
    queryKey: ['search', debouncedString],
    queryFn: () => getSearchResults(debouncedString),
    enabled: debouncedString.length > 0,
  });

  return (
    <Main>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title
              color="#fff"
              enterStyle={{
                opacity: 0,
                scale: 1.5,
                y: -10,
              }}
              animation="quick">
              Trending
            </Title>
            <Input
              placeholder="Search for a movie..."
              placeholderTextColor="#fff"
              size="$4"
              value={searchString}
              onChangeText={(text) => setSearchString(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        animation="lazy">
        {searchQuery.data?.results && debouncedString.length > 0 ? 'Search results' : 'Trendings'}
      </Subtitle>

      {trendingQuery.isLoading || searchQuery.isLoading ? (
        <Spinner py={14} size="large" color="$blue10" />
      ) : null}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={20}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {searchQuery.data?.results
          ? searchQuery.data?.results.map((item: any) => <MovieCard key={item.id} movie={item} />)
          : trendingQuery.data?.results.map((item: any) => (
              <MovieCard key={item.id} movie={item} />
            ))}
      </ScrollView>
    </Main>
  );
};

export default Page;
