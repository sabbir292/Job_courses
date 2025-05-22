<!-- BudgetInput.svelte -->
<script lang="ts">
	import type { BudgetfieldNameType } from '$lib/Types/types';
	type InputType = 'text' | 'number' | 'date';
	type BudgetTypeEnum = 'EXPENSE' | 'INCOME';

	type BudgetTypeOptionType = {
		value: BudgetTypeEnum;
		name: BudgetTypeEnum;
	}[];
	type BudgetOptionType = {
		value: number;
		name: string;
		budgetType?: 'EXPENSE' | 'INCOME';
	}[];
	export type BudgetInputProps = {
		fieldName: BudgetfieldNameType;
		label: string;
		placeholder?: string;
		inputType?: InputType;
		options?: BudgetOptionType | BudgetTypeOptionType;
		isSelect?: boolean;
		hasError?: boolean;
		errorMessage?: string;
	};

	let {
		fieldName,
		label,
		placeholder,
		inputType,
		options,
		isSelect,
		hasError = false,
		errorMessage = ''
	}: BudgetInputProps = $props();
</script>

<div class="form-group">
	<label class="mb-1 block text-sm font-medium text-gray-600" for={fieldName}>
		{label}
		<span class="text-red-500">*</span>
	</label>

	{#if inputType}
		<input
			class="mb-4 w-full rounded-md border px-4 py-2 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none {hasError
				? 'border-red-300 bg-red-50 text-red-700'
				: 'border-gray-200 bg-white text-gray-700'}"
			type={inputType}
			name={fieldName}
			id={fieldName}
			placeholder={placeholder || `Input Your ${label}`}
			required
		/>
	{/if}

	{#if isSelect && options}
		<select
			name={fieldName}
			id={fieldName}
			class="mb-4 w-full rounded-md border px-4 py-2 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none {hasError
				? 'border-red-300 bg-red-50 text-red-700'
				: 'border-gray-200 bg-white text-gray-700'}"
			required
		>
			<option value="" disabled selected>Select {label}</option>
			{#each options as option}
				<option value={option.value}>{option.name}</option>
			{/each}
		</select>
	{/if}

	{#if hasError && errorMessage}
		<p class="mt-1 text-xs text-red-500">{errorMessage}</p>
	{/if}
</div>
