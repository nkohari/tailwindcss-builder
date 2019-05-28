import { Color } from './Color';

export type BackgroundAttachment = 'fixed' | 'local' | 'scroll';
export type BackgroundPosition =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top';
export type BackgroundRepeat = 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat-round' | 'repeat-space';
export type BackgroundSize = 'auto' | 'cover' | 'contain';

export type Background = {
  attachment?: BackgroundAttachment;
  color?: Color;
  position?: BackgroundPosition;
  repeat?: BackgroundRepeat;
  size?: BackgroundSize;
};
