<script>
	import { Settings, Clock, Shield, Eye, MoreHorizontal } from 'lucide-svelte';
	import { getScenario, getScenarioDataTypes } from '$lib/scenarios.js';

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
		auditLog = true
	} = $props();

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

<div class="bg-gradient-to-br {themes[currentTheme]} rounded-2xl p-6 h-full">
	<!-- Header -->
	<div class="flex items-center justify-between mb-6">
		<div class="flex items-center space-x-2">
			<div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
				<Shield class="w-4 h-4 text-white" />
			</div>
			<span class="text-white font-semibold text-sm">Arvify Control</span>
		</div>
		<button class="text-white/70 hover:text-white">
			<Settings class="w-4 h-4" />
		</button>
	</div>

	<!-- AI Request -->
	<div class="mb-4">
		<div class="bg-white/20 rounded-lg p-3 mb-3">
			<div class="flex items-start justify-between">
				<p class="text-white text-sm flex-1">"{currentRequestText}"</p>
				<button class="text-white/70 hover:text-white ml-2">
					<MoreHorizontal class="w-4 h-4" />
				</button>
			</div>
		</div>

		<!-- Consent Request -->
		{#if showNotification}
			<div class="bg-amber-500/20 rounded-lg p-3 border border-amber-400 mb-4">
				<div class="flex items-center space-x-2 mb-2">
					<div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
					<p class="text-amber-200 text-xs font-medium">🔔 Consenso Richiesto</p>
					<div class="flex-1"></div>
					<span class="text-amber-300 text-xs">{currentTtl}s</span>
				</div>
				<p class="text-white text-sm mb-2">
					{approvedCount} approvati • {deniedCount} negati • {pendingCount} in attesa
				</p>
				<div class="text-xs text-gray-300">
					{#if currentStatus === 'waiting'}
						Metti il dito sul sensore per approvare
					{:else if currentStatus === 'processing'}
						Processando richiesta...
					{:else if currentStatus === 'completed'}
						✅ Richiesta completata con successo
					{:else if currentStatus === 'denied'}
						❌ Richiesta negata dall'utente
					{/if}
				</div>
			</div>
		{/if}
	</div>

	<!-- Data Overview -->
	<div class="space-y-3 mb-4">
		<!-- Data Being Shared -->
		<div class="bg-white/10 rounded-lg p-3 border border-blue-300/30">
			<div class="flex items-center justify-between mb-3">
				<span class="text-blue-200 text-xs font-medium">Dati in Condivisione</span>
				<div class="flex items-center space-x-2">
					<span class="text-blue-300 text-xs">{dataCount} elementi</span>
					<button class="text-blue-300 hover:text-blue-200">
						<Eye class="w-3 h-3" />
					</button>
				</div>
			</div>
			<div class="space-y-2 max-h-24 overflow-y-auto">
				{#each currentDataTypes.slice(0, 4) as dataType}
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
				{#if currentDataTypes.length > 4}
					<div class="text-center">
						<button class="text-blue-300 text-xs hover:underline">
							+{currentDataTypes.length - 4} altri...
						</button>
					</div>
				{/if}
			</div>
		</div>

		<!-- Privacy Controls -->
		<div class="bg-amber-500/10 rounded-lg p-3 border border-amber-300/30">
			<div class="flex items-center justify-between mb-2">
				<span class="text-amber-200 text-xs font-medium">Controlli Privacy</span>
				<button class="text-amber-300 text-xs hover:underline">Modifica</button>
			</div>
			<div class="grid grid-cols-2 gap-2">
				<div class="flex items-center justify-between text-xs">
					<span class="text-gray-300 flex items-center">
						<Clock class="w-3 h-3 mr-1" />
						TTL
					</span>
					<span class="text-amber-400">{ttlSeconds}s</span>
				</div>
				<div class="flex items-center justify-between text-xs">
					<span class="text-gray-300">Auto-cleanup</span>
					<span class={autoCleanup ? 'text-green-400' : 'text-red-400'}
						>{autoCleanup ? 'ON' : 'OFF'}</span
					>
				</div>
				<div class="flex items-center justify-between text-xs">
					<span class="text-gray-300">Audit log</span>
					<span class={auditLog ? 'text-blue-400' : 'text-gray-500'}
						>{auditLog ? 'SAVED' : 'OFF'}</span
					>
				</div>
				<div class="flex items-center justify-between text-xs">
					<span class="text-gray-300">Encryption</span>
					<span class="text-purple-400">{encryptionLevel}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- System Status -->
	<div class="grid grid-cols-3 gap-2">
		<div class="bg-green-500/20 rounded-lg p-2 text-center border border-green-500/30">
			<div class="text-green-400 text-xs font-medium mb-1">Bracciale</div>
			<div class="text-green-400 text-lg">●</div>
			<div class="text-green-300 text-xs">Connected</div>
		</div>
		<div class="bg-amber-500/20 rounded-lg p-2 text-center border border-amber-500/30">
			<div class="text-amber-400 text-xs font-medium mb-1">Consenso</div>
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
			<div class="text-blue-400 text-xs font-medium mb-1">Backend</div>
			<div class="{backends[currentBackend].color} text-lg">{backends[currentBackend].icon}</div>
			<div class="text-blue-300 text-xs">{backends[currentBackend].name}</div>
		</div>
	</div>

	<!-- Quick Actions -->
	<div class="mt-4 flex space-x-2">
		<button
			class="flex-1 bg-white/10 hover:bg-white/20 rounded-lg py-2 px-3 text-white text-xs transition-all"
		>
			Nega Tutto
		</button>
		<button
			class="flex-1 bg-emerald-500/30 hover:bg-emerald-500/40 rounded-lg py-2 px-3 text-emerald-200 text-xs transition-all"
		>
			Approva
		</button>
	</div>
</div>
