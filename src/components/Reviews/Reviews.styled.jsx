import styled from 'styled-components';

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const AuthorName = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Comment = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
`;
