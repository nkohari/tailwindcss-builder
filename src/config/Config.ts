import { Appearance } from './Appearance';
import { Background } from './Background';
import { Border } from './Border';
import { Cursor } from './Cursor';
import { Display } from './Display';
import { Flex } from './Flex';
import { Float } from './Float';
import { Height } from './Height';
import { Margin } from './Margin';
import { Object } from './Object';
import { Opacity } from './Opacity';
import { Outline } from './Outline';
import { Overflow } from './Overflow';
import { Padding } from './Padding';
import { Pin } from './Pin';
import { PointerEvents } from './PointerEvents';
import { Position } from './Position';
import { Resize } from './Resize';
import { Shadow } from './Shadow';
import { Svg } from './Svg';
import { Table } from './Table';
import { Text } from './Text';
import { UserSelect } from './UserSelect';
import { VerticalAlign } from './VerticalAlign';
import { Visibility } from './Visibility';
import { Width } from './Width';
import { Z } from './Z';

export type ConfigVariant = {
  appearance?: Appearance;
  background?: Background;
  border?: Border;
  container?: boolean;
  cursor?: Cursor;
  display?: Display;
  flex?: Flex;
  float?: Float;
  height?: Height;
  margin?: Margin;
  object?: Object;
  opacity?: Opacity;
  outline?: Outline;
  overflow?: Overflow;
  padding?: Padding;
  pin?: Pin;
  pointerEvents?: PointerEvents;
  position?: Position;
  resize?: Resize;
  shadow?: Shadow;
  svg?: Svg;
  table?: Table;
  text?: Text;
  userSelect?: UserSelect;
  verticalAlign?: VerticalAlign;
  visibility?: Visibility;
  width?: Width;
  z?: Z;
};

export type Interaction = 'active' | 'focus' | 'focusWithin' | 'groupHover' | 'hover';
export type ViewportSize = 'sm' | 'md' | 'lg' | 'xl';

export type ConfigWithOptionalInteractionVariants = ConfigVariant & { [interaction in Interaction]?: ConfigVariant };
export type ResponsiveConfig = { [size in ViewportSize]?: ConfigWithOptionalInteractionVariants };

export type Config = ConfigWithOptionalInteractionVariants | ResponsiveConfig;
