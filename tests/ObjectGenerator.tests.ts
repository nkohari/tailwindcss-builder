import { ObjectGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new ObjectGenerator());

describe('ObjectGenerator', () => {
  tester.expect({}, []);

  tester.expect({ object: { fit: 'contain' } }, ['object-contain']);
  tester.expect({ object: { fit: 'cover' } }, ['object-cover']);
  tester.expect({ object: { fit: 'fill' } }, ['object-fill']);
  tester.expect({ object: { fit: 'none' } }, ['object-none']);
  tester.expect({ object: { fit: 'scale-down' } }, ['object-scale-down']);

  tester.expect({ object: { position: 'bottom' } }, ['object-bottom']);
  tester.expect({ object: { position: 'center' } }, ['object-center']);
  tester.expect({ object: { position: 'left' } }, ['object-left']);
  tester.expect({ object: { position: 'left-bottom' } }, ['object-left-bottom']);
  tester.expect({ object: { position: 'left-top' } }, ['object-left-top']);
  tester.expect({ object: { position: 'right' } }, ['object-right']);
  tester.expect({ object: { position: 'right-bottom' } }, ['object-right-bottom']);
  tester.expect({ object: { position: 'right-top' } }, ['object-right-top']);
  tester.expect({ object: { position: 'top' } }, ['object-top']);
});
