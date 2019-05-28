import { ConfigVariant, Pin, PinValue } from '../config';
import { Generator } from './Generator';

function getPinClass(value: PinValue) {
  return value === 'inset-auto' ? 'inset-auto' : `${value}-0`;
}

export class PinGenerator extends Generator<Pin> {
  getOption(config: ConfigVariant) {
    return config.pin;
  }

  *getClassesForOption(option: Pin) {
    if (Array.isArray(option)) {
      yield* option.map(getPinClass);
    } else {
      yield getPinClass(option);
    }
  }
}
