import { ConfigVariant, Cursor } from '../config';
import { Generator } from './Generator';

export class CursorGenerator extends Generator<Cursor> {
  getOption(config: ConfigVariant) {
    return config.cursor;
  }

  *getClassesForOption(option: Cursor) {
    yield `cursor-${option}`;
  }
}
