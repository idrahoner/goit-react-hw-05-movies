import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  margin-bottom: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.xxl}px;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  padding: ${p => p.theme.space[4]}px;

  text-decoration: none;
  color: ${p => p.theme.colors.textColor};
  box-shadow: ${p => p.theme.shadows.contrast};

  transition: ${p => p.theme.transition.color};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
