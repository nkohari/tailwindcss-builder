import { Generator } from '../../src/generators/Generator';
import { ConfigVariant } from '../../src/config';

export class Tester<T extends Generator> {
  generator: T;

  constructor(generator: T) {
    this.generator = generator;
  }

  getClasses(config: ConfigVariant) {
    return this.generator.getClasses(config);
  }

  expect(config: ConfigVariant, expectedClasses: string[]) {
    it(`should return ${JSON.stringify(expectedClasses)} for ${JSON.stringify(config)}`, () => {
      const result = this.getClasses(config);
      expect(new Set(result)).toEqual(new Set(expectedClasses));
    });
  }
}
