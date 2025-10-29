<script>
	import { Calendar, Target, Users, ShieldCheck, Clock, CheckCircle } from 'lucide-svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';

	const phases = [
		{
			title: 'Fase 0 — Allineamento',
			timeframe: 'Settimane 1-2',
			focus: 'Setup estensione + proxy MCP',
			items: [
				{ text: 'Deploy estensione aziendale (Chrome/Edge)', status: 'done' },
				{ text: 'Proxy MCP con policy base per GitHub, Gmail, Calendar', status: 'done' },
				{ text: 'Dashboard metriche iniziale (TTR, auto-negate)', status: 'in-progress' }
			]
		},
		{
			title: 'Fase 1 — Pilot software',
			timeframe: 'Settimane 3-12',
			focus: '3 clienti paganti',
			items: [
				{ text: 'Onboarding team legale, consulenza, dev', status: 'planned' },
				{ text: 'FIDO2/WebAuthn opzionale (YubiKey Bio, Token)', status: 'planned' },
				{ text: 'Weekly review metriche e policy hit', status: 'planned' },
				{ text: 'Report finale con leak prevented e audit trail', status: 'planned' }
			]
		},
		{
			title: 'Fase 2 — Hardening',
			timeframe: 'Settimane 13-18',
			focus: 'Ottimizzazioni post-pilot',
			items: [
				{ text: 'Feedback loop con i 3 clienti', status: 'planned' },
				{ text: 'Integrazione SIEM/SOC e export audit trail', status: 'planned' },
				{ text: 'Secrets broker con rotazione automatica', status: 'planned' }
			]
		},
		{
			title: 'Fase 3 — Dev kit hardware limitato',
			timeframe: 'Settimane 19-26',
			focus: '20–50 unità basate sui dati del pilot',
			items: [
				{ text: 'Definizione specifiche hardware con partner', status: 'planned' },
				{ text: 'Test biometrico con Touch ID/Face ID + sensori dedicati', status: 'planned' },
				{ text: 'Audit sicurezza esterno', status: 'planned' }
			]
		}
	];

	const successMetrics = [
		{ label: 'TTR medio < 2s', description: 'tempo medio di approvazione', icon: Clock },
		{ label: '≥ 10 leak prevented/mese', description: 'policy hit documentate', icon: ShieldCheck },
		{
			label: '100% audit trail firmato',
			description: 'log esportabile in JSON/PDF',
			icon: CheckCircle
		},
		{ label: 'Soddisfazione clienti ≥ 8/10', description: 'feedback pilot', icon: Users }
	];
</script>

<svelte:head>
	<title>Roadmap - Arvify Consent Layer</title>
	<meta
		name="description"
		content="Roadmap software-first di Arvify: pilot di 3 mesi con tre clienti, metriche TTR, integrazione FIDO2 opzionale e dev kit hardware limitato solo dopo i dati."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/roadmap" />
	<meta property="og:title" content="Roadmap Arvify Consent Layer" />
	<meta
		property="og:description"
		content="Scopri come Arvify lancia il Consent Layer: estensione + proxy MCP oggi, dev kit biometrico solo dopo il pilot pagato."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/roadmap" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation variant="white" />

	<section
		class="pt-24 pb-20 bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-900 text-white"
	>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<div
				class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
			>
				<Calendar class="w-4 h-4 mr-2 text-purple-200" />
				Roadmap software-first 2025
			</div>
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Dal pilot ai primi device</h1>
			<p class="text-xl text-gray-200 max-w-3xl mx-auto">
				Dimostriamo valore con estensione + proxy MCP, misuriamo TTR, auto-negate e leak prevented,
				poi produciamo un dev kit hardware limitato basato sui dati reali.
			</p>
		</div>
	</section>

	<section class="py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each phases as phase, index (index)}
					<div class="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
						<div class="flex items-center justify-between mb-6">
							<div>
								<h2 class="text-2xl font-semibold text-gray-900">{phase.title}</h2>
								<p class="text-sm text-gray-500 uppercase tracking-wide">{phase.timeframe}</p>
							</div>
							<span class="text-sm font-medium text-indigo-600">{phase.focus}</span>
						</div>
						<ul class="space-y-3 text-sm text-gray-600">
							{#each phase.items as item, itemIndex (itemIndex)}
								<li class="flex items-start gap-3">
									<span
										class={`w-2.5 h-2.5 rounded-full mt-1 ${item.status === 'done' ? 'bg-emerald-500' : item.status === 'in-progress' ? 'bg-amber-400' : 'bg-gray-300'}`}
									></span>
									{item.text}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 bg-white">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Metriche di successo</h2>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
				{#each successMetrics as metric, index (index)}
					<div class="rounded-2xl border border-gray-200 p-6 bg-gray-50 text-center">
						<div
							class="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-100 flex items-center justify-center"
						>
							<svelte:component this={metric.icon} class="w-6 h-6 text-indigo-600" />
						</div>
						<p class="text-lg font-semibold text-gray-900">{metric.label}</p>
						<p class="text-sm text-gray-600">{metric.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20">
		<div
			class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
		>
			<div class="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
				<h3 class="text-2xl font-semibold text-gray-900 mb-4">Perché hardware dopo</h3>
				<p class="text-gray-600 text-sm leading-relaxed mb-4">
					L’obiettivo è dimostrare il ROI senza costruire hardware custom. Solo dopo il pilot pagato
					valutiamo autonomia, materiali e supply chain per il dev kit biometrico.
				</p>
				<ul class="space-y-3 text-sm text-gray-600">
					<li>• Insight dai tre clienti → priorità hardware reali</li>
					<li>• Audit indipendenti prima di qualsiasi promessa “impossibile da hackerare”</li>
					<li>
						• Produzione limitata (20–50 unità) per validare comfort, autonomia, secure element
					</li>
				</ul>
			</div>
			<div
				class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white rounded-3xl p-8 shadow-lg"
			>
				<h3 class="text-2xl font-semibold mb-4">Invito al pilot</h3>
				<p class="text-sm text-white/80 leading-relaxed mb-6">
					Studio legale, consulenza, dev team: siete i primi tre clienti paganti. Ricevete supporto
					dedicato, metriche settimanali e accesso prioritario al dev kit hardware una volta
					validato.
				</p>
				<a
					href="/pricing"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all"
				>
					<Target class="w-5 h-5" />
					Richiedi il pilot
				</a>
			</div>
		</div>
	</section>

	<DeviceFooter />
</div>
