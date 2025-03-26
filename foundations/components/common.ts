import { BorderRadiusToken, BorderWidthToken, ColorToken, PaletteToken, SpacingToken } from '../token';
import { PixelUnitTokenType } from '../tokenTypes';

export type ParentSelectorPseudoClasses =
  | '.hover:hover' // Parent accepting hover behavior and being hovered
  | ':disabled'; // Parent that is disabled

type Color = ColorToken | PaletteToken | { light: ColorToken | PaletteToken; dark: ColorToken | PaletteToken };
type Padding = SpacingToken | { block: SpacingToken; inline: SpacingToken };

export type CSSProperties = Partial<{
  width: PixelUnitTokenType | SpacingToken;
  height: PixelUnitTokenType | SpacingToken;
  color: Color;
  backgroundColor: Color;
  // TODO: specify each border types
  border: { size: BorderWidthToken; color: Color };
  borderRadius: BorderRadiusToken;
  padding: Padding;
  gap: SpacingToken;
  display: 'block' | 'flex' | 'grid' | 'none';
  flexDirection: 'column' | 'row';
  boxSizing: 'border-box';
  justifyContent: 'center';
  alignItems: 'center';
}>;

const pixelOrSpaceToString = (v: PixelUnitTokenType | SpacingToken) => (v.endsWith('px') ? v : `var(--${v})`);
const colorToString = (v: Color) =>
  typeof v === 'string' ? `var(--${v})` : `light-dark(var(--${v.light}), var(--${v.dark}))`;
const paddingToString = (v: Padding) =>
  typeof v === 'string' ? `var(--${v})` : `var(--${v.block}) var(--${v.inline})`;

const toCSSPropertyStrings = (p: CSSProperties): string => {
  const out: string[] = [];
  if (p.width) out.push(`width: ${pixelOrSpaceToString(p.width)};`);
  if (p.height) out.push(`height: ${pixelOrSpaceToString(p.height)};`);
  if (p.color) out.push(`color: ${colorToString(p.color)};`);
  if (p.backgroundColor) out.push(`background-color: ${colorToString(p.backgroundColor)};`);
  if (p.border) out.push(`border: solid var(--${p.border.size}) ${colorToString(p.border.color)};`);
  if (p.borderRadius) out.push(`border-radius: var(--${p.borderRadius});`);
  if (p.padding) out.push(`padding: ${paddingToString(p.padding)};`);
  if (p.gap) out.push(`gap: var(--${p.gap});`);
  if (p.display) out.push(`display: ${p.display};`);
  if (p.flexDirection) out.push(`flex-direction: ${p.flexDirection}`);
  if (p.boxSizing) out.push(`box-sizing: ${p.boxSizing};`);
  if (p.justifyContent) out.push(`justify-content: ${p.justifyContent};`);
  if (p.alignItems) out.push(`align-items: ${p.alignItems};`);
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
