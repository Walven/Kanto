import type { ColorAliasToken, PaletteToken, TokenConstructor } from './token';
import type { ColorTokenType } from './tokenTypes';

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
  'color-alias-neutral-1': { light: 'palette-iron-1', dark: 'palette-irondark-1' },
  'color-alias-neutral-2': { light: 'palette-iron-2', dark: 'palette-irondark-2' },
  'color-alias-neutral-3': { light: 'palette-iron-3', dark: 'palette-irondark-3' },
  'color-alias-neutral-4': { light: 'palette-iron-4', dark: 'palette-irondark-4' },
  'color-alias-neutral-5': { light: 'palette-iron-5', dark: 'palette-irondark-5' },
  'color-alias-neutral-6': { light: 'palette-iron-6', dark: 'palette-irondark-6' },
  'color-alias-neutral-7': { light: 'palette-iron-7', dark: 'palette-irondark-7' },
  'color-alias-neutral-8': { light: 'palette-iron-8', dark: 'palette-irondark-8' },
  'color-alias-neutral-9': { light: 'palette-iron-9', dark: 'palette-irondark-9' },
  'color-alias-neutral-10': { light: 'palette-iron-10', dark: 'palette-irondark-10' },
  'color-alias-neutral-11': { light: 'palette-iron-11', dark: 'palette-irondark-11' },
  'color-alias-neutral-12': { light: 'palette-iron-12', dark: 'palette-irondark-12' },
  'color-alias-neutral-13': { light: 'palette-iron-13', dark: 'palette-irondark-13' },
  'color-alias-neutral-14': { light: 'palette-iron-14', dark: 'palette-irondark-14' },
  'color-alias-neutral-15': { light: 'palette-iron-15', dark: 'palette-irondark-15' },
  'color-alias-neutral-alpha-1': { light: 'palette-iron-alpha-1', dark: 'palette-irondark-alpha-1' },
  'color-alias-neutral-alpha-2': { light: 'palette-iron-alpha-2', dark: 'palette-irondark-alpha-2' },
  'color-alias-neutral-alpha-3': { light: 'palette-iron-alpha-3', dark: 'palette-irondark-alpha-3' },
  'color-alias-neutral-alpha-4': { light: 'palette-iron-alpha-4', dark: 'palette-irondark-alpha-4' },
  'color-alias-neutral-alpha-5': { light: 'palette-iron-alpha-5', dark: 'palette-irondark-alpha-5' },
  'color-alias-neutral-alpha-6': { light: 'palette-iron-alpha-6', dark: 'palette-irondark-alpha-6' },
  'color-alias-neutral-alpha-7': { light: 'palette-iron-alpha-7', dark: 'palette-irondark-alpha-7' },
  'color-alias-neutral-alpha-8': { light: 'palette-iron-alpha-8', dark: 'palette-irondark-alpha-8' },
  'color-alias-neutral-alpha-9': { light: 'palette-iron-alpha-9', dark: 'palette-irondark-alpha-9' },
  'color-alias-neutral-alpha-10': { light: 'palette-iron-alpha-10', dark: 'palette-irondark-alpha-10' },
  'color-alias-neutral-alpha-11': { light: 'palette-iron-alpha-11', dark: 'palette-irondark-alpha-11' },
  'color-alias-neutral-alpha-12': { light: 'palette-iron-alpha-12', dark: 'palette-irondark-alpha-12' },
  'color-alias-neutral-alpha-13': { light: 'palette-iron-alpha-13', dark: 'palette-irondark-alpha-13' },
  'color-alias-neutral-alpha-14': { light: 'palette-iron-alpha-14', dark: 'palette-irondark-alpha-14' },
  'color-alias-neutral-alpha-15': { light: 'palette-iron-alpha-15', dark: 'palette-irondark-alpha-15' },
  'color-alias-accent-1': { light: 'palette-indigo-1', dark: 'palette-indigodark-1' },
  'color-alias-accent-2': { light: 'palette-indigo-2', dark: 'palette-indigodark-2' },
  'color-alias-accent-3': { light: 'palette-indigo-3', dark: 'palette-indigodark-3' },
  'color-alias-accent-4': { light: 'palette-indigo-4', dark: 'palette-indigodark-4' },
  'color-alias-accent-5': { light: 'palette-indigo-5', dark: 'palette-indigodark-5' },
  'color-alias-accent-6': { light: 'palette-indigo-6', dark: 'palette-indigodark-6' },
  'color-alias-accent-7': { light: 'palette-indigo-7', dark: 'palette-indigodark-7' },
  'color-alias-accent-8': { light: 'palette-indigo-8', dark: 'palette-indigodark-8' },
  'color-alias-accent-9': { light: 'palette-indigo-9', dark: 'palette-indigodark-9' },
  'color-alias-accent-10': { light: 'palette-indigo-10', dark: 'palette-indigodark-10' },
  'color-alias-accent-11': { light: 'palette-indigo-11', dark: 'palette-indigodark-11' },
  'color-alias-accent-12': { light: 'palette-indigo-12', dark: 'palette-indigodark-12' },
  'color-alias-accent-13': { light: 'palette-indigo-13', dark: 'palette-indigodark-13' },
  'color-alias-accent-14': { light: 'palette-indigo-14', dark: 'palette-indigodark-14' },
  'color-alias-accent-15': { light: 'palette-indigo-15', dark: 'palette-indigodark-15' },
  'color-alias-accent-alpha-1': { light: 'palette-indigo-alpha-1', dark: 'palette-indigodark-alpha-1' },
  'color-alias-accent-alpha-2': { light: 'palette-indigo-alpha-2', dark: 'palette-indigodark-alpha-2' },
  'color-alias-accent-alpha-3': { light: 'palette-indigo-alpha-3', dark: 'palette-indigodark-alpha-3' },
  'color-alias-accent-alpha-4': { light: 'palette-indigo-alpha-4', dark: 'palette-indigodark-alpha-4' },
  'color-alias-accent-alpha-5': { light: 'palette-indigo-alpha-5', dark: 'palette-indigodark-alpha-5' },
  'color-alias-accent-alpha-6': { light: 'palette-indigo-alpha-6', dark: 'palette-indigodark-alpha-6' },
  'color-alias-accent-alpha-7': { light: 'palette-indigo-alpha-7', dark: 'palette-indigodark-alpha-7' },
  'color-alias-accent-alpha-8': { light: 'palette-indigo-alpha-8', dark: 'palette-indigodark-alpha-8' },
  'color-alias-accent-alpha-9': { light: 'palette-indigo-alpha-9', dark: 'palette-indigodark-alpha-9' },
  'color-alias-accent-alpha-10': { light: 'palette-indigo-alpha-10', dark: 'palette-indigodark-alpha-10' },
  'color-alias-accent-alpha-11': { light: 'palette-indigo-alpha-11', dark: 'palette-indigodark-alpha-11' },
  'color-alias-accent-alpha-12': { light: 'palette-indigo-alpha-12', dark: 'palette-indigodark-alpha-12' },
  'color-alias-accent-alpha-13': { light: 'palette-indigo-alpha-13', dark: 'palette-indigodark-alpha-13' },
  'color-alias-accent-alpha-14': { light: 'palette-indigo-alpha-14', dark: 'palette-indigodark-alpha-14' },
  'color-alias-accent-alpha-15': { light: 'palette-indigo-alpha-15', dark: 'palette-indigodark-alpha-15' },
  'color-alias-success-1': { light: 'palette-emerald-1', dark: 'palette-viridiandark-1' },
  'color-alias-success-2': { light: 'palette-emerald-2', dark: 'palette-viridiandark-2' },
  'color-alias-success-3': { light: 'palette-emerald-3', dark: 'palette-viridiandark-3' },
  'color-alias-success-4': { light: 'palette-emerald-4', dark: 'palette-viridiandark-4' },
  'color-alias-success-5': { light: 'palette-emerald-5', dark: 'palette-viridiandark-5' },
  'color-alias-success-6': { light: 'palette-emerald-6', dark: 'palette-viridiandark-6' },
  'color-alias-success-7': { light: 'palette-emerald-7', dark: 'palette-viridiandark-7' },
  'color-alias-success-8': { light: 'palette-emerald-8', dark: 'palette-viridiandark-8' },
  'color-alias-success-9': { light: 'palette-emerald-9', dark: 'palette-viridiandark-9' },
  'color-alias-success-10': { light: 'palette-emerald-10', dark: 'palette-viridiandark-10' },
  'color-alias-success-11': { light: 'palette-emerald-11', dark: 'palette-viridiandark-11' },
  'color-alias-success-12': { light: 'palette-emerald-12', dark: 'palette-viridiandark-12' },
  'color-alias-success-13': { light: 'palette-emerald-13', dark: 'palette-viridiandark-13' },
  'color-alias-success-14': { light: 'palette-emerald-14', dark: 'palette-viridiandark-14' },
  'color-alias-success-15': { light: 'palette-emerald-15', dark: 'palette-viridiandark-15' },
  'color-alias-critical-1': { light: 'palette-cinnabar-1', dark: 'palette-rubydark-1' },
  'color-alias-critical-2': { light: 'palette-cinnabar-2', dark: 'palette-rubydark-2' },
  'color-alias-critical-3': { light: 'palette-cinnabar-3', dark: 'palette-rubydark-3' },
  'color-alias-critical-4': { light: 'palette-cinnabar-4', dark: 'palette-rubydark-4' },
  'color-alias-critical-5': { light: 'palette-cinnabar-5', dark: 'palette-rubydark-5' },
  'color-alias-critical-6': { light: 'palette-cinnabar-6', dark: 'palette-rubydark-6' },
  'color-alias-critical-7': { light: 'palette-cinnabar-7', dark: 'palette-rubydark-7' },
  'color-alias-critical-8': { light: 'palette-cinnabar-8', dark: 'palette-rubydark-8' },
  'color-alias-critical-9': { light: 'palette-cinnabar-9', dark: 'palette-rubydark-9' },
  'color-alias-critical-10': { light: 'palette-cinnabar-10', dark: 'palette-rubydark-10' },
  'color-alias-critical-11': { light: 'palette-cinnabar-11', dark: 'palette-rubydark-11' },
  'color-alias-critical-12': { light: 'palette-cinnabar-12', dark: 'palette-rubydark-12' },
  'color-alias-critical-13': { light: 'palette-cinnabar-13', dark: 'palette-rubydark-13' },
  'color-alias-critical-14': { light: 'palette-cinnabar-14', dark: 'palette-rubydark-14' },
  'color-alias-critical-15': { light: 'palette-cinnabar-15', dark: 'palette-rubydark-15' },
  'color-alias-highlight-1': { light: 'palette-sapphire-1', dark: 'palette-sapphiredark-1' },
  'color-alias-highlight-2': { light: 'palette-sapphire-2', dark: 'palette-sapphiredark-2' },
  'color-alias-highlight-3': { light: 'palette-sapphire-3', dark: 'palette-sapphiredark-3' },
  'color-alias-highlight-4': { light: 'palette-sapphire-4', dark: 'palette-sapphiredark-4' },
  'color-alias-highlight-5': { light: 'palette-sapphire-5', dark: 'palette-sapphiredark-5' },
  'color-alias-highlight-6': { light: 'palette-sapphire-6', dark: 'palette-sapphiredark-6' },
  'color-alias-highlight-7': { light: 'palette-sapphire-7', dark: 'palette-sapphiredark-7' },
  'color-alias-highlight-8': { light: 'palette-sapphire-8', dark: 'palette-sapphiredark-8' },
  'color-alias-highlight-9': { light: 'palette-sapphire-9', dark: 'palette-sapphiredark-9' },
  'color-alias-highlight-10': { light: 'palette-sapphire-10', dark: 'palette-sapphiredark-10' },
  'color-alias-highlight-11': { light: 'palette-sapphire-11', dark: 'palette-sapphiredark-11' },
  'color-alias-highlight-12': { light: 'palette-sapphire-12', dark: 'palette-sapphiredark-12' },
  'color-alias-highlight-13': { light: 'palette-sapphire-13', dark: 'palette-sapphiredark-13' },
  'color-alias-highlight-14': { light: 'palette-sapphire-14', dark: 'palette-sapphiredark-14' },
  'color-alias-highlight-15': { light: 'palette-sapphire-15', dark: 'palette-sapphiredark-15' },
  'color-static-transparent': { light: 'transparent', dark: 'transparent' },
  // Color/Background
  'color-background-strong': { light: 'color-alias-neutral-11', dark: 'color-alias-neutral-11' },
  'color-background-muted': { light: 'color-alias-neutral-5', dark: 'color-alias-neutral-5' },
  'color-background-muted-hover': { light: 'color-alias-neutral-6', dark: 'color-alias-neutral-6' },
  'color-background-muted-active': { light: 'color-alias-neutral-7', dark: 'color-alias-neutral-7' },
  'color-background-subtle': { light: 'color-alias-neutral-4', dark: 'color-alias-neutral-4' },
  'color-background-subtle-hover': { light: 'color-alias-neutral-5', dark: 'color-alias-neutral-5' },
  'color-background-subtle-active': { light: 'color-alias-neutral-6', dark: 'color-alias-neutral-6' },
  'color-background-transparent': { light: 'color-static-transparent', dark: 'color-static-transparent' },
  'color-background-disabled': { light: 'color-alias-neutral-alpha-3', dark: 'color-alias-neutral-alpha-3' },
  // Color/Background/Accent
  'color-background-accent-strong': { light: 'color-alias-accent-11', dark: 'color-alias-accent-10' },
  'color-background-accent-strong-hover': { light: 'color-alias-accent-12', dark: 'color-alias-accent-11' },
  'color-background-accent-strong-active': { light: 'color-alias-accent-13', dark: 'color-alias-accent-12' },
  'color-background-accent-muted': { light: 'color-alias-accent-5', dark: 'color-alias-accent-5' },
  'color-background-accent-muted-hover': { light: 'color-alias-accent-6', dark: 'color-alias-accent-6' },
  'color-background-accent-muted-active': { light: 'color-alias-accent-7', dark: 'color-alias-accent-7' },
  'color-background-accent-subtle': { light: 'color-alias-accent-4', dark: 'color-alias-accent-4' },
  'color-background-accent-subtle-hover': { light: 'color-alias-accent-5', dark: 'color-alias-accent-5' },
  'color-background-accent-subtle-active': { light: 'color-alias-accent-6', dark: 'color-alias-accent-6' },
  'color-background-accent-selected': { light: 'color-alias-accent-6', dark: 'color-alias-accent-6' },
  // Color/Background/Success
  'color-background-success-strong': { light: 'color-alias-success-11', dark: 'color-alias-success-11' },
  'color-background-success-muted': { light: 'color-alias-success-5', dark: 'color-alias-success-5' },
  'color-background-success-subtle': { light: 'color-alias-success-4', dark: 'color-alias-success-4' },
  // Color/Background/Critical
  'color-background-critical-strong': { light: 'color-alias-critical-11', dark: 'color-alias-critical-11' },
  'color-background-critical-strong-hover': { light: 'color-alias-critical-12', dark: 'color-alias-critical-12' },
  'color-background-critical-strong-active': { light: 'color-alias-critical-13', dark: 'color-alias-critical-13' },
  'color-background-critical-muted': { light: 'color-alias-critical-5', dark: 'color-alias-critical-5' },
  'color-background-critical-muted-hover': { light: 'color-alias-critical-6', dark: 'color-alias-critical-6' },
  'color-background-critical-muted-active': { light: 'color-alias-critical-7', dark: 'color-alias-critical-7' },
  'color-background-critical-subtle': { light: 'color-alias-critical-4', dark: 'color-alias-critical-4' },
  'color-background-critical-subtle-hover': { light: 'color-alias-critical-5', dark: 'color-alias-critical-5' },
  'color-background-critical-subtle-active': { light: 'color-alias-critical-6', dark: 'color-alias-critical-6' },
  'color-background-critical-selected': { light: 'color-alias-critical-6', dark: 'color-alias-critical-6' },
  // Color/Background/Highlight
  'color-background-highlight-strong': { light: 'color-alias-highlight-11', dark: 'color-alias-highlight-11' },
  'color-background-highlight-muted': { light: 'color-alias-highlight-5', dark: 'color-alias-highlight-5' },
  'color-background-highlight-subtle': { light: 'color-alias-highlight-4', dark: 'color-alias-highlight-4' },
  // Color/Background/Inverse
  'color-background-inverse': { light: 'palette-irondark-4', dark: 'palette-iron-4' },
  'color-background-inverse-hover': { light: 'palette-irondark-5', dark: 'palette-iron-5' },
  'color-background-inverse-active': { light: 'palette-irondark-6', dark: 'palette-iron-6' },
  // Color/Border
  'color-border': { light: 'color-alias-neutral-8', dark: 'color-alias-neutral-8' },
  'color-border-hover': { light: 'color-alias-neutral-9', dark: 'color-alias-neutral-9' },
  'color-border-subtle': { light: 'color-alias-neutral-7', dark: 'color-alias-neutral-7' },
  'color-border-subtle-hover': { light: 'color-alias-neutral-8', dark: 'color-alias-neutral-8' },
  'color-border-strong': { light: 'color-alias-neutral-13', dark: 'color-alias-neutral-9' },
  'color-border-selected': { light: 'color-alias-neutral-9', dark: 'color-alias-neutral-9' },
  'color-border-disabled': { light: 'color-alias-neutral-5', dark: 'color-alias-neutral-5' },
  // Color/Border/Accent
  'color-border-accent': { light: 'color-alias-accent-8', dark: 'color-alias-accent-8' },
  'color-border-accent-subtle': { light: 'color-alias-accent-7', dark: 'color-alias-accent-7' },
  'color-border-accent-strong': { light: 'color-alias-accent-10', dark: 'color-alias-accent-10' },
  'color-border-accent-selected': { light: 'color-alias-accent-10', dark: 'color-alias-accent-10' },
  // Color/Border/Success
  'color-border-success': { light: 'color-alias-success-8', dark: 'color-alias-success-8' },
  'color-border-success-subtle': { light: 'color-alias-success-7', dark: 'color-alias-success-7' },
  // Color/Border/Critical
  'color-border-critical': { light: 'color-alias-critical-8', dark: 'color-alias-critical-8' },
  'color-border-critical-subtle': { light: 'color-alias-critical-7', dark: 'color-alias-critical-7' },
  'color-border-critical-strong': { light: 'color-alias-critical-10', dark: 'color-alias-critical-10' },
  // Color/Border/Highlight
  'color-border-highlight': { light: 'color-alias-highlight-8', dark: 'color-alias-highlight-8' },
  'color-border-highlight-subtle': { light: 'color-alias-highlight-7', dark: 'color-alias-highlight-7' },
  // Color/Icon
  'color-icon': { light: 'color-alias-neutral-10', dark: 'color-alias-neutral-10' },
  'color-icon-hover': { light: 'color-alias-neutral-11', dark: 'color-alias-neutral-11' },
  'color-icon-disabled': { light: 'color-alias-neutral-9', dark: 'color-alias-neutral-9' },
  // Color/Icon/Accent
  'color-icon-accent': { light: 'color-alias-accent-11', dark: 'color-alias-accent-11' },
  // Color/Icon/Success
  'color-icon-success': { light: 'color-alias-success-11', dark: 'color-alias-success-11' },
  // Color/Icon/Critical
  'color-icon-critical': { light: 'color-alias-critical-11', dark: 'color-alias-critical-11' },
  // Color/Icon/Highlight
  'color-icon-highlight': { light: 'color-alias-highlight-11', dark: 'color-alias-highlight-11' },
  // Color/Icon/Static
  'color-icon-static-black': { light: 'palette-black', dark: 'palette-black' },
  'color-icon-static-white': { light: 'palette-white', dark: 'palette-white' },
  // Color/Icon/Inverse
  'color-icon-static-inverse': { light: 'palette-white', dark: 'palette-iron-15' }, // TODO: Decide between static-inverse and inverse
  // Color/Surface
  'color-surface': { light: 'color-alias-neutral-1', dark: 'color-alias-neutral-2' },
  'color-surface-sunken': { light: 'color-alias-neutral-2', dark: 'color-alias-neutral-1' },
  'color-surface-raised': { light: 'color-alias-neutral-1', dark: 'color-alias-neutral-3' },
  'color-surface-overlay': { light: 'color-alias-neutral-1', dark: 'color-alias-neutral-4' },
  // Color/Text
  'color-text': { light: 'color-alias-neutral-15', dark: 'color-alias-neutral-15' },
  'color-text-muted': { light: 'color-alias-neutral-14', dark: 'color-alias-neutral-14' },
  'color-text-subtle': { light: 'color-alias-neutral-13', dark: 'color-alias-neutral-13' },
  'color-text-placeholder': { light: 'color-alias-neutral-10', dark: 'color-alias-neutral-10' },
  'color-text-disabled': { light: 'color-alias-neutral-9', dark: 'color-alias-neutral-9' },
  // Color/Text/Link
  'color-text-link': { light: 'color-text-accent-subtle', dark: 'color-text-accent-subtle' },
  // Color/Text/Accent
  'color-text-accent': { light: 'color-alias-accent-15', dark: 'color-alias-accent-15' },
  'color-text-accent-muted': { light: 'color-alias-accent-14', dark: 'color-alias-accent-14' },
  'color-text-accent-subtle': { light: 'color-alias-accent-13', dark: 'color-alias-accent-13' },
  // Color/Text/Success
  'color-text-success': { light: 'color-alias-success-15', dark: 'color-alias-success-15' },
  'color-text-success-muted': { light: 'color-alias-success-14', dark: 'color-alias-success-14' },
  'color-text-success-subtle': { light: 'color-alias-success-13', dark: 'color-alias-success-13' },
  // Color/Text/Critical
  'color-text-critical': { light: 'color-alias-critical-15', dark: 'color-alias-critical-15' },
  'color-text-critical-muted': { light: 'color-alias-critical-14', dark: 'color-alias-critical-14' },
  'color-text-critical-subtle': { light: 'color-alias-critical-13', dark: 'color-alias-critical-13' },
  // Color/Text/Highlight
  'color-text-highlight': { light: 'color-alias-highlight-15', dark: 'color-alias-highlight-15' },
  'color-text-highlight-muted': { light: 'color-alias-highlight-14', dark: 'color-alias-highlight-14' },
  'color-text-highlight-subtle': { light: 'color-alias-highlight-13', dark: 'color-alias-highlight-13' },
  // Color/Text/Static
  'color-text-static-black': { light: 'palette-white', dark: 'palette-black' },
  'color-text-static-white': { light: 'palette-white', dark: 'palette-white' },
  // Color/Text/inverse
  'color-text-inverse': { light: 'palette-white', dark: 'palette-iron-15' },
  'color-text-inverse-muted': { light: 'palette-irondark-14', dark: 'palette-iron-14' },
  'color-text-inverse-subtle': { light: 'palette-irondark-13', dark: 'palette-iron-13' },
} satisfies Record<ColorAliasToken, ColorModeTokenType<PaletteToken>> &
  Record<ColorStaticTransparentToken, ColorModeTokenType<ColorTokenType>> &
  Record<TokenConstructor<['color', 'text', 'link']>, ColorModeTokenType<LikelyColorTextToken>> &
  Partial<Record<NonAliasColorToken, ColorModeTokenType<ColorAliasToken | PaletteToken | ColorStaticTransparentToken>>>;
