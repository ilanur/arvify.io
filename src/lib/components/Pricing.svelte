<script>
	import { Check, Users, ShieldCheck, Timer, BadgeEuro, KeyRound, Smartphone } from 'lucide-svelte';

	const pilot = {
		name: 'Pilot Consent Layer',
		price: 'su preventivo',
		description: 'Programma di 3 mesi per dimostrare il valore software-first.',
		highlights: [
			'Deployment estensione + proxy MCP in 48h',
			'Supporto onboarding per 3 team (legal, consulenza, dev)',
			'Setup metriche TTR, auto-negate, leak prevented',
			'Integrazione opzionale FIDO2/WebAuthn (YubiKey Bio, Token)',
			'Report settimanale e hardening continuo',
			'Accesso prioritario al dev kit hardware (20–50 unità) post-pilot'
		],
		outcomes: [
			'Consenso biometrico via Touch ID/Face ID',
			'Secrets broker con credenziali a TTL',
			'Audit trail firmato e esportabile',
			'Playbook incident response AI-ready'
		]
	};
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pilot software-first</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Dimostri il valore del Consent Layer prima di investire in hardware. Programma pagato di 3
				mesi con metriche chiare e roadmap condivisa.
			</p>
		</div>

		<div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
					<div
						class="flex items-center gap-3 text-blue-600 text-sm font-semibold uppercase tracking-wide mb-6"
					>
						<BadgeEuro class="w-5 h-5" />
						{pilot.name}
					</div>
					<h3 class="text-3xl font-bold text-gray-900 mb-4">Impegno 3 mesi</h3>
					<p class="text-gray-600 mb-6 leading-relaxed">{pilot.description}</p>
					<div class="text-sm text-gray-500 mb-8">
						Tariffa personalizzata in base a numero di utenti e integrazioni richieste.
					</div>

					<div class="space-y-4">
						{#each pilot.highlights as highlight, index (index)}
							<div class="flex items-start gap-3">
								<Check class="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
								<span class="text-gray-700 leading-relaxed">{highlight}</span>
							</div>
						{/each}
					</div>
				</div>

				<div class="p-10 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
					<h3 class="text-2xl font-semibold mb-6">Cosa ottieni</h3>
					<div class="space-y-5">
						<div class="flex items-start gap-3">
							<Smartphone class="w-5 h-5 text-emerald-300 mt-1" />
							<p class="text-sm text-indigo-100 leading-relaxed">
								Onboarding utenti con notifica telefono, Touch ID/Face ID e politiche granulari.
							</p>
						</div>
						<div class="flex items-start gap-3">
							<Timer class="w-5 h-5 text-cyan-300 mt-1" />
							<p class="text-sm text-indigo-100 leading-relaxed">
								Dashboard TTR, % auto-negate, leak prevented, audit trail esportabile.
							</p>
						</div>
						<div class="flex items-start gap-3">
							<KeyRound class="w-5 h-5 text-purple-300 mt-1" />
							<p class="text-sm text-indigo-100 leading-relaxed">
								FIDO2/WebAuthn come fattore opzionale per team critici con YubiKey Bio / Token.
							</p>
						</div>
						<div class="flex items-start gap-3">
							<ShieldCheck class="w-5 h-5 text-blue-300 mt-1" />
							<p class="text-sm text-indigo-100 leading-relaxed">
								Playbook di sicurezza e incident response AI convalidato su casi reali.
							</p>
						</div>
					</div>

					<div class="mt-8 border-t border-white/20 pt-6">
						<h4 class="text-sm font-semibold uppercase tracking-wide text-indigo-200 mb-3">
							Deliverable
						</h4>
						<ul class="space-y-2 text-sm text-indigo-100/80 leading-relaxed">
							{#each pilot.outcomes as outcome, index (index)}
								<li>• {outcome}</li>
							{/each}
						</ul>
					</div>

					<div class="mt-10">
						<a
							href="/contact"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all"
						>
							<Users class="w-5 h-5" />
							Richiedi il pilot
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
