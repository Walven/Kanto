import { SizeHeightToken, SizeWidthToken } from './token';
import { PixelUnitTokenType } from './tokenTypes';

export const sizeWidth = {
  'size-width-600': '240px',
  'size-width-800': '320px',
  'size-width-1000': '400px',
  'size-width-1200': '480px',
  'size-width-1600': '640px',
} satisfies Record<SizeWidthToken, PixelUnitTokenType>;

export const sizeHeight = {
  'size-height-0': '0px',
  'size-height-25': '1px',
  'size-height-50': '2px',
  'size-height-100': '4px',
  'size-height-200': '8px',
  'size-height-300': '12px',
  'size-height-400': '16px',
  'size-height-500': '20px',
  'size-height-600': '24px',
  'size-height-800': '32px',
  'size-height-1000': '40px',
  'size-height-1200': '48px',
  'size-height-1600': '64px',
} satisfies Record<SizeHeightToken, PixelUnitTokenType>;
