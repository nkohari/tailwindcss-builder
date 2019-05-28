import { ConfigVariant, Display } from '../config';
import { Generator } from './Generator';

export class DisplayGenerator extends Generator<Display> {
  getOption(config: ConfigVariant) {
    return config.display;
  }

  *getClassesForOption(option: Display) {
    yield option;
  }
}
