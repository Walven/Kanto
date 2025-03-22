import type { ColorAliasToken, PaletteToken, TokenConstructor } from './token';
import type { ColorMixTokenType } from './tokenTypes';

export type ColorType = 'neutral' | 'accent' | 'success' | 'critical' | 'highlight';
type ColorStyle = 'strong' | 'subtle' | 'muted';
type ColorModifier = 'hover' | 'active' | 'selected' | 'disabled';

type LikelyColorBackgroundToken =
  | TokenConstructor<['color', 'background', ColorStyle | 'inverse' | 'transparent']>
  | TokenConstructor<['color', 'background', ColorModifier]>
  | TokenConstructor<['color', 'background', ColorType, ColorStyle]>
  | TokenConstructor<['color', 'background', ColorType, ColorModifier]>
  | TokenConstructor<['color', 'background', ColorStyle | 'inverse', ColorModifier]>
  | TokenConstructor<['color', 'background', ColorType, ColorStyle, ColorModifier]>;

type LikelyColorBorderToken =
  | TokenConstructor<['color', 'border']>
  | TokenConstructor<['color', 'border', ColorModifier]>
  | TokenConstructor<['color', 'border', ColorStyle]>
  | TokenConstructor<['color', 'border', ColorType]>
  | TokenConstructor<['color', 'border', ColorType, ColorStyle]>
  | TokenConstructor<['color', 'border', ColorType, ColorModifier]>
  | TokenConstructor<['color', 'border', ColorStyle, ColorModifier]>
  | TokenConstructor<['color', 'border', ColorType, ColorStyle, ColorModifier]>;

type LikelyColorIconToken =
  | TokenConstructor<['color', 'icon']>
  | TokenConstructor<['color', 'icon', ColorModifier]>
  | TokenConstructor<['color', 'icon', ColorStyle]>
  | TokenConstructor<['color', 'icon', ColorType | 'static-black' | 'static-white' | 'static-inverse']>;

type LikelyColorSurfaceToken =
  | TokenConstructor<['color', 'surface']>
  | TokenConstructor<['color', 'surface', 'sunken' | 'raised' | 'overlay']>;

type LikelyColorTextToken =
  | TokenConstructor<['color', 'text']>
  | TokenConstructor<['color', 'text', ColorStyle]>
  | TokenConstructor<['color', 'text', ColorModifier]>
  | TokenConstructor<['color', 'text', 'placeholder' | 'disabled']>
  | TokenConstructor<['color', 'text', ColorType | 'static-black' | 'static-white' | 'inverse']>
  | TokenConstructor<['color', 'text', ColorType | 'inverse', ColorModifier]>
  | TokenConstructor<['color', 'text', ColorType | 'inverse', ColorStyle]>;

type NonAliasColorToken =
  | LikelyColorBackgroundToken
  | LikelyColorBorderToken
  | LikelyColorIconToken
  | LikelyColorSurfaceToken
  | LikelyColorTextToken;

type ColorStaticTransparentToken = TokenConstructor<['color', 'static', 'transparent']>;

export type ColorModeTokenType<T> = { dark: T; light: T };

