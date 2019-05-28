import { ConfigVariant, Svg } from '../config';
import { Generator } from './Generator';

export class SvgGenerator extends Generator<Svg> {
  getOption(config: ConfigVariant) {
    return config.svg;
  }

  *getClassesForOption(option: Svg) {
    if (option.fill) yield 'fill-current';
    if (option.stroke) yield 'stroke-current';
  }
}
