import { Size } from './Size';

export type HeightValue = Size;

export type Height =
  | HeightValue
  | {
      max?: 'full' | 'screen';
      min?: 0 | 'full' | 'screen';
      value?: HeightValue;
    };

export function isHeightValue(value: Height): value is HeightValue {
  return typeof value !== 'object';
}
