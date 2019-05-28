import { Appearance, ConfigVariant } from '../config';
import { Generator } from './Generator';

export class AppearanceGenerator extends Generator<Appearance> {
  getOption(config: ConfigVariant) {
    return config.appearance;
  }

  *getClassesForOption(option: Appearance) {
    yield `appearance-${option}`;
  }
}
