import { ColorType } from '../foundations/colors';
import type { SpacingToken, TokenConstructor } from '../foundations/token';
import { PixelUnitTokenType } from '../foundations/tokenTypes';
import { CSSRules } from './common';

// prettier-ignore
export const BADGE_DECORATION_COLORS = ['gold' , 'silver' , 'bronze' , 'topaz' , 'vermilion' , 'crimson' , 'magenta' , 'fuchsia' , 'amethyst' , 'lavender' , 'cobalt' , 'cerulean' , 'cyan' , 'celadon' , 'peridot' , 'olive' , 'saffron' , 'azure'] as const
type BadgeDecorationColor = (typeof BADGE_DECORATION_COLORS)[number];
type BadgeDecorativeType = `decorative-${BadgeDecorationColor}`;
export type BadgeTypeProp = ColorType | BadgeDecorativeType;
export type BadgeStyleProp = 'solid' | 'soft' | 'outline' | 'ghost';
export type BadgeSizeProp = 'm' | 's' | 'xs';
export type BadgeSizeToken = TokenConstructor<['badge', 'size', BadgeSizeProp]>;

type BadgeLeafCSSSelector = `span.kanto-badge.${BadgeSizeProp} > span`;
type BadgeContainerCSSSelector = `span.kanto-badge.${BadgeSizeProp}`;

type CSSSelector =
  | BadgeLeafCSSSelector
  | BadgeContainerCSSSelector
  | `${BadgeContainerCSSSelector}.icon-only`
  | `${BadgeContainerCSSSelector} > svg[class="kanto-icon"]`
  | `span.kanto-badge.${BadgeTypeProp}.${BadgeStyleProp}`
  | `span.kanto-badge.${BadgeStyleProp}`
  | `span.kanto-badge.${BadgeTypeProp}`
  | `span.kanto-badge.${BadgeTypeProp} > svg[class="kanto-icon"]`
  | `span.kanto-badge.${BadgeTypeProp}.solid > svg[class="kanto-icon"]`
  | 'span.kanto-badge'
  | 'span.kanto-badge.icon-only';

const BADGE_TOKEN_VALUES = {
  '--badge-size-m': '24px',
  '--badge-size-s': '20px',
  '--badge-size-xs': '16px',
} satisfies Record<`--${BadgeSizeToken}`, PixelUnitTokenType>;

const BADGE_LEAF_PADDING = {
  m: { block: 'space-0', inline: 'space-100' },
  s: { block: 'space-0', inline: 'space-50' },
  xs: { block: 'space-0', inline: 'space-0' },
} satisfies Record<BadgeSizeProp, { block: SpacingToken; inline: SpacingToken }>;

