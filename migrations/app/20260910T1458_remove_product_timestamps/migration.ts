#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/80003a59f7ea102da1c1bdc6ee2c5d891d36b9f9fc61c4c4cb1efa8e96aa6099/contract';
import startContract from '../../snapshots/80003a59f7ea102da1c1bdc6ee2c5d891d36b9f9fc61c4c4cb1efa8e96aa6099/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/dcb58f7483358f5b653a76f71c6643d3f5b802fb2d9b54741ebcc0bddf0eb761/contract';
import endContract from '../../snapshots/dcb58f7483358f5b653a76f71c6643d3f5b802fb2d9b54741ebcc0bddf0eb761/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropColumn({ schema: 'public', table: 'Product', column: 'createdAt' }),
      this.dropColumn({ schema: 'public', table: 'Product', column: 'updatedAt' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
