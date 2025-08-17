<script>
	import {
		Settings,
		Clock,
		Shield,
		Eye,
		MoreHorizontal,
		ChevronDown,
		ChevronUp,
		User,
		X
	} from 'lucide-svelte';
	import { getScenario, getScenarioDataTypes } from '$lib/scenarios.js';
	import ArvifyLogo from '$lib/components/ArvifyLogo.svelte';

	// Props per personalizzare completamente l'interfaccia
	let {
		// Scenario configuration
		scenario = 'development',
		requestText = null, // Se null, usa quello dal scenario

		// Display options
		theme = null, // Se null, usa quello dal scenario
		size = 'normal', // 'compact', 'normal', 'expanded'

		// Data configuration
		dataTypes = null, // Array personalizzato o null per default
		ttlSeconds = null, // Se null, usa quello dal scenario

		// State management
		showNotification = true,
		isWaitingConsent = true,
		processingStatus = null, // Se null, usa quello dal scenario

		// Backend configuration
		backendType = null, // Se null, usa quello dal scenario

		// Privacy settings
		encryptionLevel = 'AES-256',
		autoCleanup = true,
		auditLog = true,

		// Callback per quando l'utente interagisce
		onUserInteraction = null
	} = $props();

	// Stato del pannello dettagli
	let showDetails = $state(false);

	// Funzione per gestire l'interazione utente
	function handleInteraction() {
		if (onUserInteraction) {
			onUserInteraction();
		}
	}

	// Toggle dettagli
	function toggleDetails() {
		showDetails = !showDetails;
		handleInteraction();
	}

	// Funzione per cancellare la richiesta
	function cancelRequest() {
		handleInteraction();
		// Qui si potrebbe implementare la logica per cancellare la richiesta
	}

	// Ottieni configurazione scenario
	const scenarioConfig = getScenario(scenario);

	// Usa valori del scenario come fallback
	const currentRequestText = requestText || scenarioConfig.request;
	const currentTheme = theme || scenarioConfig.theme;
	const currentTtl = ttlSeconds || scenarioConfig.ttl;
	const currentStatus = processingStatus || scenarioConfig.status;
	const currentBackend = backendType || scenarioConfig.backend;
	const currentDataTypes = dataTypes || scenarioConfig.dataTypes;

	// Configurazioni tema
	const themes = {
		blue: 'from-blue-600 to-purple-600',
		emerald: 'from-emerald-600 to-teal-600',
		purple: 'from-purple-600 to-pink-600',
		amber: 'from-amber-600 to-orange-600'
	};

	// Backend icons e colori
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

<div class="bg-gradient-to-br {themes[currentTheme]} h-full flex flex-col">
	<!-- App Header con Login -->
	<div
		class="bg-white/10 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/20 flex-shrink-0"
	>
		<ArvifyLogo size="md" showText={true} textColor="text-white" />
		<div class="flex items-center space-x-2">
			<button onclick={toggleDetails} class="text-white/70 hover:text-white transition-colors p-1">
				{#if showDetails}
					<ChevronUp class="w-4 h-4" />
				{:else}
					<Settings class="w-4 h-4" />
				{/if}
			</button>
			<!-- User Profile -->
			<div class="flex items-center space-x-2 bg-white/10 rounded-full px-2 py-1">
				<img
					src="/emanuele-strano1.xbaffbba2.jpg"
					alt="Emanuele"
					class="w-6 h-6 rounded-full object-cover border border-white/20"
				/>
				<span class="text-white text-xs font-medium">E.</span>
			</div>
		</div>
	</div>

	<!-- Scrollable Content Area -->
	<div class="flex-1 overflow-y-auto">
		<div class="p-4">
			<!-- AI Request -->
			<div class="mb-4">
				<div class="bg-white/20 rounded-lg p-3 mb-3">
					<div class="flex items-start justify-between">
						<p class="text-white text-sm flex-1">"{currentRequestText}"</p>
						<div class="text-white/50 text-xs ml-2">
							{backends[currentBackend].icon}
							{backends[currentBackend].name}
						</div>
					</div>
				</div>

				<!-- Status principale -->
				<div class="bg-amber-500/20 rounded-lg p-3 border border-amber-400">
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-2">
							<div
								class="w-2 h-2 bg-amber-400 rounded-full {currentStatus === 'waiting'
									? 'animate-pulse'
									: ''}"
							></div>
							<span class="text-white text-sm font-medium">
								{#if currentStatus === 'waiting'}
									🔔 Consenso Richiesto
								{:else if currentStatus === 'processing'}
									🔄 Processando...
								{:else if currentStatus === 'completed'}
									✅ Completato
								{:else if currentStatus === 'denied'}
									❌ Negato
								{/if}
							</span>
						</div>
						<span class="text-amber-300 text-sm">{currentTtl}s</span>
					</div>
					<div class="mt-2 text-xs text-white/70">
						Usa il bracciale Arvify per approvare o negare la richiesta
					</div>
				</div>
			</div>

			<!-- Pannello Dettagli Espandibile -->
			{#if showDetails}
				<div class="space-y-4 mb-4 animate-in slide-in-from-top duration-300">
					<!-- Device Settings Panel - Styled like login demo -->
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
						<h3 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
							<Settings class="w-4 h-4" />
							<span>Impostazioni Device</span>
						</h3>

						<div class="space-y-4">
							<div>
								<label for="processing-pref" class="block text-blue-100 text-xs font-medium mb-2">
									Preferenza Elaborazione
								</label>
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
								<label for="ttl-setting" class="block text-blue-100 text-xs font-medium mb-2">
									TTL Default
								</label>
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
									onclick={handleInteraction}
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

					<!-- Data Overview - Compatto -->
					<div class="bg-white/10 rounded-lg p-3 border border-blue-300/30">
						<div class="flex items-center justify-between mb-3">
							<span class="text-blue-200 text-xs font-medium">Dati Richiesti ({dataCount})</span>
							<span class="text-blue-300 text-xs">
								{approvedCount}✓ {deniedCount}✗ {pendingCount}⏳
							</span>
						</div>
						<div class="space-y-1 max-h-16 overflow-y-auto">
							{#each currentDataTypes.slice(0, 3) as dataType}
								<div class="flex items-center justify-between text-xs">
									<div class="flex items-center space-x-2">
										<span class="text-gray-300">{dataType.name}</span>
										{#if dataType.sensitive}
											<div class="w-1 h-1 bg-red-400 rounded-full"></div>
										{/if}
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
							{#if currentDataTypes.length > 3}
								<div class="text-center">
									<span class="text-blue-300 text-xs">+{currentDataTypes.length - 3} altri...</span>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/if}
			<!-- System Status - Sempre visibile ma compatto -->
			<div class="grid grid-cols-3 gap-2 mb-4">
				<div class="bg-green-500/20 rounded-lg p-2 text-center border border-green-500/30">
					<div class="text-green-400 text-lg">●</div>
					<div class="text-green-300 text-xs">Bracciale</div>
				</div>
				<div class="bg-amber-500/20 rounded-lg p-2 text-center border border-amber-500/30">
					<div class="text-amber-400 text-lg {currentStatus === 'waiting' ? 'animate-pulse' : ''}">
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

			<!-- Single Action: Cancel Request -->
			<button
				onclick={cancelRequest}
				class="w-full bg-red-500/20 hover:bg-red-500/30 border border-red-400/50 rounded-lg py-3 px-4 text-red-200 text-sm font-medium transition-all flex items-center justify-center space-x-2"
			>
				<X class="w-4 h-4" />
				<span>Cancella Richiesta</span>
			</button>
		</div>
	</div>
</div>
