<script>
	import { Shield, Zap, Cloud, Smartphone, Database, Lock, Cpu, Wifi } from 'lucide-svelte';

	const advantages = [
		{
			icon: Shield,
			title: 'Privacy First',
			description:
				'I tuoi dati rimangono sul dispositivo. Solo i chunk selezionati vanno in cloud quando necessario.',
			color: 'emerald',
			highlight: '100% controllo dei dati'
		},
		{
			icon: Zap,
			title: 'Velocità Ibrida',
			description:
				'Ollama locale per risposte istantanee, cloud premium solo quando serve potenza extra.',
			color: 'blue',
			highlight: 'Latenza <100ms locale'
		},
		{
			icon: Smartphone,
			title: 'Controllo Mobile',
			description:
				'App dedicata per approvare condivisioni, monitorare attività e gestire impostazioni.',
			color: 'purple',
			highlight: 'Controllo granulare'
		},
		{
			icon: Database,
			title: 'Vector Database',
			description:
				'sqlite-vec integrato per indicizzazione semantica e recupero contestuale intelligente.',
			color: 'amber',
			highlight: 'Ricerca semantica'
		},
		{
			icon: Lock,
			title: 'Scadenza TTL',
			description:
				'Ogni condivisione cloud ha una scadenza automatica. Nessun dato permanente sui server.',
			color: 'red',
			highlight: 'Auto-cancellazione'
		},
		{
			icon: Cpu,
			title: 'Raspberry Pi 5',
			description:
				'8GB RAM, ARM Cortex-A76, perfetto per modelli AI leggeri e elaborazione locale.',
			color: 'green',
			highlight: 'Prestazioni dedicate'
		}
	];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Perché Smart AI Box è
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
					Rivoluzionario
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Il primo assistente AI che rispetta davvero la tua privacy, senza rinunciare alle
				prestazioni del cloud quando necessario.
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
				<Cloud class="w-5 h-5 mr-2" />
				<span>Approccio Ibrido = Meglio del Solo Cloud</span>
				<Wifi class="w-5 h-5 ml-2" />
			</div>
		</div>
	</div>
</section>
