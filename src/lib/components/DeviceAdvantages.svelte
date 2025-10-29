<script>
	import { Boxes, Fingerprint, KeyRound, Layers, Shield, Usb } from 'lucide-svelte';

	const pillars = [
		{
			icon: Layers,
			title: 'Consent Layer su MCP',
			description:
				'Proxy MCP + estensione browser: intercetta ogni tool dell’AI e lo fa passare dal tuo consenso esplicito.',
			emphasis: 'Zero azioni senza il tuo OK.'
		},
		{
			icon: Fingerprint,
			title: 'Biometria nativa',
			description:
				'Touch ID, Face ID e biometriche Android già presenti nei telefoni dei tuoi utenti. Nessun hardware da spedire.',
			emphasis: 'Time-to-value in giorni, non mesi.'
		},
		{
			icon: KeyRound,
			title: 'FIDO2/WebAuthn opzionale',
			description:
				'Integra chiavi YubiKey Bio / Token biometrici esistenti come secondo fattore dove servono garanzie extra.',
			emphasis: 'Plug & play con gli standard enterprise.'
		},
		{
			icon: Shield,
			title: 'Policy TTL e audit trail',
			description:
				'TTL dinamici, auto-negazione su timeout, log firmati. Misuri TTR, % richieste scadute e leak evitati.',
			emphasis: 'Metriche pronte per il CISO.'
		}
	];

	const futureHardware = [
		{
			icon: Usb,
			label: 'Dev kit limitato',
			description: '20–50 unità dopo il pilot, validate con test e audit indipendenti.'
		},
		{
			icon: Boxes,
			label: 'Moduli specializzati',
			description: 'Solo dopo feedback reale: batterie, sensori haptici, modulo secure element.'
		}
	];
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Software prima,
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
					hardware dopo
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Arvify oggi è una piattaforma di consenso: dimostra valore immediato, misura l’impatto e
				prepara il terreno per un wearable costruito sui dati del pilot.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
			{#each pillars as pillar, index (pillar.title)}
				<article
					class="group relative h-full p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white hover:border-blue-400/60 hover:shadow-xl transition-all"
					style={`animation-delay: ${index * 100}ms;`}
				>
					<div
						class="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6"
					>
						<svelte:component this={pillar.icon} class="w-7 h-7" />
					</div>
					<h3 class="text-2xl font-semibold text-gray-900 mb-4">{pillar.title}</h3>
					<p class="text-gray-600 leading-relaxed mb-4">{pillar.description}</p>
					<p
						class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-700"
					>
						{pillar.emphasis}
					</p>
					<div
						class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/40"
					></div>
				</article>
			{/each}
		</div>

		<div class="bg-slate-900 text-white rounded-3xl p-10">
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
				<div class="lg:max-w-2xl">
					<p class="text-sm uppercase tracking-[0.3em] text-blue-300 mb-3">DOPO IL PILOT</p>
					<h3 class="text-3xl font-semibold mb-4">Hardware dove serve davvero</h3>
					<p class="text-slate-200 leading-relaxed">
						Nessuna promessa irrealistica. Il dev kit hardware arriva solo dopo i 3 mesi di pilot
						pagato, con specifiche validate da feedback reali e audit di sicurezza. Focus su
						comfort, autonomia reale e resistenza agli attacchi fisici.
					</p>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-xl">
					{#each futureHardware as item (item.label)}
						<div class="p-6 rounded-2xl bg-white/5 border border-white/10">
							<div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
								<svelte:component this={item.icon} class="w-6 h-6 text-blue-200" />
							</div>
							<h4 class="text-lg font-semibold mb-2">{item.label}</h4>
							<p class="text-slate-200 text-sm leading-relaxed">{item.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
