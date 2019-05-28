import { OpacityGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new OpacityGenerator());

describe('OpacityGenerator', () => {
  tester.expect({}, []);

  tester.expect({ opacity: 0 }, ['opacity-0']);
  tester.expect({ opacity: 25 }, ['opacity-25']);
  tester.expect({ opacity: 50 }, ['opacity-50']);
  tester.expect({ opacity: 75 }, ['opacity-75']);
  tester.expect({ opacity: 100 }, ['opacity-100']);
});
