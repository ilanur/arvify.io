<script>
	import {
		Calendar,
		Target,
		Users,
		Cpu,
		Shield,
		CheckCircle,
		Clock,
		AlertTriangle
	} from 'lucide-svelte';

	const roadmapPhases = [
		{
			phase: 'Fase 1',
			title: 'Fondamenta',
			timeframe: '0-3 mesi',
			status: 'in-progress',
			description: 'MVP concettuale + protezione iniziale',
			color: 'blue',
			objectives: [
				{ text: 'Design concettuale completato', status: 'completed' },
				{ text: 'Specifiche minime definite', status: 'completed' },
				{ text: 'Case 3D stampato per validazione', status: 'in-progress' },
				{ text: 'Firmware prototipo MCU ESP32-C6', status: 'in-progress' },
				{ text: 'Backend Bolt MVP', status: 'planned' },
				{ text: 'Provisional patent filing', status: 'planned' }
			],
			deliverables: [
				'Prototipo funzionante base',
				'PWA demo per smartphone',
				'Documentazione tecnica iniziale'
			]
		},
		{
			phase: 'Fase 2',
			title: 'MVP Reale',
			timeframe: '3-6 mesi',
			status: 'planned',
			description: 'Demo funzionante end-to-end',
			color: 'emerald',
			objectives: [
				{ text: 'PCB custom con secure element', status: 'planned' },
				{ text: 'Batteria LiPo + ricarica magnetica', status: 'planned' },
				{ text: 'Case stampato + cinturino', status: 'planned' },
				{ text: 'Driver fingerprint + template match', status: 'planned' },
				{ text: 'Firma ECDSA completa', status: 'planned' },
				{ text: 'Backend Bolt con vector DB', status: 'planned' }
			],
			deliverables: [
				'Hardware rev1 funzionale',
				'App mobile completa iOS/Android',
				'Demo video marketing',
				'Pitch deck v1'
			]
		},
		{
			phase: 'Fase 3',
			title: 'Validazione',
			timeframe: '6-9 mesi',
			status: 'planned',
			description: 'Proof of demand con early adopters',
			color: 'amber',
			objectives: [
				{ text: 'Test con 10-20 early adopters', status: 'planned' },
				{ text: 'Feedback loop e iterazioni', status: 'planned' },
				{ text: 'Miglioramento comfort e autonomia', status: 'planned' },
				{ text: 'Ottimizzazione UX vibrazione/LED', status: 'planned' },
				{ text: 'Landing page arvify.io', status: 'planned' },
				{ text: 'Contatti angel investors', status: 'planned' }
			],
			deliverables: [
				'Hardware rev1.5 ottimizzato',
				'Feedback report dettagliato',
				'Validazione product-market fit',
				'Contatti investitori qualificati'
			]
		},
		{
			phase: 'Fase 4',
			title: 'Scalabilità',
			timeframe: '9-12 mesi',
			status: 'planned',
			description: 'Pronto per vendita o partnership',
			color: 'purple',
			objectives: [
				{ text: 'Hardware rev2 miniaturizzato', status: 'planned' },
				{ text: 'Sensore fingerprint integrato', status: 'planned' },
				{ text: 'Autonomia 5-7 giorni ottimizzata', status: 'planned' },
				{ text: 'Pitch deck finale + traction', status: 'planned' },
				{ text: 'Brevetto PCT internazionale', status: 'planned' },
				{ text: 'Meeting con big tech', status: 'planned' }
			],
			deliverables: [
				'Prodotto pronto per produzione',
				'Business case completo',
				'Protezione IP internazionale'
			]
		}
	];

	const kpis = [
		{
			metric: 'Prototipo Funzionante',
			target: '6 mesi',
			status: 'on-track',
			icon: Cpu,
			color: 'blue'
		},
		{
			metric: 'Early Adopters Attivi',
			target: '10-20 utenti',
			status: 'planned',
			icon: Users,
			color: 'emerald'
		},
		{
			metric: 'Pitch Deck + Demo',
			target: '12 mesi',
			status: 'planned',
			icon: Target,
			color: 'amber'
		},
		{
			metric: 'Brevetto PCT',
			target: '12 mesi',
			status: 'planned',
			icon: Shield,
			color: 'purple'
		}
	];

	const technicalMilestones = [
		{ milestone: 'Sensore Fingerprint Integrato', quarter: 'Q1 2025', status: 'in-progress' },
		{ milestone: 'Secure Element ATECC608A', quarter: 'Q1 2025', status: 'planned' },
		{ milestone: 'Backend Bolt + Vector DB', quarter: 'Q2 2025', status: 'planned' },
		{ milestone: 'App Mobile Cross-Platform', quarter: 'Q2 2025', status: 'planned' },
		{ milestone: 'Hardware Miniaturizzato', quarter: 'Q3 2025', status: 'planned' },
		{ milestone: 'Produzione di Serie', quarter: 'Q4 2025', status: 'planned' }
	];
