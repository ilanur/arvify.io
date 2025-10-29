<script>
	import { CalendarClock, Check, ClipboardList, ShieldCheck, Users } from 'lucide-svelte';

	const verticals = [
		{
			title: 'Studio legale',
			description: 'Gestione di pratiche riservate, discovery automatica con consenso biometrico.',
			outcomes: [
				'Condivisione just-in-time di PII da Google Workspace / M365',
				'Audit trail firmato per controlli interni e clienti',
				'Policy di minimizzazione automatica sui documenti sensibili'
			]
		},
		{
			title: 'Società di consulenza',
			description: 'Coordina team ibridi mantenendo il controllo sulle fonti confidenziali.',
			outcomes: [
				'Consent-gated RAG su documentazione cliente',
				'TTL e watermark per file condivisi con generative AI',
				'Dashboard con TTR e leak prevented per ogni progetto'
			]
		},
		{
			title: 'Dev team prodotto',
			description: 'Proteggi repository, segreti e ambienti quando usi agenti AI.',
			outcomes: [
				'Accesso temporaneo a repo GitHub + Gmail ticketing',
				'Secrets broker con rotazione automatica e YubiKey Bio opzionale',
				'Allarmi su policy hit integrati con Slack/SIEM'
			]
		}
	];

	const deliverables = [
		'Setup estensione + proxy MCP in meno di una settimana',
		'Workspace mobile (iOS/Android) con Touch ID / Face ID / Android Biometrics',
		'Integrazione FIDO2/WebAuthn con chiavi biometriche esistenti',
		'Metriche settimanali: TTR, % richieste auto-negate, leak prevented, audit trail',
		'Slack condiviso + review bisettimanale con il team Arvify'
	];
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<p
				class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
			>
				Pilot pagato (3 posti)
			</p>
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Contratto di 3 mesi per dimostrare valore e sicurezza
			</h1>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Lavoriamo con tre organizzazioni che hanno bisogno di controllare l’AI oggi. Nessun hardware
				da spedire: tutto passa dalla Consent Layer software-first, con metriche e audit pronti per
				il CISO.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
			{#each verticals as vertical (vertical.title)}
				<div
					class="h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
				>
					<div
						class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5"
					>
						<Users class="w-6 h-6" />
					</div>
					<h3 class="text-2xl font-semibold text-gray-900 mb-3">{vertical.title}</h3>
					<p class="text-gray-600 leading-relaxed mb-5">{vertical.description}</p>
					<ul class="space-y-3 text-sm text-gray-700">
						{#each vertical.outcomes as outcome (outcome)}
							<li class="flex items-start space-x-2">
								<Check class="w-4 h-4 text-emerald-500 mt-0.5" />
								<span>{outcome}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="bg-slate-900 text-white rounded-3xl p-10 mb-16">
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
				<div class="lg:max-w-2xl">
					<p class="text-sm uppercase tracking-[0.3em] text-blue-300 mb-3">Cosa include</p>
					<h2 class="text-3xl font-semibold mb-4">Delivery end-to-end guidata dal team Arvify</h2>
					<p class="text-slate-200 leading-relaxed mb-6">
						Ci occupiamo di tutto: dal setup tecnico all’allineamento con il team legale e
						sicurezza. Ogni due settimane validiamo con numeri concreti.
					</p>
					<ul class="space-y-3 text-slate-200">
						{#each deliverables as item (item)}
							<li class="flex items-start space-x-3">
								<ShieldCheck class="w-5 h-5 text-emerald-300 mt-0.5" />
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div class="w-full lg:max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">
					<div class="flex items-center space-x-3 mb-6">
						<CalendarClock class="w-6 h-6 text-blue-200" />
						<div>
							<p class="text-sm uppercase tracking-[0.3em] text-blue-300">Timeline</p>
							<p class="text-lg font-semibold text-white">90 giorni strutturati</p>
						</div>
					</div>
					<div class="space-y-4 text-sm text-slate-200">
						<div>
							<p class="font-semibold text-white">Settimana 1</p>
							<p>Deploy estensione + proxy MCP, workshop policy e integrazione SSO.</p>
						</div>
						<div>
							<p class="font-semibold text-white">Settimane 2-4</p>
							<p>Pilot tecnico su caso d’uso principale, raccolta metriche TTR e leak prevented.</p>
						</div>
						<div>
							<p class="font-semibold text-white">Settimane 5-8</p>
							<p>Espansione su secondo caso d’uso, integrazione FIDO2/WebAuthn, tuning policy.</p>
						</div>
						<div>
							<p class="font-semibold text-white">Settimane 9-12</p>
							<p>
								Report finale con audit trail, roadmap hardware (dev kit 20–50 unità) e next step.
							</p>
						</div>
					</div>
					<a
						href="/contact"
						class="mt-8 inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
					>
						Richiedi una call di valutazione
					</a>
				</div>
			</div>
		</div>

		<div class="bg-white rounded-3xl border border-gray-200 p-10">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div class="flex items-start space-x-3">
					<ClipboardList class="w-6 h-6 text-blue-600 mt-1" />
					<div>
						<h3 class="text-2xl font-semibold text-gray-900 mb-2">Come funziona la selezione</h3>
						<p class="text-gray-600 leading-relaxed">
							Inviaci i tuoi casi d’uso prioritari. Se c’è fit con le nostre tre track principali,
							firmiamo un accordo di 3 mesi con fee mensile e milestone chiare. Niente promesse su
							hardware finché non completiamo il pilot.
						</p>
					</div>
				</div>
				<a
					href="mailto:ilanurs@gmail.com?subject=Pilot%20Arvify%20Consent%20Layer"
					class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all"
				>
					Scrivici i tuoi requisiti
				</a>
			</div>
		</div>
	</div>
</section>
