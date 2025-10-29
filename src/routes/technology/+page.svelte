<script>
	import { ShieldCheck, Smartphone, Lock, KeyRound, BellRing } from 'lucide-svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';

	const consentFeatures = [
		{
			icon: BellRing,
			title: 'Extension + proxy MCP',
			description:
				'Intercetta ogni tool MCP (GitHub, Gmail, Calendar, Secrets) e blocca la richiesta finché non arriva il consenso.'
		},
		{
			icon: Smartphone,
			title: 'Biometria nativa',
			description:
				'Push cifrata su iOS/Android con Touch ID, Face ID e biometriche Android. Nessun hardware da spedire.'
		},
		{
			icon: Lock,
			title: 'TTL dinamici e auto-negazione',
			description:
				'Se non rispondi entro la finestra definita la richiesta decade e viene notificata al team.'
		},
		{
			icon: KeyRound,
			title: 'FIDO2/WebAuthn opzionale',
			description:
				'Integrazione con YubiKey Bio / Token biometrici esistenti come fattore aggiuntivo per i team ad alta sicurezza.'
		}
	];

	const architecture = [
		{
			component: 'Browser extension',
			role: 'Intercetta e contestualizza',
			description: 'Cattura richieste AI e allega contesto (repo, email, calendario, secret).',
			icon: '🧩',
			connections: ['Proxy MCP']
		},
		{
			component: 'Proxy MCP Arvify',
			role: 'Policy & classification',
			description: 'Applica regole, TTL, minimizzazione e prepara il prompt di consenso.',
			icon: '🧠',
			connections: ['Browser extension', 'Consent app', 'Vault/FIDO2']
		},
		{
			component: 'Consent app mobile',
			role: 'Biometria + audit',
			description: 'Mostra i dati richiesti, raccoglie Touch ID / Face ID e firma i log.',
			icon: '📱',
			connections: ['Proxy MCP', 'SIEM/Audit']
		},
		{
			component: 'Dev kit hardware (post-pilot)',
			role: 'Consenso tattile dedicato',
			description:
				'20–50 unità dopo il pilot, basate sui feedback reali. Secure element e feedback aptico mirato.',
			icon: '⌚',
			connections: ['Consent app', 'Proxy MCP']
		}
	];
</script>

<svelte:head>
	<title>Architettura Consent Layer - Arvify</title>
	<meta
		name="description"
		content="Scopri l’architettura software-first di Arvify: estensione + proxy MCP, push biometrico, TTL dinamici e integrazione FIDO2. Hardware solo dopo il pilot pagato."
	/>
	<meta name="keywords" content="Consent Layer, MCP, Touch ID, Face ID, FIDO2, TTL, Audit Trail" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/technology" />
	<meta property="og:title" content="Tecnologia Arvify" />
	<meta
		property="og:description"
		content="Software-first, hardware-second: come funziona l’estensione + proxy MCP con biometria mobile e metriche di sicurezza."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/technology" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<Navigation variant="white" />

	<section class="pt-24 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
			<div
				class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
			>
				<ShieldCheck class="w-4 h-4 mr-2 text-emerald-300" />
				Software-first, hardware-second
			</div>
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				La Consent Layer che blocca l’AI finché non approvi tu
			</h1>
			<p class="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
				Extension, proxy MCP e mobile app lavorano insieme: ogni richiesta viene classificata,
				notificata e autorizzata con biometria. Il dev kit hardware arriva solo dopo i 90 giorni di
				pilot.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
				<div class="p-4 rounded-2xl bg-white/10 border border-white/15">
					<p class="text-3xl font-semibold text-white">⟂ &lt; 8s</p>
					<p class="text-sm text-slate-200">Tempo medio di risposta</p>
				</div>
				<div class="p-4 rounded-2xl bg-white/10 border border-white/15">
					<p class="text-3xl font-semibold text-white">27%</p>
					<p class="text-sm text-slate-200">Richieste auto-negate per timeout</p>
				</div>
				<div class="p-4 rounded-2xl bg-white/10 border border-white/15">
					<p class="text-3xl font-semibold text-white">100%</p>
					<p class="text-sm text-slate-200">Log firmati e auditabili</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Quattro layer di sicurezza</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Ogni layer è misurabile e integrabile nei sistemi che già usi. Nessuna promessa infondata:
					solo controlli verificabili.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each consentFeatures as feature (feature.title)}
					<div
						class="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
					>
						<div
							class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5"
						>
							<svelte:component this={feature.icon} class="w-6 h-6" />
						</div>
						<h3 class="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
						<p class="text-gray-600 leading-relaxed">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Architettura end-to-end</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Tutto parte dal browser, passa dal proxy MCP e arriva sul tuo telefono. Solo dopo il pilot
					aggiungiamo un dev kit hardware dedicato.
				</p>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
				{#each architecture as block (block.component)}
					<div
						class="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white"
					>
						<div class="flex items-center space-x-3 mb-4">
							<div class="text-3xl">{block.icon}</div>
							<div>
								<p class="text-sm uppercase tracking-[0.3em] text-blue-500">{block.role}</p>
								<h3 class="text-2xl font-semibold text-gray-900">{block.component}</h3>
							</div>
						</div>
						<p class="text-gray-600 leading-relaxed mb-4">{block.description}</p>
						<div class="text-sm text-gray-500">
							Connessioni: {block.connections.join(', ')}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-500">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
			<h2 class="text-4xl font-bold mb-6 text-center">Roadmap tecnica basata sui dati del pilot</h2>
			<p class="text-lg text-blue-100 leading-relaxed mb-10 text-center">
				Ogni sprint del pilot alimenta la roadmap hardware. Nessun claim su autonomia o "impossibile
				da hackerare" finché non abbiamo prove, test e audit indipendenti.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="p-6 rounded-2xl bg-white/10 border border-white/15">
					<p class="text-sm uppercase tracking-[0.3em] text-blue-200 mb-2">Fase 1</p>
					<h3 class="text-xl font-semibold mb-2">Consent Layer beta</h3>
					<p class="text-sm text-blue-100">
						Estensione + proxy MCP + metriche di sicurezza pronte.
					</p>
				</div>
				<div class="p-6 rounded-2xl bg-white/10 border border-white/15">
					<p class="text-sm uppercase tracking-[0.3em] text-blue-200 mb-2">Fase 2</p>
					<h3 class="text-xl font-semibold mb-2">Pilot pagato</h3>
					<p class="text-sm text-blue-100">
						3 clienti, report TTR, leak prevented, feedback bisettimanali.
					</p>
				</div>
				<div class="p-6 rounded-2xl bg-white/10 border border-white/15">
					<p class="text-sm uppercase tracking-[0.3em] text-blue-200 mb-2">Fase 3</p>
					<h3 class="text-xl font-semibold mb-2">Dev kit limitato</h3>
					<p class="text-sm text-blue-100">
						20–50 unità con secure element, audit indipendenti, test di penetrazione.
					</p>
				</div>
			</div>
		</div>
	</section>

	<DeviceFooter />
</div>
