import { ConfigVariant, Position } from '../config';
import { Generator } from './Generator';

export class PositionGenerator extends Generator<Position> {
  getOption(config: ConfigVariant) {
    return config.position;
  }

  *getClassesForOption(option: Position) {
    yield option;
  }
}
