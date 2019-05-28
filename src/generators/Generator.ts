import { ConfigVariant, AxisMap, SideMap } from '../config';

export abstract class Generator<T = unknown> {
  *getClasses(config: ConfigVariant): IterableIterator<string> {
    const option = this.getOption(config);

    if (option === undefined || option === null) {
      return;
    }

    yield* this.getClassesForOption(option);
  }

  protected abstract getOption(config: ConfigVariant): T | undefined;
  protected abstract getClassesForOption(option: T): IterableIterator<string>;

  protected *getClassesByAxis<T>(map: AxisMap<T>, func: (value: T, modifier: string) => string) {
    if (map.x !== undefined) yield func(map.x, 'x');
    if (map.y !== undefined) yield func(map.y, 'y');
  }

  protected *getClassesBySide<T>(map: SideMap<T>, func: (value: T, modifier: string) => string) {
    if (map.top !== undefined) yield func(map.top, 't');
    if (map.right !== undefined) yield func(map.right, 'r');
    if (map.bottom !== undefined) yield func(map.bottom, 'b');
    if (map.left !== undefined) yield func(map.left, 'l');
  }
}
