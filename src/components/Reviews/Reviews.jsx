import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ListItem, AuthorName, Comment } from './Reviews.styled';
import { getMovieReviews } from 'services';

export default function Reviews() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setResponse)
      .catch(error => toast.error(error.message));
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
              <ListItem key={id}>
                <AuthorName>
                  Author: <b>{name ? name : username}</b>
                </AuthorName>
                <Comment>{content}</Comment>
              </ListItem>
            )
          )}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
