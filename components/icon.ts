import { CSSRules, ParentSelectorPseudoClasses } from './common';

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

type CSSSelector =
  | `.${IconColorProp} svg.kanto-icon`
  | `${ParentSelectorPseudoClasses} svg.kanto-icon`
  | `svg.kanto-icon.${IconColorProp | `size-${IconSizeProp}`}`
  | 'svg.kanto-icon';

export const iconRules: CSSRules<CSSSelector> = [
  // Size
  ['svg.kanto-icon.size-l', { width: '24px', height: '24px' }],
  [['svg.kanto-icon', 'svg.kanto-icon.size-m'], { width: '20px', height: '20px' }],
  ['svg.kanto-icon.size-s', { width: '16px', height: '16px' }],
  ['svg.kanto-icon.size-xs', { width: '12px', height: '12px' }],
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
