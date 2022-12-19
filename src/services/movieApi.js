import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4482c6f70dd5d76d520552b0779b25da';

export const getTrendingMovies = async () => {
  const url = BASE_URL + '/trending/movie/day';
  const { data } = await axios.get(url, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const searchMovie = async query => {
  const url = BASE_URL + '/search/movie';
  const { data } = await axios.get(url, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data;
};

export const getMovieDetails = async (id, detail = '') => {
  const url = BASE_URL + '/movie/' + id + detail;
  const { data } = await axios.get(url, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getMovieCredits = id => {
  return getMovieDetails(id, '/credits');
};

export const getMovieReviews = id => {
  return getMovieDetails(id, '/reviews');
};

export const getMovieImage = imagePath => {
  return `https://image.tmdb.org/t/p/w300${imagePath}`;
};

export const getProfileImage = imagePath => {
  return `https://image.tmdb.org/t/p/w200${imagePath}`;
};
