<script>
	import { ExternalLink, ChevronDown } from 'lucide-svelte';

	let {
		// Configurazione stato
		status = 'waiting', // 'waiting', 'processing', 'completed', 'denied'
		ttlSeconds = 180,
		provider = 'openai', // Provider della richiesta
		// Callbacks per navigazione
		onShowDetails = null,

		// Styling placeholders per compatibilità futura
		statusTextClass = 'text-white text-sm font-medium',
		ttlTextClass = 'text-slate-300 text-sm'
	} = $props();

	// Status configuration con colori distintivi per ogni stato
	const statusConfig = {
		waiting: {
			icon: '🔔',
			text: 'Consenso richiesto',
			dotClass: 'animate-pulse',
			bgClass: 'bg-amber-500/10',
			borderClass: 'border-amber-500/20'
		},
		processing: {
			icon: '🔄',
			text: 'Elaborazione in corso',
			dotClass: 'animate-spin',
			bgClass: 'bg-blue-500/10',
			borderClass: 'border-blue-500/20'
		},
		completed: {
			icon: '✅',
			text: 'Completato',
			dotClass: '',
			bgClass: 'bg-emerald-500/10',
			borderClass: 'border-emerald-500/20'
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
			<div
				class="w-2 h-2 rounded-full {currentStatus.dotClass} {status === 'waiting'
					? 'bg-amber-400'
					: status === 'processing'
						? 'bg-blue-400'
						: status === 'completed'
							? 'bg-emerald-400'
							: 'bg-red-400'}"
			></div>
			<span class={statusTextClass}>
				{currentStatus.icon}
				{currentStatus.text}
			</span>
		</div>
		<span class={ttlTextClass}>{ttlSeconds}s</span>
	</div>

	<!-- Descrizione e azioni -->
	<div class="space-y-3">
		{#if status === 'processing'}
			<div class="text-xs text-white/70">
				🤖 {provider === 'openai' ? 'OpenAI' : provider.charAt(0).toUpperCase() + provider.slice(1)}
				sta elaborando la richiesta.
			</div>
		{:else if status === 'completed'}
			<div class="text-xs text-white/70">✅ Richiesta completata con successo.</div>
		{:else if status === 'denied'}
			<div class="text-xs text-white/70">❌ Richiesta negata dall'utente.</div>
		{:else if status === 'waiting'}
			<div class="text-xs text-white/70">
				⏳ In attesa di autorizzazione per condividere i dati con {provider === 'openai'
					? 'OpenAI'
					: provider.charAt(0).toUpperCase() + provider.slice(1)}.
			</div>
		{/if}

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
