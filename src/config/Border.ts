import { Color } from './Color';
import { SideMap } from './Side';

export type BorderCollapse = 'collapse' | 'separate';

export type BorderRadiusValue = 'none' | 'sm' | 'rounded' | 'lg' | 'full';
export type BorderRadius = BorderRadiusValue | SideMap<BorderRadiusValue>;

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'none';

export type BorderWidthValue = 0 | 1 | 2 | 4 | 8;
export type BorderWidth = BorderWidthValue | SideMap<BorderWidthValue>;

export type Border = {
  color?: Color;
  collapse?: BorderCollapse;
  radius?: BorderRadius;
  style?: BorderStyle;
  width?: BorderWidth;
};
