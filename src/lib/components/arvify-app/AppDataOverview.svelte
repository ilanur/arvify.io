<script>
	let {
		// Configurazione dati
		dataTypes = [
			{ name: '💻 Project repositories', status: 'approved', sensitive: false },
			{ name: '🔧 System configurations', status: 'approved', sensitive: true },
			{ name: '📊 Development metrics', status: 'approved', sensitive: false },
			{ name: '🚀 Deployment keys', status: 'denied', sensitive: true },
			{ name: '📝 Code documentation', status: 'pending', sensitive: false }
		],
		maxVisible = 3,

		// Styling
		bgClass = 'bg-white/10',
		borderClass = 'border border-blue-300/30'
	} = $props();

	// Calcola statistiche
	const approvedCount = dataTypes.filter((d) => d.status === 'approved').length;
	const deniedCount = dataTypes.filter((d) => d.status === 'denied').length;
	const pendingCount = dataTypes.filter((d) => d.status === 'pending').length;
	const dataCount = dataTypes.length;

	// Status icons
	const statusIcons = {
		approved: '✓',
		denied: '✗',
		pending: '⏳'
	};

	// Status colors
	const statusColors = {
		approved: 'text-emerald-400',
		denied: 'text-red-400',
		pending: 'text-amber-400'
	};
</script>

<div class="{bgClass} rounded-lg p-3 {borderClass}">
	<div class="flex items-center justify-between mb-3">
		<span class="text-blue-200 text-xs font-medium">Dati Richiesti ({dataCount})</span>
		<span class="text-blue-300 text-xs">
			{approvedCount}✓ {deniedCount}✗ {pendingCount}⏳
		</span>
	</div>

	<div class="space-y-1 max-h-16 overflow-y-auto">
		{#each dataTypes.slice(0, maxVisible) as dataType}
			<div class="flex items-center justify-between text-xs">
				<div class="flex items-center space-x-2">
					<span class="text-gray-300">{dataType.name}</span>
					{#if dataType.sensitive}
						<div class="w-1 h-1 bg-red-400 rounded-full"></div>
					{/if}
				</div>
				<span class="text-xs {statusColors[dataType.status]}">
					{statusIcons[dataType.status]}
				</span>
			</div>
		{/each}

		{#if dataTypes.length > maxVisible}
			<div class="text-center">
				<span class="text-blue-300 text-xs">+{dataTypes.length - maxVisible} altri...</span>
			</div>
		{/if}
	</div>
</div>
