import { ConfigVariant, Height, isHeightValue } from '../config';
import { Generator } from './Generator';

export class HeightGenerator extends Generator<Height> {
  getOption(config: ConfigVariant) {
    return config.height;
  }

  *getClassesForOption(option: Height) {
    if (isHeightValue(option)) {
      yield `h-${option}`;
    } else {
      if (option.min !== undefined) yield `min-h-${option.min}`;
      if (option.max !== undefined) yield `max-h-${option.max}`;
      if (option.value !== undefined) yield `h-${option.value}`;
    }
  }
}
