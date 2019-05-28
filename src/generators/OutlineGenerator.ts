import { ConfigVariant, Outline } from '../config';
import { Generator } from './Generator';

export class OutlineGenerator extends Generator<Outline> {
  getOption(config: ConfigVariant) {
    return config.outline;
  }

  *getClassesForOption(option: Outline) {
    yield `outline-${option}`;
  }
}
