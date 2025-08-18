<script>
	import { ArrowLeft, Shield, Clock, Database, Zap } from 'lucide-svelte';

	let {
		// Dati della richiesta
		requestText = '',
		provider = 'bolt',
		dataTypes = [],
		ttlSeconds = 180,
		scenario = 'development',

		// Callback
		onBack = null
	} = $props();

	// Provider info
	const providers = {
		openai: {
			name: 'OpenAI',
			company: 'OpenAI Inc.',
			privacy: 'https://openai.com/privacy',
			color: 'text-blue-400'
		},
		anthropic: {
			name: 'Claude',
			company: 'Anthropic PBC',
			privacy: 'https://anthropic.com/privacy',
			color: 'text-blue-300'
		},
		google: {
			name: 'Gemini',
			company: 'Google LLC',
			privacy: 'https://policies.google.com/privacy',
			color: 'text-blue-400'
		},
		bolt: {
			name: 'Bolt.new',
			company: 'StackBlitz Inc.',
			privacy: 'https://bolt.new/privacy',
			color: 'text-blue-500'
		},
		local: {
			name: 'Local AI',
			company: 'In locale',
			privacy: null,
			color: 'text-gray-400'
		}
	};

	const currentProvider = providers[provider] || providers.bolt;

	function handleBack() {
		if (onBack) onBack();
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}m ${remainingSeconds}s`;
	}

	// Status mapping per i dati
	const statusConfig = {
		approved: { color: 'text-blue-400', bg: 'bg-blue-500/10', icon: '✅' },
		denied: { color: 'text-red-400', bg: 'bg-red-500/10', icon: '❌' },
		pending: { color: 'text-slate-300', bg: 'bg-slate-500/10', icon: '⏳' }
	};
</script>

<div class="h-full flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
	<!-- Header -->
	<div class="flex items-center justify-between p-4 border-b border-slate-700/50">
		<button
			onclick={handleBack}
			class="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
		>
			<ArrowLeft class="w-4 h-4" />
			<span class="text-sm font-medium">Torna alla richiesta</span>
		</button>
		<h1 class="text-white text-lg font-semibold">Dettagli Richiesta</h1>
		<div></div>
		<!-- Spacer -->
	</div>

	<!-- Content -->
	<div class="flex-1 overflow-y-auto p-4 space-y-6">
		<!-- Provider Info -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-3 flex items-center space-x-2">
				<Shield class="w-4 h-4" />
				<span>Provider AI</span>
			</h2>

			<div class="space-y-3">
				<div class="flex justify-between">
					<span class="text-slate-300 text-xs">Nome servizio:</span>
					<span class="{currentProvider.color} text-xs font-medium">{currentProvider.name}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-slate-300 text-xs">Azienda:</span>
					<span class="text-white text-xs">{currentProvider.company}</span>
				</div>
				{#if currentProvider.privacy}
					<div class="flex justify-between">
						<span class="text-slate-300 text-xs">Privacy Policy:</span>
						<a
							href={currentProvider.privacy}
							target="_blank"
							class="text-blue-300 hover:text-blue-200 text-xs underline"
						>
							Visualizza
						</a>
					</div>
				{/if}
			</div>
		</div>

		<!-- Request Details -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-3 flex items-center space-x-2">
				<Zap class="w-4 h-4" />
				<span>Dettagli Richiesta</span>
			</h2>

			<div class="space-y-3">
				<div>
					<span class="text-slate-300 text-xs block mb-1">Richiesta completa:</span>
					<p class="text-white text-xs bg-slate-700/30 rounded p-2 leading-relaxed">
						"{requestText}"
					</p>
				</div>
				<div class="flex justify-between">
					<span class="text-slate-300 text-xs">Scenario:</span>
					<span class="text-white text-xs capitalize">{scenario}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-slate-300 text-xs">Timeout:</span>
					<span class="text-white text-xs">{formatTime(ttlSeconds)}</span>
				</div>
			</div>
		</div>

		<!-- Data Access -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-3 flex items-center space-x-2">
				<Database class="w-4 h-4" />
				<span>Accesso ai Dati</span>
			</h2>

			<div class="space-y-2">
				{#each dataTypes as dataType}
					{@const config = statusConfig[dataType.status] || statusConfig.pending}
					<div
						class="flex items-center justify-between p-2 {config.bg} rounded-lg border border-slate-600/30"
					>
						<div class="flex items-center space-x-2">
							<span class="text-xs">{config.icon}</span>
							<span class="text-white text-xs">{dataType.name}</span>
							{#if dataType.sensitive}
								<span
									class="text-xs px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px]"
								>
									SENSIBILE
								</span>
							{/if}
						</div>
						<span class="{config.color} text-xs font-medium capitalize">
							{dataType.status}
						</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Security Info -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-3 flex items-center space-x-2">
				<Clock class="w-4 h-4" />
				<span>Sicurezza</span>
			</h2>

			<div class="space-y-2 text-xs text-slate-300">
				<p>• I dati vengono processati secondo la privacy policy del provider</p>
				<p>• La richiesta scadrà automaticamente in {formatTime(ttlSeconds)}</p>
				<p>• Puoi revocare il consenso in qualsiasi momento dal bracciale</p>
				<p>• Tutti gli accessi vengono registrati nell'audit log</p>
			</div>
		</div>
	</div>
</div>
