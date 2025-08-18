<script>
	import { Settings, Eye, X, ChevronLeft } from 'lucide-svelte';
	import { getScenario } from '$lib/scenarios.js';
	import ArvifyLogo from '$lib/components/ArvifyLogo.svelte';

	let {
		scenario = 'development',
		requestText = null,
		theme = null,
		dataTypes = null,
		ttlSeconds = null,
		processingStatus = null,
		backendType = null,
		onUserInteraction = null
	} = $props();

	let view = $state('main');
	let auditLog = $state(true);

	function handleInteraction() {
		if (onUserInteraction) {
			onUserInteraction();
		}
	}

	function goHome() {
		view = 'main';
		handleInteraction();
	}

	function goSettings() {
		view = 'settings';
		handleInteraction();
	}

	function goDetails() {
		view = 'details';
		handleInteraction();
	}

	function cancelRequest() {
		handleInteraction();
	}

	const scenarioConfig = getScenario(scenario);

	const currentRequestText = requestText || scenarioConfig.request;
	const currentTheme = theme || scenarioConfig.theme;
	const currentTtl = ttlSeconds || scenarioConfig.ttl;
	const currentStatus = processingStatus || scenarioConfig.status;
	const currentBackend = backendType || scenarioConfig.backend;
	const currentDataTypes = dataTypes || scenarioConfig.dataTypes;

	const themes = {
		blue: 'from-blue-600 to-purple-600',
		emerald: 'from-emerald-600 to-teal-600',
		purple: 'from-purple-600 to-pink-600',
		amber: 'from-amber-600 to-orange-600'
	};

	const backends = {
		openai: { icon: '🤖', color: 'text-green-400', name: 'OpenAI' },
		anthropic: { icon: '🧠', color: 'text-orange-400', name: 'Claude' },
		google: { icon: '🔍', color: 'text-blue-400', name: 'Gemini' },
		bolt: { icon: '⚡', color: 'text-yellow-400', name: 'Bolt' },
		local: { icon: '🏠', color: 'text-gray-400', name: 'Local' }
	};

	const approvedCount = currentDataTypes.filter((d) => d.status === 'approved').length;
	const deniedCount = currentDataTypes.filter((d) => d.status === 'denied').length;
	const pendingCount = currentDataTypes.filter((d) => d.status === 'pending').length;
	const dataCount = currentDataTypes.length;
</script>

