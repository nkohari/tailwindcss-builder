import { ConfigVariant, VerticalAlign } from '../config';
import { Generator } from './Generator';

export class VerticalAlignGenerator extends Generator<VerticalAlign> {
  getOption(config: ConfigVariant) {
    return config.verticalAlign;
  }

  *getClassesForOption(option: VerticalAlign) {
    yield `align-${option}`;
  }
}
