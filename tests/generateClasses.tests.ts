import { generateClasses } from '../src/generateClasses';
import { Config } from '../src/config';
import { TextGenerator, VisibilityGenerator } from '../src/generators';

const generators = [new TextGenerator(), new VisibilityGenerator()];

function test(config: Config, expectedClasses: string[]) {
  it(`should return ${JSON.stringify(expectedClasses)} for ${JSON.stringify(config)}`, () => {
    const result = generateClasses(generators, config);
    expect(new Set(result)).toEqual(new Set(expectedClasses));
  });
}

describe('generateClasses', () => {
  test({}, []);

  describe('responsive variants', () => {
    test(
      {
        sm: { text: { size: 'xl' } },
        lg: { text: { size: 'sm' } },
      },
      ['sm:text-xl', 'lg:text-sm']
    );
  });

  describe('interaction variants', () => {
    test(
      {
        text: { decoration: 'underline' },
        hover: {
          text: { decoration: 'no-underline' },
        },
      },
      ['underline', 'hover:no-underline']
    );
  });

  describe('both responsive and interaction variants', () => {
    test(
      {
        sm: {
          text: { decoration: 'underline' },
          hover: {
            text: { decoration: 'no-underline' },
          },
        },
        lg: {
          text: { decoration: 'underline' },
          hover: {
            text: { decoration: 'line-through' },
          },
        },
      },
      ['sm:underline', 'sm:hover:no-underline', 'lg:underline', 'lg:hover:line-through']
    );
  });
});
