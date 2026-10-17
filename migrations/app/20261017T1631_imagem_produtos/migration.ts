#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/2ee2080482b059bf5a375cd35e9b7e1848ba99b6cc806376ea681605cc793c93/contract';
import startContract from '../../snapshots/2ee2080482b059bf5a375cd35e9b7e1848ba99b6cc806376ea681605cc793c93/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/e1f40801d050cda0db52214c3b7e6b80c0741da629f1baa99651684d1e4d5b45/contract';
import endContract from '../../snapshots/e1f40801d050cda0db52214c3b7e6b80c0741da629f1baa99651684d1e4d5b45/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'product',
        column: col('imagem', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
