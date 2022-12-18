import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from 'components/SearchForm';
import { searchMovie } from 'services';

// import searchCat from 'data/searchCat.json';

export default function Movies() {
  const [response, setResponse] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  // useEffect(() => {
  //   if (!searchQuery) {
  //     return;
  //   }

  //   setResponse(searchCat);
  // }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    searchMovie(searchQuery)
      .then(setResponse)
      .catch(error => toast.error(error.message));
  }, [searchQuery]);

  const getQuery = query => {
    setSearchParams(query ? { query } : {});
  };

  return (
    <div>
      <SearchForm onSubmit={getQuery} />
      {response && (
        <ul>
          {response.results.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
