import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits, getProfileImage } from 'services';

export default function Cast() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(setResponse);
  }, [movieId]);

  if (!response) {
    return null;
  }

  // TODO: set Default image! some profile image return null!

  return (
    <>
      {response.cast.length ? (
        <ul>
          {response.cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img src={getProfileImage(profile_path)} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about cast for this movie</p>
      )}
    </>
  );
}
