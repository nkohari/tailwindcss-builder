import { Border, BorderRadiusValue, BorderWidthValue, ConfigVariant, isSideMap } from '../config';
import { Generator } from './Generator';

function getBorderRadiusClass(value: BorderRadiusValue, modifier?: string) {
  if (value === 'rounded') {
    return modifier ? `rounded-${modifier}` : 'rounded';
  } else {
    return modifier ? `rounded-${modifier}-${value}` : `rounded-${value}`;
  }
}

function getBorderWidthClass(value: BorderWidthValue, modifier?: string) {
  if (value === 1) {
    return modifier ? `border-${modifier}` : 'border';
  } else {
    return modifier ? `border-${modifier}-${value}` : `border-${value}`;
  }
}

export class BorderGenerator extends Generator<Border> {
  getOption(config: ConfigVariant) {
    return config.border;
  }

  *getClassesForOption(option: Border) {
    if (option.collapse) yield `border-${option.collapse}`;
    if (option.color) yield `border-${option.color}`;
    if (option.style) yield `border-${option.style}`;

    if (option.radius) {
      if (isSideMap(option.radius)) {
        yield* this.getClassesBySide(option.radius, getBorderRadiusClass);
      } else {
        yield getBorderRadiusClass(option.radius);
      }
    }

    if (option.width !== undefined) {
      if (isSideMap(option.width)) {
        yield* this.getClassesBySide(option.width, getBorderWidthClass);
      } else {
        yield getBorderWidthClass(option.width);
      }
    }
  }
}
