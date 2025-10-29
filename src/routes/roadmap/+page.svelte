<script>
	import { Calendar, Target, Users, ShieldCheck, Cpu, ClipboardCheck, Clock } from 'lucide-svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';

	const roadmapPhases = [
		{
			phase: 'Fase 0',
			title: 'Consent Layer alpha',
			timeframe: 'Mese 0-1',
			status: 'in-progress',
			description: 'Estensione + proxy MCP con metriche base.',
			color: 'blue',
			objectives: [
				{ text: 'Intercept su GitHub, Gmail, Calendar', status: 'completed' },
				{ text: 'Notifiche mobile con Touch ID / Face ID', status: 'in-progress' },
				{ text: 'Metriche TTR e timeout auto-negate', status: 'in-progress' },
				{ text: 'API audit trail firmate', status: 'planned' }
			],
			deliverables: [
				'Consent Layer beta access',
				'Dashboard metriche settimanali',
				'Documentazione policy MCP'
			]
		},
		{
			phase: 'Fase 1',
			title: 'Pilot pagato (3 clienti)',
			timeframe: 'Mese 2-4',
			status: 'planned',
			description: 'Contratto 90 giorni con studio legale, consulenza, dev team.',
			color: 'emerald',
			objectives: [
				{ text: 'Deploy estensione + proxy in <1 settimana', status: 'planned' },
				{ text: 'Report TTR, policy hit, leak prevented', status: 'planned' },
				{ text: 'Integrazione FIDO2 / YubiKey Bio', status: 'planned' },
				{ text: 'Feedback bisettimanale → hardening', status: 'planned' }
			],
			deliverables: [
				'Report finale con audit trail',
				'Playbook di sicurezza personalizzato',
				'Raccomandazioni per rollout esteso'
			]
		},
		{
			phase: 'Fase 2',
			title: 'Dev kit hardware limitato',
			timeframe: 'Mese 5-7',
			status: 'planned',
			description: '20–50 unità basate sui dati del pilot, con test e audit.',
			color: 'amber',
			objectives: [
				{ text: 'Selezione componenti con secure element', status: 'planned' },
				{ text: 'Test ergonomia e feedback aptico', status: 'planned' },
				{ text: 'Penetration test e audit indipendenti', status: 'planned' },
				{ text: 'SDK hardware + API unificata', status: 'planned' }
			],
			deliverables: [
				'Dev kit hardware 20–50 unità',
				'Report audit di sicurezza',
				'Roadmap produzione estesa'
			]
		},
		{
			phase: 'Fase 3',
			title: 'Scale-up misurato',
			timeframe: 'Mese 8-12',
			status: 'planned',
			description: 'Espansione controllata con prove metriche e compliance.',
			color: 'purple',
			objectives: [
				{ text: 'Integrazione SIEM / SOC automatizzata', status: 'planned' },
				{ text: 'Certificazioni e audit periodici', status: 'planned' },
				{ text: 'Modello commerciale per rollout enterprise', status: 'planned' },
				{ text: 'Feedback continuo su hardware + software', status: 'planned' }
			],
			deliverables: [
				'SLA e supporto dedicato',
				'Programma di certificazione partner',
				'Versione hardware v1 con specifiche validate'
			]
		}
	];

	const kpis = [
		{
			metric: 'TTR medio',
			target: '< 8 secondi',
			status: 'in-progress',
			icon: Clock,
			color: 'blue'
		},
		{
			metric: 'Policy hit prevenute',
			target: '>= 40 su 3 mesi',
			status: 'planned',
			icon: ShieldCheck,
			color: 'emerald'
		},
		{ metric: 'Clienti pilot attivi', target: '3', status: 'planned', icon: Users, color: 'amber' },
		{
			metric: 'Audit indipendenti',
			target: '2 completati',
			status: 'planned',
			icon: ClipboardCheck,
			color: 'purple'
		}
	];

	const technicalMilestones = [
		{
			milestone: 'Proxy MCP con classification semantica',
			quarter: 'Mese 1',
			status: 'in-progress'
		},
		{ milestone: 'Push mobile biometrico + TTL dinamici', quarter: 'Mese 2', status: 'planned' },
		{ milestone: 'Integrazione FIDO2/WebAuthn', quarter: 'Mese 3', status: 'planned' },
		{ milestone: 'Report metriche automatizzato', quarter: 'Mese 4', status: 'planned' },
		{ milestone: 'Dev kit hardware testato', quarter: 'Mese 6', status: 'planned' },
		{ milestone: 'Audit indipendenti completati', quarter: 'Mese 7', status: 'planned' }
	];
</script>

