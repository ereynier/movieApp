import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import DetailsPage from '~/components/DetailsPage';
import { MediaType } from '~/interfaces/apiresults';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("🚀 ~ Page ~ id:", id)


  return <DetailsPage id={id} mediaType={MediaType.TV} />;
};

export default Page;
