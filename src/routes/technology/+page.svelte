<script>
	import { Shield, Database, Zap, Lock, Server, CheckCircle } from 'lucide-svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';

	const boltFeatures = [
		{
			icon: Database,
			title: 'Semantic Indexing',
			description:
				'Indicizzazione automatica di documenti, email, file con embedding vettoriali per ricerca contestuale intelligente.',
			color: 'blue',
			details: 'Vector database con sqlite-vec per performance ottimali'
		},
		{
			icon: Shield,
			title: 'Privacy by Design',
			description:
				'Elaborazione locale quando possibile, condivisione cloud solo su consenso esplicito del bracciale.',
			color: 'emerald',
			details: 'Zero-knowledge architecture con TTL automatico'
		},
		{
			icon: Zap,
			title: 'Smart Routing',
			description:
				'Analizza ogni richiesta AI e determina automaticamente se serve il cloud o se può rispondere localmente.',
			color: 'amber',
			details: 'Algoritmi di routing intelligente per latenza minima'
		},
		{
			icon: Lock,
			title: 'Consent Management',
			description:
				'Sistema avanzato di gestione consensi con TTL personalizzabili e cancellazione garantita.',
			color: 'purple',
			details: 'Cryptographic proof of consent con audit trail'
		}
	];

	const securityLayers = [
		{
			level: 'Level 1',
			name: 'Transport Security',
			description: 'TLS 1.3 end-to-end encryption',
			icon: '🔐',
			color: 'blue'
		},
		{
			level: 'Level 2',
			name: 'Biometric Consent',
			description: 'Hardware fingerprint validation',
			icon: '👆',
			color: 'emerald'
		},
		{
			level: 'Level 3',
			name: 'Data Segregation',
			description: 'Encrypted data chunks con TTL',
			icon: '🗂️',
			color: 'amber'
		},
		{
			level: 'Level 4',
			name: 'Zero Persistence',
			description: 'Auto-deletion dopo scadenza',
			icon: '🔥',
			color: 'red'
		}
	];

	const architecture = [
		{
			component: 'Bracciale Arvify',
			role: 'Consent Authority',
			description: 'Autenticazione biometrica e gestione consensi',
			icon: '⌚',
			connections: ['App Mobile']
		},
		{
			component: 'App Mobile',
			role: 'User Interface',
			description: 'Interfaccia utente e bridge verso Bolt',
			icon: '📱',
			connections: ['Backend Bolt', 'Bracciale Arvify']
		},
		{
			component: 'Backend Bolt',
			role: 'Data Processor',
			description: 'Elaborazione, routing e consent management',
			icon: '🧠',
			connections: ['AI Providers', 'App Mobile']
		},
		{
			component: 'AI Providers',
			role: 'Response Generation',
			description: 'OpenAI, Anthropic, Google, Microsoft',
			icon: '🤖',
			connections: ['Backend Bolt']
		}
	];
</script>

