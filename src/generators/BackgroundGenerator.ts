import { Background, ConfigVariant } from '../config';
import { Generator } from './Generator';

export class BackgroundGenerator extends Generator<Background> {
  getOption(config: ConfigVariant) {
    return config.background;
  }

  *getClassesForOption(option: Background) {
    if (option.attachment) yield `bg-${option.attachment}`;
    if (option.color) yield `bg-${option.color}`;
    if (option.position) yield `bg-${option.position}`;
    if (option.repeat) yield `bg-${option.repeat}`;
    if (option.size) yield `bg-${option.size}`;
  }
}
