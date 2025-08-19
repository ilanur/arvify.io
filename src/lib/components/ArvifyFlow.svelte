<script>
	import {
		Code,
		Plane,
		Mail,
		DollarSign,
		Brain,
		Server,
		Fingerprint,
		Zap,
		Play,
		Pause
	} from 'lucide-svelte';

	// Svelte 5 runes API (JS, no TS)
	const { className = '' } = $props();

	const flowSteps = $state([
		{
			id: 'ai',
			title: 'AI Reasoning',
			desc: 'Analizza la richiesta e prepara il piano di azione',
			icon: Brain,
			color: 'from-blue-500 to-blue-600'
		},
		{
			id: 'bolt',
			title: 'Bolt Orchestration',
			desc: 'Valida il piano e orchestra i servizi necessari',
			icon: Server,
			color: 'from-purple-500 to-purple-600'
		},
		{
			id: 'mcp',
			title: 'MCP Services',
			desc: 'Connette e coordina i servizi esterni',
			icon: Zap,
			color: 'from-emerald-500 to-emerald-600'
		},
		{
			id: 'arvify',
			title: 'Biometric Consent',
			desc: 'Richiede consenso biometrico per procedere',
			icon: Fingerprint,
			color: 'from-indigo-500 to-indigo-600'
		},
		{
			id: 'action',
			title: 'Secure Action',
			desc: "Esegue l'azione verificata in modo sicuro",
			icon: Zap,
			color: 'from-green-500 to-green-600'
		}
	]);

	const demoScenarios = $state([
		{
			id: 'travel',
			title: 'Smart Travel Booking',
			description: 'Prenota voli e hotel con un tocco',
			icon: Plane,
			gradient: 'from-sky-400 to-blue-600',
			steps: [
				'AI trova volo Milano → Roma, ore 07:15, 210€',
				'Bolt verifica disponibilità e confronta prezzi',
				'MCP Travel API conferma opzioni migliori',
				'Tocco biometrico su Arvify per confermare',
				'Biglietto emesso e inviato via email'
			],
			tag: 'Consumer • Travel'
		},
		{
			id: 'development',
			title: 'AI Code Assistant',
			description: 'Deploy e gestione repository sicura',
			icon: Code,
			gradient: 'from-violet-400 to-purple-600',
			steps: [
				'AI analizza il codice e suggerisce ottimizzazioni',
				'Bolt prepara il pipeline di deployment',
				'MCP GitHub gestisce repository e chiavi',
				'Consenso biometrico per deploy in produzione',
				'Applicazione deployata con successo'
			],
			tag: 'Developer • DevOps'
		},
		{
			id: 'finance',
			title: 'Smart Budget Manager',
			description: 'Gestione finanziaria intelligente',
			icon: DollarSign,
			gradient: 'from-amber-400 to-orange-600',
			steps: [
				'AI analizza le spese degli ultimi 3 mesi',
				'Bolt categorizza e identifica pattern',
				'MCP Banking API recupera dati aggiornati',
				'Consenso per accesso dati finanziari',
				'Budget personalizzato creato e attivato'
			],
			tag: 'Finance • Personal'
		},
		{
			id: 'email',
			title: 'Email Intelligence',
			description: 'Analisi e gestione email automatica',
			icon: Mail,
			gradient: 'from-pink-400 to-rose-600',
			steps: [
				'AI scansiona email per progetti urgenti',
				'Bolt prioritizza e categorizza messaggi',
				'MCP Email API accede alle caselle autorizzate',
				'Conferma biometrica per accesso email',
				'Report priorità e azioni suggerite generato'
			],
			tag: 'Productivity • Email'
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
			class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-200 dark:border-indigo-800 mb-6"
		>
			<Zap class="w-4 h-4 text-indigo-600" />
			<span class="text-sm font-medium text-indigo-700 dark:text-indigo-300"
				>AI Flow Orchestration</span
			>
		</div>

		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
			<span
				class="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
			>
				Dal Pensiero all'Azione
			</span>
		</h2>

		<p
			class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
		>
			L'AI <span class="font-semibold text-indigo-600">prepara</span>, Bolt
			<span class="font-semibold text-purple-600">orchestra</span>, MCP
			<span class="font-semibold text-emerald-600">connette</span>, Arvify
			<span class="font-semibold text-indigo-600">autorizza</span>. Il consenso biometrico è la
			chiave che abilita l'azione sicura.
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
				{#each flowSteps as step, i}
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
				{#each demoScenarios as scenario, index}
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
					{#each currentScenario.steps as step, idx}
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
