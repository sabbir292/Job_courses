<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header>
	<nav class="border-gray-200 bg-white px-4 py-2.5 lg:px-12 dark:bg-gray-800">
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
			<a href="/" class="flex items-center">
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Budget Buddy</span
				>
			</a>
			<div
				class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
				id="mobile-menu-2"
			>
				<ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
					<li>
						<a
							href="/categories"
							class="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white lg:bg-transparent lg:p-0 dark:text-white"
							aria-current="page">Categories</a
						>
					</li>
					<li>
						<a
							href="/transactions"
							class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
							>Transactions</a
						>
					</li>
					<li>
						<a
							href="/budgets"
							class="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
							>Budget</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

{@render children()}
