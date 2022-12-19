import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMovieDetails, getMovieImage } from 'services';

// import avatarMovie from 'data/avatarMovie.json';
// import catBallouMovie from 'data/catBallouMovie.json';
// import catPackMovie from 'data/catPackMovie.json';

export default function MovieDetails() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLocation = location.state?.from || '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setResponse)
      .catch(error => toast.error(error.message));

    // switch (movieId) {
    //   case '76600':
    //     setResponse(avatarMovie);
    //     break;
    //   case '11694':
    //     setResponse(catBallouMovie);
    //     break;
    //   case '991833':
    //     setResponse(catPackMovie);
    //     break;
    //   default:
    //     toast.error('Something went wrong :(');
    // }
  }, [movieId]);

  if (!response) {
    return null;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    response;

  return (
    <div>
      <Link to={backLocation}>Go back</Link>
      <img src={getMovieImage(poster_path)} alt={title} />
      <h2>
        {title} ({release_date.split('-')[0]})
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(({ name }) => name).join(' ')}</p>
      <Link to="cast" state={{ from: backLocation }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: backLocation }}>
        Reviews
      </Link>
      <Outlet />
    </div>
  );
}
