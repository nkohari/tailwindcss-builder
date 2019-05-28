import { AppearanceGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new AppearanceGenerator());

describe('AppearanceGenerator', () => {
  tester.expect({}, []);

  tester.expect({ appearance: 'none' }, ['appearance-none']);
});
