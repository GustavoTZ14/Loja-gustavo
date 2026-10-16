#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/2ee2080482b059bf5a375cd35e9b7e1848ba99b6cc806376ea681605cc793c93/contract';
import endContract from '../../snapshots/2ee2080482b059bf5a375cd35e9b7e1848ba99b6cc806376ea681605cc793c93/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/511590e634157d58b9ed2329a46ddf75e37e59da4f56074b6294ff7d8ed34d21/contract';
import startContract from '../../snapshots/511590e634157d58b9ed2329a46ddf75e37e59da4f56074b6294ff7d8ed34d21/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  col,
  fn,
  lit,
  placeholder,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropColumn({ schema: 'public', table: 'user', column: 'emailVerified' }),
      this.dropTable({ schema: 'public', table: 'verification' }),
      this.createTable({
        schema: 'public',
        table: 'OrderStatus',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('isActive', 'bool', {
            notNull: true,
            default: lit(true),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'cadastro',
        columns: [
          col('city', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('country', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('line1', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('nameComplete', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('number', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('phone', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('postal_code', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('state', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'order',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('quantity', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('statusId', 'int4', {
            notNull: true,
            default: lit(1),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('userId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'product',
        columns: [
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('modelo', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('price', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('quantity', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('sku', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.dataTransform(endContract, 'typechange-account-id', {
        check: () => placeholder('typechange-account-id:check'),
        run: () => placeholder('typechange-account-id:run'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'account',
        column: 'id',
        options: {
          qualifiedTargetType: 'int4',
          formatTypeExpected: 'integer',
          rawTargetTypeForLabel: 'int4',
        },
      }),
      this.dataTransform(endContract, 'typechange-account-userId', {
        check: () => placeholder('typechange-account-userId:check'),
        run: () => placeholder('typechange-account-userId:run'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'account',
        column: 'userId',
        options: {
          qualifiedTargetType: 'int4',
          formatTypeExpected: 'integer',
          rawTargetTypeForLabel: 'int4',
        },
      }),
      this.dataTransform(endContract, 'typechange-session-id', {
        check: () => placeholder('typechange-session-id:check'),
        run: () => placeholder('typechange-session-id:run'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'session',
        column: 'id',
        options: {
          qualifiedTargetType: 'int4',
          formatTypeExpected: 'integer',
          rawTargetTypeForLabel: 'int4',
        },
      }),
      this.dataTransform(endContract, 'typechange-session-userId', {
        check: () => placeholder('typechange-session-userId:check'),
        run: () => placeholder('typechange-session-userId:run'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'session',
        column: 'userId',
        options: {
          qualifiedTargetType: 'int4',
          formatTypeExpected: 'integer',
          rawTargetTypeForLabel: 'int4',
        },
      }),
      this.dataTransform(endContract, 'typechange-user-id', {
        check: () => placeholder('typechange-user-id:check'),
        run: () => placeholder('typechange-user-id:run'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'user',
        column: 'id',
        options: {
          qualifiedTargetType: 'int4',
          formatTypeExpected: 'integer',
          rawTargetTypeForLabel: 'int4',
        },
      }),
      this.setDefault({
        schema: 'public',
        table: 'account',
        column: col('createdAt', 'timestamptz', {
          default: fn('now()'),
          codecRef: { codecId: 'pg/timestamptz-string@1' },
        }),
      }),
      this.setDefault({
        schema: 'public',
        table: 'session',
        column: col('createdAt', 'timestamptz', {
          default: fn('now()'),
          codecRef: { codecId: 'pg/timestamptz-string@1' },
        }),
      }),
      this.setDefault({
        schema: 'public',
        table: 'user',
        column: col('createdAt', 'timestamptz', {
          default: fn('now()'),
          codecRef: { codecId: 'pg/timestamptz-string@1' },
        }),
      }),
      this.addUnique({
        schema: 'public',
        table: 'OrderStatus',
        constraint: 'OrderStatus_title_key',
        columns: ['title'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'cadastro',
        constraint: 'cadastro_userId_key',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'order',
        index: 'order_statusId_idx_e5a44bce',
        columns: ['statusId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'order',
        index: 'order_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'cadastro',
        foreignKey: {
          name: 'cadastro_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'order',
        foreignKey: {
          name: 'order_statusId_fkey',
          columns: ['statusId'],
          references: { schema: 'public', table: 'OrderStatus', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'order',
        foreignKey: {
          name: 'order_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
