import 'kanto/css/components/icon.css';
import { ReactComponent as AddOutline } from 'kanto/icons/outline/Add.svg';
import { ReactComponent as AddSolid } from 'kanto/icons/solid/Add.svg';
import { ReactComponent as CheckOutline } from 'kanto/icons/outline/Check.svg';
import { ReactComponent as CheckSolid } from 'kanto/icons/solid/Check.svg';
import { ReactComponent as ChevronDownOutline } from 'kanto/icons/outline/ChevronDown.svg';
import { ReactComponent as ChevronDownSolid } from 'kanto/icons/solid/ChevronDown.svg';
import { ReactComponent as ChevronRightOutline } from 'kanto/icons/outline/ChevronRight.svg';
import { ReactComponent as ChevronRightSolid } from 'kanto/icons/solid/ChevronRight.svg';
import { ReactComponent as CircleOutline } from 'kanto/icons/outline/Circle.svg';
import { ReactComponent as CircleSolid } from 'kanto/icons/solid/Circle.svg';
import { ReactComponent as ClearOutline } from 'kanto/icons/outline/Clear.svg';
import { ReactComponent as ClearSolid } from 'kanto/icons/solid/Clear.svg';
import { ReactComponent as CloseOutline } from 'kanto/icons/outline/Close.svg';
import { ReactComponent as CloseSolid } from 'kanto/icons/solid/Close.svg';
import { ReactComponent as ExternalLinkOutline } from 'kanto/icons/outline/ExternalLink.svg';
import { ReactComponent as ExternalLinkSolid } from 'kanto/icons/solid/ExternalLink.svg';
import { ReactComponent as InfoOutline } from 'kanto/icons/outline/Info.svg';
import { ReactComponent as InfoSolid } from 'kanto/icons/solid/Info.svg';
import { ReactComponent as MinusOutline } from 'kanto/icons/outline/Minus.svg';
import { ReactComponent as MinusSolid } from 'kanto/icons/solid/Minus.svg';
import { ReactComponent as WarningOutline } from 'kanto/icons/outline/Warning.svg';
import { ReactComponent as WarningSolid } from 'kanto/icons/solid/Warning.svg';
import type { IconSizeProp, IconColorProp } from 'kanto/foundations/components/icon';

type IconName = 'add' | 'close' | 'circle' | 'minus' | 'clear' | 'check' | 'info' | 'warning' | 'chevronRight' | 'chevronDown' | 'externalLink';
type IconStyle = 'outline' | 'solid';

type IconProps = {
  /** Name of the icon to show */
  name: IconName;
  /** Style of icon, defaults to outline */
  style?: IconStyle;
  /** Size of the icon */
  size?: IconSizeProp;
  /** Color of the icon */
  color?: IconColorProp;
  /** Optional class of the icon (for custom styles) */
  className?: string;
};

export const Icon = ({ name, style, size, color, className }: IconProps) => {
  const cn = ['kanto-icon', size ? `size-${size}` : undefined, color, className].filter((v) => !!v).join(' ');

  if (style === 'solid') {
    switch (name) {
      case 'add':
        return <AddSolid className={cn} />;
      case 'check':
        return <CheckSolid className={cn} />;
      case 'chevronDown':
        return <ChevronDownSolid className={cn} />;
      case 'chevronRight':
        return <ChevronRightSolid className={cn} />;
      case 'circle':
        return <CircleSolid className={cn} />;
      case 'clear':
        return <ClearSolid className={cn} />;
      case 'close':
        return <CloseSolid className={cn} />;
      case 'externalLink':
        return <ExternalLinkSolid className={cn} />;
      case 'info':
        return <InfoSolid className={cn} />;
      case 'minus':
        return <MinusSolid className={cn} />;
      case 'warning':
        return <WarningSolid className={cn} />;
    }
  }

  switch (name) {
    case 'add':
      return <AddOutline className={cn} />;
    case 'check':
      return <CheckOutline className={cn} />;
    case 'chevronDown':
      return <ChevronDownOutline className={cn} />;
    case 'chevronRight':
      return <ChevronRightOutline className={cn} />;
    case 'circle':
      return <CircleOutline className={cn} />;
    case 'clear':
      return <ClearOutline className={cn} />;
    case 'close':
      return <CloseOutline className={cn} />;
    case 'externalLink':
      return <ExternalLinkOutline className={cn} />;
    case 'info':
      return <InfoOutline className={cn} />;
    case 'minus':
      return <MinusOutline className={cn} />;
    case 'warning':
      return <WarningOutline className={cn} />;
  }

  /* @ts-ignore TS7027 */
  return null;
};
