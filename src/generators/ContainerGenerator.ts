import { ConfigVariant } from '../config';
import { Generator } from './Generator';

export class ContainerGenerator extends Generator<boolean> {
  getOption(config: ConfigVariant) {
    return config.container;
  }

  *getClassesForOption(option: boolean) {
    if (option) yield 'container';
  }
}
