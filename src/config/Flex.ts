export type FlexAlignContent = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlignItems = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
export type FlexAlignSelf = 'auto' | 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type FlexJustifyContent = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexWrap = 'no-wrap' | 'wrap' | 'wrap-reverse';
export type FlexGrow = 0 | 1 | false | true;
export type FlexShrink = 0 | 1 | false | true;
export type FlexOrder = 'first' | 'last' | 'none' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type FlexShorthand = 'initial' | 1 | 'auto' | 'none';

export type Flex =
  | FlexShorthand
  | {
      alignContent?: FlexAlignContent;
      alignItems?: FlexAlignItems;
      alignSelf?: FlexAlignSelf;
      direction?: FlexDirection;
      grow?: FlexGrow;
      justifyContent?: FlexJustifyContent;
      order?: FlexOrder;
      shrink?: FlexShrink;
      wrap?: FlexWrap;
    };

export function isFlexShorthand(value: Flex): value is FlexShorthand {
  return typeof value !== 'object';
}
