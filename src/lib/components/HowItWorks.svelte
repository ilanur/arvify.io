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
	</div>
</section>
