<script>
	import { Smartphone, MessageSquare, Fingerprint, Zap, Clock, CheckCircle } from 'lucide-svelte';

	const steps = [
		{
			number: 1,
			icon: MessageSquare,
			title: 'Richiesta AI',
			description: 'Chiedi qualcosa a ChatGPT, Claude o qualsiasi AI',
			color: 'blue',
			details: 'Funziona con ogni provider AI'
		},
		{
			number: 2,
			icon: Zap,
			title: 'Intercettazione',
			description: 'Il backend Bolt rileva la richiesta e prepara i dati rilevanti',
			color: 'emerald',
			details: 'Analisi semantica automatica'
		},
		{
			number: 3,
			icon: Fingerprint,
			title: 'Richiesta Consenso',
			description: 'Il bracciale vibra e chiede il consenso per condividere i dati',
			color: 'amber',
			details: 'Mostra TTL e tipologia dati'
		},
		{
			number: 4,
			icon: CheckCircle,
			title: 'Consenso Biometrico',
			description: 'Posizioni il dito sul sensore per approvare o nega con un gesto',
			color: 'purple',
			details: 'Sicurezza fisica impossibile da hackerare'
		},
		{
			number: 5,
			icon: Clock,
			title: 'Risposta e Cleanup',
			description: "L'AI risponde con i dati autorizzati, poi tutto viene cancellato",
			color: 'red',
			details: 'TTL automatico, zero persistenza'
		}
	];
</script>

<section class="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
				Come Funziona il
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
					Controllo Biometrico
				</span>
			</h2>
			<p class="text-xl text-blue-100 max-w-3xl mx-auto">
				Un workflow semplice che mette il controllo totale dei tuoi dati nelle tue mani
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

		<!-- Wearable Showcase -->
		<div class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left - Wearable Mockup -->
			<div class="relative">
				<div class="bg-gray-900 rounded-3xl p-8 shadow-2xl max-w-sm mx-auto">
					<!-- Wearable Visual -->
					<div class="flex justify-center mb-8">
						<div class="relative">
							<!-- Watch Band -->
							<div class="w-48 h-16 bg-gray-700 rounded-full relative">
								<!-- Wearable Device Center -->
								<div
									class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-blue-500 shadow-xl animate-pulse"
								>
									<!-- Screen -->
									<div class="w-full h-full bg-black rounded-2xl p-2">
										<div
											class="w-full h-full bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex flex-col items-center justify-center"
										>
											<Fingerprint class="w-6 h-6 text-white mb-1" />
											<div class="text-white text-xs">Consent?</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Vibration Effect -->
							<div
								class="absolute -top-2 -left-2 w-52 h-20 border-2 border-amber-400 rounded-full animate-ping opacity-30"
							></div>
						</div>
					</div>

					<!-- App Control Panel -->
					<div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6">
						<!-- Request Preview -->
						<div class="space-y-4 mb-6">
							<div class="bg-white/20 rounded-lg p-3">
								<p class="text-white text-sm">"Analizza le mie email per trovare..."</p>
							</div>
							<div class="bg-amber-500/20 rounded-lg p-3 border border-amber-400">
								<p class="text-amber-200 text-xs mb-1">🔔 Consenso Richiesto</p>
								<p class="text-white text-sm">6 estratti email - TTL: 120s</p>
								<div class="mt-2 text-xs text-gray-300">
									Metti il dito sul sensore per approvare
								</div>
							</div>
						</div>

						<!-- Status Indicators -->
						<div class="space-y-2">
							<div class="flex justify-between text-white text-xs">
								<span>Bracciale Connesso</span>
								<span class="text-green-400">●</span>
							</div>
							<div class="flex justify-between text-white text-xs">
								<span>Richiesta in Attesa</span>
								<span class="text-amber-400 animate-pulse">●</span>
							</div>
							<div class="flex justify-between text-white text-xs">
								<span>Backend Bolt</span>
								<span class="text-blue-400">●</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right - Features -->
			<div class="text-white">
				<h3 class="text-3xl font-bold mb-6">Controllo Fisico dell'AI</h3>
				<p class="text-blue-100 text-lg mb-8 leading-relaxed">
					Il tuo dito è la chiave. Nessun software può aggirare il tuo consenso biometrico.
				</p>

				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
							<Fingerprint class="w-4 h-4 text-blue-400" />
						</div>
						<div>
							<h4 class="font-semibold mb-1">Biometria Sicura</h4>
							<p class="text-blue-100 text-sm">Template criptati, mai condivisi online</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mt-1">
							<Zap class="w-4 h-4 text-emerald-400" />
						</div>
						<div>
							<h4 class="font-semibold mb-1">Feedback Immediato</h4>
							<p class="text-blue-100 text-sm">LED e vibrazione per ogni stato</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
							<Clock class="w-4 h-4 text-purple-400" />
						</div>
						<div>
							<h4 class="font-semibold mb-1">TTL Garantito</h4>
							<p class="text-blue-100 text-sm">Cancellazione automatica dopo scadenza</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
