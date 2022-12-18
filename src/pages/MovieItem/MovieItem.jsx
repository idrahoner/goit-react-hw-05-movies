import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMovieDetails, getMovieImage } from 'services';

export default function MovieItem() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(setResponse);
  }, [movieId]);

  if (!response) {
    return null;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    response;

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <img src={getMovieImage(poster_path)} alt={title} />
      <h2>
        {title} ({release_date.split('-')[0]})
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(({ name }) => name).join(' ')}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
