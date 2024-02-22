const color = {
  BLACK: '#000',
  WHITE: '#fff',
  GRAY3: '#DADADB',
  GRAY5: '#A1A1A1',
  ACTIVE: '#000',
  SIGNATURE: '#FF4800',

  SELECTION_BG: '#FF4800',
  SELECTION_COLOR: '#fff',

  INPUT_VALID: '#34B305',
  INPUT_INVALID: '#D30005',
  INPUT_GRAY: '#C5C5C5',

  FOOTER_BG: 'rgba(246, 246, 246, 0.85)',
  FOOTER_INACTIVE: '#5D5D5D',
};

const gradient = {};

const zIndex = {
  HEADER: 2000,
  FOOTER: 3000,
};

const animation = {};

const lineHeight = {
  BASIC: 1.4,

  NONE: 1,
  SHORT: 1.2,
};

const fontFamily = {
  INTER: `'Inter', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'sans-serif'`,
};

const size = {
  MAX_WIDTH: '550px',
  PRIMARY_FONT_SIZE: '10px',
  VIEWPORT_FONT_SIZE: '1.8181818vw',
};

const padding = {
  BODY: '0 16px',
  BODY_WITH_BOTTOM_MARGIN: '0 16px 120px',
};

const transition = {
  SPEED_DEFAULT: '0.3s',
};

export const theme = {
  color,
  gradient,
  zIndex,
  animation,
  lineHeight,
  fontFamily,
  size,
  padding,
  transition,
} as const;

export type Theme = typeof theme;
