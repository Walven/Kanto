import { SpacingToken } from './token';
import { PixelUnitTokenType } from './tokenTypes';

export const spacing = {
  'space-0': '0px',
  'space-50': '2px',
  'space-100': '4px',
  'space-150': '6px',
  'space-200': '8px',
  'space-300': '12px',
  'space-400': '16px',
  'space-500': '20px',
  'space-600': '24px',
  'space-800': '32px',
  'space-1000': '40px',
  'space-1200': '48px',
  'space-1600': '64px',
  'space-2000': '70px',
  'space-2400': '96px',
  'space-3200': '128px',
  'space-negative-25': '-1px',
  'space-negative-50': '-2px',
  'space-negative-100': '-4px',
} satisfies Record<SpacingToken, PixelUnitTokenType>;
