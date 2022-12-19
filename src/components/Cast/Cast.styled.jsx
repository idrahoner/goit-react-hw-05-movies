import styled from 'styled-components';

export const CastGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]}px;
`;

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-basis: 250px;

  padding: ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.radii.normal}px;
  box-shadow: ${p => p.theme.shadows.contrast};
`;

export const CastPicture = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const ActorName = styled.h3`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.m}px;
`;
export const CharacterName = styled.p`
  display: block;

  text-align: center;
  font-size: ${p => p.theme.fontSizes.m}px;
`;
