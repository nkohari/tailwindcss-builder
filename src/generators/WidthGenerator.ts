import { ConfigVariant, Width, isWidthValue } from '../config';
import { Generator } from './Generator';

export class WidthGenerator extends Generator<Width> {
  getOption(config: ConfigVariant) {
    return config.width;
  }

  *getClassesForOption(option: Width) {
    if (isWidthValue(option)) {
      yield `w-${option}`;
    } else {
      if (option.min !== undefined) yield `min-w-${option.min}`;
      if (option.max !== undefined) yield `max-w-${option.max}`;
      if (option.value !== undefined) yield `w-${option.value}`;
    }
  }
}
