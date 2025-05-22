import { setContext, getContext } from 'svelte';
import { budgetFormDataStore, budgetFormErrorStore, isValidating } from '$lib/store/budgetStore';
import type { BudgetfieldNameType } from '$lib/Types/types';
const BUDGET_CONTEXT_KEY = Symbol('budget_form');

export const setBudgetFormContext = () => {
	const context = {
		budgetFormDataStore,
		budgetFormErrorStore,
		isValidating,

		updateField: (fieldName: BudgetfieldNameType, value: string | number | Date) => {
			budgetFormDataStore.update((data) => ({ ...data, [fieldName]: value }));
		},
		updateError: (fieldName: BudgetfieldNameType, error: string) => {
			budgetFormErrorStore.update((errors) => ({ ...errors, [fieldName]: error }));
		},
		clearError: (fieldName: BudgetfieldNameType) => {
			budgetFormErrorStore.update((errors) => {
				const newErrors = { ...errors };
				delete newErrors[fieldName];
				return newErrors;
			});
		}
	};
	setContext(BUDGET_CONTEXT_KEY, context);
	return context;
};

export const getBudgetFormContext = () => {
	return getContext(BUDGET_CONTEXT_KEY);
};
