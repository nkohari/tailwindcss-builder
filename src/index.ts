import * as generatorClasses from './generators';
import { Generator } from './generators/Generator';
import { generateClasses } from './generateClasses';
import { Config } from './config';

const generators: Generator[] = Object.keys(generatorClasses).map(name => {
  return new (generatorClasses as any)[name]();
});

function getClassName(config: Config): string {
  return [...generateClasses(generators, config)].join(' ');
}

export * from './config';
export * from './generators';
export * from './generators/Generator';
export * from './generateClasses';
export default getClassName;
