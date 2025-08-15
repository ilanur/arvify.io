<script>
	import { Smartphone, MessageSquare, Shield, Zap, Clock, CheckCircle } from 'lucide-svelte';

	const steps = [
		{
			number: 1,
			icon: MessageSquare,
			title: 'Fai la tua domanda',
			description: "Usa l'app mobile per inviare la tua richiesta al Smart AI Box",
			color: 'blue',
			details: 'Voice-to-text, digitazione o upload file'
		},
		{
			number: 2,
			icon: Shield,
			title: 'Analisi locale',
			description: 'Il dispositivo analizza la richiesta con Ollama e il vector database',
			color: 'emerald',
			details: '100% privato, elaborazione on-device'
		},
		{
			number: 3,
			icon: Zap,
			title: 'Decisione intelligente',
			description: 'Il sistema decide se rispondere localmente o utilizzare il cloud',
			color: 'amber',
			details: 'Basato su complessità e modelli disponibili'
		},
		{
			number: 4,
			icon: CheckCircle,
			title: 'Approvazione utente',
			description: "Se serve il cloud, l'app ti chiede conferma mostrando cosa verrà condiviso",
			color: 'purple',
			details: 'TTL personalizzabile, chunk selezionati'
		},
		{
			number: 5,
			icon: Clock,
			title: 'Risposta veloce',
			description: 'Ricevi la risposta ottimizzata, con log completo delle operazioni',
			color: 'red',
			details: 'Tracciabilità completa e auto-cancellazione'
		}
	];
</script>

<section class="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
				Come Funziona
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
					Smart AI Box
				</span>
			</h2>
			<p class="text-xl text-blue-100 max-w-3xl mx-auto">
				Un workflow intelligente che bilancia privacy e prestazioni, sempre sotto il tuo controllo
			</p>
		</div>

		<!-- Steps -->
		<div class="relative">
			<!-- Connection Line -->
			<div
				class="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl"
			>
				<svg class="w-full h-2" viewBox="0 0 1000 20">
					<defs>
						<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
							<stop offset="25%" style="stop-color:#10B981;stop-opacity:1" />
							<stop offset="50%" style="stop-color:#F59E0B;stop-opacity:1" />
							<stop offset="75%" style="stop-color:#8B5CF6;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#EF4444;stop-opacity:1" />
						</linearGradient>
					</defs>
					<line
						x1="0"
						y1="10"
						x2="1000"
						y2="10"
						stroke="url(#lineGradient)"
						stroke-width="3"
						stroke-dasharray="10,5"
					/>
				</svg>
			</div>

			<!-- Steps Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
				{#each steps as step, i}
					<div class="relative z-10 text-center" style="animation-delay: {i * 200}ms">
						<!-- Step Number Circle -->
						<div
							class="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-{step.color}-500 to-{step.color}-600 text-white rounded-full text-xl font-bold mb-6 shadow-lg"
						>
							{step.number}
							<div
								class="absolute inset-0 bg-gradient-to-r from-{step.color}-400 to-{step.color}-500 rounded-full animate-ping opacity-20"
							></div>
						</div>

						<!-- Step Icon -->
						<div
							class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4"
						>
							<svelte:component this={step.icon} class="w-6 h-6 text-{step.color}-400" />
						</div>

						<!-- Step Content -->
						<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
							<h3 class="text-lg font-bold text-white mb-3">
								{step.title}
							</h3>
							<p class="text-blue-100 text-sm mb-3 leading-relaxed">
								{step.description}
							</p>
							<div
								class="text-xs text-{step.color}-300 bg-{step.color}-500/20 px-3 py-1 rounded-full"
							>
								{step.details}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Mobile App Showcase -->
		<div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left - App Mockup -->
			<div class="relative">
				<div class="bg-gray-900 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
					<div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 h-96">
						<!-- App Header -->
						<div class="flex items-center justify-between mb-6">
							<div class="flex items-center space-x-2">
								<div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
									<Smartphone class="w-4 h-4 text-white" />
								</div>
								<span class="text-white font-semibold">Smart AI Control</span>
							</div>
							<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						</div>

						<!-- Conversation Preview -->
						<div class="space-y-4 mb-6">
							<div class="bg-white/20 rounded-lg p-3">
								<p class="text-white text-sm">"Analizza questo documento PDF..."</p>
							</div>
							<div class="bg-white/10 rounded-lg p-3 border border-yellow-400/50">
								<p class="text-yellow-200 text-xs mb-1">⚠️ Richiede Cloud</p>
								<p class="text-white text-sm">Condividere 3 chunk (scadenza: 1h)?</p>
								<div class="flex space-x-2 mt-2">
									<button class="px-3 py-1 bg-green-500 text-white rounded text-xs">Approva</button>
									<button class="px-3 py-1 bg-red-500 text-white rounded text-xs">Rifiuta</button>
								</div>
							</div>
						</div>

						<!-- Status Indicators -->
						<div class="space-y-2">
							<div class="flex justify-between text-white text-xs">
								<span>Locale (Ollama)</span>
								<span class="text-green-400">●</span>
							</div>
							<div class="flex justify-between text-white text-xs">
								<span>Vector DB</span>
								<span class="text-blue-400">●</span>
							</div>
							<div class="flex justify-between text-white text-xs">
								<span>Cloud Providers</span>
								<span class="text-purple-400">●</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right - Features -->
			<div class="text-white">
				<h3 class="text-3xl font-bold mb-6">App Mobile Dedicata</h3>
				<p class="text-blue-100 text-lg mb-8 leading-relaxed">
					Il controllo completo nelle tue mani. Ogni decisione passa attraverso te, ogni
					condivisione è trasparente e tracciabile.
				</p>

				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
							<Shield class="w-4 h-4 text-blue-400" />
						</div>
						<div>
							<h4 class="font-semibold mb-1">Controllo Granulare</h4>
							<p class="text-blue-100 text-sm">Decidi cosa condividere e per quanto tempo</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mt-1">
							<MessageSquare class="w-4 h-4 text-emerald-400" />
						</div>
						<div>
							<h4 class="font-semibold mb-1">Interfaccia Intuitiva</h4>
							<p class="text-blue-100 text-sm">Voice, testo, file - comunica come preferisci</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
							<Clock class="w-4 h-4 text-purple-400" />
						</div>
						<div>
							<h4 class="font-semibold mb-1">Log Completi</h4>
							<p class="text-blue-100 text-sm">Traccia ogni operazione e condivisione</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
