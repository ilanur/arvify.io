<script>
	import {
		ShieldCheck,
		Smartphone,
		Puzzle,
		KeyRound,
		Activity,
		Gauge,
		History,
		Server
	} from 'lucide-svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';

	const layers = [
		{
			title: 'Estensione + proxy MCP',
			description:
				'Blocca prompt e azioni prima che raggiungano GitHub, Gmail, calendar, API o segreti.',
			icon: Puzzle
		},
		{
			title: 'Notifica telefono',
			description:
				'Push con contesto e TTL proposto. Approvi con Touch ID/Face ID in pochi secondi.',
			icon: Smartphone
		},
		{
			title: 'FIDO2 opzionale',
			description:
				'Integra YubiKey Bio o token biometrici come fattore aggiuntivo dove serve hardening.',
			icon: KeyRound
		},
		{
			title: 'Audit trail firmato',
			description: 'Log crittografici esportabili per SOC, legale e audit di terze parti.',
			icon: History
		}
	];

	const metrics = [
		{ label: 'TTR medio', value: '1.8s', description: 'Tempo di risposta utente', icon: Gauge },
		{
			label: '% auto-negate',
			value: '12%',
			description: 'Richieste scadute per timeout',
			icon: Activity
		},
		{
			label: 'Leak prevented',
			value: '37',
			description: 'Policy hit ultimo trimestre',
			icon: ShieldCheck
		},
		{
			label: 'Audit trail',
			value: '100%',
			description: 'Eventi firmati e sincronizzati',
			icon: History
		}
	];

	const architecture = [
		{
			component: 'Browser extension',
			role: 'Intercetta ogni richiesta AI e applica policy lato client.',
			icon: Puzzle,
			connections: ['Consent proxy', 'Mobile app']
		},
		{
			component: 'Consent proxy (MCP)',
			role: 'Normalizza richieste, redige dati e gestisce TTL.',
			icon: Server,
			connections: ['Browser extension', 'Provider esterni', 'Audit store']
		},
		{
			component: 'Mobile app',
			role: 'Notifica, mostra contesto e raccoglie consenso biometrico.',
			icon: Smartphone,
			connections: ['Browser extension', 'Consent proxy']
		},
		{
			component: 'Audit & secrets store',
			role: 'Genera token a tempo, registra log firmati e fornisce export.',
			icon: History,
			connections: ['Consent proxy', 'SIEM/SOC']
		}
	];
</script>

<svelte:head>
	<title>Tecnologia - Arvify Consent Layer</title>
	<meta
		name="description"
		content="Scopri l'architettura software-first di Arvify: estensione + proxy MCP, consenso via telefono, integrazione FIDO2 e roadmap hardware post-pilot."
	/>
	<meta
		name="keywords"
		content="Consent Layer, MCP, Touch ID, Face ID, FIDO2, Audit Trail, AI Governance"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/technology" />
	<meta property="og:title" content="Tecnologia Arvify Consent Layer" />
	<meta
		property="og:description"
		content="Blocca le richieste AI a monte: estensione, proxy MCP, consenso biometrico e metriche su TTR, auto-negate e leak prevented."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/technology" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation variant="white" />

	<section class="pt-24 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
			<div class="text-center">
				<div
					class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
				>
					<ShieldCheck class="w-4 h-4 mr-2 text-emerald-300" />
					Architettura software-first
				</div>

				<h1 class="text-5xl md:text-6xl font-bold mb-6">Il consenso AI parte dal tuo telefono</h1>

				<p class="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
					Arvify combina estensione, proxy MCP e biometria esistente per bloccare le richieste AI
					prima che lascino la tua organizzazione. Metriche e audit trail dimostrano il valore prima
					di investire nell’hardware.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
					{#each metrics as metric, index (index)}
						<div class="bg-white/10 rounded-2xl p-6 border border-white/10">
							<div class="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
								<svelte:component this={metric.icon} class="w-6 h-6 text-emerald-200" />
							</div>
							<p class="text-3xl font-bold">{metric.value}</p>
							<p class="text-sm text-gray-200/80">{metric.label}</p>
							<p class="text-xs text-gray-300/70 mt-2">{metric.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="py-20">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
				<div class="space-y-6">
					<h2 class="text-4xl font-bold text-gray-900">Stack software-first</h2>
					<p class="text-lg text-gray-600 leading-relaxed">
						Deploy in poche ore: estensione per intercettare gli agenti, proxy MCP che orchestra
						policy, mobile app per il consenso biometrico. FIDO2/WebAuthn si aggiunge quando hai
						bisogno di hardening extra.
					</p>
					<div class="space-y-4">
						{#each layers as layer, index (index)}
							<div
								class="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-5"
							>
								<div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
									<svelte:component this={layer.icon} class="w-6 h-6 text-blue-600" />
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">{layer.title}</h3>
									<p class="text-gray-600 text-sm leading-relaxed">{layer.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
					<h3 class="text-2xl font-semibold text-gray-900 mb-4">Misure e metriche</h3>
					<ul class="space-y-3 text-gray-600 text-sm leading-relaxed">
						<li>• Time to respond per team e per asset</li>
						<li>• Percentuale di richieste auto-negate per timeout</li>
						<li>• Leak prevented grazie alle policy hit</li>
						<li>• Audit trail esportabile (JSON + PDF) con firme verificabili</li>
					</ul>

					<div class="mt-8 p-5 rounded-2xl bg-slate-900 text-white">
						<h4 class="text-lg font-semibold mb-2">Roadmap hardware onesta</h4>
						<p class="text-sm text-slate-200/80 leading-relaxed">
							Dopo il pilot pagato con tre clienti, produciamo un dev kit limitato (20–50 unità).
							Nessuna promessa irrealistica: autonomia e sicurezza extra arrivano solo dopo test e
							audit indipendenti.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-20 bg-white">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-4xl font-bold text-gray-900 text-center mb-12">
				Architettura di riferimento
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each architecture as block, index (index)}
					<div class="rounded-3xl border border-gray-200 p-6 bg-gray-50">
						<div class="flex items-start gap-4 mb-4">
							<div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
								<svelte:component this={block.icon} class="w-6 h-6 text-blue-600" />
							</div>
							<div>
								<h3 class="text-xl font-semibold text-gray-900">{block.component}</h3>
								<p class="text-gray-600 text-sm leading-relaxed">{block.role}</p>
							</div>
						</div>
						<div class="text-xs text-gray-500 uppercase tracking-wide mb-2">Connessioni</div>
						<div class="flex flex-wrap gap-2">
							{#each block.connections as connection, connectionIndex (connectionIndex)}
								<span
									class="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs text-gray-600"
								>
									{connection}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<DeviceFooter />
</div>
