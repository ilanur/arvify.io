<script>
	import {
		Shield,
		Zap,
		Smartphone,
		Fingerprint,
		ChevronRight,
		Play,
		ChevronLeft
	} from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';
	import ArvifyAppInterface from '$lib/components/ArvifyAppInterface.svelte';

	// Carousel state
	let currentScenario = $state(0);

	// Scenari definiti
	const scenarios = [
		{
			id: 'email',
			theme: 'blue',
			request: 'Analizza le mie email per trovare progetti urgenti',
			ttl: 120,
			status: 'waiting',
			backend: 'openai',
			wearableColor: 'border-blue-500',
			screenGradient: 'from-blue-500 to-purple-600',
			icon: Fingerprint,
			label: 'Email OK?'
		},
		{
			id: 'finance',
			theme: 'emerald',
			request: 'Crea un budget mensile dai miei dati di spesa',
			ttl: 90,
			status: 'processing',
			backend: 'anthropic',
			wearableColor: 'border-emerald-500',
			screenGradient: 'from-emerald-500 to-teal-600',
			icon: Zap,
			label: 'Budget?'
		},
		{
			id: 'calendar',
			theme: 'purple',
			request: 'Trova il momento migliore per una riunione domani',
			ttl: 60,
			status: 'completed',
			backend: 'google',
			wearableColor: 'border-purple-500',
			screenGradient: 'from-purple-500 to-pink-600',
			icon: Smartphone,
			label: 'Schedule?'
		}
	];

	// Funzioni carousel
	function nextScenario() {
		currentScenario = (currentScenario + 1) % scenarios.length;
	}

	function prevScenario() {
		currentScenario = currentScenario === 0 ? scenarios.length - 1 : currentScenario - 1;
	}

	function goToScenario(index) {
		currentScenario = index;
	}

	// Auto-rotate carousel ogni 5 secondi
	let isAutoRotating = $state(true);

	function handleUserInteraction() {
		isAutoRotating = false;
		setTimeout(() => {
			isAutoRotating = true;
		}, 3000);
	}

	// Avvia auto-rotate al mount - usando un effect separato che non dipende da currentScenario
	$effect(() => {
		// Start auto-rotate on mount
		const timer = setInterval(() => {
			if (isAutoRotating) {
				currentScenario = (currentScenario + 1) % scenarios.length;
			}
		}, 5000);

		return () => {
			if (timer) clearInterval(timer);
		};
	});
</script>

