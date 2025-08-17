<script>
	import { Search, Filter, ExternalLink, Github, Star, Users, Code, Zap } from 'lucide-svelte';
	import McpCard from '$lib/components/McpCard.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import mcpServers from '$lib/mcp-servers.js';
	import { onMount } from 'svelte';

	let filteredServers = $state(mcpServers);
	let selectedCategory = $state('all');
	let searchQuery = $state('');
	let isLoaded = $state(false);

	// Estraggo le categorie uniche
	const categories = ['all', ...new Set(mcpServers.map((server) => server.category))];

	// Funzione per filtrare i server
	function filterServers() {
		let servers = mcpServers;

		// Filtro per categoria
		if (selectedCategory !== 'all') {
			servers = servers.filter((server) => server.category === selectedCategory);
		}

		// Filtro per query di ricerca
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			servers = servers.filter(
				(server) =>
					server.name.toLowerCase().includes(query) ||
					server.description.toLowerCase().includes(query) ||
					server.features.some((feature) => feature.toLowerCase().includes(query))
			);
		}

		filteredServers = servers;
	}

	// Reagisco ai cambiamenti di categoria e ricerca
	$effect(() => {
		filterServers();
	});

	onMount(() => {
		isLoaded = true;
	});

	// Statistiche
	const stats = [
		{
			icon: Code,
			label: 'Total Servers',
			value: mcpServers.length.toString(),
			color: 'primary'
		},
		{
			icon: Users,
			label: 'Categories',
			value: (categories.length - 1).toString(),
			color: 'emerald'
		},
		{
			icon: Star,
			label: 'Featured',
			value: mcpServers.filter((s) => s.badges.includes('🎖️')).length.toString(),
			color: 'amber'
		},
		{
			icon: Zap,
			label: 'Cloud Ready',
			value: mcpServers.filter((s) => s.badges.includes('☁️')).length.toString(),
			color: 'blue'
		}
	];
</script>

<svelte:head>
	<title>MCP Servers Showcase - Discover Amazing Model Context Protocol Servers</title>
	<meta
		name="description"
		content="Explore a curated collection of Model Context Protocol (MCP) servers. Find tools for databases, cloud platforms, AI, development, and more."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
	<!-- Navigation -->
	<Navigation showCTA={false} />

	<!-- Hero Section -->
	<Hero />

	<!-- Stats Section -->
	<section class="py-16 bg-white/80 backdrop-blur-sm">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each stats as stat}
					<StatsCard
						icon={stat.icon}
						label={stat.label}
						value={stat.value}
						color={stat.color}
						class="animate-slide-up"
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- Filters and Search -->
	<section class="py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
				<div class="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
					<!-- Search Bar -->
					<div class="flex-1 w-full">
						<SearchBar bind:searchQuery />
					</div>

					<!-- Category Filter -->
					<div class="w-full lg:w-auto">
						<CategoryFilter {categories} bind:selectedCategory />
					</div>
				</div>

				<!-- Results Count -->
				<div class="mt-6 text-sm text-gray-600">
					Showing <span class="font-semibold text-gray-900">{filteredServers.length}</span>
					{filteredServers.length === 1 ? 'server' : 'servers'}
					{#if selectedCategory !== 'all' || searchQuery.trim()}
						{#if selectedCategory !== 'all'}
							in <span class="font-semibold">{selectedCategory}</span>
						{/if}
						{#if searchQuery.trim()}
							matching "<span class="font-semibold">{searchQuery}</span>"
						{/if}
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- MCP Servers Grid -->
	<section class="pb-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{#if filteredServers.length === 0}
				<div class="text-center py-20">
					<Search class="mx-auto h-16 w-16 text-gray-400 mb-6" />
					<h3 class="text-xl font-semibold text-gray-900 mb-2">No servers found</h3>
					<p class="text-gray-600 max-w-md mx-auto">
						Try adjusting your search criteria or browse all categories to discover amazing MCP
						servers.
					</p>
					<button
						class="btn-primary mt-6"
						onclick={() => {
							selectedCategory = 'all';
							searchQuery = '';
						}}
					>
						Clear Filters
					</button>
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each filteredServers as server, i}
						<div class="animate-slide-up" style="animation-delay: {Math.min(i * 50, 500)}ms">
							<McpCard {server} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-900 text-white py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<div class="flex items-center justify-center space-x-2 mb-4">
					<Code class="h-6 w-6 text-primary-400" />
					<span class="text-xl font-bold">MCP Servers Showcase</span>
				</div>
				<p class="text-gray-400 max-w-2xl mx-auto mb-6">
					Una collezione curata di server Model Context Protocol per espandere le capacità dei tuoi
					LLM. Progetto open source creato con ❤️ da Emanuele Iurilli.
				</p>
				<div class="flex items-center justify-center space-x-6">
					<a
						href="https://github.com/ilanur/mcp-list"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
					>
						<Github class="h-5 w-5" />
						<span>Repository del Progetto</span>
						<ExternalLink class="h-4 w-4" />
					</a>
					<a
						href="https://github.com/punkpeye/awesome-mcp-servers"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
					>
						<Github class="h-5 w-5" />
						<span>Fonte Dati</span>
						<ExternalLink class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
