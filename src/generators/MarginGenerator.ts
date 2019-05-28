import { ConfigVariant, Margin, MarginValue, isAxisMap, isSideMap } from '../config';
import { Generator } from './Generator';

function getMarginClass(value: MarginValue, prefix: string = ''): string {
  return value < 0 ? `-m${prefix}-${value}` : `m${prefix}-${value}`;
}

export class MarginGenerator extends Generator<Margin> {
  getOption(config: ConfigVariant) {
    return config.margin;
  }

  *getClassesForOption(option: Margin) {
    if (isAxisMap(option)) {
      yield* this.getClassesByAxis(option, getMarginClass);
    } else if (isSideMap(option)) {
      yield* this.getClassesBySide(option, getMarginClass);
    } else {
      yield getMarginClass(option);
    }
  }
}
