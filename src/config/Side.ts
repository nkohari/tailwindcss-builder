export type Side = 'top' | 'bottom' | 'left' | 'right';

export type SideMap<T> = { [side in Side]?: T };

export function isSideMap<T>(value: any): value is SideMap<T> {
  if (typeof value !== 'object') return false;
  const map = value as SideMap<T>;
  return map.top !== undefined || map.right !== undefined || map.bottom !== undefined || map.left !== undefined;
}
