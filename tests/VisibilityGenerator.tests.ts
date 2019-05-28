import { VisibilityGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new VisibilityGenerator());

describe('VisibilityGenerator', () => {
  tester.expect({}, []);

  tester.expect({ visibility: 'visible' }, ['visible']);
  tester.expect({ visibility: 'hidden' }, ['invisible']);
});
