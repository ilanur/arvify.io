<script>
	let {
		// Configurazione stato
		status = 'waiting', // 'waiting', 'processing', 'completed', 'denied'
		ttlSeconds = 180,

		// Styling
		statusBgClass = 'bg-amber-500/20',
		statusBorderClass = 'border border-amber-400',
		statusTextClass = 'text-white text-sm font-medium',
		ttlTextClass = 'text-amber-300 text-sm'
	} = $props();

	// Status configuration
	const statusConfig = {
		waiting: {
			icon: '🔔',
			text: 'Consenso Richiesto',
			dotClass: 'animate-pulse'
		},
		processing: {
			icon: '🔄',
			text: 'Processando...',
			dotClass: ''
		},
		completed: {
			icon: '✅',
			text: 'Completato',
			dotClass: ''
		},
		denied: {
			icon: '❌',
			text: 'Negato',
			dotClass: ''
		}
	};

	const currentStatus = statusConfig[status] || statusConfig.waiting;
</script>

<div class="{statusBgClass} rounded-lg p-3 {statusBorderClass}">
	<div class="flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<div class="w-2 h-2 bg-amber-400 rounded-full {currentStatus.dotClass}"></div>
			<span class={statusTextClass}>
				{currentStatus.icon}
				{currentStatus.text}
			</span>
		</div>
		<span class={ttlTextClass}>{ttlSeconds}s</span>
	</div>
	<div class="mt-2 text-xs text-white/70">
		Usa il bracciale Arvify per approvare o negare la richiesta
	</div>
</div>
