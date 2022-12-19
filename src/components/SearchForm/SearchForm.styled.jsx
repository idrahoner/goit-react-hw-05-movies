import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const InputField = styled.input`
  min-width: 400px;
  height: 40px;
  margin-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.light};
  border-radius: ${p => p.theme.radii.normal}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  box-shadow: ${p => p.theme.shadows.light};
`;

export const SubmitButton = styled.button`
  min-width: 150px;
  height: 46px;
  padding: ${p => p.theme.space[3]};

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.white};

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
`;
