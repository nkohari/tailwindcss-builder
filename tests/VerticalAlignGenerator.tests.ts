import { VerticalAlignGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new VerticalAlignGenerator());

describe('VerticalAlignGenerator', () => {
  tester.expect({}, []);

  tester.expect({ verticalAlign: 'baseline' }, ['align-baseline']);
  tester.expect({ verticalAlign: 'top' }, ['align-top']);
  tester.expect({ verticalAlign: 'middle' }, ['align-middle']);
  tester.expect({ verticalAlign: 'bottom' }, ['align-bottom']);
  tester.expect({ verticalAlign: 'text-top' }, ['align-text-top']);
  tester.expect({ verticalAlign: 'text-bottom' }, ['align-text-bottom']);
});
