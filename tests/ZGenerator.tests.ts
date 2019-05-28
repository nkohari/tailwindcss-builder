import { ZGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new ZGenerator());

describe('ZGenerator', () => {
  tester.expect({}, []);

  tester.expect({ z: 0 }, ['z-0']);
  tester.expect({ z: 10 }, ['z-10']);
  tester.expect({ z: 20 }, ['z-20']);
  tester.expect({ z: 30 }, ['z-30']);
  tester.expect({ z: 40 }, ['z-40']);
  tester.expect({ z: 50 }, ['z-50']);
  tester.expect({ z: 'auto' }, ['z-auto']);
});
