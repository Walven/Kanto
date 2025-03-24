import type { ColorIconToken } from '../token';
import type { PixelUnitTokenType } from '../tokenTypes';
import { ParentSelectorPseudoClasses } from './common';

export type IconColorProp =
  | 'success'
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

export const iconColorSelectors: Record<ColorIconToken, CSSSelector[]> = {
  'color-icon': ['svg.kanto-icon'],
  'color-icon-hover': ['.hover:hover svg.kanto-icon'],
  'color-icon-disabled': [':disabled svg.kanto-icon', 'svg.kanto-icon.disabled'],
  'color-icon-success': ['.success svg.kanto-icon', 'svg.kanto-icon.success'],
  'color-icon-critical': ['.critical svg.kanto-icon', 'svg.kanto-icon.critical'],
  'color-icon-highlight': ['.highlight svg.kanto-icon', 'svg.kanto-icon.highlight'],
  'color-icon-static-white': ['svg.kanto-icon.static-white'],
  'color-icon-static-black': ['svg.kanto-icon.static-black'],
  'color-icon-static-inverse': ['.inverse svg.kanto-icon', 'svg.kanto-icon.inverse'],
};

export const iconSizeSelectors: Partial<Record<PixelUnitTokenType, CSSSelector[]>> = {
  '24px': ['svg.kanto-icon.size-l'],
  '20px': ['svg.kanto-icon', 'svg.kanto-icon.size-m'],
  '16px': ['svg.kanto-icon.size-s'],
  '12px': ['svg.kanto-icon.size-xs'],
};
