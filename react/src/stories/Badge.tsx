import 'kanto/css/components/badge.css';
import type { BadgeTypeProp, BadgeStyleProp, BadgeSizeProp } from 'kanto/foundations/components/badge';
import { Icon, type IconProps } from './Icon';
import { IconColorProp, IconSizeProp } from '../../../foundations/components/icon';

export type BadgeFeature = { type: 'icon'; position?: 'before' | 'after' } & Omit<IconProps, 'color' | 'size'>;

type SizeWithoutXs = Exclude<BadgeSizeProp, 'xs'>;

export type BadgeProps = {
  type: BadgeTypeProp;
  style: BadgeStyleProp;
} & (
  | {
      size: 'xs';
      label: string;
      features?: undefined;
    }
  | {
      size: SizeWithoutXs;
      label: string;
      features?: BadgeFeature[];
    }
  | {
      size: SizeWithoutXs;
      label?: undefined;
      features: [BadgeFeature, ...BadgeFeature[]];
    }
);

const isIconStyle = (style: string): style is IconColorProp => ['accent', 'critical', 'success', 'highlight'].includes(style);

type RenderIconFeaturesProps = {
  features?: BadgeFeature[];
  position: NonNullable<BadgeFeature['position']>;
  size: IconSizeProp;
  color?: IconColorProp;
};

const RenderBadgeFeatures = ({ features, position, color, size }: RenderIconFeaturesProps) => {
  if (!features || size === 'xs') return undefined;

  const isBefore = position === 'before';
  return features.filter((f) => (f.position ? f.position === position : isBefore)).map((f) => <Icon color={color} size={size} {...f} />);
};

export const Badge = ({ type, style, size, label, features }: BadgeProps) => {
  const className = `kanto-badge color-${type} size-${size} ${style}`;
  const solidIconColor = style === 'solid' ? 'static-white' : undefined;
  const definitiveIconColor = solidIconColor ?? (isIconStyle(type) ? type : undefined);

  return (
    <span className={label ? className : `${className} icon-only`}>
      <RenderBadgeFeatures features={features} position="before" color={definitiveIconColor} size={size} />
      {label ? <span className="label-m">{label}</span> : undefined}
      <RenderBadgeFeatures features={features} position="after" color={definitiveIconColor} size={size} />
    </span>
  );
};
