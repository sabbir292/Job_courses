<script lang="ts">
	import { enhance } from '$app/forms';
	import { BudgetForm, InputForm } from '$components';
	import type { BudgetInputProps } from '$components/Form/InputForm.svelte';

	let { form } = $props();
	$inspect(form);
	console.log(form);

	let budgetFormInputs: BudgetInputProps[] = [
		{
			fieldName: 'name',
			label: 'Name of the budget',
			inputType: 'text',
			placeholder: 'budget name'
		},
		{
			fieldName: 'description',
			label: 'budget description',
			inputType: 'text',
			placeholder: 'budget description'
		},
		{
			fieldName: 'amount',
			label: 'budget amount',
			inputType: 'number',
			placeholder: 'enter budget amount'
		},
		{
			fieldName: 'budgetType',
			label: 'select budget type',
			isSelect: true,
			options: [
				{
					name: 'EXPENSE',
					value: 'EXPENSE'
				},
				{
					name: 'INCOME',
					value: 'INCOME'
				}
			]
		},
		{
			fieldName: 'category',
			label: 'select budget category',
			isSelect: true,
			options: [
				{
					name: 'personal',
					value: 1,
					budgetType: 'EXPENSE'
				},
				{
					name: 'shopping',
					value: 2,
					budgetType: 'EXPENSE'
				},
				{
					name: 'education',
					value: 3,
					budgetType: 'EXPENSE'
				}
			]
		},
		{
			fieldName: 'startDate',
			label: 'Select start date',
			inputType: 'date'
		},
		{
			fieldName: 'endDate',
			label: 'Select end date',
			inputType: 'date'
		}
	];

	// Properly typed input pairs array
	type InputPair = [BudgetInputProps] | [BudgetInputProps, BudgetInputProps];
	const inputPairs: InputPair[] = [];

	// Group inputs into pairs for two-column layout
	for (let i = 0; i < budgetFormInputs.length; i += 2) {
		if (i + 1 < budgetFormInputs.length) {
			// If we have a pair
			inputPairs.push([budgetFormInputs[i], budgetFormInputs[i + 1]]);
		} else {
			// If we have a single input at the end
			inputPairs.push([budgetFormInputs[i]]);
		}
	}
</script>

<section class="p-6">
	<div class="rounded-lg bg-gray-100 p-6 shadow-md">
		<h2 class="mb-6 text-2xl font-bold text-gray-800">Create New Budget</h2>

		<form method="POST" action="?/createBudget" use:enhance>
			<div class="flex flex-col space-y-6">
				{#each inputPairs as pair, pairIndex}
					<div class="flex flex-col md:flex-row md:space-x-6">
						{#each pair as input, inputIndex}
							<div class="mb-4 flex-1 md:mb-0">
								<InputForm
									fieldName={input.fieldName}
									inputType={input.inputType}
									label={input.label}
									placeholder={input.placeholder}
									options={input.options}
									isSelect={input.isSelect}
								/>
							</div>
						{/each}

						<!-- Add an empty div for single inputs to maintain alignment -->
						{#if pair.length === 1}
							<div class="hidden flex-1 md:block"></div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="mt-8">
				<button
					type="submit"
					class="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
				>
					Create Budget
				</button>
			</div>
		</form>
	</div>
</section>
