import { PaddingGenerator } from '../src/generators';
import { SidePrefixes, SpacingValues, Tester } from './util';

const tester = new Tester(new PaddingGenerator());

describe('PaddingGenerator', () => {
  tester.expect({}, []);

  for (const padding of SpacingValues) {
    tester.expect({ padding }, [`p-${padding}`]);
  }

  for (const value of SpacingValues) {
    tester.expect({ padding: { x: value } }, [`px-${value}`]);
  }

  for (const value of SpacingValues) {
    tester.expect({ padding: { y: value } }, [`py-${value}`]);
  }

  for (const value of SpacingValues) {
    tester.expect({ padding: { x: value, y: value } }, [`px-${value}`, `py-${value}`]);
  }

  for (const [side, modifier] of SidePrefixes) {
    for (const value of SpacingValues) {
      tester.expect({ padding: { [side]: value } }, [`p${modifier}-${value}`]);
    }
  }
});