<svelte:head>
	<title>Roadmap Arvify - Dal software al dev kit</title>
	<meta
		name="description"
		content="Roadmap Arvify: Consent Layer software-first, pilot pagato con tre clienti, dev kit hardware limitato solo dopo test e audit."
	/>
	<meta name="keywords" content="Arvify roadmap, consent layer, pilot pagato, dev kit hardware" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/roadmap" />
	<meta property="og:title" content="Roadmap Arvify" />
	<meta
		property="og:description"
		content="Dal blocco software alla biometria mobile, fino a un dev kit limitato validato da metriche e audit."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/roadmap" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation variant="white" />

	<section class="pt-24 pb-20 bg-gradient-to-br from-slate-950 via-purple-900 to-indigo-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
			<div
				class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
			>
				<Calendar class="w-4 h-4 mr-2 text-purple-300" />
				Roadmap software-first
			</div>
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Dal consenso software al dev kit</h1>
			<p class="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
				Ogni fase è misurabile: prima blocchiamo l’AI con estensione + proxy MCP, poi validiamo con
				un pilot pagato, infine costruiamo hardware basato sui numeri.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
				<div class="text-center p-4 bg-white/10 rounded-xl">
					<div class="text-2xl font-bold text-blue-300 mb-1">0-1</div>
					<div class="text-purple-100 text-sm">Consent Layer alpha</div>
				</div>
				<div class="text-center p-4 bg-white/10 rounded-xl">
					<div class="text-2xl font-bold text-emerald-300 mb-1">2-4</div>
					<div class="text-purple-100 text-sm">Pilot pagato</div>
				</div>
				<div class="text-center p-4 bg-white/10 rounded-xl">
					<div class="text-2xl font-bold text-amber-300 mb-1">5-7</div>
					<div class="text-purple-100 text-sm">Dev kit limitato</div>
				</div>
				<div class="text-center p-4 bg-white/10 rounded-xl">
					<div class="text-2xl font-bold text-pink-300 mb-1">8-12</div>
					<div class="text-purple-100 text-sm">Scale-up misurato</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each roadmapPhases as phase (phase.phase)}
					<div class="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div class="flex items-start justify-between mb-4">
							<div>
								<p class="text-sm uppercase tracking-[0.3em] text-{phase.color}-500">
									{phase.phase}
								</p>
								<h2 class="text-2xl font-semibold text-gray-900">{phase.title}</h2>
							</div>
							<span
								class="px-3 py-1 rounded-full text-xs font-semibold bg-{phase.color}-100 text-{phase.color}-700"
							>
								{phase.timeframe}
							</span>
						</div>
						<p class="text-gray-600 leading-relaxed mb-4">{phase.description}</p>
						<div class="mb-4">
							<p class="text-sm font-semibold text-gray-900 mb-2">Obiettivi chiave</p>
							<ul class="space-y-2 text-sm text-gray-700">
								{#each phase.objectives as objective (objective.text)}
									<li class="flex items-start space-x-2">
										<Cpu class="w-4 h-4 text-{phase.color}-500 mt-0.5" />
										<span>{objective.text}</span>
									</li>
								{/each}
							</ul>
						</div>
						<div>
							<p class="text-sm font-semibold text-gray-900 mb-2">Deliverable</p>
							<ul class="space-y-2 text-sm text-gray-700">
								{#each phase.deliverables as deliverable (deliverable)}
									<li class="flex items-start space-x-2">
										<Target class="w-4 h-4 text-{phase.color}-500 mt-0.5" />
										<span>{deliverable}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Metriche che guidano ogni fase</h2>
				<p class="text-gray-600 max-w-3xl mx-auto">
					Non avanziamo se le metriche non lo giustificano. TTR, policy hit e audit sono la base per
					decidere quando introdurre l’hardware.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
				{#each kpis as kpi (kpi.metric)}
					<div
						class="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white"
					>
						<div
							class="w-10 h-10 rounded-xl bg-{kpi.color}-100 text-{kpi.color}-600 flex items-center justify-center mb-4"
						>
							<svelte:component this={kpi.icon} class="w-5 h-5" />
						</div>
						<p class="text-sm uppercase tracking-[0.3em] text-{kpi.color}-600 mb-1">{kpi.metric}</p>
						<p class="text-lg font-semibold text-gray-900 mb-1">{kpi.target}</p>
						<p class="text-sm text-gray-500 capitalize">{kpi.status}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-500 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
				<div class="lg:max-w-2xl">
					<h2 class="text-4xl font-bold mb-4">Milestone tecniche</h2>
					<p class="text-blue-100 leading-relaxed">
						Ogni milestone è un checkpoint: se non raggiungiamo le metriche concordate, non passiamo
						alla fase successiva. Così dimostriamo serietà prima di parlare di hardware.
					</p>
				</div>
				<div class="w-full lg:max-w-xl bg-white/10 border border-white/20 rounded-2xl p-8">
					<ul class="space-y-4">
						{#each technicalMilestones as milestone (milestone.milestone)}
							<li class="flex items-start justify-between">
								<div>
									<p class="text-lg font-semibold text-white">{milestone.milestone}</p>
									<p class="text-sm text-blue-100">{milestone.quarter}</p>
								</div>
								<span
									class="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white capitalize"
								>
									{milestone.status}
								</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<DeviceFooter />
</div>
