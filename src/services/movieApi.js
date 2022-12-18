import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4482c6f70dd5d76d520552b0779b25da';
// const BASE_OPTIONS = {
//   api_key: API_KEY,
//   language: 'en-US',
//   include_adult: false,
// };

export const getTrending = async () => {
  const url = BASE_URL + '/trending/movie/day';
  const { data } = await axios.get(url, {
    params: {
      api_key: API_KEY,
    },
  });

  console.log(data);
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

  console.log(data);
  return data;
};

export const getMovieDetails = async (id, detail = '') => {
  const url = BASE_URL + '/movie/' + id + detail;
  console.log(url);
  const { data } = await axios.get(url, {
    params: {
      api_key: API_KEY,
    },
  });

  console.log(data);
  return data;
};

export const getMovieCredits = id => {
  return getMovieDetails(id, '/credits');
};

export const getMovieReviews = id => {
  return getMovieDetails(id, '/reviews');
};

export const getMovieImage = imagePath => {
  return `https://image.tmdb.org/t/p/w500${imagePath}`;
};
