import { Color } from './Color';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextBreak = 'normal' | 'words' | 'all' | 'truncate';
export type TextDecoration = 'underline' | 'line-through' | 'no-underline';
export type TextFont = 'sans' | 'serif' | 'mono';
export type TextLeading = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type TextSmoothing = 'antialiased' | 'subpixel-antialiased';
export type TextStyle = 'italic' | 'not-italic';
export type TextTracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
export type TextWeight =
  | 'hairline'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type TextWhitespace = 'normal' | 'no-wrap' | 'pre' | 'pre-line' | 'pre-wrap';

export type Text = {
  align?: TextAlign;
  break?: TextBreak;
  decoration?: TextDecoration;
  color?: Color;
  font?: TextFont;
  leading?: TextLeading;
  size?: TextSize;
  smoothing?: TextSmoothing;
  style?: TextStyle;
  tracking?: TextTracking;
  transform?: TextTransform;
  weight?: TextWeight;
  whitespace?: TextWhitespace;
};
