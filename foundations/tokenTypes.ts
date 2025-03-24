export type ColorTokenType =
  | `oklch(${number}% ${number} ${number})`
  | `rgba(${number} ${number} ${number} ${number})`
  | '#000000'
  | '#FFFFFF'
  | 'transparent';

export type ColorTokenTypeWithReference<TokenType extends string> = ColorTokenType | `var(--${TokenType})`;

export type ColorMixTokenType<TokenType extends string> = {
  space: 'srgb' | 'oklch' | 'hsl' | 'lab';
  a: ColorTokenTypeWithReference<TokenType>;
  aWeight?: `${number}%`;
  b: ColorTokenTypeWithReference<TokenType>;
  bWeight?: `${number}%`;
};

export const colorMixTokenValueToString = <T extends string>(v: ColorMixTokenType<T>) =>
  `color-mix(in ${v.space}, ${v.a}${v.aWeight ? ` ${v.aWeight}` : ''}, ${v.b}${v.bWeight ? ` ${v.bWeight}` : ''})`;

export type PixelUnitTokenType = `${number}px` | `-${number}px`;
