<script>
	import { ExternalLink, ChevronDown, ChevronUp, Settings } from 'lucide-svelte';

	let {
		// Configurazione stato
		status = 'waiting', // 'waiting', 'processing', 'completed', 'denied'
		ttlSeconds = 180,
		provider = 'bolt', // Provider AI che richiede il consenso

		// Callbacks per navigazione
		onShowDetails = null,
		onShowSettings = null,

		// Styling
		statusBgClass = 'bg-slate-500/10',
		statusBorderClass = 'border border-slate-500/20',
		statusTextClass = 'text-white text-sm font-medium',
		ttlTextClass = 'text-slate-300 text-sm'
	} = $props();

	// Provider configuration
	const providers = {
		openai: { name: 'OpenAI', color: 'text-blue-400' },
		anthropic: { name: 'Claude (Anthropic)', color: 'text-blue-300' },
		google: { name: 'Google Gemini', color: 'text-blue-400' },
		bolt: { name: 'Bolt.new', color: 'text-blue-500' },
		local: { name: 'Local AI', color: 'text-gray-400' }
	};

	// Status configuration con colori uniformi
	const statusConfig = {
		waiting: {
			icon: '🔔',
			text: 'Consenso Richiesto per',
			dotClass: 'animate-pulse',
			bgClass: 'bg-slate-500/10',
			borderClass: 'border-slate-500/20'
		},
		processing: {
			icon: '🔄',
			text: 'Elaborazione in corso su',
			dotClass: '',
			bgClass: 'bg-blue-500/10',
			borderClass: 'border-blue-500/20'
		},
		completed: {
			icon: '✅',
			text: 'Completato su',
			dotClass: '',
			bgClass: 'bg-blue-500/10',
			borderClass: 'border-blue-500/20'
		},
		denied: {
			icon: '❌',
			text: 'Negato per',
			dotClass: '',
			bgClass: 'bg-red-500/10',
			borderClass: 'border-red-500/20'
		}
	};

	const currentStatus = statusConfig[status] || statusConfig.waiting;
	const currentProvider = providers[provider] || providers.bolt;

	function handleShowDetails() {
		if (onShowDetails) onShowDetails();
	}

	function handleShowSettings() {
		if (onShowSettings) onShowSettings();
	}
</script>

<div class="{currentStatus.bgClass} rounded-xl p-4 border {currentStatus.borderClass}">
	<!-- Header principale con provider -->
	<div class="flex items-center justify-between mb-3">
		<div class="flex items-center space-x-2">
			<div class="w-2 h-2 bg-blue-400 rounded-full {currentStatus.dotClass}"></div>
			<span class={statusTextClass}>
				{currentStatus.icon}
				{currentStatus.text}
			</span>
			<span class="{currentProvider.color} font-semibold">
				{currentProvider.name}
			</span>
		</div>
		<span class={ttlTextClass}>{ttlSeconds}s</span>
	</div>

	<!-- Descrizione e azioni -->
	<div class="space-y-3">
		<div class="text-xs text-white/70">
			Usa il bracciale Arvify per approvare o negare la richiesta
		</div>

		<!-- Link ai dettagli e settings -->
		<div class="flex space-x-3">
			<button
				onclick={handleShowDetails}
				class="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors flex-1"
			>
				<ExternalLink class="w-3 h-3" />
				<span class="text-xs font-medium">Dettagli richiesta</span>
				<ChevronDown class="w-3 h-3" />
			</button>

			<button
				onclick={handleShowSettings}
				class="flex items-center space-x-2 text-slate-300 hover:text-slate-200 transition-colors flex-1"
			>
				<Settings class="w-3 h-3" />
				<span class="text-xs font-medium">Impostazioni</span>
				<ChevronDown class="w-3 h-3" />
			</button>
		</div>
	</div>
</div>
