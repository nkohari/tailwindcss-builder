import { FloatGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new FloatGenerator());

describe('FloatGenerator', () => {
  tester.expect({}, []);

  tester.expect({ float: 'left' }, ['float-left']);
  tester.expect({ float: 'right' }, ['float-right']);
  tester.expect({ float: 'none' }, ['float-none']);
  tester.expect({ float: 'clearfix' }, ['clearfix']);
});
