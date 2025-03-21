type ColorFromPalette =
  | 'pewter'
  | 'carbon'
  | 'iron'
  | 'zinc'
  | 'silver'
  | 'gold'
  | 'bronze'
  | 'topaz'
  | 'vermilion'
  | 'cinnabar'
  | 'ruby'
  | 'crimson'
  | 'magenta'
  | 'fuchsia'
  | 'amethyst'
  | 'lavender'
  | 'indigo'
  | 'cobalt'
  | 'sapphire'
  | 'cerulean'
  | 'cyan'
  | 'celadon'
  | 'viridian'
  | 'emerald'
  | 'peridot'
  | 'olive'
  | 'saffron'
  | 'amber'
  | 'azure';

type DarkColorFromPalette = `${ColorFromPalette}dark`;

type ColorScale = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15';

type StaticColor = 'black' | 'white';
type StaticColorScale = '50' | '100' | '150' | '200' | '250' | '500' | '750' | '900';

export type ColorType = 'neutral' | 'accent' | 'success' | 'critical' | 'highlight';
/**
 * Allow construction of tokens
 *
 * @example
 * ```
 *  type ColorWithScale = TokenConstructor<['red' | 'blue', '1' | '2']> // 'red-1' | 'red-2' | 'blue-1' | 'blue-2'
 *  type ColorWithScaleToken = TokenConstructor<['color', 'red' | 'blue', '1' | '2']>  // 'color-red-1' | 'color-red-2' | 'color-blue-1' | 'color-blue-2'
 * ```
 *
 * @note Avoid using combining too much complex type (we can have upto 25000 tokens from TokenConstructor but above is getting risky)
 */
export type TokenConstructor<A extends [string, ...string[]]> = A extends [
  infer B extends string,
  ...infer REST extends [string, ...string[]]
]
  ? `${B}-${TokenConstructor<REST>}`
  : A[0];

export type PaletteLightTokens = TokenConstructor<['palette', ColorFromPalette, ColorScale]>;
export type PaletteDarkTokens = TokenConstructor<['palette', DarkColorFromPalette, ColorScale]>;
export type PaletteLightAlphaTokens = TokenConstructor<
  ['palette', Extract<ColorFromPalette, 'iron' | 'indigo'>, 'alpha', ColorScale]
>;
export type PaletteDarkAlphaTokens = TokenConstructor<
  ['palette', Extract<DarkColorFromPalette, 'irondark' | 'indigodark'>, 'alpha', ColorScale]
>;
export type PaletteStaticTokens =
  | TokenConstructor<['palette', StaticColor]>
  | TokenConstructor<['palette', StaticColor, StaticColorScale]>;
export type ColorAliasTokens = TokenConstructor<['color', 'alias', ColorType, ColorScale]>;
