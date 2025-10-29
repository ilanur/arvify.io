<script>
	import {
		Code,
		Calendar,
		KeyRound,
		Brain,
		Server,
		Fingerprint,
		Zap,
		Smartphone,
		Play,
		Pause
	} from 'lucide-svelte';

	// Svelte 5 runes API (JS, no TS)
	const { className = '' } = $props();

	const flowSteps = $state([
		{
			id: 'extension',
			title: 'Extension intercept',
			desc: 'Blocca la richiesta AI e invia il contesto al proxy MCP',
			icon: Brain,
			color: 'from-blue-500 to-blue-600'
		},
		{
			id: 'proxy',
			title: 'Proxy MCP',
			desc: 'Classifica i dati, applica policy e prepara il prompt di consenso',
			icon: Server,
			color: 'from-purple-500 to-purple-600'
		},
		{
			id: 'consent',
			title: 'Consent push',
			desc: 'Notifica su mobile con Touch ID / Face ID richiesto',
			icon: Smartphone,
			color: 'from-emerald-500 to-emerald-600'
		},
		{
			id: 'biometrics',
			title: 'Biometria + policy',
			desc: 'Approvi, neghi o lasci scadere: tutto tracciato e firmato',
			icon: Fingerprint,
			color: 'from-indigo-500 to-indigo-600'
		},
		{
			id: 'release',
			title: 'TTL release',
			desc: 'Rilascia dati/secret solo per il tempo concordato con auto-cleanup',
			icon: Zap,
			color: 'from-green-500 to-green-600'
		}
	]);

	const demoScenarios = $state([
		{
			id: 'github-gmail',
			title: 'Consent-gated RAG',
			description: 'GitHub + Gmail, accesso temporaneo ai soli artefatti rilevanti',
			icon: Code,
			gradient: 'from-blue-500 to-indigo-600',
			steps: [
				'L’estensione blocca la richiesta AI su repo privati',
				'Proxy MCP seleziona file ed email pertinenti',
				'Notifica mobile richiede Touch ID con TTL di 90s',
				'Dati rilasciati solo entro lo scope autorizzato',
				'Audit trail firmato inviato al SIEM aziendale'
			],
			tag: 'Dev team • Supporto prodotto'
		},
		{
			id: 'calendar-docs',
			title: 'PII on-demand',
			description: 'Calendar & Docs condivisi solo quando serve',
			icon: Calendar,
			gradient: 'from-emerald-500 to-teal-500',
			steps: [
				'Proxy MCP identifica PII nel documento richiesto',
				'Push mobile mostra preview minimizzata',
				'Face ID conferma visibilità per 60 secondi',
				'Documento condiviso con watermark e auto-expire',
				'Log accesso inviato al responsabile privacy'
			],
			tag: 'Consulenza • Team legale'
		},
		{
			id: 'secrets-broker',
			title: 'Secrets broker',
			description: 'Credenziali temporanee con rotazione automatica',
			icon: KeyRound,
			gradient: 'from-purple-500 to-pink-500',
			steps: [
				'AI chiede accesso a database o API interne',
				'Proxy MCP genera secret temporaneo da vault',
				'Biometria + YubiKey Bio come fattore extra',
				'Secret valido per 45 secondi poi revocato',
				'Report di utilizzo e rotazione registrato'
			],
			tag: 'Security • Platform team'
		}
	]);

	let activeStep = $state(0);
	let activeScenario = $state(0);
	let autoplay = $state(true);
	let isPaused = $state(false);

	function nextStep() {
		activeStep = (activeStep + 1) % flowSteps.length;
	}

	function nextScenario() {
		activeScenario = (activeScenario + 1) % demoScenarios.length;
		activeStep = 0; // Reset step when changing scenario
	}

	$effect(() => {
		if (!autoplay || isPaused) return;
		const stepInterval = setInterval(nextStep, 2800);
		const scenarioInterval = setInterval(nextScenario, 14000); // Change scenario every 14s

		return () => {
			clearInterval(stepInterval);
			clearInterval(scenarioInterval);
		};
	});

	function setScenario(index) {
		activeScenario = index;
		activeStep = 0;
		isPaused = false;
	}

	function togglePlayback() {
		isPaused = !isPaused;
		if (isPaused) {
			autoplay = false;
		} else {
			autoplay = true;
		}
	}

	const currentScenario = $derived(demoScenarios[activeScenario]);
