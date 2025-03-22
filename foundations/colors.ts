import { ColorAliasToken, ColorType, PaletteToken, TokenConstructor } from './token';

export type ColorStyle = 'strong' | 'subtle' | 'muted';

export type ColorModifier = 'hover' | 'active' | 'selected' | 'disabled';

export type ExtendedColorType = ColorType;

export type BackgroundColorToken =
  | TokenConstructor<['color', 'background', ColorStyle | 'inverse']>
  | TokenConstructor<['color', 'background', ColorType, ColorStyle]>
  | TokenConstructor<['color', 'background', ColorStyle | 'inverse', ColorModifier]>
  | TokenConstructor<['color', 'background', ColorType, ColorStyle, ColorModifier]>;

export type BorderColorToken =
  | TokenConstructor<['color', 'border']>
  | TokenConstructor<['color', 'border', ColorModifier]>
  | TokenConstructor<['color', 'border', ColorStyle]>
  | TokenConstructor<['color', 'border', ColorType]>
  | TokenConstructor<['color', 'border', ColorType, ColorStyle]>
  | TokenConstructor<['color', 'border', ColorStyle, ColorModifier]>
  | TokenConstructor<['color', 'border', ColorType, ColorStyle, ColorModifier]>;

export type IconColorToken =
  | TokenConstructor<['color', 'icon']>
  | TokenConstructor<['color', 'icon', ColorModifier]>
  | TokenConstructor<['color', 'icon', ColorStyle]>
  | TokenConstructor<['color', 'icon', ColorType | 'static-black' | 'static-white' | 'static-inverse']>;

export type SurfaceColorToken =
  | TokenConstructor<['color', 'surface']>
  | TokenConstructor<['color', 'surface', 'sunken' | 'raised' | 'overlay']>;

export type TextColorToken =
  | TokenConstructor<['color', 'text']>
  | TokenConstructor<['color', 'text', ColorStyle]>
  | TokenConstructor<['color', 'text', ColorModifier]>
  | TokenConstructor<['color', 'text', 'placeholder' | 'disabled' | 'link']>
  | TokenConstructor<['color', 'text', ColorType | 'static-black' | 'static-white' | 'inverse']>
  | TokenConstructor<['color', 'text', ColorType | 'inverse', ColorModifier]>;

export type NonAliasColorToken =
  | BackgroundColorToken
  | BorderColorToken
  | IconColorToken
  | SurfaceColorToken
  | TextColorToken;

export type ColorModeTokenType<T extends string> = { dark: T; light: T };

