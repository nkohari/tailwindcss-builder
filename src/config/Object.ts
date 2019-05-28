export type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export type ObjectPosition =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top';

export type Object = {
  fit?: ObjectFit;
  position?: ObjectPosition;
};
