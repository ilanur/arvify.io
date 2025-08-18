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

	// Configurazioni tema - Design unificato professionale
	const appTheme = {
		background: 'from-slate-900 to-slate-800',
		accent: 'blue', // Colore accent unificato
		surface: 'bg-slate-800/50',
		border: 'border-slate-700/50'
	};
</script>

<div class="bg-gradient-to-br {appTheme.background} h-full flex flex-col relative">
	<!-- App Header -->
	<AppHeader {showDetails} onToggleDetails={toggleDetails} {userAvatar} {userInitials} {userName} />

	<!-- Scrollable Content Area -->
	<div class="flex-1 overflow-y-auto pb-20">
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
		</div>
	</div>

	<!-- Cancel Request Action - Fixed Bottom -->
	<div
		class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent backdrop-blur-sm"
	>
		<button
			onclick={cancelRequest}
			class="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl py-4 px-4 text-red-300 text-sm font-medium transition-all flex items-center justify-center space-x-2 backdrop-blur-sm"
		>
			<X class="w-5 h-5" />
			<span>Cancella Richiesta</span>
		</button>
	</div>
</div>
