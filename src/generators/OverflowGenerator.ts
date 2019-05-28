import { ConfigVariant, Overflow, isAxisMap } from '../config';
import { Generator } from './Generator';

export class OverflowGenerator extends Generator<Overflow> {
  getOption(config: ConfigVariant) {
    return config.overflow;
  }

  *getClassesForOption(option: Overflow) {
    if (!isAxisMap(option)) {
      yield `overflow-${option}`;
    } else {
      if (option.x) yield `overflow-x-${option.x}`;
      if (option.y) yield `overflow-y-${option.y}`;
    }
  }
}
