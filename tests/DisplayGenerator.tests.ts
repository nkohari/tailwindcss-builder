import { DisplayGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new DisplayGenerator());

describe('DisplayGenerator', () => {
  tester.expect({}, []);

  tester.expect({ display: 'block' }, ['block']);
  tester.expect({ display: 'inline-block' }, ['inline-block']);
  tester.expect({ display: 'inline' }, ['inline']);
  tester.expect({ display: 'flex' }, ['flex']);
  tester.expect({ display: 'inline-flex' }, ['inline-flex']);
  tester.expect({ display: 'table' }, ['table']);
  tester.expect({ display: 'table-row' }, ['table-row']);
  tester.expect({ display: 'table-cell' }, ['table-cell']);
  tester.expect({ display: 'none' }, ['none']);
});
