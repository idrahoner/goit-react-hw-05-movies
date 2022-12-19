import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HiArrowSmLeft } from 'react-icons/hi';

import { Box } from 'components/Box';
import {
  BackLink,
  DetailsLink,
  Poster,
  MovieName,
  SubTitle,
  Text,
} from './MovieDetails.styled';
import { getMovieDetails, getMovieImage } from 'services';
import posterDefaultImage from 'images/posterDefaultImage.jpeg';

export default function MovieDetails() {
  const [response, setResponse] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLocation = location.state?.from || '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setResponse)
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!response) {
    return null;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    response;

  const posterImage = poster_path
    ? getMovieImage(poster_path)
    : posterDefaultImage;
  return (
    <Box px={6} py={5} fontSize="l" as="main">
      <BackLink to={backLocation}>
        <HiArrowSmLeft />
        Go back
      </BackLink>
      <Box py={5} mb={5} display="flex" as="section">
        <Poster src={posterImage} alt={title} />
        <Box>
          <MovieName>
            {title} ({release_date.split('-')[0]})
          </MovieName>
          <Text>User score: {vote_average}</Text>
          <SubTitle>Overview</SubTitle>
          <Text>{overview}</Text>
          <SubTitle>Genres</SubTitle>
          <Text>{genres.map(({ name }) => name).join(', ')}</Text>
        </Box>
      </Box>
      <Box display="flex">
        <DetailsLink to="cast" state={{ from: backLocation }}>
          Cast
        </DetailsLink>
        <DetailsLink to="reviews" state={{ from: backLocation }}>
          Reviews
        </DetailsLink>
      </Box>
      <Box py={5} as="section">
        <Outlet />
      </Box>
    </Box>
  );
}
