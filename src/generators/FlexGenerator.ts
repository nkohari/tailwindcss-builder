import { ConfigVariant, Flex, isFlexShorthand } from '../config';
import { Generator } from './Generator';

export class FlexGenerator extends Generator<Flex> {
  getOption(config: ConfigVariant) {
    return config.flex;
  }

  *getClassesForOption(option: Flex) {
    if (isFlexShorthand(option)) {
      yield `flex-${option}`;
    } else {
      if (option.direction) yield `flex-${option.direction}`;
      if (option.wrap) yield `flex-${option.wrap}`;
      if (option.alignItems) yield `items-${option.alignItems}`;
      if (option.alignContent) yield `content-${option.alignContent}`;
      if (option.alignSelf) yield `self-${option.alignSelf}`;
      if (option.justifyContent) yield `justify-${option.justifyContent}`;
      if (option.grow !== undefined) yield option.grow ? 'flex-grow' : 'flex-grow-0';
      if (option.shrink !== undefined) yield option.shrink ? 'flex-shrink' : 'flex-shrink-0';
      if (option.order) yield `order-${option.order}`;
    }
  }
}
