import { ConfigVariant, UserSelect } from '../config';
import { Generator } from './Generator';

export class UserSelectGenerator extends Generator<UserSelect> {
  getOption(config: ConfigVariant) {
    return config.userSelect;
  }

  *getClassesForOption(option: UserSelect) {
    if (option === false) {
      yield 'select-none';
    } else {
      yield `select-${option}`;
    }
  }
}
