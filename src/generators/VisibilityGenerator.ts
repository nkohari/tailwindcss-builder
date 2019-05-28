import { ConfigVariant, Visibility } from '../config';
import { Generator } from './Generator';

export class VisibilityGenerator extends Generator<Visibility> {
  getOption(config: ConfigVariant) {
    return config.visibility;
  }

  *getClassesForOption(option: Visibility) {
    yield option === 'hidden' ? 'invisible' : 'visible';
  }
}
