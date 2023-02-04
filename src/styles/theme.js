export const theme = Object.freeze({
  colors: {
    primaryLight: '#4755EA',
    primaryDark: '#2D39BD',
    // secondaryLight: '#00D0A8',
    // secondaryDark: '#00A383',
    primaryTextColor: '#203546',
    secondaryTextColor: '#aeaeae',
    accentGreen: '#00D0A8',
    accentPink: '#FF6596',
    white: '#ffffff',
    alert: '#e02900',
    bgGradient:
      'linear-gradient(45deg, rgba(0,208,168,0.5018382352941176) 0%, rgba(237,237,237,0.5) 25%, rgba(237,237,237,0.5) 75%, rgba(255,101,150,0.5) 100%)',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Gochi Hand, cursive',
  },
  fontSizes: {
    min: '12px',
    small: '16px',
    medium: '18px',
    large: '24px',
    max: '28px',
    title: '30px',
  },
  fontWeight: {
    regular: 400,
    bold: 700,
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  media: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
  shadows: {
    primaryShadow: '0px 3px 8px #4755EA',
    secondaryShadow: '0px 3px 8px #4755EA',
  },
});
