import { ResizeGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new ResizeGenerator());

describe('ResizeGenerator', () => {
  tester.expect({}, []);

  tester.expect({ resize: true }, ['resize']);
  tester.expect({ resize: 'resize' }, ['resize']);

  tester.expect({ resize: 'none' }, ['resize-none']);
  tester.expect({ resize: 'x' }, ['resize-x']);
  tester.expect({ resize: 'y' }, ['resize-y']);
});
