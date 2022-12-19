import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import SearchForm from 'components/SearchForm';
import { searchMovie } from 'services';

// import searchCat from 'data/searchCat.json';

export default function Movies() {
  const [response, setResponse] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  // useEffect(() => {
  //   if (!searchQuery) {
  //     return;
  //   }

  //   if (searchQuery === 'cat') {
  //     setResponse(searchCat);
  //   } else {
  //     setResponse(null);
  //     toast.error(`There are no movie with the name ${searchQuery}`);
  //   }
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
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
