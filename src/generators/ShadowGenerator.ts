import { ConfigVariant, Shadow } from '../config';
import { Generator } from './Generator';

export class ShadowGenerator extends Generator<Shadow> {
  getOption(config: ConfigVariant) {
    return config.shadow;
  }

  *getClassesForOption(option: Shadow) {
    if (option === 'shadow' || option === true) {
      yield 'shadow';
    } else {
      yield `shadow-${option}`;
    }
  }
}
