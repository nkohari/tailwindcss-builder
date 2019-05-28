import { BackgroundGenerator } from '../src/generators';
import { Colors, Tester } from './util';

const tester = new Tester(new BackgroundGenerator());

describe('BackgroundGenerator', () => {
  tester.expect({}, []);

  tester.expect({ background: { attachment: 'fixed' } }, ['bg-fixed']);
  tester.expect({ background: { attachment: 'local' } }, ['bg-local']);
  tester.expect({ background: { attachment: 'scroll' } }, ['bg-scroll']);

  for (const color of Colors) {
    tester.expect({ background: { color } }, [`bg-${color}`]);
  }

  tester.expect({ background: { position: 'bottom' } }, ['bg-bottom']);
  tester.expect({ background: { position: 'center' } }, ['bg-center']);
  tester.expect({ background: { position: 'left' } }, ['bg-left']);
  tester.expect({ background: { position: 'left-bottom' } }, ['bg-left-bottom']);
  tester.expect({ background: { position: 'left-top' } }, ['bg-left-top']);
  tester.expect({ background: { position: 'right' } }, ['bg-right']);
  tester.expect({ background: { position: 'right-bottom' } }, ['bg-right-bottom']);
  tester.expect({ background: { position: 'right-top' } }, ['bg-right-top']);
  tester.expect({ background: { position: 'top' } }, ['bg-top']);

  tester.expect({ background: { repeat: 'no-repeat' } }, ['bg-no-repeat']);
  tester.expect({ background: { repeat: 'repeat' } }, ['bg-repeat']);
  tester.expect({ background: { repeat: 'repeat-round' } }, ['bg-repeat-round']);
  tester.expect({ background: { repeat: 'repeat-space' } }, ['bg-repeat-space']);
  tester.expect({ background: { repeat: 'repeat-x' } }, ['bg-repeat-x']);
  tester.expect({ background: { repeat: 'repeat-y' } }, ['bg-repeat-y']);

  tester.expect({ background: { size: 'auto' } }, ['bg-auto']);
  tester.expect({ background: { size: 'cover' } }, ['bg-cover']);
  tester.expect({ background: { size: 'contain' } }, ['bg-contain']);
});
