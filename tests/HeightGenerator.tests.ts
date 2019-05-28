import { HeightGenerator } from '../src/generators';
import { SizeValues, Tester } from './util';

const tester = new Tester(new HeightGenerator());

describe('HeightGenerator', () => {
  tester.expect({}, []);

  for (const height of SizeValues) {
    tester.expect({ height }, [`h-${height}`]);
    tester.expect({ height: { value: height } }, [`h-${height}`]);
  }

  tester.expect({ height: { min: 0 } }, ['min-h-0']);
  tester.expect({ height: { min: 'full' } }, ['min-h-full']);
  tester.expect({ height: { min: 'screen' } }, ['min-h-screen']);

  tester.expect({ height: { max: 'full' } }, ['max-h-full']);
  tester.expect({ height: { max: 'screen' } }, ['max-h-screen']);
});
