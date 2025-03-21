import type {
  PaletteDarkAlphaTokens,
  PaletteDarkTokens,
  PaletteLightAlphaTokens,
  PaletteLightTokens,
  PaletteStaticTokens,
} from './token';
import type { ColorTokenType } from './tokenTypes';

// TODO: ColorTokenType | colormix of non alpha colors, color
export const palette: Record<
  PaletteLightTokens | PaletteDarkTokens | PaletteLightAlphaTokens | PaletteDarkAlphaTokens | PaletteStaticTokens,
  ColorTokenType
> = {};
