import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services';

export default function Review() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setResponse);
  }, [movieId]);

  if (!response) {
    return null;
  }

  return (
    <>
      {response.results.length ? (
        <ul>
          {response.results.map(
            ({ id, author_details: { name, username }, content }) => (
              <li key={id}>
                <h3>Author: {name ? name : username}</h3>
                <p>{content}</p>
              </li>
            )
          )}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