<div class="bg-gradient-to-br {themes[currentTheme]} h-full flex flex-col text-white">
	<div
		class="bg-white/10 backdrop-blur-sm px-4 py-3 flex items-center justify-center border-b border-white/20 flex-shrink-0"
	>
		<ArvifyLogo size="md" showText={true} textColor="text-white" />
	</div>

	<div class="flex-1 p-4">
		{#if view === 'main'}
			<div class="flex flex-col space-y-4 items-center justify-center h-full">
				<button
					onclick={goSettings}
					class="w-full max-w-xs bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
				>
					<Settings class="w-4 h-4" />
					<span>General Settings</span>
				</button>
				<button
					onclick={goDetails}
					class="w-full max-w-xs bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
				>
					<Eye class="w-4 h-4" />
					<span>Request Details</span>
				</button>
			</div>
		{:else if view === 'settings'}
			<div class="max-w-md mx-auto space-y-4">
				<button
					onclick={goHome}
					class="flex items-center text-white/70 hover:text-white transition-colors"
				>
					<ChevronLeft class="w-4 h-4 mr-1" /> <span>Back</span>
				</button>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
					<h3 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
						<Settings class="w-4 h-4" />
						<span>Impostazioni Device</span>
					</h3>
					<div class="space-y-4">
						<div>
							<label for="processing-pref" class="block text-blue-100 text-xs font-medium mb-2"
								>Preferenza Elaborazione</label
							>
							<select
								id="processing-pref"
								onclick={handleInteraction}
								class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs"
							>
								<option>Locale quando possibile</option>
								<option>Sempre locale</option>
								<option>Bilanciato</option>
								<option>Cloud per qualità massima</option>
							</select>
						</div>
						<div>
							<label for="ttl-setting" class="block text-blue-100 text-xs font-medium mb-2"
								>TTL Default</label
							>
							<select
								id="ttl-setting"
								onclick={handleInteraction}
								class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs"
							>
								<option>30 minuti</option>
								<option>1 ora</option>
								<option>6 ore</option>
								<option>24 ore</option>
							</select>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-blue-100 text-xs">Auto-approvazione query semplici</span>
							<button
								onclick={handleInteraction}
								aria-label="Toggle auto-approvazione"
								class="w-10 h-5 bg-blue-600 rounded-full relative transition-colors"
							>
								<div
									class="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"
								></div>
							</button>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-blue-100 text-xs">Notifiche push</span>
							<button
								onclick={handleInteraction}
								aria-label="Toggle notifiche"
								class="w-10 h-5 bg-green-600 rounded-full relative transition-colors"
							>
								<div
									class="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"
								></div>
							</button>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-blue-100 text-xs">Audit log</span>
							<button
								onclick={() => (auditLog = !auditLog)}
								aria-label="Toggle audit log"
								class="w-10 h-5 bg-{auditLog
									? 'blue'
									: 'gray'}-600 rounded-full relative transition-colors"
							>
								<div
									class="w-4 h-4 bg-white rounded-full absolute top-0.5 {auditLog
										? 'right-0.5'
										: 'left-0.5'} transition-transform"
								></div>
							</button>
						</div>
					</div>
					<button
						onclick={handleInteraction}
						class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-xs"
					>
						Salva Impostazioni
					</button>
				</div>
			</div>
		{:else if view === 'details'}
			<div class="max-w-md mx-auto space-y-4">
				<button
					onclick={goHome}
					class="flex items-center text-white/70 hover:text-white transition-colors"
				>
					<ChevronLeft class="w-4 h-4 mr-1" /> <span>Back</span>
				</button>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2">
					<h3 class="text-white text-sm font-semibold flex items-center space-x-2 mb-2">
						<Eye class="w-4 h-4" />
						<span>Dettagli Richiesta</span>
					</h3>
					<p class="text-blue-100 text-xs">{currentRequestText}</p>
					<p class="text-blue-200 text-xs">TTL: {currentTtl}s</p>
				</div>
				<div class="bg-white/10 rounded-lg p-3 border border-blue-300/30">
					<div class="flex items-center justify-between mb-3">
						<span class="text-blue-200 text-xs font-medium">Dati Richiesti ({dataCount})</span>
						<span class="text-blue-300 text-xs"
							>{approvedCount}✓ {deniedCount}✗ {pendingCount}⏳</span
						>
					</div>
					<div class="space-y-1 max-h-24 overflow-y-auto">
						{#each currentDataTypes.slice(0, 4) as dataType}
							<div class="flex items-center justify-between text-xs">
								<div class="flex items-center space-x-2">
									<span class="text-gray-300">{dataType.name}</span>
									{#if dataType.sensitive}<div class="w-1 h-1 bg-red-400 rounded-full"></div>{/if}
								</div>
								<span class="text-xs">
									{#if dataType.status === 'approved'}
										<span class="text-emerald-400">✓</span>
									{:else if dataType.status === 'denied'}
										<span class="text-red-400">✗</span>
									{:else}
										<span class="text-amber-400">⏳</span>
									{/if}
								</span>
							</div>
						{/each}
						{#if currentDataTypes.length > 4}
							<div class="text-center">
								<span class="text-blue-300 text-xs">+{currentDataTypes.length - 4} altri...</span>
							</div>
						{/if}
					</div>
				</div>
				<div class="grid grid-cols-3 gap-2">
					<div class="bg-green-500/20 rounded-lg p-2 text-center border border-green-500/30">
						<div class="text-green-400 text-lg">●</div>
						<div class="text-green-300 text-xs">Bracciale</div>
					</div>
					<div class="bg-amber-500/20 rounded-lg p-2 text-center border border-amber-500/30">
						<div
							class="text-amber-400 text-lg {currentStatus === 'waiting' ? 'animate-pulse' : ''}"
						>
							{#if currentStatus === 'waiting'}
								⏳
							{:else if currentStatus === 'processing'}
								🔄
							{:else if currentStatus === 'completed'}
								✅
							{:else if currentStatus === 'denied'}
								❌
							{/if}
						</div>
						<div class="text-amber-300 text-xs">
							{#if currentStatus === 'waiting'}
								Waiting
							{:else if currentStatus === 'processing'}
								Processing
							{:else if currentStatus === 'completed'}
								Approved
							{:else if currentStatus === 'denied'}
								Denied
							{/if}
						</div>
					</div>
					<div class="bg-blue-500/20 rounded-lg p-2 text-center border border-blue-500/30">
						<div class="{backends[currentBackend].color} text-lg">
							{backends[currentBackend].icon}
						</div>
						<div class="text-blue-300 text-xs">{backends[currentBackend].name}</div>
					</div>
				</div>
				<button
					onclick={cancelRequest}
					class="w-full bg-red-500/20 hover:bg-red-500/30 border border-red-400/50 rounded-lg py-3 px-4 text-red-200 text-sm font-medium transition-all flex items-center justify-center space-x-2"
				>
					<X class="w-4 h-4" />
					<span>Cancella Richiesta</span>
				</button>
			</div>
		{/if}
	</div>
</div>
