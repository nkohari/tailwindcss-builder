export type Axis = 'x' | 'y';

export type AxisMap<T> = { [axis in Axis]?: T };

export function isAxisMap<T>(value: any): value is AxisMap<T> {
  if (typeof value !== 'object') return false;
  const map = value as AxisMap<T>;
  return map.x !== undefined || map.y !== undefined;
}
