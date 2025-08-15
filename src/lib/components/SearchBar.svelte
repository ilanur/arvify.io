<script>
	import { Search } from 'lucide-svelte';

	let { searchQuery = $bindable() } = $props();
</script>

<div class="relative">
	<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
		<Search class="h-5 w-5 text-gray-400" />
	</div>
	<input
		type="text"
		bind:value={searchQuery}
		placeholder="Search servers by name, description, or features..."
		class="search-input pl-10"
	/>
</div>
