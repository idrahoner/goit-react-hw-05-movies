export const theme = Object.freeze({
  borders: {
    none: 'none',
    light: '1px solid teal',
    normal: '2px solid teal',
  },
  colors: {
    accent: 'tomato',
    primary: 'teal',
    secondary: 'grey',
    textColor: 'black',
    white: 'white',
  },
  fontSizes: {
    xs: 12,
    s: 16,
    m: 24,
    l: 32,
    xl: 36,
    xxl: 64,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  opacities: {
    none: 0,
    half: 0.6,
    full: 1,
  },
  radii: {
    none: 'none',
    normal: 5,
    circle: '50%',
  },
  shadows: {
    none: 'none',
    light: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
    contrast: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    highContrast:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  transition: {
    opacity: 'opacity 250ms linear',
    scale: 'scale 250ms linear',
    color: 'color 250ms linear',
    colorMix:
      'color 250ms linear, background-color 250ms linear, border-color 250ms linear',
  },
});
