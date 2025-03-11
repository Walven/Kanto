import '../../../css/colors/icon.css';
import { ReactComponent as AddOutline } from '../../../icons/AddOutline.svg';
import { ReactComponent as AddSolid } from '../../../icons/AddSolid.svg';
import { ReactComponent as CheckOutline } from '../../../icons/CheckOutline.svg';
import { ReactComponent as CheckSolid } from '../../../icons/CheckSolid.svg';
import { ReactComponent as ChevronDownOutline } from '../../../icons/ChevronDownOutline.svg';
import { ReactComponent as ChevronDownSolid } from '../../../icons/ChevronDownSolid.svg';
import { ReactComponent as ChevronRightOutline } from '../../../icons/ChevronRightOutline.svg';
import { ReactComponent as ChevronRightSolid } from '../../../icons/ChevronRightSolid.svg';
import { ReactComponent as CircleOutline } from '../../../icons/CircleOutline.svg';
import { ReactComponent as CircleSolid } from '../../../icons/CircleSolid.svg';
import { ReactComponent as ClearOutline } from '../../../icons/ClearOutline.svg';
import { ReactComponent as ClearSolid } from '../../../icons/ClearSolid.svg';
import { ReactComponent as CloseOutline } from '../../../icons/CloseOutline.svg';
import { ReactComponent as CloseSolid } from '../../../icons/CloseSolid.svg';
import { ReactComponent as ExternalLinkOutline } from '../../../icons/ExternalLinkOutline.svg';
import { ReactComponent as ExternalLinkSolid } from '../../../icons/ExternalLinkSolid.svg';
import { ReactComponent as InfoOutline } from '../../../icons/InfoOutline.svg';
import { ReactComponent as InfoSolid } from '../../../icons/InfoSolid.svg';
import { ReactComponent as MinusOutline } from '../../../icons/MinusOutline.svg';
import { ReactComponent as MinusSolid } from '../../../icons/MinusSolid.svg';
import { ReactComponent as WarningOutline } from '../../../icons/WarningOutline.svg';
import { ReactComponent as WarningSolid } from '../../../icons/WarningSolid.svg';

type IconName = 'add' | 'close' | 'circle' | 'minus' | 'clear' | 'check' | 'info' | 'warning' | 'chevronRight' | 'chevronDown' | 'externalLink';
type IconType = 'outline' | 'solid';
type IconSize = 'S' | 'M' | 'L';

type IconProps = {
  /** Name of the icon to show */
  name: IconName;
  /** Type of icon, defaults to outline */
  type?: IconType;
  /** Size of the icon, defaults to L */
  size?: IconSize;
  /** Optional class of the icon (for custom styles) */
  className?: string;
};

const ICON_SIZES: Record<IconSize, number> = {
  S: 16,
  M: 20,
  L: 24,
};

export const Icon = ({ name, type, size, className }: IconProps) => {
  const wh = ICON_SIZES[size ?? 'L'];
  const cn = className ? `icon ${className}` : 'icon';

  if (type === 'solid') {
    switch (name) {
      case 'add':
        return <AddSolid className={cn} width={wh} height={wh} />;
      case 'check':
        return <CheckSolid className={cn} width={wh} height={wh} />;
      case 'chevronDown':
        return <ChevronDownSolid className={cn} width={wh} height={wh} />;
      case 'chevronRight':
        return <ChevronRightSolid className={cn} width={wh} height={wh} />;
      case 'circle':
        return <CircleSolid className={cn} width={wh} height={wh} />;
      case 'clear':
        return <ClearSolid className={cn} width={wh} height={wh} />;
      case 'close':
        return <CloseSolid className={cn} width={wh} height={wh} />;
      case 'externalLink':
        return <ExternalLinkSolid className={cn} width={wh} height={wh} />;
      case 'info':
        return <InfoSolid className={cn} width={wh} height={wh} />;
      case 'minus':
        return <MinusSolid className={cn} width={wh} height={wh} />;
      case 'warning':
        return <WarningSolid className={cn} width={wh} height={wh} />;
    }
  }

  switch (name) {
    case 'add':
      return <AddOutline className={cn} width={wh} height={wh} />;
    case 'check':
      return <CheckOutline className={cn} width={wh} height={wh} />;
    case 'chevronDown':
      return <ChevronDownOutline className={cn} width={wh} height={wh} />;
    case 'chevronRight':
      return <ChevronRightOutline className={cn} width={wh} height={wh} />;
    case 'circle':
      return <CircleOutline className={cn} width={wh} height={wh} />;
    case 'clear':
      return <ClearOutline className={cn} width={wh} height={wh} />;
    case 'close':
      return <CloseOutline className={cn} width={wh} height={wh} />;
    case 'externalLink':
      return <ExternalLinkOutline className={cn} width={wh} height={wh} />;
    case 'info':
      return <InfoOutline className={cn} width={wh} height={wh} />;
    case 'minus':
      return <MinusOutline className={cn} width={wh} height={wh} />;
    case 'warning':
      return <WarningOutline className={cn} width={wh} height={wh} />;
  }

  /* @ts-ignore TS7027 */
  return null;
};
