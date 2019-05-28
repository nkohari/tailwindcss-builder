import { ConfigVariant, Opacity } from '../config';
import { Generator } from './Generator';

export class OpacityGenerator extends Generator<Opacity> {
  getOption(config: ConfigVariant) {
    return config.opacity;
  }

  *getClassesForOption(option: Opacity) {
    yield `opacity-${option}`;
  }
}
