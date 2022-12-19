import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMovieCredits, getProfileImage } from 'services';
import profileDefaultImage from 'images/profileDefaultImage.jpeg';

// import avatarCredits from 'data/avatarCredits.json';
// import catBallouCredits from 'data/catBallouCredits.json';
// import catPackCredits from 'data/catPackCredits.json';

export default function Cast() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setResponse)
      .catch(error => toast.error(error.message));

    // switch (movieId) {
    //   case '76600':
    //     setResponse(avatarCredits);
    //     break;
    //   case '11694':
    //     setResponse(catBallouCredits);
    //     break;
    //   case '991833':
    //     setResponse(catPackCredits);
    //     break;
    //   default:
    //     toast.error('Something went wrong :(');
    // }
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
              <img
                src={
                  profile_path
                    ? getProfileImage(profile_path)
                    : profileDefaultImage
                }
                alt={name}
              />
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
