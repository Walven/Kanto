import {
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  PaletteToken,
  SizeHeightToken,
  SizeWidthToken,
  SpacingToken,
} from '../foundations/token';
import { PixelUnitTokenType } from '../foundations/tokenTypes';
import { BadgeSizeToken } from './badge';
import { IconSizeToken } from './icon';

export type ParentSelectorPseudoClasses =
  | '.hover:hover' // Parent accepting hover behavior and being hovered
  | ':disabled'; // Parent that is disabled

type Color = ColorToken | PaletteToken | { light: ColorToken | PaletteToken; dark: ColorToken | PaletteToken };
type Padding = SpacingToken | { block: SpacingToken; inline: SpacingToken };

export type CSSProperties = Partial<{
  width: SizeWidthToken | IconSizeToken | BadgeSizeToken;
  height: SizeHeightToken | IconSizeToken | BadgeSizeToken;
  color: Color;
  backgroundColor: Color;
  borderWidth: BorderWidthToken;
  borderColor: Color;
  borderRadius: BorderRadiusToken;
  padding: Padding;
  gap: SpacingToken;
  display: 'block' | 'flex' | 'grid' | 'none';
  flexDirection: 'column' | 'row';
  boxSizing: 'border-box';
  justifyContent: 'center';
  alignItems: 'center';
}> &
  Record<`--${string}`, string>;

const pixelOrSpaceToString = (v: PixelUnitTokenType | SpacingToken) => (v.endsWith('px') ? v : `var(--${v})`);
const colorToString = (v: Color) =>
  typeof v === 'string' ? `var(--${v})` : `light-dark(var(--${v.light}), var(--${v.dark}))`;
const paddingToString = (v: Padding) =>
  typeof v === 'string' ? `var(--${v})` : `var(--${v.block}) var(--${v.inline})`;

const toCSSPropertyStrings = (p: CSSProperties): string => {
  const out: string[] = [];
  if (p.width) out.push(`width: var(--${p.width});`);
  if (p.height) out.push(`height: var(--${p.height});`);
  if (p.color) out.push(`color: ${colorToString(p.color)};`);
  if (p.backgroundColor) out.push(`background-color: ${colorToString(p.backgroundColor)};`);
  if (p.borderWidth && p.borderColor) {
    out.push(`border: solid var(--${p.borderWidth}) ${colorToString(p.borderColor)};`);
  } else if (p.borderWidth) {
    out.push(`border-width: var(--${p.borderWidth});`);
    out.push(`border-style: solid;`); // TODO: Better implementation
  } else if (p.borderColor) {
    out.push(`border-color: ${colorToString(p.borderColor)};`);
  }
  if (p.borderRadius) out.push(`border-radius: var(--${p.borderRadius});`);
  if (p.padding) out.push(`padding: ${paddingToString(p.padding)};`);
  if (p.gap) out.push(`gap: var(--${p.gap});`);
  if (p.display) out.push(`display: ${p.display};`);
  if (p.flexDirection) out.push(`flex-direction: ${p.flexDirection}`);
  if (p.boxSizing) out.push(`box-sizing: ${p.boxSizing};`);
  if (p.justifyContent) out.push(`justify-content: ${p.justifyContent};`);
  if (p.alignItems) out.push(`align-items: ${p.alignItems};`);
  const variableKeys = Object.keys(p).filter((k) => k.startsWith('--'));
  variableKeys.forEach((k) => {
    out.push(`${k}: ${p[k]};`);
  });
  return out.join('\n  ');
};

export type CSSRules<T extends string> = [T | T[], CSSProperties][];

export const rulesToCSS = <T extends string>(rules: CSSRules<T>) =>
  rules
    .map(([selectors, properties]) => {
      const selectorsString = typeof selectors === 'string' ? selectors : selectors.join(',\n');
      return `${selectorsString} {\n  ${toCSSPropertyStrings(properties)}\n}`;
    })
    .join('\n\n');

/**
 * Allow construction of classes
 *
 * @example
 * ```
 *  type CSSSelectors = ClassConstructor<['s' | 'xs', 'strong' | 'moderate']> // '.s' | '.xs' | '.s.strong' | 'xs.strong' | '.strong' | ...
 * ```
 *
 * @note Avoid using combining too much complex type (we can have upto 25000 tokens from ClassConstructor but above is getting risky)
 */
export type ClassConstructor<A extends [string, ...string[]]> = A extends [
  infer B extends string,
  ...infer REST extends [string, ...string[]]
]
  ? `.${B}${ClassConstructor<REST>}` | `.${B}` | ClassConstructor<REST>
  : `.${A[0]}`;

/**
 * Allow construction of CSS Selector for a component
 *
 * @example
 * ```
 * type CSSSelectors = ComponentCSSSelectors<'span.kanto-badge', ['xs' | 's']> // "span.kanto-badge" | "span.kanto-badge.xs" | "span.kanto-badge.s"
 * ```
 */
export type ComponentCSSSelectors<Component extends `${string}.kanto-${string}`, A extends [string, ...string[]]> =
  | Component
  | `${Component}${ClassConstructor<A>}`;

/**
 * Allow construction of CSS Selector for a component children
 *
 * @example
 * ```
 * type CSSSelectors = ComponentCSSSelectors<'span.kanto-badge', 'svg[class="kanto-icon"]', ['xs' | 's']> //  "span.kanto-badge > svg[class="kanto-icon"]" | "span.kanto-badge.xs > svg[class="kanto-icon"]" | "span.kanto-badge.s > svg[class="kanto-icon"]"
 * ```
 */
export type ComponentChildCSSSelectors<
  Component extends `${string}.kanto-${string}`,
  Children extends `${string}.kanto-${string}` | `${string}[class="kanto-${string}"]` | (string & {}),
  A extends [string, ...string[]]
> = `${Component} > ${Children}` | `${Component}${ClassConstructor<A>} > ${Children}`;
