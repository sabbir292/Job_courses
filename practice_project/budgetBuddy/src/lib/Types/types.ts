import { budgetFormSchema } from '$lib/schemas/schema';
import { category_table } from '../../db/schema';
import type { z } from 'zod';

export type CategoryInsertType = typeof category_table.$inferInsert;
export type CategorySelectType = typeof category_table.$inferSelect;

export type BudgetFormDataType = z.infer<typeof budgetFormSchema>;
export type BudgetFormErrorsType = Partial<Record<keyof BudgetFormDataType, string>>;
export type BudgetfieldNameType =
	| 'name'
	| 'description'
	| 'amount'
	| 'budgetType'
	| 'category'
	| 'startDate'
	| 'endDate';
