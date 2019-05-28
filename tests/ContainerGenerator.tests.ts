import { ContainerGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new ContainerGenerator());

describe('ContainerGenerator', () => {
  tester.expect({}, []);

  tester.expect({ container: false }, []);
  tester.expect({ container: true }, ['container']);
});
