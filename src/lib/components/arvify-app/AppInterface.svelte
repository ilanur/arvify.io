<script>
	import { X } from 'lucide-svelte';
	import { getScenario } from '$lib/scenarios.js';

	// Import dei componenti modulari
	import AppHeader from './AppHeader.svelte';
	import AppRequest from './AppRequest.svelte';
	import AppStatus from './AppStatus.svelte';
	import AppSettings from './AppSettings.svelte';
	import AppDataOverview from './AppDataOverview.svelte';
	import AppSystemStatus from './AppSystemStatus.svelte';

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

		// User configuration
		userAvatar = '/emanuele-strano1.xbaffbba2.jpg',
		userInitials = 'E.',
		userName = 'Emanuele',

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
	function toggleDetails(newState) {
		showDetails = newState;
		handleInteraction();
	}

	// Funzione per cancellare la richiesta
	function cancelRequest() {
		handleInteraction();
		// Qui si potrebbe implementare la logica per cancellare la richiesta
	}

	// Gestione impostazioni
	function handleSettingChange(setting, value) {
		handleInteraction();
		// Qui si potrebbe implementare la logica per salvare le impostazioni
	}

	function handleSaveSettings() {
		handleInteraction();
		// Qui si potrebbe implementare la logica per salvare le impostazioni
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
</script>

<div class="bg-gradient-to-br {themes[currentTheme]} h-full flex flex-col">
	<!-- App Header -->
	<AppHeader {showDetails} onToggleDetails={toggleDetails} {userAvatar} {userInitials} {userName} />

	<!-- Scrollable Content Area -->
	<div class="flex-1 overflow-y-auto">
		<div class="p-4">
			<!-- AI Request -->
			<AppRequest requestText={currentRequestText} backendType={currentBackend} />

			<!-- Status principale -->
			<AppStatus status={currentStatus} ttlSeconds={currentTtl} />

			<!-- Pannello Dettagli Espandibile -->
			{#if showDetails}
				<div class="space-y-4 mb-4 animate-in slide-in-from-top duration-300">
					<!-- Device Settings Panel -->
					<AppSettings
						{auditLog}
						onSettingChange={handleSettingChange}
						onSaveSettings={handleSaveSettings}
					/>

					<!-- Data Overview -->
					<AppDataOverview dataTypes={currentDataTypes} />
				</div>
			{/if}

			<!-- System Status -->
			<AppSystemStatus processingStatus={currentStatus} backendType={currentBackend} />

			<!-- Cancel Request Action -->
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
