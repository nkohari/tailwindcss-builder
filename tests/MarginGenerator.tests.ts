import { MarginGenerator } from '../src/generators';
import { SidePrefixes, NegativeSpacingValues, SpacingValues, Tester } from './util';

const tester = new Tester(new MarginGenerator());

describe('MarginGenerator', () => {
  tester.expect({}, []);

  for (const margin of SpacingValues) {
    tester.expect({ margin }, [`m-${margin}`]);
  }

  for (const margin of NegativeSpacingValues) {
    tester.expect({ margin }, [`-m-${margin}`]);
  }

  for (const value of SpacingValues) {
    tester.expect({ margin: { x: value } }, [`mx-${value}`]);
  }

  for (const value of NegativeSpacingValues) {
    tester.expect({ margin: { x: value } }, [`-mx-${value}`]);
  }

  for (const value of SpacingValues) {
    tester.expect({ margin: { y: value } }, [`my-${value}`]);
  }

  for (const value of NegativeSpacingValues) {
    tester.expect({ margin: { y: value } }, [`-my-${value}`]);
  }

  for (const value of SpacingValues) {
    tester.expect({ margin: { x: value, y: value } }, [`mx-${value}`, `my-${value}`]);
  }

  for (const value of NegativeSpacingValues) {
    tester.expect({ margin: { x: value, y: value } }, [`-mx-${value}`, `-my-${value}`]);
  }

  for (const side of SidePrefixes) {
    const [name, modifier] = side;
    for (const value of SpacingValues) {
      tester.expect({ margin: { [name]: value } }, [`m${modifier}-${value}`]);
    }
    for (const value of NegativeSpacingValues) {
      tester.expect({ margin: { [name]: value } }, [`-m${modifier}-${value}`]);
    }
  }
});
