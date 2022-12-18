import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieItem from 'pages/MovieItem';

import Cast from 'components/Cast';
import Review from 'components/Review';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
