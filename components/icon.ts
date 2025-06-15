import { TokenConstructor } from '../foundations/token';
import { PixelUnitTokenType } from '../foundations/tokenTypes';
import { ComponentCSSSelectors, CSSRules, ParentSelectorPseudoClasses } from './common';

export type IconColorProp =
  | 'success'
  | 'accent'
  | 'critical'
  | 'highlight'
  | 'static-black'
  | 'static-white'
  | 'inverse'
  | 'disabled';
export type IconSizeProp = 'l' | 'm' | 's' | 'xs';
export type IconSizeToken = TokenConstructor<['icon', 'size', IconSizeProp]>;

const ICON_TOKEN_VALUES = {
  '--icon-size-l': '24px',
  '--icon-size-m': '20px',
  '--icon-size-s': '16px',
  '--icon-size-xs': '12px',
} satisfies Record<`--${IconSizeToken}`, PixelUnitTokenType>;

export const ICON_CSS_SELECTOR = {
  lax: 'svg.kanto-icon',
  strict: 'svg[class="kanto-icon"]',
} as const;

type IconSelector = typeof ICON_CSS_SELECTOR.lax;

type CSSSelector =
  | ComponentCSSSelectors<IconSelector, [IconColorProp, IconSizeProp]>
  | `.${IconColorProp} ${IconSelector}`
  | `${ParentSelectorPseudoClasses} ${IconSelector}`;

export const iconRules: CSSRules<CSSSelector> = [
  ['svg.kanto-icon', ICON_TOKEN_VALUES],
  // Size
  ['svg.kanto-icon.l', { width: 'icon-size-l', height: 'icon-size-l' }],
  [['svg.kanto-icon', 'svg.kanto-icon.m'], { width: 'icon-size-m', height: 'icon-size-m' }],
  ['svg.kanto-icon.s', { width: 'icon-size-s', height: 'icon-size-s' }],
  ['svg.kanto-icon.xs', { width: 'icon-size-xs', height: 'icon-size-xs' }],
  // Padding
  // Gap
  // Border size
  // Border Radius
  // Background color
  // Border Color
  // Color Text
  // Color Icon
  ['svg.kanto-icon', { color: 'color-icon' }],
  ['.hover:hover svg.kanto-icon', { color: 'color-icon-hover' }],
  [[':disabled svg.kanto-icon', 'svg.kanto-icon.disabled'], { color: 'color-icon-disabled' }],
  [['.accent svg.kanto-icon', 'svg.kanto-icon.accent'], { color: 'color-icon-accent' }],
  [['.success svg.kanto-icon', 'svg.kanto-icon.success'], { color: 'color-icon-success' }],
  [['.critical svg.kanto-icon', 'svg.kanto-icon.critical'], { color: 'color-icon-critical' }],
  [['.highlight svg.kanto-icon', 'svg.kanto-icon.highlight'], { color: 'color-icon-highlight' }],
  ['svg.kanto-icon.static-white', { color: 'color-icon-static-white' }],
  ['svg.kanto-icon.static-black', { color: 'color-icon-static-black' }],
  [['.inverse svg.kanto-icon', 'svg.kanto-icon.inverse'], { color: 'color-icon-static-inverse' }],
];
