<script>
	import { ExternalLink, Github, Star } from 'lucide-svelte';

	let { server } = $props();

	// Funzione per ottenere il colore del badge
	/**
	 * @param {any} badge
	 */
	function getBadgeColor(badge) {
		const colors = {
			'🎖️': 'bg-amber-100 text-amber-800',
			'📇': 'bg-blue-100 text-blue-800',
			'☁️': 'bg-sky-100 text-sky-800',
			'🏠': 'bg-green-100 text-green-800',
			'🍎': 'bg-gray-100 text-gray-800',
			'🪟': 'bg-indigo-100 text-indigo-800',
			'🐧': 'bg-orange-100 text-orange-800',
			'🐍': 'bg-yellow-100 text-yellow-800',
			'🏎️': 'bg-red-100 text-red-800',
			'🦀': 'bg-orange-100 text-orange-800',
			'☕': 'bg-amber-100 text-amber-800',
			'#️⃣': 'bg-purple-100 text-purple-800'
		};
		const badgeKey = String(badge);
		// @ts-ignore
		return badgeKey in colors ? colors[badgeKey] : 'bg-gray-100 text-gray-800';
	}

	// Funzione per ottenere il colore della categoria
	/**
	 * @param {string | number} category
	 */
	function getCategoryColor(category) {
		const colors = {
			'🔗 Aggregators': 'bg-purple-50 border-purple-200',
			'🎨 Art & Culture': 'bg-pink-50 border-pink-200',
			'📂 Browser Automation': 'bg-orange-50 border-orange-200',
			'☁️ Cloud Platforms': 'bg-sky-50 border-sky-200',
			'🗄️ Databases': 'bg-green-50 border-green-200',
			'💻 Developer Tools': 'bg-blue-50 border-blue-200',
			'💰 Finance & Fintech': 'bg-emerald-50 border-emerald-200',
			'🎮 Gaming': 'bg-violet-50 border-violet-200',
			'🧠 Knowledge & Memory': 'bg-indigo-50 border-indigo-200',
			'🗺️ Location Services': 'bg-teal-50 border-teal-200',
			'🎯 Marketing': 'bg-rose-50 border-rose-200',
			'📊 Monitoring': 'bg-cyan-50 border-cyan-200',
			'🔎 Search & Data Extraction': 'bg-amber-50 border-amber-200',
			'🔒 Security': 'bg-red-50 border-red-200',
			'🌐 Social Media': 'bg-blue-50 border-blue-200',
			'🏃 Sports': 'bg-green-50 border-green-200',
			'🎧 Support & Service Management': 'bg-purple-50 border-purple-200',
			'🌎 Translation Services': 'bg-teal-50 border-teal-200',
			'🚆 Travel & Transportation': 'bg-indigo-50 border-indigo-200',
			'🛠️ Other Tools and Integrations': 'bg-gray-50 border-gray-200'
		};
		const categoryKey = String(category);
		// @ts-ignore
		return categoryKey in colors ? colors[categoryKey] : 'bg-gray-50 border-gray-200';
	}

	const categoryColor = getCategoryColor(server.category);
</script>

<article class="card p-6 h-full flex flex-col {categoryColor} hover:shadow-2xl group">
	<!-- Header -->
	<div class="flex items-start justify-between mb-4">
		<div class="flex-1 min-w-0">
			<h3
				class="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors"
			>
				{server.name}
			</h3>
			<p class="text-sm font-medium text-gray-600 mb-2">
				{server.category}
			</p>
		</div>
		{#if server.badges.includes('🎖️')}
			<div class="flex-shrink-0">
				<div class="bg-amber-100 text-amber-800 badge">
					<Star class="w-3 h-3 mr-1" />
					Official
				</div>
			</div>
		{/if}
	</div>

	<!-- Description -->
	<p class="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
		{server.description}
	</p>

	<!-- Features -->
	{#if server.features && server.features.length > 0}
		<div class="mb-4">
			<h4 class="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Features</h4>
			<div class="flex flex-wrap gap-1">
				{#each server.features.slice(0, 3) as feature (feature)}
					<span class="bg-white/70 text-gray-700 text-xs px-2 py-1 rounded-md border">
						{feature}
					</span>
				{/each}
				{#if server.features.length > 3}
					<span class="text-gray-500 text-xs px-2 py-1">
						+{server.features.length - 3} more
					</span>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Badges -->
	{#if server.badges && server.badges.length > 0}
		<div class="mb-4">
			<h4 class="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
				Platform Support
			</h4>
			<div class="flex flex-wrap gap-1">
				{#each server.badges as badge (badge)}
					<span class="badge {getBadgeColor(badge)} text-xs">
						{badge}
					</span>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Footer -->
	<div class="mt-auto pt-4 border-t border-gray-200/50">
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-2 text-xs text-gray-500">
				<Github class="w-3 h-3" />
				<span class="font-mono">{server.name.split('/')[0]}</span>
			</div>
			<a
				href={server.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors group-hover:scale-105 transform"
			>
				<span>View</span>
				<ExternalLink class="w-3 h-3" />
			</a>
		</div>
	</div>
</article>
