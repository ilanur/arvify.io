<script>
	import { Settings, Clock, Shield, Eye, MoreHorizontal } from 'lucide-svelte';

	// Props per personalizzare completamente l'interfaccia
	let {
		// Scenario configuration
		scenario = 'email',
		requestText = 'Analizza le mie email per trovare...',

		// Display options
		theme = 'blue', // 'blue', 'emerald', 'purple', 'amber'
		size = 'normal', // 'compact', 'normal', 'expanded'

		// Data configuration
		dataTypes = null, // Array personalizzato o null per default
		ttlSeconds = 120,

		// State management
		showNotification = true,
		isWaitingConsent = true,
		processingStatus = 'waiting', // 'waiting', 'processing', 'completed', 'denied'

		// Backend configuration
		backendType = 'bolt', // 'openai', 'anthropic', 'google', 'bolt', 'local'

		// Privacy settings
		encryptionLevel = 'AES-256',
		autoCleanup = true,
		auditLog = true
	} = $props();

	// Predefined scenarios con dati specifici
	const scenarios = {
		email: [
			{ name: '📧 Email threads', status: 'approved', sensitive: false },
			{ name: '📅 Meeting notes', status: 'approved', sensitive: false },
			{ name: '👤 Contact info', status: 'denied', sensitive: true },
			{ name: '📊 Email analytics', status: 'pending', sensitive: true }
		],
		finance: [
			{ name: '💳 Transaction history', status: 'approved', sensitive: true },
			{ name: '� Spending patterns', status: 'approved', sensitive: true },
			{ name: '🏦 Bank accounts', status: 'denied', sensitive: true },
			{ name: '� Investment data', status: 'pending', sensitive: true },
			{ name: '🧾 Receipt data', status: 'approved', sensitive: false }
		],
		calendar: [
			{ name: '📅 Calendar events', status: 'approved', sensitive: false },
			{ name: '👥 Meeting participants', status: 'approved', sensitive: true },
			{ name: '📍 Location data', status: 'denied', sensitive: true },
			{ name: '� Notification prefs', status: 'approved', sensitive: false }
		],
		health: [
			{ name: '❤️ Heart rate data', status: 'approved', sensitive: true },
			{ name: '🏃 Activity logs', status: 'approved', sensitive: true },
			{ name: '😴 Sleep patterns', status: 'pending', sensitive: true },
			{ name: '💊 Medication data', status: 'denied', sensitive: true }
		]
	};

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

	// Usa dataTypes personalizzati o scenario predefinito
	const currentDataTypes = dataTypes || scenarios[scenario] || scenarios.email;

	const approvedCount = currentDataTypes.filter((d) => d.status === 'approved').length;
	const deniedCount = currentDataTypes.filter((d) => d.status === 'denied').length;
	const pendingCount = currentDataTypes.filter((d) => d.status === 'pending').length;
	const dataCount = currentDataTypes.length;
</script>

<div class="bg-gradient-to-br {themes[theme]} rounded-2xl p-6 h-full">
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
				<p class="text-white text-sm flex-1">"{requestText}"</p>
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
					<span class="text-amber-300 text-xs">{ttlSeconds}s</span>
				</div>
				<p class="text-white text-sm mb-2">
					{approvedCount} approvati • {deniedCount} negati • {pendingCount} in attesa
				</p>
				<div class="text-xs text-gray-300">
					{#if processingStatus === 'waiting'}
						Metti il dito sul sensore per approvare
					{:else if processingStatus === 'processing'}
						Processando richiesta...
					{:else if processingStatus === 'completed'}
						✅ Richiesta completata con successo
					{:else if processingStatus === 'denied'}
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
			<div class="text-amber-400 text-lg {processingStatus === 'waiting' ? 'animate-pulse' : ''}">
				{#if processingStatus === 'waiting'}
					⏳
				{:else if processingStatus === 'processing'}
					🔄
				{:else if processingStatus === 'completed'}
					✅
				{:else if processingStatus === 'denied'}
					❌
				{/if}
			</div>
			<div class="text-amber-300 text-xs">
				{#if processingStatus === 'waiting'}
					Waiting
				{:else if processingStatus === 'processing'}
					Processing
				{:else if processingStatus === 'completed'}
					Approved
				{:else if processingStatus === 'denied'}
					Denied
				{/if}
			</div>
		</div>
		<div class="bg-blue-500/20 rounded-lg p-2 text-center border border-blue-500/30">
			<div class="text-blue-400 text-xs font-medium mb-1">Backend</div>
			<div class="{backends[backendType].color} text-lg">{backends[backendType].icon}</div>
			<div class="text-blue-300 text-xs">{backends[backendType].name}</div>
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
