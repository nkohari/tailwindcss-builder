import { WidthGenerator } from '../src/generators';
import { SizeValues, Tester } from './util';

const tester = new Tester(new WidthGenerator());

describe('WidthGenerator', () => {
  tester.expect({}, []);

  for (const width of SizeValues) {
    tester.expect({ width }, [`w-${width}`]);
    tester.expect({ width: { value: width } }, [`w-${width}`]);
  }

  tester.expect({ width: { min: 0 } }, ['min-w-0']);
  tester.expect({ width: { min: 'full' } }, ['min-w-full']);

  tester.expect({ width: { max: 'xs' } }, ['max-w-xs']);
  tester.expect({ width: { max: 'sm' } }, ['max-w-sm']);
  tester.expect({ width: { max: 'md' } }, ['max-w-md']);
  tester.expect({ width: { max: 'lg' } }, ['max-w-lg']);
  tester.expect({ width: { max: 'xl' } }, ['max-w-xl']);
  tester.expect({ width: { max: '2xl' } }, ['max-w-2xl']);
  tester.expect({ width: { max: '3xl' } }, ['max-w-3xl']);
  tester.expect({ width: { max: '4xl' } }, ['max-w-4xl']);
  tester.expect({ width: { max: '5xl' } }, ['max-w-5xl']);
  tester.expect({ width: { max: '6xl' } }, ['max-w-6xl']);
});
