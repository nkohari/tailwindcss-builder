import { PointerEventsGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new PointerEventsGenerator());

describe('PointerEventsGenerator', () => {
  tester.expect({}, []);

  tester.expect({ pointerEvents: 'none' }, ['pointer-events-none']);
  tester.expect({ pointerEvents: 'auto' }, ['pointer-events-auto']);
});
