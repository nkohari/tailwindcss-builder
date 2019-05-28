import { AxisMap } from './Axis';
import { SideMap } from './Side';
import { NegativeSpacing, Spacing } from './Spacing';

export type MarginValue = Spacing | NegativeSpacing | 'auto';
export type Margin = MarginValue | AxisMap<MarginValue> | SideMap<MarginValue>;
