import { CursorGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new CursorGenerator());

describe('CursorGenerator', () => {
  tester.expect({}, []);

  tester.expect({ cursor: 'auto' }, ['cursor-auto']);
  tester.expect({ cursor: 'default' }, ['cursor-default']);
  tester.expect({ cursor: 'pointer' }, ['cursor-pointer']);
  tester.expect({ cursor: 'wait' }, ['cursor-wait']);
  tester.expect({ cursor: 'text' }, ['cursor-text']);
  tester.expect({ cursor: 'move' }, ['cursor-move']);
  tester.expect({ cursor: 'not-allowed' }, ['cursor-not-allowed']);
});
