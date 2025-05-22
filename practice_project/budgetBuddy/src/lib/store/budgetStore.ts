import type { BudgetFormDataType, BudgetFormErrorsType } from '$lib/Types/types';
import { writable } from 'svelte/store';

export const budgetFormDataStore = writable<Partial<BudgetFormDataType>>({});
export const budgetFormErrorStore = writable<BudgetFormErrorsType>({});
export const isValidating = writable(false);
