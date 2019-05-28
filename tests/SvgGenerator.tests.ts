import { SvgGenerator } from '../src/generators';
import { Tester } from './util';

const tester = new Tester(new SvgGenerator());

describe('SvgGenerator', () => {
  tester.expect({}, []);

  tester.expect({ svg: { fill: 'current' } }, ['fill-current']);
  tester.expect({ svg: { stroke: 'current' } }, ['stroke-current']);
});
