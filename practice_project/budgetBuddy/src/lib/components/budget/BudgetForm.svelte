<script lang="ts">
	import { Datepicker, Select, Label, Button, Input } from 'flowbite-svelte';
	import { enhance } from '$app/forms';
	let selectedStartDate = $state<Date | undefined>(undefined);
	let selectedEndDate = $state<Date | undefined>(undefined);
	let defaultCategory = $state('personal');
	let defaultType = $state('EXPENSE');

	let budgets = [
		{ value: 'shopping', name: 'Shopping' },
		{ value: 'personal', name: 'Personal', disabled: true },
		{ value: 'study', name: 'Studies' }
	];

	$effect(() => {
		console.log(defaultCategory, selectedStartDate, selectedEndDate);
	});
</script>

<section class="min-h-[100vh] bg-gray-600 py-12">
	<form
		use:enhance
		method="POST"
		action="?/createCategory"
		class="mx-auto w-full max-w-2xl space-y-6 px-4"
	>
		<label for="name">
			<input
				class="my-4 block w-full"
				type="text"
				name="name"
				id="name"
				placeholder="Budget name"
				required
			/>
		</label>
		<label for="description">
			<input
				class="my-4 block w-full"
				type="text"
				name="description"
				id="description"
				placeholder="Budget description"
			/>
		</label>
		<label for="amount">
			<input
				class="my-4 block w-full"
				type="number"
				name="amount"
				id="amount"
				placeholder="Enter budget amount"
			/>
		</label>
		<label for="type" class="block text-white">Select Budegt Type </label>
		<select
			name="budgetType"
			id="type"
			required
			class="w-full rounded p-2"
			bind:value={defaultType}
		>
			<option disabled selected value={defaultType}>Expense</option>
		</select>
		<label for="category" class="block text-white"> Select A category </label>
		<select
			name="category"
			id="category"
			required
			class="w-full rounded p-2"
			bind:value={defaultCategory}
		>
			<option disabled selected value="">Select a category</option>
			{#each budgets as budget}
				<option value={budget.value} disabled={budget.disabled}>{budget.name}</option>
			{/each}
		</select>

		<label for="startDate" class="text-white"> Start date </label>
		<input
			class="my-4 block w-full"
			type="date"
			name="startDate"
			id="startDate"
			placeholder="Enter start date"
		/>
		<label for="endtDate" class="text-white">End Date </label>

		<input class="my-4 block w-full" type="date" name="endtDate" id="endtDate" />
		<Button class="w-full text-white" type="submit" outline color="dark">Submit</Button>
	</form>
</section>
