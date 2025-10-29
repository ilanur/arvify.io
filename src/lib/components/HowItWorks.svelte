<script>
	import { CalendarClock, FolderGit2, KeyRound, ShieldCheck, Timer } from 'lucide-svelte';

	const killerUseCases = [
		{
			icon: FolderGit2,
			title: 'Consent-gated RAG per GitHub + Gmail',
			description:
				'L’AI vede solo i file e le email pertinenti al ticket che stai lavorando. Accesso valido per X secondi, poi tutto torna sigillato.',
			highlights: [
				'Scope selettivo su repo privati e thread email',
				'TTL configurabile per ogni richiesta',
				'Perfect fit per team dev che usano GitHub Copilot / Claude'
			]
		},
		{
			icon: CalendarClock,
			title: 'Condivisione just-in-time di PII',
			description:
				'Calendari e documenti con dati personali vengono condivisi solo quando serve. Approvazione su mobile, visibilità limitata nel tempo.',
			highlights: [
				'Funziona con Google Workspace e Microsoft 365',
				'Policy di minimizzazione per ogni evento',
				'Audit completo per team legali e consulenza'
			]
		},
		{
			icon: KeyRound,
			title: 'Secrets broker con TTL',
			description:
				'L’AI riceve credenziali temporanee rotabili automaticamente. Nessun secret persistente, tutto loggato e revocato in autonomia.',
			highlights: [
				'Integrazione con vault esistenti e rotazione automatica',
				'Supporto per chiavi biometriche YubiKey Bio come fattore extra',
				'Riduci il blast radius di qualunque automazione AI'
			]
		}
	];

	const pilotNotes = [
		{
			label: 'Verticali target',
			value: 'Studio legale • Società di consulenza • Dev team prodotto'
		},
		{
			label: 'Durata',
			value: 'Contratto 3 mesi, iterazioni bisettimanali, hardening continuo'
		},
		{
			label: 'Deliverable',
			value: 'Metriche TTR, report policy hit, audit trail condiviso con il team di sicurezza'
		},
		{
			label: 'Supporto',
			value: 'Onboarding white-glove + Slack condiviso + roadmap personalizzata'
		}
	];
</script>

<section class="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Tre casi d’uso che vendono da soli
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Costruiamo con chi ha bisogno subito di proteggere i propri dati sensibili quando usa l’AI.
				Ogni caso d’uso è già stato validato con team tecnici e compliance.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
			{#each killerUseCases as useCase (useCase.title)}
				<article
					class="h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
				>
					<div
						class="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6"
					>
						<svelte:component this={useCase.icon} class="w-7 h-7" />
					</div>
					<h3 class="text-2xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
					<p class="text-gray-600 leading-relaxed mb-6">{useCase.description}</p>
					<ul class="space-y-3">
						{#each useCase.highlights as highlight (highlight)}
							<li class="flex items-start space-x-2 text-sm text-gray-700">
								<ShieldCheck class="w-4 h-4 text-emerald-500 mt-0.5" />
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>

		<div class="bg-slate-900 text-white rounded-3xl p-10">
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
				<div class="lg:max-w-xl">
					<p class="text-sm uppercase tracking-[0.3em] text-blue-300 mb-3">Pilot pagato</p>
					<h3 class="text-3xl font-semibold mb-4">
						3 clienti, feedback reale, niente promesse vuote
					</h3>
					<p class="text-slate-200 leading-relaxed">
						Scegliamo tre organizzazioni che vivono ogni giorno il rischio di leak AI. Firmiamo un
						contratto di 3 mesi, misuriamo tutto, poi solidifichiamo. Il dev kit hardware arriva
						solo quando i numeri lo richiedono.
					</p>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-xl">
					{#each pilotNotes as note (note.label)}
						<div class="p-6 rounded-2xl bg-white/5 border border-white/10">
							<p class="text-xs uppercase tracking-[0.3em] text-blue-300 mb-2">{note.label}</p>
							<p class="text-lg font-semibold text-white leading-relaxed">{note.value}</p>
						</div>
					{/each}
				</div>
			</div>

			<div
				class="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 text-sm text-slate-200 leading-relaxed"
			>
				<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					<div class="flex items-center space-x-3">
						<Timer class="w-5 h-5 text-blue-200" />
						<span>Kickoff entro 14 giorni dalla firma • Report quindicinale condiviso</span>
					</div>
					<a
						href="/contact"
						class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
					>
						Parliamone adesso
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
