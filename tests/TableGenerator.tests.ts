import { TableGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new TableGenerator());

describe('TableGenerator', () => {
  tester.expect({}, []);

  tester.expect({ table: 'auto' }, ['table-auto']);
  tester.expect({ table: 'fixed' }, ['table-fixed']);
});
