<script>
	import { Shield, Zap, Fingerprint, Smartphone, Clock, Lock, Heart, Battery } from 'lucide-svelte';

	const advantages = [
		{
			icon: Fingerprint,
			title: 'Controllo Biometrico',
			description:
				"Solo la tua impronta digitale può autorizzare l'accesso ai tuoi dati. Sicurezza fisica impossibile da hackerare.",
			color: 'blue',
			highlight: 'Autenticazione al 100%'
		},
		{
			icon: Shield,
			title: 'Privacy Assoluta',
			description:
				'Nessun dato condiviso senza il tuo consenso esplicito. Ogni richiesta AI viene approvata dal tuo dito.',
			color: 'emerald',
			highlight: 'Zero compromessi'
		},
		{
			icon: Zap,
			title: 'Consenso Istantaneo',
			description:
				"Un tocco sul sensore e l'AI può accedere ai dati per il tempo stabilito. Veloce come un battito di ciglia.",
			color: 'purple',
			highlight: 'Risposta <1 secondo'
		},
		{
			icon: Clock,
			title: 'TTL Automatico',
			description:
				'I dati condivisi si auto-cancellano dopo il tempo prestabilito. Nessuna traccia permanente.',
			color: 'amber',
			highlight: 'Auto-cancellazione'
		},
		{
			icon: Smartphone,
			title: 'App Universale',
			description:
				'Compatibile con tutti i provider AI: OpenAI, Anthropic, Google, Microsoft. Un bracciale per tutto.',
			color: 'red',
			highlight: 'Supporto universale'
		},
		{
			icon: Battery,
			title: 'Autonomia Settimane',
			description:
				'Batteria a lunga durata con ricarica magnetica. 5-7 giorni di utilizzo continuo.',
			color: 'green',
			highlight: 'Sempre pronto'
		}
	];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Il Controllo dell'AI
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
					È nelle Tue Mani
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Il primo bracciale al mondo che ti dà controllo totale sui tuoi dati AI. Approva con un
				tocco, nega con un gesto.
			</p>
		</div>

		<!-- Advantages Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each advantages as advantage, i}
				<div
					class="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-{advantage.color}-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
					style="animation-delay: {i * 100}ms"
				>
					<!-- Icon -->
					<div
						class="w-16 h-16 bg-{advantage.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
					>
						<svelte:component this={advantage.icon} class="w-8 h-8 text-{advantage.color}-600" />
					</div>

					<!-- Content -->
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						{advantage.title}
					</h3>

					<p class="text-gray-600 mb-4 leading-relaxed">
						{advantage.description}
					</p>

					<!-- Highlight Badge -->
					<div
						class="inline-flex items-center px-3 py-1 bg-{advantage.color}-100 text-{advantage.color}-700 rounded-full text-sm font-medium"
					>
						{advantage.highlight}
					</div>

					<!-- Hover Effect -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-{advantage.color}-500/5 to-{advantage.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
					></div>
				</div>
			{/each}
		</div>

		<!-- Bottom CTA -->
		<div class="mt-16 text-center">
			<div
				class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
			>
				<Fingerprint class="w-5 h-5 mr-2" />
				<span>Your Fingerprint. Your AI. Your Rules.</span>
				<Heart class="w-5 h-5 ml-2" />
			</div>
		</div>
	</div>
</section>
