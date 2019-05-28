import { ConfigVariant, Padding, PaddingValue, isAxisMap, isSideMap } from '../config';
import { Generator } from './Generator';

function getPaddingClass(value: PaddingValue, prefix: string = ''): string {
  return `p${prefix}-${value}`;
}

export class PaddingGenerator extends Generator<Padding> {
  getOption(config: ConfigVariant) {
    return config.padding;
  }

  *getClassesForOption(option: Padding) {
    if (isAxisMap(option)) {
      yield* this.getClassesByAxis(option, getPaddingClass);
    } else if (isSideMap(option)) {
      yield* this.getClassesBySide(option, getPaddingClass);
    } else {
      yield getPaddingClass(option);
    }
  }
}
