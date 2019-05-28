import { OverflowGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new OverflowGenerator());

describe('OverflowGenerator', () => {
  tester.expect({}, []);

  tester.expect({ overflow: 'auto' }, ['overflow-auto']);
  tester.expect({ overflow: 'hidden' }, ['overflow-hidden']);
  tester.expect({ overflow: 'visible' }, ['overflow-visible']);
  tester.expect({ overflow: 'scroll' }, ['overflow-scroll']);

  tester.expect({ overflow: { x: 'auto' } }, ['overflow-x-auto']);
  tester.expect({ overflow: { x: 'hidden' } }, ['overflow-x-hidden']);
  tester.expect({ overflow: { x: 'visible' } }, ['overflow-x-visible']);
  tester.expect({ overflow: { x: 'scroll' } }, ['overflow-x-scroll']);

  tester.expect({ overflow: { y: 'auto' } }, ['overflow-y-auto']);
  tester.expect({ overflow: { y: 'hidden' } }, ['overflow-y-hidden']);
  tester.expect({ overflow: { y: 'visible' } }, ['overflow-y-visible']);
  tester.expect({ overflow: { y: 'scroll' } }, ['overflow-y-scroll']);

  tester.expect({ overflow: { x: 'hidden', y: 'auto' } }, ['overflow-x-hidden', 'overflow-y-auto']);
});
