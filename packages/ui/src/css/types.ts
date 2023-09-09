import type { Tokens } from '../tokens';

export type Theme = {
  background: Tokens['colors'];
  colors: Tokens['colors'];
  fonts: Tokens['fonts'];
  borderWidths: Tokens['borderWidths'];
  radii: Tokens['radii'];
  space: Tokens['space'];
  fontSizes: Tokens['fontSizes'];
  shadows: Tokens['shadows'];
};
