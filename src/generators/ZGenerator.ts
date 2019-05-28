import { ConfigVariant, Z } from '../config';
import { Generator } from './Generator';

export class ZGenerator extends Generator<Z> {
  getOption(config: ConfigVariant) {
    return config.z;
  }

  *getClassesForOption(option: Z) {
    yield `z-${option}`;
  }
}
