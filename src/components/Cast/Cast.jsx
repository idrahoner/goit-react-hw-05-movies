import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box } from 'components/Box';
import {
  CastGallery,
  GalleryItem,
  CastPicture,
  ActorName,
  CharacterName,
} from './Cast.styled';
import { getMovieCredits, getProfileImage } from 'services';
import profileDefaultImage from 'images/profileDefaultImage.jpeg';

export default function Cast() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setResponse)
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!response) {
    return null;
  }

  return (
    <>
      {response.cast.length ? (
        <CastGallery>
          {response.cast.map(({ id, profile_path, name, character }) => (
            <GalleryItem key={id}>
              <Box
                width={200}
                height={300}
                overflow="hidden"
                borderRadius="normal"
                mb={4}
              >
                <CastPicture
                  src={
                    profile_path
                      ? getProfileImage(profile_path)
                      : profileDefaultImage
                  }
                  alt={name}
                />
              </Box>
              <ActorName>{name}</ActorName>
              <CharacterName>{character}</CharacterName>
            </GalleryItem>
          ))}
        </CastGallery>
      ) : (
        <p>We don't have any information about cast for this movie</p>
      )}
    </>
  );
}
