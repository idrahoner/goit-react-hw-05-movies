import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from 'components/SearchForm';
import { searchMovie } from 'services';
import { ListItem, MovieLink } from './Movies.styled';
import { Box } from 'components/Box';

export default function Movies() {
  const [response, setResponse] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    searchMovie(searchQuery)
      .then(resp => {
        if (!resp.total_results) {
          throw new Error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setResponse(resp);
      })
      .catch(error => {
        setSearchParams({});
        setResponse(null);
        toast.error(error.message);
      });
  }, [searchQuery, setSearchParams]);

  const getQuery = query => {
    setSearchParams(query ? { query } : {});
  };

  return (
    <Box px={6} py={5} fontSize="l" as="main">
      <SearchForm onSubmit={getQuery} />
      {response && (
        <ul>
          {response.results.map(({ id, title }) => (
            <ListItem key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </ListItem>
          ))}
        </ul>
      )}
    </Box>
  );
}