<section class="relative py-20 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
	<div
		class="absolute inset-0 opacity-20"
		style="background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0); background-size: 30px 30px;"
	></div>

	<!-- Content -->
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="text-white">
				<div
					class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
				>
					<Shield class="w-4 h-4 mr-2 text-green-400" />
					{t('home.hero.tagline')}
				</div>

				<h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
					Arvify
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
					>
						{t('home.hero.highlight')}
					</span>
				</h1>

				<p class="text-xl text-gray-300 mb-8 leading-relaxed">
					{t('home.hero.description')}
				</p>

				<!-- Key Features -->
				<div class="space-y-4 mb-8">
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
							<Fingerprint class="w-4 h-4 text-blue-400" />
						</div>
						<span class="text-gray-200">{t('home.hero.features.localProcessing')}</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
							<Zap class="w-4 h-4 text-emerald-400" />
						</div>
						<span class="text-gray-200">{t('home.hero.features.hybridCloud')}</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
							<Smartphone class="w-4 h-4 text-purple-400" />
						</div>
						<span class="text-gray-200">{t('home.hero.features.mobileControl')}</span>
					</div>
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4">
					<button
						class="btn-primary px-8 py-4 text-lg inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
					>
						<span>{t('home.hero.cta.order')}</span>
						<ChevronRight class="w-5 h-5" />
					</button>

					<button
						class="inline-flex items-center space-x-2 px-6 py-4 text-lg text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
					>
						<Play class="w-5 h-5" />
						<span>{t('home.hero.cta.demo')}</span>
					</button>
				</div>

				<!-- Pricing Preview -->
				<div class="mt-8 pt-8 border-t border-white/10">
					<div class="flex items-center space-x-4">
						<span class="text-gray-400">{t('home.hero.pricing.startingFrom')}</span>
						<span class="text-3xl font-bold text-white">€149</span>
						<span class="text-gray-400">{t('home.hero.pricing.vat')}</span>
					</div>
				</div>
			</div>

			<!-- Right Content - Interactive Scenario Carousel -->
			<div class="relative">
				<!-- Scenario Previews (laterali) -->
				<div class="flex justify-center mb-6 space-x-4">
					{#each scenarios as scenario, index}
						<button
							onclick={() => {
								goToScenario(index);
								handleUserInteraction();
							}}
							aria-label="Vai allo scenario {scenario.id}"
							class="transition-all duration-300 {index === currentScenario
								? 'scale-100 opacity-100'
								: 'scale-75 opacity-40 hover:opacity-70'}"
						>
							<div
								class="w-16 h-12 bg-gray-800 rounded-lg p-1 border-2 {index === currentScenario
									? scenario.wearableColor
									: 'border-gray-600'}"
							>
								<div
									class="w-full h-full bg-gradient-to-br {scenario.screenGradient} rounded-md flex items-center justify-center"
								>
									{#if scenario.icon === Fingerprint}
										<Fingerprint class="w-3 h-3 text-white" />
									{:else if scenario.icon === Zap}
										<Zap class="w-3 h-3 text-white" />
									{:else if scenario.icon === Smartphone}
										<Smartphone class="w-3 h-3 text-white" />
									{/if}
								</div>
							</div>
						</button>
					{/each}
				</div>

				<!-- Scenario Principale -->
				<div class="bg-gray-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
					<!-- Navigation Arrows -->
					<button
						onclick={() => {
							prevScenario();
							handleUserInteraction();
						}}
						aria-label="Scenario precedente"
						class="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
					>
						<ChevronLeft class="w-4 h-4" />
					</button>

					<button
						onclick={() => {
							nextScenario();
							handleUserInteraction();
						}}
						aria-label="Scenario successivo"
						class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
					>
						<ChevronRight class="w-4 h-4" />
					</button>

					<!-- Current Scenario Content -->
					<div class="transition-all duration-500">
						<!-- Wearable Visual -->
						<div class="flex justify-center mb-6">
							<div class="relative">
								<!-- Watch Band -->
								<div class="w-40 h-12 bg-gray-700 rounded-full relative">
									<!-- Wearable Device Center -->
									<div
										class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 {scenarios[
											currentScenario
										].wearableColor} shadow-xl {scenarios[currentScenario].status === 'waiting'
											? 'animate-pulse'
											: ''}"
									>
										<!-- Screen -->
										<div class="w-full h-full bg-black rounded-2xl p-1.5">
											<div
												class="w-full h-full bg-gradient-to-br {scenarios[currentScenario]
													.screenGradient} rounded-xl flex flex-col items-center justify-center"
											>
												{#if scenarios[currentScenario].icon === Fingerprint}
													<Fingerprint class="w-4 h-4 text-white mb-0.5" />
												{:else if scenarios[currentScenario].icon === Zap}
													<Zap class="w-4 h-4 text-white mb-0.5" />
												{:else if scenarios[currentScenario].icon === Smartphone}
													<Smartphone class="w-4 h-4 text-white mb-0.5" />
												{/if}
												<div class="text-white text-[8px]">{scenarios[currentScenario].label}</div>
											</div>
										</div>
									</div>
								</div>
								<!-- Vibration Effect for waiting status -->
								{#if scenarios[currentScenario].status === 'waiting'}
									<div
										class="absolute -top-1 -left-1 w-42 h-14 border-2 {scenarios[currentScenario]
											.wearableColor} rounded-full animate-ping opacity-30"
									></div>
								{/if}
							</div>
						</div>

						<!-- App Interface -->
						{#key currentScenario}
							<ArvifyAppInterface
								scenario={scenarios[currentScenario].id}
								theme={scenarios[currentScenario].theme}
								requestText={scenarios[currentScenario].request}
								ttlSeconds={scenarios[currentScenario].ttl}
								showNotification={true}
								processingStatus={scenarios[currentScenario].status}
								backendType={scenarios[currentScenario].backend}
							/>
						{/key}
					</div>

					<!-- Scenario Indicators -->
					<div class="flex justify-center mt-4 space-x-2">
						{#each scenarios as _, index}
							<button
								onclick={() => {
									goToScenario(index);
									handleUserInteraction();
								}}
								aria-label="Vai allo scenario {index + 1}"
								class="w-2 h-2 rounded-full transition-all {index === currentScenario
									? 'bg-white scale-125'
									: 'bg-white/30 hover:bg-white/50'}"
							></button>
						{/each}
					</div>
				</div>

				<!-- Scenario Labels -->
				<div class="mt-4 text-center">
					<h3 class="text-white font-semibold text-lg mb-2">
						{scenarios[currentScenario].id === 'email'
							? '📧 Analisi Email'
							: scenarios[currentScenario].id === 'finance'
								? '💰 Budget Intelligente'
								: '📅 Pianificazione Smart'}
					</h3>
					<p class="text-gray-400 text-sm">
						{scenarios[currentScenario].id === 'email'
							? "L'AI accede alle tue email solo con il tuo consenso biometrico"
							: scenarios[currentScenario].id === 'finance'
								? 'Gestione finanziaria automatica con privacy garantita'
								: 'Ottimizzazione calendario basata sui tuoi pattern'}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
