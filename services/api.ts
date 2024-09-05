import { MediaType, TrendingResult } from '~/interfaces/apiresults';

const TMDB_KEY = process.env.EXPO_PUBLIC_TMDB_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=fr-FR&api_key=${TMDB_KEY}&page=${1}`
  );

  const data = await response.json();
  return data;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=fr-FR&api_key=${TMDB_KEY}&query=${query}`
  );

  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=fr-FR&api_key=${TMDB_KEY}`
  );

  const data = await response.json();
  return data;
};
