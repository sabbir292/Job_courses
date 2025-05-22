import {
	date,
	int,
	mysqlEnum,
	mysqlTable,
	serial,
	varchar,
	timestamp
} from 'drizzle-orm/mysql-core';

export const category_table = mysqlTable('categories', {
	id: serial().primaryKey(),
	name: varchar({ length: 255 }).unique().notNull(),
	category_type: mysqlEnum(['EXPENSE', 'INCOME']).notNull(),
	createdAt: timestamp().defaultNow(),
	updatedAt: timestamp().$onUpdate(() => new Date())
});
export const budget_table = mysqlTable('budgets', {
	id: serial().primaryKey(),
	amount: int().notNull(),
	name: varchar({ length: 255 }).notNull().unique(),
	description: varchar({ length: 255 }).notNull(),
	startDate: date().notNull(),
	endDate: date().notNull(),
	createdAt: timestamp().defaultNow(),
	budget_type: mysqlEnum(['EXPENSE']).notNull(),
	category_id: serial().references(() => category_table.id)
});
export const transaction_table = mysqlTable('transactions', {
	id: serial().primaryKey(),
	amount: int().notNull(),
	description: varchar({ length: 255 }).notNull(),
	transactionDate: date().$defaultFn(() => new Date()),
	transaction_type: mysqlEnum(['EXPENSE', 'INCOME']).notNull(),
	transaction_category: int()
		.notNull()
		.references(() => category_table.id),
	budget: serial().references(() => budget_table.id),
	createdAt: timestamp().defaultNow(),
	updatedAt: timestamp().$onUpdate(() => new Date())
});
