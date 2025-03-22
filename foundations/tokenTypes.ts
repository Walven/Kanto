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
