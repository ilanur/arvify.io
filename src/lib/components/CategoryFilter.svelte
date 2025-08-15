<script>
	import { Filter } from 'lucide-svelte';

	let { categories, selectedCategory = $bindable() } = $props();

	// Funzione per pulire il nome della categoria
	/**
	 * @param {string} category
	 */
	function cleanCategoryName(category) {
		if (category === 'all') return 'All Categories';
		return category.replace(/^[^\s]+ /, ''); // Rimuove l'emoji e lo spazio
	}
</script>

<div class="flex flex-col space-y-3">
	<div class="flex items-center space-x-2 text-sm font-medium text-gray-700">
		<Filter class="h-4 w-4" />
		<span>Filter by Category</span>
	</div>

	<div class="flex flex-wrap gap-2">
		{#each categories as category}
			<button
				class="category-pill {selectedCategory === category ? 'active' : ''}"
				onclick={() => (selectedCategory = category)}
			>
				{cleanCategoryName(category)}
			</button>
		{/each}
	</div>
</div>
