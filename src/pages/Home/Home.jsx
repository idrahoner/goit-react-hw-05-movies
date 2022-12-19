import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box } from 'components/Box';
import { Title, ListItem, MovieLink } from './Home.styled';
import { getTrendingMovies } from 'services';

export default function Home() {
  const [response, setResponse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(setResponse)
      .catch(error => toast.error(error.message));
  }, []);

  if (!response) {
    return null;
  }

  return (
    <Box px={6} py={5} fontSize="l" as="main">
      <Title>Trending today</Title>
      <ul>
        {response.results.map(({ id, title }) => (
          <ListItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </ListItem>
        ))}
      </ul>
    </Box>
  );
}
