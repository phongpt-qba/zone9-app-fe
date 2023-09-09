import { darkColors, lightColors } from './colors';

export const shadows = {};

export const tokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  fonts: {
    normal: "'helvetica', sans-serif",
  },
  space: {
    '0': '0px',
    '1px': '1px',
    '2px': '2px',
    unset: 'unset',
  },
  borderWidths: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '0': '0px',
    '8px': '8px',
    '12px': '12px',
    '20px': '20px',
    '34px': '34px',
    small: '4px',
    default: '16px',
    card: '24px',
    circle: '50%',
  },
  fontSizes: {
    '1rem': '1rem',
  },
  shadows,
} as const;

export type Mode = 'light' | 'dark';
export type Tokens = typeof tokens;
