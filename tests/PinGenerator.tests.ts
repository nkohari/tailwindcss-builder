import { PinGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new PinGenerator());

describe('PinGenerator', () => {
  tester.expect({}, []);

  tester.expect({ pin: 'top' }, ['top-0']);
  tester.expect({ pin: 'bottom' }, ['bottom-0']);
  tester.expect({ pin: 'left' }, ['left-0']);
  tester.expect({ pin: 'right' }, ['right-0']);
  tester.expect({ pin: 'inset-y' }, ['inset-y-0']);
  tester.expect({ pin: 'inset-x' }, ['inset-x-0']);
  tester.expect({ pin: 'inset-auto' }, ['inset-auto']);

  tester.expect({ pin: ['top', 'inset-x'] }, ['top-0', 'inset-x-0']);
});
