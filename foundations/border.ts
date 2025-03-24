import { BorderRadiusToken, BorderWidthToken } from './token';
import { PixelUnitTokenType } from './tokenTypes';

export const borderRadiuses = {
  'border-radius-none': '0px',
  'border-radius-xs': '2px',
  'border-radius-s': '4px',
  'border-radius-m': '8px',
  'border-radius-l': '12px',
  'border-radius-xl': '16px',
  'border-radius-full': '9999px',
} satisfies Record<BorderRadiusToken, PixelUnitTokenType>;

export const borderWidths = {
  'border-width-0': '0px',
  'border-width-100': '1px',
  'border-width-200': '2px',
  'border-width-300': '3px',
  'border-width-400': '4px',
} satisfies Record<BorderWidthToken, PixelUnitTokenType>;
