import { OutlineGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new OutlineGenerator());

describe('OutlineGenerator', () => {
  tester.expect({}, []);

  tester.expect({ outline: 'none' }, ['outline-none']);
});
