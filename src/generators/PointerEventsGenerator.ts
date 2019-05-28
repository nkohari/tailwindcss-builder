import { ConfigVariant, PointerEvents } from '../config';
import { Generator } from './Generator';

export class PointerEventsGenerator extends Generator<PointerEvents> {
  getOption(config: ConfigVariant) {
    return config.pointerEvents;
  }

  *getClassesForOption(option: PointerEvents) {
    yield `pointer-events-${option}`;
  }
}
