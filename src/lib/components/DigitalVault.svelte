<script>
	import { CheckCircle, Clock3, Fingerprint, Smartphone, Zap } from 'lucide-svelte';

	const flow = [
		{
			icon: Zap,
			title: 'Richiesta AI in arrivo',
			description:
				'GitHub, Gmail, Calendari o Secrets: l’estensione blocca la chiamata e invia il contesto al proxy MCP.'
		},
		{
			icon: Smartphone,
			title: 'Notifica immediata',
			description:
				'Push cifrata sul telefono con riepilogo dati, fattori richiesti e finestra temporale.'
		},
		{
			icon: Fingerprint,
			title: 'Biometria + policy',
			description:
				'Touch ID / Face ID autorizza l’azione. In alternativa puoi negare o lasciare scadere la richiesta.'
		},
		{
			icon: Clock3,
			title: 'TTL e cleanup',
			description:
				'Accesso valido solo per i secondi concessi. Auto-revoke, chiavi ruotate e log firmato in audit trail.'
		}
	];

	const metrics = [
		{
			label: 'TTR (time to respond)',
			value: '⟂ < 8s',
			description: 'Tempo medio per approvare/negare da mobile con biometria nativa.'
		},
		{
			label: '% richieste auto-negate',
			value: '27%',
			description:
				'Timeout configurabili. Ogni mancata risposta blocca la richiesta e notifica il team.'
		},
		{
			label: 'Leak prevented',
			value: '42 policy hits',
			description:
				'Numero di tentativi bloccati grazie a regole e TTL automatici durante i test interni.'
		},
		{
			label: 'Audit trail',
			value: '100% tracciato',
			description: 'Log firmati, esportabili via API e pronti per revisione compliance.'
		}
	];
</script>

<section
	class="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden"
>
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0"
			style="background-image: linear-gradient(120deg, rgba(56, 189, 248, 0.25) 0%, rgba(59, 130, 246, 0.15) 100%);"
		></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<p
				class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-semibold text-blue-200 mb-6"
			>
				Consent flow end-to-end
			</p>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
				Dal blocco al rilascio, in quattro mosse
			</h2>
			<p class="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
				Ogni interazione dell’AI è mediata dalla Consent Layer. Nessuna azione passa senza il tuo
				tocco. Il risultato è misurabile e pronto per team legali, consulenza e sviluppo.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="space-y-8">
				{#each flow as step, index (step.title)}
					<div class="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
						<div class="flex items-start space-x-4">
							<div
								class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-200"
							>
								<svelte:component this={step.icon} class="w-6 h-6" />
							</div>
							<div>
								<div class="flex items-center space-x-3 text-slate-300 text-sm mb-1">
									<span class="uppercase tracking-[0.3em] text-xs">Step {index + 1}</span>
									<span class="w-1 h-1 bg-slate-500 rounded-full"></span>
									<span>{step.title}</span>
								</div>
								<p class="text-base text-white leading-relaxed">{step.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div
				class="bg-slate-900/70 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
			>
				<div class="flex items-center justify-between mb-6">
					<div>
						<p class="text-sm uppercase tracking-[0.3em] text-blue-300">Metriche che contano</p>
						<h3 class="text-2xl font-semibold text-white">Misuriamo sicurezza reale</h3>
					</div>
					<div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
						<CheckCircle class="w-6 h-6 text-blue-200" />
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{#each metrics as metric (metric.label)}
						<div class="p-5 rounded-2xl bg-white/5 border border-white/10">
							<p class="text-xs uppercase tracking-[0.25em] text-blue-300 mb-2">{metric.label}</p>
							<p class="text-2xl font-semibold text-white mb-2">{metric.value}</p>
							<p class="text-sm text-slate-200 leading-relaxed">{metric.description}</p>
						</div>
					{/each}
				</div>

				<div
					class="mt-8 p-4 rounded-2xl border border-white/10 bg-white/5 text-slate-200 text-sm leading-relaxed"
				>
					<strong class="text-white">Audit trail continuo:</strong> esportiamo log firmati via API MCP
					per integrare SIEM e strumenti di compliance.
				</div>
			</div>
		</div>
	</div>
</section>
