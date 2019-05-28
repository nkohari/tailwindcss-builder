import { ConfigVariant, Object } from '../config';
import { Generator } from './Generator';

export class ObjectGenerator extends Generator<Object> {
  getOption(config: ConfigVariant) {
    return config.object;
  }

  *getClassesForOption(option: Object) {
    if (option.fit) yield `object-${option.fit}`;
    if (option.position) yield `object-${option.position}`;
  }
}
