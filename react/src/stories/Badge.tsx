import 'kanto/css/components/badge.css';
import type { BadgeTypeProp, BadgeStyleProp, BadgeSizeProp } from 'kanto/foundations/components/badge';
import { Icon, type IconNameProp } from './Icon';
import { IconColorProp } from '../../../foundations/components/icon';

export type BadgeProps = {
  type: BadgeTypeProp;
  style: BadgeStyleProp;
  size: BadgeSizeProp;
  label?: string;
  icon?: IconNameProp;
};

const isIconStyle = (style: string): style is IconColorProp => ['accent', 'critical', 'success', 'highlight'].includes(style);

export const Badge = ({ type, style, size, label, icon }: BadgeProps) => {
  const className = `kanto-badge color-${type} size-${size} ${style}`;
  const renderIcon = () => {
    if (size === 'xs' || !icon) return undefined;
    const solidIconColor = style === 'solid' ? 'static-white' : undefined;
    const definitiveIconColor = solidIconColor ?? (isIconStyle(type) ? type : undefined);
    return <Icon name={icon} size={size} color={definitiveIconColor} />;
  };
  const renderLabel = () => (label ? <span className="label-m">{label}</span> : undefined);

  if (!label) {
    if (size === 'xs')
      return (
        <span className="kanto-badge solid color-critical">
          <span className="label-m">Label required in xs</span>
        </span>
      );
    return <span className={`${className} icon-only`}>{renderIcon()}</span>;
  }

  return (
    <span className={className}>
      {renderIcon()}
      {renderLabel()}
    </span>
  );
};
