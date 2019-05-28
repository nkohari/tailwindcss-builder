import { ConfigVariant, Resize } from '../config';
import { Generator } from './Generator';

export class ResizeGenerator extends Generator<Resize> {
  getOption(config: ConfigVariant) {
    return config.resize;
  }

  *getClassesForOption(option: Resize) {
    if (option === 'resize' || option === true) {
      yield 'resize';
    } else {
      yield `resize-${option}`;
    }
  }
}
