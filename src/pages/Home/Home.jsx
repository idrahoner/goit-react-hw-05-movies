import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getTrendingMovies } from 'services';

// import trendingMovies from 'data/trendingMovies.json';

export default function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(setResponse)
      .catch(error => toast.error(error.message));
  }, []);

  // useEffect(() => {
  //   setResponse(trendingMovies);
  // }, []);

  if (!response) {
    return null;
  }

  return (
    <div>
      <ul>
        {response.results.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