<svelte:head>
	<title>Tecnologia Bolt - Come Funziona il Backend di Arvify</title>
	<meta
		name="description"
		content="Scopri come Bolt garantisce la sicurezza dei tuoi dati AI con consent management biometrico, TTL automatico e privacy by design."
	/>
	<meta
		name="keywords"
		content="Bolt, Backend AI, Privacy, Consent Management, TTL, Biometric Security, Vector Database"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/technology" />
	<meta property="og:title" content="Tecnologia Bolt - Arvify" />
	<meta
		property="og:description"
		content="Scopri come Bolt protegge i tuoi dati AI con consenso biometrico e privacy by design."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/technology" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Navigation -->
	<Navigation variant="white" />

	<!-- Hero Section -->
	<section class="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<div
					class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white"
				>
					<Server class="w-4 h-4 mr-2 text-blue-400" />
					Backend Technology
				</div>

				<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
					Bolt: Il Cervello
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
					>
						Sicuro di Arvify
					</span>
				</h1>

				<p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
					Il backend che rende possibile il controllo biometrico dell'AI. Elaborazione intelligente,
					privacy garantita e sicurezza di livello enterprise.
				</p>

				<!-- Key Stats -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
					<div class="text-center">
						<div class="text-3xl font-bold text-blue-400 mb-2">&lt; 50ms</div>
						<div class="text-gray-300">Latenza consenso</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-emerald-400 mb-2">100%</div>
						<div class="text-gray-300">Privacy garantita</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-amber-400 mb-2">0</div>
						<div class="text-gray-300">Dati persistenti</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Core Features -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">
					Funzionalità
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
						Avanzate
					</span>
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Bolt combina intelligenza artificiale e sicurezza crittografica per un controllo totale
					sui tuoi dati
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each boltFeatures as feature, i (i)}
					<div
						class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
					>
						<div class="flex items-start space-x-4">
							<div
								class="w-12 h-12 bg-{feature.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
							>
								<svelte:component this={feature.icon} class="w-6 h-6 text-{feature.color}-600" />
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
								<p class="text-gray-600 mb-4">{feature.description}</p>
								<div
									class="inline-flex items-center px-3 py-1 bg-{feature.color}-100 text-{feature.color}-700 rounded-full text-sm font-medium"
								>
									{feature.details}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Security Architecture -->
	<section class="py-20 bg-gradient-to-br from-gray-900 to-slate-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">
					Architettura di
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
						Sicurezza
					</span>
				</h2>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					Quattro livelli di protezione per garantire la massima sicurezza dei tuoi dati
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each securityLayers as layer, i (i)}
					<div class="text-center">
						<div class="relative mb-6">
							<div
								class="w-24 h-24 bg-{layer.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
							>
								<span class="text-4xl">{layer.icon}</span>
							</div>
							<div
								class="absolute -top-2 -right-2 w-8 h-8 bg-{layer.color}-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
							>
								{i + 1}
							</div>
						</div>
						<h3 class="text-lg font-bold text-white mb-2">{layer.name}</h3>
						<p class="text-gray-300 text-sm">{layer.description}</p>
					</div>
				{/each}
			</div>

			<!-- Security Flow -->
			<div class="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
				<h3 class="text-2xl font-bold text-white text-center mb-8">Flusso di Sicurezza</h3>
				<div class="flex items-center justify-between text-white text-sm overflow-x-auto">
					<div class="text-center min-w-[120px]">
						<div
							class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2"
						>
							<Shield class="w-8 h-8 text-blue-400" />
						</div>
						<span>Richiesta AI</span>
					</div>
					<div class="text-2xl text-gray-400 px-4">→</div>
					<div class="text-center min-w-[120px]">
						<div
							class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2"
						>
							<Database class="w-8 h-8 text-emerald-400" />
						</div>
						<span>Analisi Bolt</span>
					</div>
					<div class="text-2xl text-gray-400 px-4">→</div>
					<div class="text-center min-w-[120px]">
						<div
							class="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2"
						>
							<Lock class="w-8 h-8 text-amber-400" />
						</div>
						<span>Consenso Biometrico</span>
					</div>
					<div class="text-2xl text-gray-400 px-4">→</div>
					<div class="text-center min-w-[120px]">
						<div
							class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-2"
						>
							<Zap class="w-8 h-8 text-red-400" />
						</div>
						<span>Auto-Cleanup</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- System Architecture -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">
					Architettura del
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
						Sistema
					</span>
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Come i componenti di Arvify lavorano insieme per garantire sicurezza e performance
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Architecture Diagram -->
				<div class="relative">
					<div class="space-y-8">
						{#each architecture as component, i (i)}
							<div
								class="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
							>
								<div class="text-4xl">{component.icon}</div>
								<div class="flex-1">
									<h3 class="text-lg font-bold text-gray-900">{component.component}</h3>
									<p class="text-sm text-blue-600 font-medium mb-1">{component.role}</p>
									<p class="text-gray-600 text-sm">{component.description}</p>
								</div>
								<div
									class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold"
								>
									{i + 1}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Technical Specs -->
				<div class="space-y-6">
					<div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
						<h3 class="text-2xl font-bold text-gray-900 mb-6">Specifiche Tecniche</h3>

						<div class="space-y-4">
							<div class="flex justify-between items-center py-2 border-b border-blue-200">
								<span class="font-medium text-gray-700">Database</span>
								<span class="text-gray-600">SQLite + Vector embeddings</span>
							</div>
							<div class="flex justify-between items-center py-2 border-b border-blue-200">
								<span class="font-medium text-gray-700">Encryption</span>
								<span class="text-gray-600">AES-256 + ECDSA signatures</span>
							</div>
							<div class="flex justify-between items-center py-2 border-b border-blue-200">
								<span class="font-medium text-gray-700">Transport</span>
								<span class="text-gray-600">TLS 1.3 + Certificate pinning</span>
							</div>
							<div class="flex justify-between items-center py-2 border-b border-blue-200">
								<span class="font-medium text-gray-700">Hosting</span>
								<span class="text-gray-600">EU-based servers (GDPR compliant)</span>
							</div>
							<div class="flex justify-between items-center py-2 border-b border-blue-200">
								<span class="font-medium text-gray-700">Performance</span>
								<span class="text-gray-600">&lt; 50ms latency, 99.9% uptime</span>
							</div>
							<div class="flex justify-between items-center py-2">
								<span class="font-medium text-gray-700">Compliance</span>
								<span class="text-gray-600">SOC 2, ISO 27001 ready</span>
							</div>
						</div>
					</div>

					<div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8">
						<h3 class="text-xl font-bold text-gray-900 mb-4">Garanzie di Sicurezza</h3>
						<div class="space-y-3">
							<div class="flex items-center space-x-2">
								<CheckCircle class="w-5 h-5 text-emerald-600" />
								<span class="text-gray-700">Zero-knowledge architecture</span>
							</div>
							<div class="flex items-center space-x-2">
								<CheckCircle class="w-5 h-5 text-emerald-600" />
								<span class="text-gray-700">End-to-end encryption</span>
							</div>
							<div class="flex items-center space-x-2">
								<CheckCircle class="w-5 h-5 text-emerald-600" />
								<span class="text-gray-700">TTL automatico garantito</span>
							</div>
							<div class="flex items-center space-x-2">
								<CheckCircle class="w-5 h-5 text-emerald-600" />
								<span class="text-gray-700">Audit trail crittografico</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl font-bold text-white mb-6">Pronto per la Sicurezza Assoluta?</h2>
			<p class="text-xl text-blue-100 mb-8">
				Bolt rende la privacy AI finalmente possibile. Nessun compromesso tra funzionalità e
				sicurezza.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/modelli"
					class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
				>
					Scegli il Tuo Modello
				</a>
				<a
					href="/roadmap"
					class="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
				>
					Vedi la Roadmap
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<DeviceFooter />
</div>
