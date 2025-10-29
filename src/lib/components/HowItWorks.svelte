<script>
	import { Puzzle, Smartphone, Fingerprint, Timer, ShieldCheck, BarChart3 } from 'lucide-svelte';

	const steps = [
		{
			title: 'Deploy estensione + proxy MCP',
			description:
				'Si installa in Chrome/Edge e si collega al proxy Arvify. Nessun hardware dedicato, zero downtime.',
			icon: Puzzle,
			color: 'blue'
		},
		{
			title: 'Intercetta le richieste AI',
			description:
				'Ogni prompt o azione passa dal consent layer: vediamo chi chiede cosa, da dove e per quanto tempo.',
			icon: ShieldCheck,
			color: 'emerald'
		},
		{
			title: 'Notifica e consenso biometrico',
			description:
				'Push su smartphone con dettaglio asset. Touch ID/Face ID oppure chiavi biometriche FIDO2 opzionali.',
			icon: Smartphone,
			color: 'indigo'
		},
		{
			title: 'TTL, audit e metriche',
			description:
				'Dati rilasciati con timer visibile, log firmato e dashboard su TTR, auto-negate e leak prevented.',
			icon: Timer,
			color: 'cyan'
		}
	];

	const pilotPlan = [
		'3 clienti paganti (studio legale, consulenza, dev team)',
		'Contratto 3 mesi con check-in settimanale',
		'Raccolta feedback + hardening sicurezza',
		'Dev kit hardware (20-50 unità) solo dopo i dati del pilot'
	];
</script>

<section class="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">Come Arvify cambia il consenso AI</h2>
			<p class="text-xl text-indigo-100 max-w-3xl mx-auto">
				Dimostriamo il valore in poche settimane: software first, metriche chiare e roadmap hardware
				onesta.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
			{#each steps as step, index (index)}
				<div
					class="relative z-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
				>
					<div
						class={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-${step.color}-500/20 flex items-center justify-center`}
					>
						<svelte:component this={step.icon} class={`w-7 h-7 text-${step.color}-200`} />
					</div>
					<h3 class="text-lg font-semibold mb-3">{step.title}</h3>
					<p class="text-sm text-indigo-100/80 leading-relaxed">{step.description}</p>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
			<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
				<div class="flex items-center gap-3 text-cyan-200 mb-4">
					<BarChart3 class="w-6 h-6" />
					<h3 class="text-xl font-semibold">Metriche che contano</h3>
				</div>
				<ul class="space-y-3 text-sm text-indigo-100/80 leading-relaxed">
					<li>• TTR (time to respond) per ogni team</li>
					<li>• % richieste auto-negate per timeout</li>
					<li>• Leak prevented grazie alle policy hit</li>
					<li>• Audit trail esportabile verso il SOC</li>
				</ul>
			</div>

			<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
				<div class="flex items-center gap-3 text-emerald-200 mb-4">
					<Fingerprint class="w-6 h-6" />
					<h3 class="text-xl font-semibold">Pilot pagato, poi hardware</h3>
				</div>
				<ul class="space-y-3 text-sm text-indigo-100/80 leading-relaxed">
					{#each pilotPlan as item, index (index)}
						<li>• {item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
