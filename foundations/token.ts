import { colors, type ColorType } from './colors';

// prettier-ignore
type ColorFromPalette = 'pewter'| 'carbon'| 'iron'| 'zinc'| 'silver'| 'gold'| 'bronze'| 'topaz'| 'vermilion'| 'cinnabar'| 'ruby'| 'crimson'| 'magenta'| 'fuchsia'| 'amethyst'| 'lavender'| 'indigo'| 'cobalt'| 'sapphire'| 'cerulean'| 'cyan'| 'celadon'| 'viridian'| 'emerald'| 'peridot'| 'olive'| 'saffron'| 'amber'| 'azure';
type DarkColorFromPalette = `${ColorFromPalette}dark`;
type ColorScale = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15';
type StaticColor = 'black' | 'white';
type StaticColorScale = '50' | '100' | '150' | '250' | '500' | '750' | '900';

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

export type PaletteLightToken = TokenConstructor<['palette', ColorFromPalette, ColorScale]>;

export type PaletteDarkToken = TokenConstructor<['palette', DarkColorFromPalette, ColorScale]>;

export type PaletteLightAlphaToken = TokenConstructor<
  ['palette', Extract<ColorFromPalette, 'iron' | 'indigo'>, 'alpha', ColorScale]
>;

export type PaletteDarkAlphaToken = TokenConstructor<
  ['palette', Extract<DarkColorFromPalette, 'irondark' | 'indigodark'>, 'alpha', ColorScale]
>;

export type PaletteStaticToken =
  | TokenConstructor<['palette', StaticColor]>
  | TokenConstructor<['palette', StaticColor, StaticColorScale]>;

export type PaletteToken =
  | PaletteLightToken
  | PaletteDarkToken
  | PaletteLightAlphaToken
  | PaletteDarkAlphaToken
  | PaletteStaticToken;

export type ColorAliasToken =
  | TokenConstructor<['color', 'alias', ColorType, ColorScale]>
  | TokenConstructor<['color', 'alias', 'neutral' | 'accent', 'alpha', ColorScale]>;

export type ColorToken = keyof typeof colors;
export type ColorAndPaletteToken = ColorToken | PaletteToken;
export type ColorBackgroundToken = Extract<ColorToken, `color-background${string}`>;
export type ColorBorderToken = Extract<ColorToken, `color-border${string}`>;
export type ColorIconToken = Extract<ColorToken, `color-icon${string}`>;
export type ColorSurfaceToken = Extract<ColorToken, `color-surface${string}`>;
export type ColorTextToken = Extract<ColorToken, `color-text${string}`>;

// prettier-ignore
type SpacingScale = '0' | '50' | '100' | '150' | '200' | '300' | '400' | '500' | '600' | '800' | '1000' | '1200' | '1600' | '2000' | '2400' | '3200';
type SpacingNegativeScale = '25' | '50' | '100';

export type SpacingToken =
  | TokenConstructor<['space', SpacingScale]>
  | TokenConstructor<['space', 'negative', SpacingNegativeScale]>;

type BorderRadiusScale = 'sharp' | 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'round' | 'full';
export type BorderRadiusToken = TokenConstructor<['border', 'radius', BorderRadiusScale]>;

type BorderWidthScale = '0' | '100' | '200' | '300' | '400';
export type BorderWidthToken = TokenConstructor<['border', 'width', BorderWidthScale]>;
