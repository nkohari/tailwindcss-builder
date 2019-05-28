import { ShadowGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new ShadowGenerator());

describe('ShadowGenerator', () => {
  tester.expect({}, []);

  tester.expect({ shadow: true }, ['shadow']);
  tester.expect({ shadow: 'shadow' }, ['shadow']);

  tester.expect({ shadow: 'md' }, ['shadow-md']);
  tester.expect({ shadow: 'lg' }, ['shadow-lg']);
  tester.expect({ shadow: 'xl' }, ['shadow-xl']);
  tester.expect({ shadow: '2xl' }, ['shadow-2xl']);
  tester.expect({ shadow: 'inner' }, ['shadow-inner']);
  tester.expect({ shadow: 'outline' }, ['shadow-outline']);
  tester.expect({ shadow: 'none' }, ['shadow-none']);
});
