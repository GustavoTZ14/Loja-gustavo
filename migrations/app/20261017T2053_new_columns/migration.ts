#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/122e314c0cd224718509eb294571a142b6ea0950e8862a1af2bd7892f9e86a4b/contract';
import endContract from '../../snapshots/122e314c0cd224718509eb294571a142b6ea0950e8862a1af2bd7892f9e86a4b/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/e1f40801d050cda0db52214c3b7e6b80c0741da629f1baa99651684d1e4d5b45/contract';
import startContract from '../../snapshots/e1f40801d050cda0db52214c3b7e6b80c0741da629f1baa99651684d1e4d5b45/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, lit } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'product',
        column: col('assorted', 'bool', {
          notNull: true,
          default: lit(true),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'product',
        column: col('brand', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'product',
        column: col('size', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
