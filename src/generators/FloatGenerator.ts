import { ConfigVariant, Float } from '../config';
import { Generator } from './Generator';

export class FloatGenerator extends Generator<Float> {
  getOption(config: ConfigVariant) {
    return config.float;
  }

  *getClassesForOption(option: Float) {
    yield option === 'clearfix' ? 'clearfix' : `float-${option}`;
  }
}
