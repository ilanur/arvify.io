<script>
	import { Bell, Fingerprint, Laptop, ShieldCheck, Smartphone, Timer } from 'lucide-svelte';
	import ArvifyAppInterface from '$lib/components/ArvifyAppInterface.svelte';

	const consentSignals = [
		{
			icon: Bell,
			title: 'Richiesta intercettata',
			description: 'Estensione + proxy MCP bloccano la query finché non arriva il tuo consenso.'
		},
		{
			icon: Smartphone,
			title: 'Notifica su telefono',
			description: 'Push su iOS/Android con dettaglio dei dati richiesti e TTL proposto.'
		},
		{
			icon: Fingerprint,
			title: 'Touch ID / Face ID',
			description: 'Approvi dal telefono, oppure neghi e tutto viene annullato in <1s.'
		},
		{
			icon: Timer,
			title: 'TTL & audit trail',
			description: 'Accesso temporaneo, auto-revoke allo scadere, log firmati per revisione.'
		}
	];
</script>

<section
	class="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
>
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.35) 1px, transparent 0); background-size: 36px 36px;"
		></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="text-white">
				<div
					class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6"
				>
					<ShieldCheck class="w-4 h-4 mr-2 text-emerald-300" />
					Software-first, hardware-second
				</div>

				<h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
					Arvify Consent Layer
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-emerald-300 to-cyan-300"
					>
						L’AI esegue, tu autorizzi
					</span>
				</h1>

				<p class="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
					Lanciamo un’estensione + proxy MCP che blocca ogni azione dell’AI finché il tuo telefono
					non conferma con Touch ID / Face ID. Dimostriamo il valore oggi, prima di costruire
					l’hardware.
				</p>

				<div class="space-y-4 mb-10">
					<div class="flex items-center space-x-3">
						<div class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
							<Laptop class="w-5 h-5 text-blue-300" />
						</div>
						<span class="text-slate-100"
							>Browser extension + proxy MCP, installazione in minuti.</span
						>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
							<Smartphone class="w-5 h-5 text-emerald-300" />
						</div>
						<span class="text-slate-100"
							>Push su mobile con biometriche native (Touch ID, Face ID, Android Biometrics).</span
						>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
							<ShieldCheck class="w-5 h-5 text-purple-300" />
						</div>
						<span class="text-slate-100"
							>TTL, audit trail e auto-negazione se non rispondi entro la finestra definita.</span
						>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="/pricing"
						class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-500 hover:from-blue-500 hover:via-emerald-500 hover:to-teal-400 transition-all shadow-lg hover:shadow-xl"
					>
						Prenota il pilot pagato
					</a>
					<a
						href="/technology"
						class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
					>
						Scopri l’architettura MCP
					</a>
				</div>

				<div class="mt-10 flex flex-wrap items-center gap-6 text-slate-300">
					<div class="flex items-center space-x-2">
						<div class="w-2 h-2 rounded-full bg-emerald-400"></div>
						<span>3 clienti pilota selezionati</span>
					</div>
					<div class="flex items-center space-x-2">
						<div class="w-2 h-2 rounded-full bg-blue-400"></div>
						<span>Contratto 3 mesi • feedback → hardening</span>
					</div>
					<div class="flex items-center space-x-2">
						<div class="w-2 h-2 rounded-full bg-purple-400"></div>
						<span>Dev kit hardware dopo la prova su strada</span>
					</div>
				</div>
			</div>

			<div class="relative">
				<div
					class="absolute -top-16 -right-16 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
				></div>
				<div
					class="absolute -bottom-20 -left-10 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full"
				></div>

				<div
					class="relative bg-slate-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
				>
					<div class="flex items-center justify-between mb-6">
						<div class="flex items-center space-x-3">
							<div class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
								<ShieldCheck class="w-5 h-5 text-blue-200" />
							</div>
							<div>
								<p class="text-sm text-slate-300">Arvify Consent Layer</p>
								<p class="text-lg font-semibold text-white">Flusso di approvazione</p>
							</div>
						</div>
					</div>

					<div class="space-y-4">
						{#each consentSignals as signal, index (signal.title)}
							<div class="flex items-start space-x-4">
								<div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
									<svelte:component this={signal.icon} class="w-5 h-5 text-sky-200" />
								</div>
								<div>
									<div class="flex items-center space-x-2">
										<span class="text-xs uppercase tracking-wide text-slate-400"
											>Step {index + 1}</span
										>
										<span class="w-1 h-1 bg-slate-500 rounded-full"></span>
										<span class="text-sm text-slate-300">{signal.title}</span>
									</div>
									<p class="text-base text-white leading-relaxed">{signal.description}</p>
								</div>
							</div>
						{/each}
					</div>

					<div class="mt-8 border-t border-white/10 pt-6">
						<p class="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">DEMO LIVE</p>
						<ArvifyAppInterface
							scenario="github-gmail"
							requestText="Rilascia solo i file pertinenti al bug #421 per 90 secondi"
							size="compact"
							dataTypes={['GitHub repo', 'Gmail thread']}
							ttlSeconds={90}
							backendType="MCP proxy"
							showNotification={true}
							isWaitingConsent={true}
							autoCleanup={true}
							auditLog={true}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
