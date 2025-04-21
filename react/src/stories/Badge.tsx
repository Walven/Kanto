import 'kanto/css/components/badge.css';
import type { BadgeTypeProp, BadgeStyleProp, BadgeSizeProp } from 'kanto/components/badge';
import { ReactNode } from 'react';

export type BadgeProps = {
  type: BadgeTypeProp;
  style: BadgeStyleProp;
  size?: BadgeSizeProp;
  icon?: 'icon' | 'icon-only';
  children: ReactNode;
};

export const Badge = ({ type, style, size, icon, children }: BadgeProps) => {
  const className = ['kanto-badge', type, style, size ?? 'm', icon].filter((s) => !!s).join(' ');

  return <span className={className}>{children}</span>;
};