export const badgeRules: CSSRules<CSSSelector> = [
  // Intrinsic
  [
    'span.kanto-badge',
    {
      padding: { block: 'space-0', inline: 'space-100' },
      boxSizing: 'border-box',
      alignItems: 'center',
      display: 'flex',
      ...BADGE_TOKEN_VALUES,
    },
  ],
  ['span.kanto-badge.icon-only', { justifyContent: 'center' }],
  // Size
  ['span.kanto-badge.m', { height: 'badge-size-m' }],
  ['span.kanto-badge.m.icon-only', { width: 'badge-size-m' }],
  ['span.kanto-badge.s', { height: 'badge-size-s' }],
  ['span.kanto-badge.s.icon-only', { width: 'badge-size-s' }],
  ['span.kanto-badge.xs', { height: 'badge-size-xs' }],
  ['span.kanto-badge.s > svg[class="kanto-icon"]', { width: 'icon-size-s', height: 'icon-size-s' }],
  // Padding
  ['span.kanto-badge.icon-only', { padding: { block: 'space-0', inline: 'space-0' } }],
  ['span.kanto-badge.m > span', { padding: BADGE_LEAF_PADDING.m }],
  ['span.kanto-badge.s > span', { padding: BADGE_LEAF_PADDING.s }],
  ['span.kanto-badge.xs > span', { padding: BADGE_LEAF_PADDING.xs }],
  // Gap
  // Border size
  ['span.kanto-badge.outline', { borderWidth: 'border-width-100' }],
  // Border Radius
  [
    ['span.kanto-badge.solid', 'span.kanto-badge.soft', 'span.kanto-badge.outline'],
    { borderRadius: 'border-radius-s' },
  ],
  // Background color
  ['span.kanto-badge.neutral.soft', { backgroundColor: 'color-background-subtle' }],
  ['span.kanto-badge.accent.soft', { backgroundColor: 'color-background-accent-subtle' }],
  ['span.kanto-badge.success.soft', { backgroundColor: 'color-background-success-subtle' }],
  ['span.kanto-badge.critical.soft', { backgroundColor: 'color-background-critical-subtle' }],
  ['span.kanto-badge.highlight.soft', { backgroundColor: 'color-background-highlight-subtle' }],
  ['span.kanto-badge.neutral.solid', { backgroundColor: 'color-background-strong' }],
  ['span.kanto-badge.accent.solid', { backgroundColor: 'color-background-accent-strong' }],
  ['span.kanto-badge.success.solid', { backgroundColor: 'color-background-success-strong' }],
  ['span.kanto-badge.critical.solid', { backgroundColor: 'color-background-critical-strong' }],
  ['span.kanto-badge.highlight.solid', { backgroundColor: 'color-background-highlight-strong' }],
  ...BADGE_DECORATION_COLORS.map((c): CSSRules<CSSSelector>[number] => [
    `span.kanto-badge.decorative-${c}.soft`,
    { backgroundColor: { light: `palette-${c}-4`, dark: `palette-${c}dark-4` } },
  ]),
  // Border Color
  ['span.kanto-badge.outline', { borderColor: 'color-border-subtle' }],
  // Color Text
  ['span.kanto-badge.neutral', { color: 'color-text-muted' }],
  ['span.kanto-badge.accent', { color: 'color-text-accent-subtle' }],
  ['span.kanto-badge.success', { color: 'color-text-success-subtle' }],
  ['span.kanto-badge.critical', { color: 'color-text-critical-subtle' }],
  ['span.kanto-badge.highlight', { color: 'color-text-highlight-subtle' }],
  [
    [
      'span.kanto-badge.neutral.solid',
      'span.kanto-badge.accent.solid',
      'span.kanto-badge.success.solid',
      'span.kanto-badge.critical.solid',
      'span.kanto-badge.highlight.solid',
    ],
    { color: 'color-text-static-white' },
  ],
  ...BADGE_DECORATION_COLORS.map((c): CSSRules<CSSSelector>[number] => [
    [`span.kanto-badge.decorative-${c}`],
    { color: { light: `palette-${c}-13`, dark: `palette-${c}dark-13` } },
  ]),
  // Color Icon
  ['span.kanto-badge.accent > svg[class="kanto-icon"]', { color: 'color-icon-accent' }],
  ['span.kanto-badge.success > svg[class="kanto-icon"]', { color: 'color-icon-success' }],
  ['span.kanto-badge.critical > svg[class="kanto-icon"]', { color: 'color-icon-critical' }],
  ['span.kanto-badge.highlight > svg[class="kanto-icon"]', { color: 'color-icon-highlight' }],
  [
    [
      'span.kanto-badge.neutral.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.accent.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.success.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.critical.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.highlight.solid > svg[class="kanto-icon"]',
    ],
    { color: 'color-icon-static-white' },
  ],
  ...BADGE_DECORATION_COLORS.map((c): CSSRules<CSSSelector>[number] => [
    `span.kanto-badge.decorative-${c} > svg[class="kanto-icon"]`,
    { color: { light: `palette-${c}-11`, dark: `palette-${c}dark-11` } },
  ]),
];
