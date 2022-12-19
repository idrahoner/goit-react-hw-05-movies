import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(NavLink)`
  display: block;

  min-width: 100px;
  padding: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal}px;

  text-decoration: none;
  text-align: center;

  transition: ${p => p.theme.transition.scale},
    ${p => p.theme.transition.colorMix};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    border-color: transparent;
  }

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  :hover,
  :focus {
    scale: 1.1;
  }

  :active {
    scale: 0.9;
  }
`;
