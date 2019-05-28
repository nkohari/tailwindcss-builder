import { ConfigVariant, Text } from '../config';
import { Generator } from './Generator';

export class TextGenerator extends Generator<Text> {
  getOption(config: ConfigVariant) {
    return config.text;
  }

  *getClassesForOption(option: Text) {
    if (option.align) {
      yield `text-${option.align}`;
    }

    if (option.break) {
      if (option.break === 'truncate') {
        yield 'truncate';
      } else {
        yield `break-${option.break}`;
      }
    }

    if (option.color) {
      yield `text-${option.color}`;
    }

    if (option.decoration) {
      yield option.decoration;
    }

    if (option.font) {
      yield `font-${option.font}`;
    }

    if (option.leading) {
      yield `leading-${option.leading}`;
    }

    if (option.size) {
      yield `text-${option.size}`;
    }

    if (option.smoothing) {
      yield option.smoothing;
    }

    if (option.style) {
      yield option.style;
    }

    if (option.tracking) {
      yield `tracking-${option.tracking}`;
    }

    if (option.transform) {
      yield option.transform;
    }

    if (option.weight) {
      yield `font-${option.weight}`;
    }

    if (option.whitespace) {
      yield `whitespace-${option.whitespace}`;
    }
  }
}
