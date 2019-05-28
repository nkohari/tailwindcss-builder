import { AxisMap } from './Axis';

export type OverflowValue = 'auto' | 'hidden' | 'visible' | 'scroll';
export type Overflow = OverflowValue | AxisMap<OverflowValue>;
