<script>
	import { Server, ShieldCheck, BellRing, Fingerprint, KeyRound, Route } from 'lucide-svelte';

	const advantages = [
		{
			icon: Server,
			title: 'Estensione + proxy MCP',
			description:
				'Intercetta ogni agente, plugin e API senza hardware custom. Deploy in meno di un giorno.',
			color: 'blue',
			highlight: 'Go live rapido'
		},
		{
			icon: BellRing,
			title: 'Consenso sul telefono',
			description:
				'Push su iOS/Android con contesto completo. Touch ID/Face ID oggi, FIDO2/WebAuthn domani.',
			color: 'emerald',
			highlight: 'Biometria esistente'
		},
		{
			icon: ShieldCheck,
			title: 'Policy granulare',
			description:
				'TTL, scope e redaction per repository, inbox, calendari, segreti e API personalizzate.',
			color: 'purple',
			highlight: 'Zero trust pratico'
		},
		{
			icon: Fingerprint,
			title: 'Audit trail firmato',
			description:
				'Ogni richiesta genera log esportabili (SIEM, SOC, legale) con prove crittografiche.',
			color: 'amber',
			highlight: 'Compliance pronta'
		},
		{
			icon: KeyRound,
			title: 'FIDO2 opzionale',
			description:
				'Integra chiavi biometriche (YubiKey Bio / Token) come fattore aggiuntivo per i team critici.',
			color: 'cyan',
			highlight: 'Hardening modulare'
		},
		{
			icon: Route,
			title: 'Percorso hardware credibile',
			description:
				'Prima un pilot pagato con tre clienti, poi dev kit limitato (20–50 unità) su insight reali.',
			color: 'rose',
			highlight: 'Roadmap trasparente'
		}
	];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Software-first, hardware-second
				<span
					class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"
				>
					Senza compromessi sul controllo
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Avvia subito il layer di consenso, misura l’impatto, poi investi nell’hardware solo quando i
				dati lo richiedono.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each advantages as advantage, i (i)}
				<div
					class="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-{advantage.color}-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
					style="animation-delay: {i * 100}ms"
				>
					<div
						class="w-16 h-16 bg-{advantage.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
					>
						<svelte:component this={advantage.icon} class="w-8 h-8 text-{advantage.color}-600" />
					</div>

					<h3 class="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
					<p class="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>

					<div
						class="inline-flex items-center px-3 py-1 bg-{advantage.color}-100 text-{advantage.color}-700 rounded-full text-sm font-medium"
					>
						{advantage.highlight}
					</div>

					<div
						class="absolute inset-0 bg-gradient-to-br from-{advantage.color}-500/5 to-{advantage.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
