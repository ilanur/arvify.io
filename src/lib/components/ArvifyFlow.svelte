<script>
	import {
		Smartphone,
		BellRing,
		Fingerprint,
		Timer,
		ShieldCheck,
		Gauge,
		Activity,
		History
	} from 'lucide-svelte';

	const { className = '' } = $props();

	const flow = [
		{
			title: '1. Richiesta AI',
			description:
				'Il proxy MCP intercetta prompt e azioni provenienti da agenti, estensioni e API.',
			icon: ShieldCheck,
			color: 'from-slate-900/80 to-slate-800/80'
		},
		{
			title: '2. Notifica telefono',
			description:
				'L’estensione invia push su iOS/Android con dettaglio dati richiesti e TTL proposto.',
			icon: BellRing,
			color: 'from-blue-900/80 to-indigo-900/80'
		},
		{
			title: '3. Touch ID / Face ID',
			description:
				'Approvi con biometria esistente oppure aggiungi FIDO2/WebAuthn (YubiKey Bio) come factor.',
			icon: Fingerprint,
			color: 'from-emerald-900/80 to-teal-900/80'
		},
		{
			title: '4. TTL & audit trail',
			description: 'Dati rilasciati per X secondi, auto-revoke, log firmato e replica su SIEM/SOC.',
			icon: Timer,
			color: 'from-cyan-900/80 to-sky-900/80'
		}
	];

	const metrics = [
		{
			label: 'TTR medio',
			value: '1.8s',
			trend: 'Tempo di risposta utente',
			icon: Gauge,
			bg: 'bg-emerald-100',
			text: 'text-emerald-600'
		},
		{
			label: '% auto-negate',
			value: '12%',
			trend: 'Richieste scadute per timeout',
			icon: Activity,
			bg: 'bg-blue-100',
			text: 'text-blue-600'
		},
		{
			label: 'Leak prevented',
			value: '37',
			trend: 'Policy hit nel trimestre',
			icon: ShieldCheck,
			bg: 'bg-violet-100',
			text: 'text-violet-600'
		},
		{
			label: 'Audit trail',
			value: '100%',
			trend: 'Eventi firmati e esportabili',
			icon: History,
			bg: 'bg-cyan-100',
			text: 'text-cyan-600'
		}
	];
</script>

<section class={`mx-auto max-w-7xl ${className}`}>
	<header class="text-center mb-14">
		<div
			class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 text-slate-100 border border-slate-700/60 mb-6"
		>
			<Smartphone class="w-4 h-4 text-emerald-300" />
			<span class="text-sm font-medium">Request → Phone → Biometria → TTL</span>
		</div>
		<h2 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
			Un workflow software-first per bloccare l’AI a monte
		</h2>
		<p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
			Niente hardware custom finché non serve: dimostri il valore con estensione + proxy MCP, poi
			aggiungi fattori FIDO2/WebAuthn dove ha senso.
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
		{#each flow as step, index (index)}
			<div
				class="rounded-3xl border border-white/10 bg-gradient-to-br {step.color} p-6 text-white shadow-xl"
			>
				<div class="flex items-center gap-3 mb-4">
					<div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
						<svelte:component this={step.icon} class="w-6 h-6 text-white" />
					</div>
					<h3 class="text-xl font-semibold">{step.title}</h3>
				</div>
				<p class="text-slate-100/80 leading-relaxed">{step.description}</p>
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
		{#each metrics as metric, index (index)}
			<div class="rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
				<div class="flex items-center gap-3 mb-4">
					<div class={`w-10 h-10 rounded-xl ${metric.bg} flex items-center justify-center`}>
						<svelte:component this={metric.icon} class={`w-5 h-5 ${metric.text}`} />
					</div>
					<span class="text-sm font-medium text-slate-500 uppercase tracking-wide"
						>{metric.label}</span
					>
				</div>
				<p class="text-3xl font-bold text-slate-900 mb-2">{metric.value}</p>
				<p class="text-sm text-slate-500">{metric.trend}</p>
			</div>
		{/each}
	</div>
</section>
