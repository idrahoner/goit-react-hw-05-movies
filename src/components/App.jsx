import { Routes, Route, Link, Outlet } from 'react-router-dom';

import {
  getTrending,
  searchMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getMovieImage,
} from 'services';

getTrending();
searchMovie('cat');
getMovieDetails(76600);
getMovieCredits(76600);
getMovieReviews(76600);

const ReviewComponent = () => {
  return <h2>It's reviews page</h2>;
};

const CastComponent = () => {
  return <h2>It's cast page</h2>;
};

const MovieIdPage = () => {
  return (
    <div>
      <h1>Movie Id page</h1>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

const MoviesPage = () => {
  return (
    <div>
      <h1>This is Movies page</h1>
      <img
        src={getMovieImage('/94xxm5701CzOdJdUEdIuwqZaowx.jpg')}
        alt="testing"
      />
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link to="/movies/1">To movie</Link>
    </div>
  );
};

const LayoutNav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<LayoutNav />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieIdPage />}>
            <Route path="cast" element={<CastComponent />} />
            <Route path="reviews" element={<ReviewComponent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
