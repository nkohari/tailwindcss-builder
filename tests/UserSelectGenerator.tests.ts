import { UserSelectGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new UserSelectGenerator());

describe('UserSelectGenerator', () => {
  tester.expect({}, []);

  tester.expect({ userSelect: false }, ['select-none']);
  tester.expect({ userSelect: 'none' }, ['select-none']);

  tester.expect({ userSelect: 'text' }, ['select-text']);
  tester.expect({ userSelect: 'all' }, ['select-all']);
  tester.expect({ userSelect: 'auto' }, ['select-auto']);
});
