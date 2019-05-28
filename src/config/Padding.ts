import { AxisMap } from './Axis';
import { SideMap } from './Side';
import { Spacing } from './Spacing';

export type PaddingValue = Spacing;
export type Padding = PaddingValue | AxisMap<PaddingValue> | SideMap<PaddingValue>;
