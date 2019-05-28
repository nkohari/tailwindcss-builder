import { Size } from './Size';

export type WidthValue = Size;

export type Width =
  | WidthValue
  | {
      min?: 0 | 'full';
      max?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full';
      value?: WidthValue;
    };

export function isWidthValue(value: Width): value is WidthValue {
  return typeof value !== 'object';
}
