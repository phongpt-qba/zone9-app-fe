import type { vars } from '@ui/css/vars.css';
import type { Breakpoints, MediaQueries, ZIndices } from './types';

export interface MainTheme {
  siteWidth: number;
  isDark: boolean;
  background: typeof vars.colors;
  colors: typeof vars.colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  space: typeof vars.space;
  shadows: typeof vars.shadows;
  sizes: typeof vars.space;
  radii: typeof vars.radii;
  zIndices: ZIndices;
}

export { darkColors, lightColors } from './colors';
export { default as dark } from './dark';
export { default as light } from './light';
export * from './types';