</script>

<section class={`mx-auto max-w-7xl ${className}`}>
	<!-- Hero Section -->
	<header class="text-center mb-12">
		<div
			class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 dark:from-sky-950/40 dark:to-emerald-950/40 border border-sky-200 dark:border-sky-800 mb-6"
		>
			<Zap class="w-4 h-4 text-sky-600" />
			<span class="text-sm font-medium text-sky-700 dark:text-sky-300"
				>Consent Layer Architecture</span
			>
		</div>

		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
			<span
				class="bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
			>
				Dalla richiesta bloccata al rilascio con TTL
			</span>
		</h2>

		<p
			class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
		>
			Ogni tool MCP passa dalla nostra estensione: il proxy classifica, il telefono approva, il
			secret viene rilasciato solo per il tempo concordato. Metriche e audit trail sono inclusi by
			design.
		</p>
	</header>

	<!-- Main Flow Visualization -->
	<div class="relative mb-16">
		<!-- Background glow effect -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-3xl"
		></div>

		<div
			class="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl"
		>
			<!-- Flow Steps -->
			<div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 mb-8">
				{#each flowSteps as step, i (step.id)}
					<div class="relative group">
						<!-- Step Card -->
						<div
							class={`relative overflow-hidden rounded-2xl border transition-all duration-500 transform
								${
									i === activeStep
										? 'border-transparent bg-gradient-to-br ' +
											step.color +
											' text-white scale-105 shadow-xl'
										: 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:scale-102'
								}
							`}
							on:click={() => {
								activeStep = i;
								isPaused = true;
							}}
							on:keydown={(e) => e.key === 'Enter' && ((activeStep = i), (isPaused = true))}
							role="button"
							tabindex="0"
							aria-label={`Step ${i + 1}: ${step.title}`}
						>
							<!-- Card Content -->
							<div class="p-6 text-center">
								<!-- Icon -->
								<div
									class={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300
									${i === activeStep ? 'bg-white/20 backdrop-blur-sm' : 'bg-slate-100 dark:bg-slate-700'}
								`}
								>
									<svelte:component this={step.icon} class="w-8 h-8" />
								</div>

								<!-- Title & Description -->
								<h3 class="font-bold text-lg mb-2">{step.title}</h3>
								<p
									class={`text-sm leading-relaxed
									${i === activeStep ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}
								`}
								>
									{step.desc}
								</p>
							</div>

							<!-- Active Step Indicator -->
							{#if i === activeStep}
								<div
									class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
								>
									<div class="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
								</div>
							{/if}
						</div>

						<!-- Connection Arrow -->
						{#if i < flowSteps.length - 1}
							<div
								class="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10"
							>
								<div
									class={`w-4 h-0.5 transition-colors duration-300
									${i < activeStep ? 'bg-gradient-to-r ' + step.color : 'bg-slate-300 dark:bg-slate-600'}
								`}
								></div>
								<div
									class={`w-0 h-0 border-l-4 border-y-2 border-y-transparent transition-colors duration-300
									${i < activeStep ? 'border-l-emerald-500' : 'border-l-slate-300 dark:border-l-slate-600'}
								`}
								></div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Progress Bar -->
			<div class="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full mb-6 overflow-hidden">
				<div
					class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-700 ease-out"
					style={`width: ${((activeStep + 1) / flowSteps.length) * 100}%`}
				></div>
			</div>

			<!-- Controls -->
			<div class="flex flex-wrap items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<button
						type="button"
						class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
						on:click={togglePlayback}
					>
						{#if isPaused}
							<Play class="w-4 h-4" />
							Play
						{:else}
							<Pause class="w-4 h-4" />
							Pause
						{/if}
					</button>

					<span class="text-sm text-slate-500 dark:text-slate-400">
						Step {activeStep + 1} of {flowSteps.length}
					</span>
				</div>

				<div class="text-xs text-slate-500 dark:text-slate-400">
					Schema: AI → Bolt → MCP → Arvify → Action
				</div>
			</div>
		</div>
	</div>

	<!-- Scenario Showcase -->
	<div class="grid lg:grid-cols-2 gap-8">
		<!-- Scenario Selector -->
		<div>
			<h3 class="text-2xl font-bold mb-6">Scenari d'Uso Reali</h3>

			<div class="grid gap-4">
				{#each demoScenarios as scenario, index (scenario.id)}
					<button
						type="button"
						class={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 transform hover:scale-102
${
	index === activeScenario
		? 'border-transparent bg-gradient-to-br ' + scenario.gradient + ' text-white shadow-xl'
		: 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
}
`}
						on:click={() => setScenario(index)}
					>
						<div class="flex items-start gap-4">
							<div
								class={`p-3 rounded-xl transition-colors
${index === activeScenario ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700'}
`}
							>
								<svelte:component this={scenario.icon} class="w-6 h-6" />
							</div>

							<div class="flex-1 min-w-0">
								<div class="flex items-center justify-between mb-2">
									<h4 class="font-bold text-lg">{scenario.title}</h4>
									<span
										class={`text-xs px-2 py-1 rounded-full
${
	index === activeScenario
		? 'bg-white/20 text-white'
		: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
}
`}
									>
										{scenario.tag}
									</span>
								</div>
								<p
									class={`text-sm
${index === activeScenario ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}
`}
								>
									{scenario.description}
								</p>
							</div>
						</div>
					</button>
				{/each}
			</div>
		</div>

		<!-- Scenario Details -->
		<div class="lg:sticky lg:top-8">
			<div
				class="bg-gradient-to-br {currentScenario.gradient} rounded-3xl p-8 text-white shadow-2xl"
			>
				<div class="flex items-center gap-3 mb-6">
					<div class="p-3 bg-white/20 rounded-xl">
						<svelte:component this={currentScenario.icon} class="w-8 h-8" />
					</div>
					<div>
						<h4 class="text-2xl font-bold">{currentScenario.title}</h4>
						<p class="text-white/80">{currentScenario.tag}</p>
					</div>
				</div>

				<div class="space-y-4">
					{#each currentScenario.steps as step, idx (step)}
						<div
							class={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300
${idx <= activeStep ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/10'}
`}
						>
							<div
								class={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
${idx <= activeStep ? 'bg-white text-slate-900' : 'bg-white/20 text-white'}
`}
							>
								{idx + 1}
							</div>
							<p
								class={`text-sm leading-relaxed transition-opacity
${idx <= activeStep ? 'text-white' : 'text-white/70'}
`}
							>
								{step}
							</p>
						</div>
					{/each}
				</div>

				<div class="mt-8 p-4 bg-white/10 rounded-xl">
					<p class="text-xs text-white/80 leading-relaxed">
						<strong>Nota di Sicurezza:</strong> Bolt verifica sempre policy e template prima di invocare
						gli MCP. Nessuna azione passa senza consenso biometrico esplicito su Arvify.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom CTA Section -->
	<div class="mt-16 text-center">
		<div
			class="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700"
		>
			<h3 class="text-2xl font-bold mb-4">Pronto a Trasformare il tuo Workflow?</h3>
			<p class="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
				Scopri come Arvify può rendere sicure e controllabili le tue automazioni AI. Ogni azione
				richiede il tuo consenso esplicito.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-4">
				<a
					href="/mcp-servers"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 font-medium transition-colors"
				>
					<Server class="w-5 h-5" />
					Esplora MCP Servers
				</a>
				<a
					href="/technology"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-medium transition-colors shadow-lg"
				>
					<Fingerprint class="w-5 h-5" />
					Scopri Arvify
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Smooth animations for glassmorphism effects */
	@keyframes glow {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 0.8;
		}
	}

	.animate-glow {
		animation: glow 2s ease-in-out infinite;
	}

	/* Enhanced hover effects */
	.hover\:scale-102:hover {
		transform: scale(1.02);
	}

	/* Custom gradient borders */
	.gradient-border {
		background:
			linear-gradient(white, white) padding-box,
			linear-gradient(to right, #3b82f6, #8b5cf6, #10b981) border-box;
		border: 2px solid transparent;
	}

	/* Dark mode specific adjustments */
	:global(html.dark) .gradient-border {
		background:
			linear-gradient(rgb(15 23 42), rgb(15 23 42)) padding-box,
			linear-gradient(to right, #3b82f6, #8b5cf6, #10b981) border-box;
	}
</style>