export const colors = {
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
  'color-static-transparent': {
    dark: { space: 'srgb', a: '#FFFFFF', aWeight: '0.01%', b: 'transparent' },
    light: { space: 'srgb', a: '#FFFFFF', aWeight: '0.01%', b: 'transparent' },
  },
  // Color/Background
  'color-background-strong': { dark: 'color-alias-neutral-11', light: 'color-alias-neutral-11' },
  'color-background-muted': { dark: 'color-alias-neutral-5', light: 'color-alias-neutral-5' },
  'color-background-muted-hover': { dark: 'color-alias-neutral-6', light: 'color-alias-neutral-6' },
  'color-background-muted-active': { dark: 'color-alias-neutral-7', light: 'color-alias-neutral-7' },
  'color-background-subtle': { dark: 'color-alias-neutral-4', light: 'color-alias-neutral-4' },
  'color-background-subtle-hover': { dark: 'color-alias-neutral-5', light: 'color-alias-neutral-5' },
  'color-background-subtle-active': { dark: 'color-alias-neutral-6', light: 'color-alias-neutral-6' },
  'color-background-transparent': { dark: 'color-static-transparent', light: 'color-static-transparent' },
  'color-background-disabled': { dark: 'color-alias-neutral-alpha-3', light: 'color-alias-neutral-alpha-3' },
  // Color/Background/Accent
  'color-background-accent-strong': { dark: 'color-alias-accent-10', light: 'color-alias-accent-11' },
  'color-background-accent-strong-hover': { dark: 'color-alias-accent-11', light: 'color-alias-accent-12' },
  'color-background-accent-strong-active': { dark: 'color-alias-accent-12', light: 'color-alias-accent-13' },
  'color-background-accent-muted': { dark: 'color-alias-accent-5', light: 'color-alias-accent-5' },
  'color-background-accent-muted-hover': { dark: 'color-alias-accent-6', light: 'color-alias-accent-6' },
  'color-background-accent-muted-active': { dark: 'color-alias-accent-7', light: 'color-alias-accent-7' },
  'color-background-accent-subtle': { dark: 'color-alias-accent-4', light: 'color-alias-accent-4' },
  'color-background-accent-subtle-hover': { dark: 'color-alias-accent-5', light: 'color-alias-accent-5' },
  'color-background-accent-subtle-active': { dark: 'color-alias-accent-6', light: 'color-alias-accent-6' },
  'color-background-accent-selected': { dark: 'color-alias-accent-6', light: 'color-alias-accent-6' },
  // Color/Background/Success
  'color-background-success-strong': { dark: 'color-alias-success-11', light: 'color-alias-success-11' },
  'color-background-success-muted': { dark: 'color-alias-success-5', light: 'color-alias-success-5' },
  'color-background-success-subtle': { dark: 'color-alias-success-4', light: 'color-alias-success-4' },
  // Color/Background/Critical
  'color-background-critical-strong': { dark: 'color-alias-critical-11', light: 'color-alias-critical-11' },
  'color-background-critical-strong-hover': { dark: 'color-alias-critical-12', light: 'color-alias-critical-12' },
  'color-background-critical-strong-active': { dark: 'color-alias-critical-13', light: 'color-alias-critical-13' },
  'color-background-critical-muted': { dark: 'color-alias-critical-5', light: 'color-alias-critical-5' },
  'color-background-critical-muted-hover': { dark: 'color-alias-critical-6', light: 'color-alias-critical-6' },
  'color-background-critical-muted-active': { dark: 'color-alias-critical-7', light: 'color-alias-critical-7' },
  'color-background-critical-subtle': { dark: 'color-alias-critical-4', light: 'color-alias-critical-4' },
  'color-background-critical-subtle-hover': { dark: 'color-alias-critical-5', light: 'color-alias-critical-5' },
  'color-background-critical-subtle-active': { dark: 'color-alias-critical-6', light: 'color-alias-critical-6' },
  'color-background-critical-selected': { dark: 'color-alias-critical-6', light: 'color-alias-critical-6' },
  // Color/Background/Highlight
  'color-background-highlight-strong': { dark: 'color-alias-highlight-11', light: 'color-alias-highlight-11' },
  'color-background-highlight-muted': { dark: 'color-alias-highlight-5', light: 'color-alias-highlight-5' },
  'color-background-highlight-subtle': { dark: 'color-alias-highlight-4', light: 'color-alias-highlight-4' },
  // Color/Background/Inverse
  'color-background-inverse': { dark: 'palette-iron-4', light: 'palette-irondark-4' },
  'color-background-inverse-hover': { dark: 'palette-iron-5', light: 'palette-irondark-5' },
  'color-background-inverse-active': { dark: 'palette-iron-6', light: 'palette-irondark-6' },
  // Color/Border
  'color-border': { dark: 'color-alias-neutral-8', light: 'color-alias-neutral-8' },
  'color-border-hover': { dark: 'color-alias-neutral-9', light: 'color-alias-neutral-9' },
  'color-border-subtle': { dark: 'color-alias-neutral-7', light: 'color-alias-neutral-7' },
  'color-border-subtle-hover': { dark: 'color-alias-neutral-8', light: 'color-alias-neutral-8' },
  'color-border-strong': { dark: 'color-alias-neutral-9', light: 'color-alias-neutral-13' },
  'color-border-selected': { dark: 'color-alias-neutral-9', light: 'color-alias-neutral-9' },
  'color-border-disabled': { dark: 'color-alias-neutral-5', light: 'color-alias-neutral-5' },
  // Color/Border/Accent
  'color-border-accent': { dark: 'color-alias-accent-8', light: 'color-alias-accent-8' },
  'color-border-accent-subtle': { dark: 'color-alias-accent-7', light: 'color-alias-accent-7' },
  'color-border-accent-strong': { dark: 'color-alias-accent-10', light: 'color-alias-accent-10' },
  'color-border-accent-selected': { dark: 'color-alias-accent-10', light: 'color-alias-accent-10' },
  // Color/Border/Success
  'color-border-success': { dark: 'color-alias-success-8', light: 'color-alias-success-8' },
  'color-border-success-subtle': { dark: 'color-alias-success-7', light: 'color-alias-success-7' },
  // Color/Border/Critical
  'color-border-critical': { dark: 'color-alias-critical-8', light: 'color-alias-critical-8' },
  'color-border-critical-subtle': { dark: 'color-alias-critical-7', light: 'color-alias-critical-7' },
  'color-border-critical-strong': { dark: 'color-alias-critical-10', light: 'color-alias-critical-10' },
  // Color/Border/Highlight
  'color-border-highlight': { dark: 'color-alias-highlight-8', light: 'color-alias-highlight-8' },
  'color-border-highlight-subtle': { dark: 'color-alias-highlight-7', light: 'color-alias-highlight-7' },
  // Color/Icon
  'color-icon': { dark: 'color-alias-neutral-10', light: 'color-alias-neutral-10' },
  'color-icon-hover': { dark: 'color-alias-neutral-11', light: 'color-alias-neutral-11' },
  'color-icon-disabled': { dark: 'color-alias-neutral-9', light: 'color-alias-neutral-9' },
  // Color/Icon/Success
  'color-icon-success': { dark: 'color-alias-success-11', light: 'color-alias-success-11' },
  // Color/Icon/Critical
  'color-icon-critical': { dark: 'color-alias-critical-11', light: 'color-alias-critical-11' },
  // Color/Icon/Highlight
  'color-icon-highlight': { dark: 'color-alias-highlight-11', light: 'color-alias-highlight-11' },
  // Color/Icon/Static
  'color-icon-static-black': { dark: 'palette-black', light: 'palette-black' },
  'color-icon-static-white': { dark: 'palette-white', light: 'palette-white' },
  // Color/Icon/Inverse
  'color-icon-static-inverse': { dark: 'palette-iron-15', light: 'palette-white' }, // TODO: Decide between static-inverse and inverse
  // Color/Surface
  'color-surface': { dark: 'color-alias-neutral-2', light: 'color-alias-neutral-1' },
  'color-surface-sunken': { dark: 'color-alias-neutral-1', light: 'color-alias-neutral-2' },
  'color-surface-raised': { dark: 'color-alias-neutral-3', light: 'color-alias-neutral-1' },
  'color-surface-overlay': { dark: 'color-alias-neutral-4', light: 'color-alias-neutral-1' },
  // Color/Text
  'color-text': { dark: 'color-alias-neutral-15', light: 'color-alias-neutral-15' },
  'color-text-muted': { dark: 'color-alias-neutral-14', light: 'color-alias-neutral-14' },
  'color-text-subtle': { dark: 'color-alias-neutral-13', light: 'color-alias-neutral-13' },
  'color-text-placeholder': { dark: 'color-alias-neutral-10', light: 'color-alias-neutral-10' },
  'color-text-disabled': { dark: 'color-alias-neutral-9', light: 'color-alias-neutral-9' },
  // Color/Text/Link
  'color-text-link': { dark: 'color-text-accent-subtle', light: 'color-text-accent-subtle' },
  // Color/Text/Accent
  'color-text-accent': { dark: 'color-alias-accent-15', light: 'color-alias-accent-15' },
  'color-text-accent-muted': { dark: 'color-alias-accent-14', light: 'color-alias-accent-14' },
  'color-text-accent-subtle': { dark: 'color-alias-accent-13', light: 'color-alias-accent-13' },
  // Color/Text/Success
  'color-text-success': { dark: 'color-alias-success-15', light: 'color-alias-success-15' },
  'color-text-success-muted': { dark: 'color-alias-success-14', light: 'color-alias-success-14' },
  'color-text-success-subtle': { dark: 'color-alias-success-13', light: 'color-alias-success-13' },
  // Color/Text/Critical
  'color-text-critical': { dark: 'color-alias-critical-15', light: 'color-alias-critical-15' },
  'color-text-critical-muted': { dark: 'color-alias-critical-14', light: 'color-alias-critical-14' },
  'color-text-critical-subtle': { dark: 'color-alias-critical-13', light: 'color-alias-critical-13' },
  // Color/Text/Highlight
  'color-text-highlight': { dark: 'color-alias-highlight-15', light: 'color-alias-highlight-15' },
  'color-text-highlight-muted': { dark: 'color-alias-highlight-14', light: 'color-alias-highlight-14' },
  'color-text-highlight-subtle': { dark: 'color-alias-highlight-13', light: 'color-alias-highlight-13' },
  // Color/Text/Static
  'color-text-static-black': { dark: 'palette-black', light: 'palette-white' },
  'color-text-static-white': { dark: 'palette-white', light: 'palette-white' },
  // Color/Text/inverse
  'color-text-inverse': { dark: 'palette-iron-15', light: 'palette-white' },
  'color-text-inverse-muted': { dark: 'palette-iron-14', light: 'palette-irondark-14' },
  'color-text-inverse-subtle': { dark: 'palette-iron-13', light: 'palette-irondark-13' },
} satisfies Record<ColorAliasToken, ColorModeTokenType<PaletteToken>> &
  Record<ColorStaticTransparentToken, ColorModeTokenType<ColorMixTokenType<''>>> &
  Record<TokenConstructor<['color', 'text', 'link']>, ColorModeTokenType<LikelyColorTextToken>> &
  Partial<Record<NonAliasColorToken, ColorModeTokenType<ColorAliasToken | PaletteToken | ColorStaticTransparentToken>>>;