</script>

<svelte:head>
	<title>Roadmap Arvify - I Prossimi 12 Mesi del Progetto</title>
	<meta
		name="description"
		content="Scopri la roadmap completa di Arvify: dalle fondamenta al prodotto finale in 12 mesi. MVP, validazione, scalabilità."
	/>
	<meta name="keywords" content="Arvify Roadmap, Sviluppo Prodotto, MVP, Brevetto, Scalabilità" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/roadmap" />
	<meta property="og:title" content="Roadmap Arvify" />
	<meta
		property="og:description"
		content="Scopri la roadmap completa di Arvify per i prossimi 12 mesi: dallo sviluppo MVP alla scalabilità."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/roadmap" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="bg-gray-50">
	<!-- Hero Section -->
	<section class="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<div
					class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white"
				>
					<Calendar class="w-4 h-4 mr-2 text-purple-400" />
					Roadmap 2025
				</div>

				<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
					I Prossimi
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
					>
						12 Mesi
					</span>
				</h1>

				<p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
					Dal concept al prototipo funzionante, fino al brevetto e al pitch per investitori. Ecco
					come Arvify diventerà realtà.
				</p>

				<!-- Timeline Overview -->
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
					<div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
						<div class="text-2xl font-bold text-blue-400 mb-1">0-3</div>
						<div class="text-gray-300 text-sm">Fondamenta</div>
					</div>
					<div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
						<div class="text-2xl font-bold text-emerald-400 mb-1">3-6</div>
						<div class="text-gray-300 text-sm">MVP Reale</div>
					</div>
					<div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
						<div class="text-2xl font-bold text-amber-400 mb-1">6-9</div>
						<div class="text-gray-300 text-sm">Validazione</div>
					</div>
					<div class="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
						<div class="text-2xl font-bold text-purple-400 mb-1">9-12</div>
						<div class="text-gray-300 text-sm">Scalabilità</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Roadmap Phases -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">
					Fasi di
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
						Sviluppo
					</span>
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Quattro fasi strategiche per portare Arvify dal concept al mercato
				</p>
			</div>

			<div class="space-y-12">
				{#each roadmapPhases as phase, i (i)}
					<div class="relative">
						<!-- Timeline connector -->
						{#if i < roadmapPhases.length - 1}
							<div
								class="absolute left-8 top-24 w-1 h-32 bg-gradient-to-b from-{phase.color}-300 to-{roadmapPhases[
									i + 1
								].color}-300 hidden lg:block"
							></div>
						{/if}

						<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
							<!-- Phase Header -->
							<div class="lg:col-span-3">
								<div class="flex items-center space-x-4 mb-4">
									<div
										class="w-16 h-16 bg-{phase.color}-100 rounded-full flex items-center justify-center"
									>
										<span class="text-{phase.color}-600 font-bold text-lg">{i + 1}</span>
									</div>
									<div>
										<div class="text-sm font-medium text-{phase.color}-600 uppercase tracking-wide">
											{phase.phase}
										</div>
										<h3 class="text-2xl font-bold text-gray-900">{phase.title}</h3>
										<div class="text-gray-600">{phase.timeframe}</div>
									</div>
								</div>
								<p class="text-gray-600 mb-4">{phase.description}</p>

								<!-- Status badge -->
								<div
									class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
									{phase.status === 'completed'
										? 'bg-green-100 text-green-700'
										: phase.status === 'in-progress'
											? 'bg-blue-100 text-blue-700'
											: 'bg-gray-100 text-gray-700'}"
								>
									{#if phase.status === 'completed'}
										<CheckCircle class="w-4 h-4 mr-1" />
										Completata
									{:else if phase.status === 'in-progress'}
										<Clock class="w-4 h-4 mr-1" />
										In Corso
									{:else}
										<AlertTriangle class="w-4 h-4 mr-1" />
										Pianificata
									{/if}
								</div>
							</div>

							<!-- Objectives -->
							<div class="lg:col-span-5">
								<h4 class="text-lg font-semibold text-gray-900 mb-4">Obiettivi</h4>
								<div class="space-y-3">
									{#each phase.objectives as objective (objective.text)}
										<div class="flex items-start space-x-3">
											<div class="mt-1">
												{#if objective.status === 'completed'}
													<CheckCircle class="w-4 h-4 text-green-500" />
												{:else if objective.status === 'in-progress'}
													<Clock class="w-4 h-4 text-blue-500" />
												{:else}
													<div class="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
												{/if}
											</div>
											<span
												class="text-gray-700 {objective.status === 'completed'
													? 'line-through opacity-75'
													: ''}">{objective.text}</span
											>
										</div>
									{/each}
								</div>
							</div>

							<!-- Deliverables -->
							<div class="lg:col-span-4">
								<h4 class="text-lg font-semibold text-gray-900 mb-4">Deliverables</h4>
								<div class="space-y-2">
									{#each phase.deliverables as deliverable (deliverable)}
										<div class="flex items-center space-x-2">
											<div class="w-2 h-2 bg-{phase.color}-500 rounded-full"></div>
											<span class="text-gray-700 text-sm">{deliverable}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- KPIs -->
	<section class="py-20 bg-gradient-to-br from-gray-900 to-slate-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">
					KPI e
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
						Metriche Chiave
					</span>
				</h2>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					Gli indicatori di successo che guideranno lo sviluppo di Arvify
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each kpis as kpi (kpi.label)}
					<div class="text-center">
						<div
							class="w-20 h-20 bg-{kpi.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
						>
							<svelte:component this={kpi.icon} class="w-10 h-10 text-{kpi.color}-400" />
						</div>
						<h3 class="text-lg font-bold text-white mb-2">{kpi.metric}</h3>
						<div class="text-2xl font-bold text-{kpi.color}-400 mb-2">{kpi.target}</div>
						<div
							class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
							{kpi.status === 'on-track' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}"
						>
							{kpi.status === 'on-track' ? '✓ On Track' : '⏳ Planned'}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Technical Milestones -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">
					Milestone
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
						Tecniche
					</span>
				</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					I traguardi tecnici fondamentali per il successo del progetto
				</p>
			</div>

			<div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
				<div class="space-y-6">
					{#each technicalMilestones as milestone, i (i)}
						<div
							class="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							<div class="flex items-center space-x-4">
								<div
									class="w-8 h-8 rounded-full
									{milestone.status === 'completed'
										? 'bg-green-500'
										: milestone.status === 'in-progress'
											? 'bg-blue-500'
											: 'bg-gray-300'} 
									flex items-center justify-center text-white text-sm font-bold"
								>
									{i + 1}
								</div>
								<div>
									<h3 class="font-semibold text-gray-900">{milestone.milestone}</h3>
									<p class="text-sm text-gray-600">{milestone.quarter}</p>
								</div>
							</div>
							<div class="text-right">
								<span
									class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
									{milestone.status === 'completed'
										? 'bg-green-100 text-green-700'
										: milestone.status === 'in-progress'
											? 'bg-blue-100 text-blue-700'
											: 'bg-gray-100 text-gray-700'}"
								>
									{milestone.status === 'completed'
										? 'Completato'
										: milestone.status === 'in-progress'
											? 'In Corso'
											: 'Pianificato'}
								</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl font-bold text-white mb-6">Vuoi Essere Parte del Futuro?</h2>
			<p class="text-xl text-purple-100 mb-8">
				Arvify è più di un prodotto: è una rivoluzione nel controllo dell'AI. Unisciti a noi in
				questo viaggio verso la privacy totale.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/modelli"
					class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
				>
					Preordina Arvify
				</a>
				<a
					href="/technology"
					class="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
				>
					Scopri la Tecnologia
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
</div>