export const colors: Record<ColorAliasToken, ColorModeTokenType<PaletteToken>> &
  Partial<Record<NonAliasColorToken, ColorModeTokenType<ColorAliasToken | PaletteToken>>> = {
  'color-alias-neutral-1': { dark: 'palette-iron-1', light: 'palette-iron-1' },
  'color-alias-neutral-2': { dark: 'palette-iron-2', light: 'palette-iron-2' },
  'color-alias-neutral-3': { dark: 'palette-iron-3', light: 'palette-iron-3' },
  'color-alias-neutral-4': { dark: 'palette-iron-4', light: 'palette-iron-4' },
  'color-alias-neutral-5': { dark: 'palette-iron-5', light: 'palette-iron-5' },
  'color-alias-neutral-6': { dark: 'palette-iron-6', light: 'palette-iron-6' },
  'color-alias-neutral-7': { dark: 'palette-iron-7', light: 'palette-iron-7' },
  'color-alias-neutral-8': { dark: 'palette-iron-8', light: 'palette-iron-8' },
  'color-alias-neutral-9': { dark: 'palette-iron-9', light: 'palette-iron-9' },
  'color-alias-neutral-10': { dark: 'palette-iron-10', light: 'palette-iron-10' },
  'color-alias-neutral-11': { dark: 'palette-iron-11', light: 'palette-iron-11' },
  'color-alias-neutral-12': { dark: 'palette-iron-12', light: 'palette-iron-12' },
  'color-alias-neutral-13': { dark: 'palette-iron-13', light: 'palette-iron-13' },
  'color-alias-neutral-14': { dark: 'palette-iron-14', light: 'palette-iron-14' },
  'color-alias-neutral-15': { dark: 'palette-iron-15', light: 'palette-iron-15' },
  'color-alias-neutral-alpha-1': { dark: 'palette-iron-alpha-1', light: 'palette-iron-alpha-1' },
  'color-alias-neutral-alpha-2': { dark: 'palette-iron-alpha-2', light: 'palette-iron-alpha-2' },
  'color-alias-neutral-alpha-3': { dark: 'palette-iron-alpha-3', light: 'palette-iron-alpha-3' },
  'color-alias-neutral-alpha-4': { dark: 'palette-iron-alpha-4', light: 'palette-iron-alpha-4' },
  'color-alias-neutral-alpha-5': { dark: 'palette-iron-alpha-5', light: 'palette-iron-alpha-5' },
  'color-alias-neutral-alpha-6': { dark: 'palette-iron-alpha-6', light: 'palette-iron-alpha-6' },
  'color-alias-neutral-alpha-7': { dark: 'palette-iron-alpha-7', light: 'palette-iron-alpha-7' },
  'color-alias-neutral-alpha-8': { dark: 'palette-iron-alpha-8', light: 'palette-iron-alpha-8' },
  'color-alias-neutral-alpha-9': { dark: 'palette-iron-alpha-9', light: 'palette-iron-alpha-9' },
  'color-alias-neutral-alpha-10': { dark: 'palette-iron-alpha-10', light: 'palette-iron-alpha-10' },
  'color-alias-neutral-alpha-11': { dark: 'palette-iron-alpha-11', light: 'palette-iron-alpha-11' },
  'color-alias-neutral-alpha-12': { dark: 'palette-iron-alpha-12', light: 'palette-iron-alpha-12' },
  'color-alias-neutral-alpha-13': { dark: 'palette-iron-alpha-13', light: 'palette-iron-alpha-13' },
  'color-alias-neutral-alpha-14': { dark: 'palette-iron-alpha-14', light: 'palette-iron-alpha-14' },
  'color-alias-neutral-alpha-15': { dark: 'palette-iron-alpha-15', light: 'palette-iron-alpha-15' },
  'color-alias-accent-1': { dark: 'palette-indigo-1', light: 'palette-indigo-1' },
  'color-alias-accent-2': { dark: 'palette-indigo-2', light: 'palette-indigo-2' },
  'color-alias-accent-3': { dark: 'palette-indigo-3', light: 'palette-indigo-3' },
  'color-alias-accent-4': { dark: 'palette-indigo-4', light: 'palette-indigo-4' },
  'color-alias-accent-5': { dark: 'palette-indigo-5', light: 'palette-indigo-5' },
  'color-alias-accent-6': { dark: 'palette-indigo-6', light: 'palette-indigo-6' },
  'color-alias-accent-7': { dark: 'palette-indigo-7', light: 'palette-indigo-7' },
  'color-alias-accent-8': { dark: 'palette-indigo-8', light: 'palette-indigo-8' },
  'color-alias-accent-9': { dark: 'palette-indigo-9', light: 'palette-indigo-9' },
  'color-alias-accent-10': { dark: 'palette-indigo-10', light: 'palette-indigo-10' },
  'color-alias-accent-11': { dark: 'palette-indigo-11', light: 'palette-indigo-11' },
  'color-alias-accent-12': { dark: 'palette-indigo-12', light: 'palette-indigo-12' },
  'color-alias-accent-13': { dark: 'palette-indigo-13', light: 'palette-indigo-13' },
  'color-alias-accent-14': { dark: 'palette-indigo-14', light: 'palette-indigo-14' },
  'color-alias-accent-15': { dark: 'palette-indigo-15', light: 'palette-indigo-15' },
  'color-alias-accent-alpha-1': { dark: 'palette-indigo-alpha-1', light: 'palette-indigo-alpha-1' },
  'color-alias-accent-alpha-2': { dark: 'palette-indigo-alpha-2', light: 'palette-indigo-alpha-2' },
  'color-alias-accent-alpha-3': { dark: 'palette-indigo-alpha-3', light: 'palette-indigo-alpha-3' },
  'color-alias-accent-alpha-4': { dark: 'palette-indigo-alpha-4', light: 'palette-indigo-alpha-4' },
  'color-alias-accent-alpha-5': { dark: 'palette-indigo-alpha-5', light: 'palette-indigo-alpha-5' },
  'color-alias-accent-alpha-6': { dark: 'palette-indigo-alpha-6', light: 'palette-indigo-alpha-6' },
  'color-alias-accent-alpha-7': { dark: 'palette-indigo-alpha-7', light: 'palette-indigo-alpha-7' },
  'color-alias-accent-alpha-8': { dark: 'palette-indigo-alpha-8', light: 'palette-indigo-alpha-8' },
  'color-alias-accent-alpha-9': { dark: 'palette-indigo-alpha-9', light: 'palette-indigo-alpha-9' },
  'color-alias-accent-alpha-10': { dark: 'palette-indigo-alpha-10', light: 'palette-indigo-alpha-10' },
  'color-alias-accent-alpha-11': { dark: 'palette-indigo-alpha-11', light: 'palette-indigo-alpha-11' },
  'color-alias-accent-alpha-12': { dark: 'palette-indigo-alpha-12', light: 'palette-indigo-alpha-12' },
  'color-alias-accent-alpha-13': { dark: 'palette-indigo-alpha-13', light: 'palette-indigo-alpha-13' },
  'color-alias-accent-alpha-14': { dark: 'palette-indigo-alpha-14', light: 'palette-indigo-alpha-14' },
  'color-alias-accent-alpha-15': { dark: 'palette-indigo-alpha-15', light: 'palette-indigo-alpha-15' },
  'color-alias-success-1': { dark: 'palette-emerald-1', light: 'palette-viridian-1' },
  'color-alias-success-2': { dark: 'palette-emerald-2', light: 'palette-viridian-2' },
  'color-alias-success-3': { dark: 'palette-emerald-3', light: 'palette-viridian-3' },
  'color-alias-success-4': { dark: 'palette-emerald-4', light: 'palette-viridian-4' },
  'color-alias-success-5': { dark: 'palette-emerald-5', light: 'palette-viridian-5' },
  'color-alias-success-6': { dark: 'palette-emerald-6', light: 'palette-viridian-6' },
  'color-alias-success-7': { dark: 'palette-emerald-7', light: 'palette-viridian-7' },
  'color-alias-success-8': { dark: 'palette-emerald-8', light: 'palette-viridian-8' },
  'color-alias-success-9': { dark: 'palette-emerald-9', light: 'palette-viridian-9' },
  'color-alias-success-10': { dark: 'palette-emerald-10', light: 'palette-viridian-10' },
  'color-alias-success-11': { dark: 'palette-emerald-11', light: 'palette-viridian-11' },
  'color-alias-success-12': { dark: 'palette-emerald-12', light: 'palette-viridian-12' },
  'color-alias-success-13': { dark: 'palette-emerald-13', light: 'palette-viridian-13' },
  'color-alias-success-14': { dark: 'palette-emerald-14', light: 'palette-viridian-14' },
  'color-alias-success-15': { dark: 'palette-emerald-15', light: 'palette-viridian-15' },
  'color-alias-critical-1': { dark: 'palette-cinnabar-1', light: 'palette-ruby-1' },
  'color-alias-critical-2': { dark: 'palette-cinnabar-2', light: 'palette-ruby-2' },
  'color-alias-critical-3': { dark: 'palette-cinnabar-3', light: 'palette-ruby-3' },
  'color-alias-critical-4': { dark: 'palette-cinnabar-4', light: 'palette-ruby-4' },
  'color-alias-critical-5': { dark: 'palette-cinnabar-5', light: 'palette-ruby-5' },
  'color-alias-critical-6': { dark: 'palette-cinnabar-6', light: 'palette-ruby-6' },
  'color-alias-critical-7': { dark: 'palette-cinnabar-7', light: 'palette-ruby-7' },
  'color-alias-critical-8': { dark: 'palette-cinnabar-8', light: 'palette-ruby-8' },
  'color-alias-critical-9': { dark: 'palette-cinnabar-9', light: 'palette-ruby-9' },
  'color-alias-critical-10': { dark: 'palette-cinnabar-10', light: 'palette-ruby-10' },
  'color-alias-critical-11': { dark: 'palette-cinnabar-11', light: 'palette-ruby-11' },
  'color-alias-critical-12': { dark: 'palette-cinnabar-12', light: 'palette-ruby-12' },
  'color-alias-critical-13': { dark: 'palette-cinnabar-13', light: 'palette-ruby-13' },
  'color-alias-critical-14': { dark: 'palette-cinnabar-14', light: 'palette-ruby-14' },
  'color-alias-critical-15': { dark: 'palette-cinnabar-15', light: 'palette-ruby-15' },
  'color-alias-highlight-1': { dark: 'palette-sapphire-1', light: 'palette-sapphire-1' },
  'color-alias-highlight-2': { dark: 'palette-sapphire-2', light: 'palette-sapphire-2' },
  'color-alias-highlight-3': { dark: 'palette-sapphire-3', light: 'palette-sapphire-3' },
  'color-alias-highlight-4': { dark: 'palette-sapphire-4', light: 'palette-sapphire-4' },
  'color-alias-highlight-5': { dark: 'palette-sapphire-5', light: 'palette-sapphire-5' },
  'color-alias-highlight-6': { dark: 'palette-sapphire-6', light: 'palette-sapphire-6' },
  'color-alias-highlight-7': { dark: 'palette-sapphire-7', light: 'palette-sapphire-7' },
  'color-alias-highlight-8': { dark: 'palette-sapphire-8', light: 'palette-sapphire-8' },
  'color-alias-highlight-9': { dark: 'palette-sapphire-9', light: 'palette-sapphire-9' },
  'color-alias-highlight-10': { dark: 'palette-sapphire-10', light: 'palette-sapphire-10' },
  'color-alias-highlight-11': { dark: 'palette-sapphire-11', light: 'palette-sapphire-11' },
  'color-alias-highlight-12': { dark: 'palette-sapphire-12', light: 'palette-sapphire-12' },
  'color-alias-highlight-13': { dark: 'palette-sapphire-13', light: 'palette-sapphire-13' },
  'color-alias-highlight-14': { dark: 'palette-sapphire-14', light: 'palette-sapphire-14' },
  'color-alias-highlight-15': { dark: 'palette-sapphire-15', light: 'palette-sapphire-15' },
};
