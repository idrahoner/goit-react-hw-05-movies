import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
