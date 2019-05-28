import { PositionGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new PositionGenerator());

describe('PositionGenerator', () => {
  tester.expect({}, []);

  tester.expect({ position: 'static' }, ['static']);
  tester.expect({ position: 'fixed' }, ['fixed']);
  tester.expect({ position: 'absolute' }, ['absolute']);
  tester.expect({ position: 'relative' }, ['relative']);
  tester.expect({ position: 'sticky' }, ['sticky']);
});
