import { ColorType } from '../foundations/colors';
import type { SpacingToken } from '../foundations/token';
import { CSSRules } from './common';

// prettier-ignore
export const BADGE_DECORATION_COLORS = ['gold' , 'silver' , 'bronze' , 'topaz' , 'vermilion' , 'crimson' , 'magenta' , 'fuchsia' , 'amethyst' , 'lavender' , 'cobalt' , 'cerulean' , 'cyan' , 'celadon' , 'peridot' , 'olive' , 'saffron' , 'azure'] as const
type BadgeDecorationColor = (typeof BADGE_DECORATION_COLORS)[number];
type BadgeDecorativeType = `decorative-${BadgeDecorationColor}`;
export type BadgeTypeProp = ColorType | BadgeDecorativeType;
export type BadgeStyleProp = 'solid' | 'soft' | 'outline' | 'ghost';
export type BadgeSizeProp = 'm' | 's' | 'xs';

type BadgeLeafCSSSelector = `span.kanto-badge.size-${BadgeSizeProp} > span`;
type BadgeContainerCSSSelector = `span.kanto-badge.size-${BadgeSizeProp}`;

type CSSSelector =
  | BadgeLeafCSSSelector
  | BadgeContainerCSSSelector
  | `${BadgeContainerCSSSelector}.icon-only`
  | `${BadgeContainerCSSSelector} > svg[class="kanto-icon"]`
  | `span.kanto-badge.color-${BadgeTypeProp}.${BadgeStyleProp}`
  | `span.kanto-badge.${BadgeStyleProp}`
  | `span.kanto-badge.color-${BadgeTypeProp}`
  | `span.kanto-badge.color-${BadgeTypeProp} > svg[class="kanto-icon"]`
  | `span.kanto-badge.color-${BadgeTypeProp}.solid > svg[class="kanto-icon"]`
  | 'span.kanto-badge'
  | 'span.kanto-badge.icon-only';

const BADGE_SIZE = {
  m: 'space-600',
  s: 'space-500',
  xs: 'space-400',
} satisfies Record<BadgeSizeProp, SpacingToken>;

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
    },
  ],
  ['span.kanto-badge.icon-only', { justifyContent: 'center' }],
  // Size
  ['span.kanto-badge.size-m', { height: BADGE_SIZE.m }],
  ['span.kanto-badge.size-m.icon-only', { width: BADGE_SIZE.m }],
  ['span.kanto-badge.size-s', { height: BADGE_SIZE.s }],
  ['span.kanto-badge.size-s.icon-only', { width: BADGE_SIZE.s }],
  ['span.kanto-badge.size-xs', { height: BADGE_SIZE.xs }],
  ['span.kanto-badge.size-s > svg[class="kanto-icon"]', { width: '16px', height: '16px' }], // TODO: token for icon size!
  // Padding
  ['span.kanto-badge.icon-only', { padding: { block: 'space-0', inline: 'space-0' } }],
  ['span.kanto-badge.size-m > span', { padding: BADGE_LEAF_PADDING.m }],
  ['span.kanto-badge.size-s > span', { padding: BADGE_LEAF_PADDING.s }],
  ['span.kanto-badge.size-xs > span', { padding: BADGE_LEAF_PADDING.xs }],
  // Gap
  // Border size
  ['span.kanto-badge.outline', { borderWidth: 'border-width-100' }],
  // Border Radius
  [
    ['span.kanto-badge.solid', 'span.kanto-badge.soft', 'span.kanto-badge.outline'],
    { borderRadius: 'border-radius-s' },
  ],
  // Background color
  ['span.kanto-badge.color-neutral.soft', { backgroundColor: 'color-background-subtle' }],
  ['span.kanto-badge.color-accent.soft', { backgroundColor: 'color-background-accent-subtle' }],
  ['span.kanto-badge.color-success.soft', { backgroundColor: 'color-background-success-subtle' }],
  ['span.kanto-badge.color-critical.soft', { backgroundColor: 'color-background-critical-subtle' }],
  ['span.kanto-badge.color-highlight.soft', { backgroundColor: 'color-background-highlight-subtle' }],
  ['span.kanto-badge.color-neutral.solid', { backgroundColor: 'color-background-strong' }],
  ['span.kanto-badge.color-accent.solid', { backgroundColor: 'color-background-accent-strong' }],
  ['span.kanto-badge.color-success.solid', { backgroundColor: 'color-background-success-strong' }],
  ['span.kanto-badge.color-critical.solid', { backgroundColor: 'color-background-critical-strong' }],
  ['span.kanto-badge.color-highlight.solid', { backgroundColor: 'color-background-highlight-strong' }],
  ...BADGE_DECORATION_COLORS.map((c): CSSRules<CSSSelector>[number] => [
    `span.kanto-badge.color-decorative-${c}.soft`,
    { backgroundColor: { light: `palette-${c}-4`, dark: `palette-${c}dark-4` } },
  ]),
  // Border Color
  ['span.kanto-badge.outline', { borderColor: 'color-border-subtle' }],
  // Color Text
  ['span.kanto-badge.color-neutral', { color: 'color-text-muted' }],
  ['span.kanto-badge.color-accent', { color: 'color-text-accent-subtle' }],
  ['span.kanto-badge.color-success', { color: 'color-text-success-subtle' }],
  ['span.kanto-badge.color-critical', { color: 'color-text-critical-subtle' }],
  ['span.kanto-badge.color-highlight', { color: 'color-text-highlight-subtle' }],
  [
    [
      'span.kanto-badge.color-neutral.solid',
      'span.kanto-badge.color-accent.solid',
      'span.kanto-badge.color-success.solid',
      'span.kanto-badge.color-critical.solid',
      'span.kanto-badge.color-highlight.solid',
    ],
    { color: 'color-text-static-white' },
  ],
  ...BADGE_DECORATION_COLORS.map((c): CSSRules<CSSSelector>[number] => [
    [`span.kanto-badge.color-decorative-${c}`],
    { color: { light: `palette-${c}-13`, dark: `palette-${c}dark-13` } },
  ]),
  // Color Icon
  ['span.kanto-badge.color-accent > svg[class="kanto-icon"]', { color: 'color-icon-accent' }],
  ['span.kanto-badge.color-success > svg[class="kanto-icon"]', { color: 'color-icon-success' }],
  ['span.kanto-badge.color-critical > svg[class="kanto-icon"]', { color: 'color-icon-critical' }],
  ['span.kanto-badge.color-highlight > svg[class="kanto-icon"]', { color: 'color-icon-highlight' }],
  [
    [
      'span.kanto-badge.color-neutral.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.color-accent.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.color-success.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.color-critical.solid > svg[class="kanto-icon"]',
      'span.kanto-badge.color-highlight.solid > svg[class="kanto-icon"]',
    ],
    { color: 'color-icon-static-white' },
  ],
  ...BADGE_DECORATION_COLORS.map((c): CSSRules<CSSSelector>[number] => [
    `span.kanto-badge.color-decorative-${c} > svg[class="kanto-icon"]`,
    { color: { light: `palette-${c}-11`, dark: `palette-${c}dark-11` } },
  ]),
];
