<script>
	import { ExternalLink, ChevronDown } from 'lucide-svelte';

	let {
		// Configurazione stato
		status = 'waiting', // 'waiting', 'processing', 'completed', 'denied'
		ttlSeconds = 180,
		// Callbacks per navigazione
		onShowDetails = null,

		// Styling
		statusBgClass = 'bg-slate-500/10',
		statusBorderClass = 'border border-slate-500/20',
		statusTextClass = 'text-white text-sm font-medium',
		ttlTextClass = 'text-slate-300 text-sm'
	} = $props();

	// Status configuration con colori uniformi
	const statusConfig = {
		waiting: {
			icon: '🔔',
			text: 'Consenso richiesto',
			dotClass: 'animate-pulse',
			bgClass: 'bg-slate-500/10',
			borderClass: 'border-slate-500/20'
		},
		processing: {
			icon: '🔄',
			text: 'Elaborazione in corso',
			dotClass: '',
			bgClass: 'bg-blue-500/10',
			borderClass: 'border-blue-500/20'
		},
		completed: {
			icon: '✅',
			text: 'Completato',
			dotClass: '',
			bgClass: 'bg-blue-500/10',
			borderClass: 'border-blue-500/20'
		},
		denied: {
			icon: '❌',
			text: 'Negato',
			dotClass: '',
			bgClass: 'bg-red-500/10',
			borderClass: 'border-red-500/20'
		}
	};

	const currentStatus = statusConfig[status] || statusConfig.waiting;

	function handleShowDetails() {
		if (onShowDetails) onShowDetails();
	}
</script>

<div class="{currentStatus.bgClass} rounded-xl p-4 border {currentStatus.borderClass}">
	<!-- Header principale -->
	<div class="flex items-center justify-between mb-3">
		<div class="flex items-center space-x-2">
			<div class="w-2 h-2 bg-blue-400 rounded-full {currentStatus.dotClass}"></div>
			<span class={statusTextClass}>
				{currentStatus.icon}
				{currentStatus.text}
			</span>
		</div>
		<span class={ttlTextClass}>{ttlSeconds}s</span>
	</div>

	<!-- Descrizione e azioni -->
	<div class="space-y-3">
		<div class="text-xs text-white/70">Usa il bracciale per negare la richiesta.</div>

		<!-- Link ai dettagli -->
		<div>
			<button
				onclick={handleShowDetails}
				class="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
			>
				<ExternalLink class="w-3 h-3" />
				<span class="text-xs font-medium">Dettagli richiesta</span>
				<ChevronDown class="w-3 h-3" />
			</button>
		</div>
	</div>
</div>
