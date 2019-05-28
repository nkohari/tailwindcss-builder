import * as generatorClasses from './generators';
import { Generator } from './generators';
import { generateClasses } from './generateClasses';
import { Config } from './config';

const generators: Generator[] = Object.keys(generatorClasses).map(name => {
  return new (generatorClasses as any)[name]();
});

function getClassName(config: Config): string {
  return [...generateClasses(generators, config)].join(' ');
}

export default getClassName;
