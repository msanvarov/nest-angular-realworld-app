import { IsActiveMatchOptions } from '@angular/router';

export interface FuseNavigationItem {
  id?: string;
  title?: string;
  subtitle?: string;
  type: 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
  hidden?: (item: FuseNavigationItem) => boolean;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  externalLink?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  exactMatch?: boolean;
  isActiveMatchOptions?: IsActiveMatchOptions;
  function?: (item: FuseNavigationItem) => void;
  classes?: {
    title?: string;
    subtitle?: string;
    icon?: string;
    wrapper?: string;
  };
  icon?: string;
  badge?: {
    title?: string;
    classes?: string;
  };
  children?: FuseNavigationItem[];
  meta?: any;
}

export type FuseVerticalNavigationAppearance =
  | 'default'
  | 'compact'
  | 'dense'
  | 'thin';

export type FuseVerticalNavigationMode = 'over' | 'side';

export type FuseVerticalNavigationPosition = 'left' | 'right';

export interface Navigation {
  compact: FuseNavigationItem[];
  default: FuseNavigationItem[];
  futuristic: FuseNavigationItem[];
  horizontal: FuseNavigationItem[];
}
