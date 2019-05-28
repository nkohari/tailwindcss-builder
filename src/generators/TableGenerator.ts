import { ConfigVariant, Table } from '../config';
import { Generator } from './Generator';

export class TableGenerator extends Generator<Table> {
  getOption(config: ConfigVariant) {
    return config.table;
  }

  *getClassesForOption(option: Table) {
    yield `table-${option}`;
  }
}
