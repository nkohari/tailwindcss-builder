import { BorderGenerator } from '../src/generators';
import { Colors, SidePrefixes, Tester } from './util';

const tester = new Tester(new BorderGenerator());

describe('BorderGenerator', () => {
  tester.expect({}, []);

  for (const color of Colors) {
    tester.expect({ border: { color } }, [`border-${color}`]);
  }

  tester.expect({ border: { collapse: 'collapse' } }, ['border-collapse']);
  tester.expect({ border: { collapse: 'separate' } }, ['border-separate']);

  tester.expect({ border: { radius: 'none' } }, ['rounded-none']);
  tester.expect({ border: { radius: 'sm' } }, ['rounded-sm']);
  tester.expect({ border: { radius: 'rounded' } }, ['rounded']);
  tester.expect({ border: { radius: 'lg' } }, ['rounded-lg']);
  tester.expect({ border: { radius: 'full' } }, ['rounded-full']);

  for (const [side, modifier] of SidePrefixes) {
    tester.expect({ border: { radius: { [side]: 'none' } } }, [`rounded-${modifier}-none`]);
    tester.expect({ border: { radius: { [side]: 'sm' } } }, [`rounded-${modifier}-sm`]);
    tester.expect({ border: { radius: { [side]: 'rounded' } } }, [`rounded-${modifier}`]);
    tester.expect({ border: { radius: { [side]: 'lg' } } }, [`rounded-${modifier}-lg`]);
    tester.expect({ border: { radius: { [side]: 'full' } } }, [`rounded-${modifier}-full`]);
  }

  tester.expect({ border: { style: 'solid' } }, ['border-solid']);
  tester.expect({ border: { style: 'dashed' } }, ['border-dashed']);
  tester.expect({ border: { style: 'dotted' } }, ['border-dotted']);
  tester.expect({ border: { style: 'none' } }, ['border-none']);

  tester.expect({ border: { width: 0 } }, ['border-0']);
  tester.expect({ border: { width: 1 } }, ['border']);
  tester.expect({ border: { width: 2 } }, ['border-2']);
  tester.expect({ border: { width: 4 } }, ['border-4']);
  tester.expect({ border: { width: 8 } }, ['border-8']);

  for (const [side, modifier] of SidePrefixes) {
    tester.expect({ border: { width: { [side]: 0 } } }, [`border-${modifier}-0`]);
    tester.expect({ border: { width: { [side]: 1 } } }, [`border-${modifier}`]);
    tester.expect({ border: { width: { [side]: 2 } } }, [`border-${modifier}-2`]);
    tester.expect({ border: { width: { [side]: 4 } } }, [`border-${modifier}-4`]);
    tester.expect({ border: { width: { [side]: 8 } } }, [`border-${modifier}-8`]);
  }
});
