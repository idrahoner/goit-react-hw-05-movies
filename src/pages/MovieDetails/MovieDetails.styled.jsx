import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const DetailsLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 46px;
  padding: ${p => p.theme.space[3]};

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.white};

  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m}px;

  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.normal}px;
  box-shadow: ${p => p.theme.shadows.light};
  cursor: pointer;

  transition: ${p => p.theme.transition.scale},
    ${p => p.theme.transition.colorMix};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    border-color: transparent;
  }

  :hover,
  :focus {
    scale: 1.1;
  }

  :active {
    scale: 0.9;
  }

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 46px;
  padding: ${p => p.theme.space[3]};

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.white};

  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m}px;

  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.normal}px;
  box-shadow: ${p => p.theme.shadows.light};
  cursor: pointer;

  transition: ${p => p.theme.transition.scale},
    ${p => p.theme.transition.colorMix};

  :hover,
  :focus {
    scale: 1.1;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    border-color: transparent;
  }

  :active {
    scale: 0.9;
  }

  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const Poster = styled.img`
  margin-right: ${p => p.theme.space[5]}px;
`;

export const MovieName = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const SubTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.l}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
