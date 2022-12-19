import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMovieReviews } from 'services';

// import avatarReviews from 'data/avatarReviews.json';
// import catBallouReviews from 'data/catBallouReviews.json';
// import catPackReviews from 'data/catPackReviews.json';

export default function Reviews() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setResponse)
      .catch(error => toast.error(error.message));

    // switch (movieId) {
    //   case '76600':
    //     setResponse(avatarReviews);
    //     break;
    //   case '11694':
    //     setResponse(catBallouReviews);
    //     break;
    //   case '991833':
    //     setResponse(catPackReviews);
    //     break;
    //   default:
    //     toast.error('Something went wrong :(');
    // }
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
