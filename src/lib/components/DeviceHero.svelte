<script>
	import {
		Shield,
		Zap,
		Smartphone,
		Fingerprint,
		ChevronRight,
		Play,
		Code,
		Plane,
		Key,
		Database
	} from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';
	import ArvifyAppInterface from '$lib/components/ArvifyAppInterface.svelte';
	import ArvifyLogo from '$lib/components/ArvifyLogo.svelte';
	import { getAllScenarios } from '$lib/scenarios.js';

	// Carousel state
	let currentScenario = $state(0);

	// Ottieni scenari dalla configurazione centralizzata
	const scenarios = getAllScenarios();

	// Funzioni carousel
	function nextScenario() {
		currentScenario = (currentScenario + 1) % scenarios.length;
	}

	// Auto-rotate carousel disabilitato
	// let isAutoRotating = $state(false);
</script>

<section class="relative py-20 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
	<div
		class="absolute inset-0 opacity-20"
		style="background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0); background-size: 30px 30px;"
	></div>

	<!-- Content -->
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="text-white">
				<div
					class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
				>
					<Fingerprint class="w-4 h-4 mr-2 text-blue-400" />
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
							<Key class="w-4 h-4 text-blue-400" />
						</div>
						<span class="text-gray-200">{t('home.hero.features.localProcessing')}</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
							<Shield class="w-4 h-4 text-emerald-400" />
						</div>
						<span class="text-gray-200">{t('home.hero.features.hybridCloud')}</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
							<Database class="w-4 h-4 text-purple-400" />
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

			<!-- Right Content - Device Showcase -->
			<div class="relative">
				<!-- Layout orizzontale: Braccio + Smartphone -->
				<div class="flex items-center justify-center space-x-12">
					<!-- Polso con Bracciale Arvify -->
					<div class="relative">
						<!-- Braccio schematico semplificato -->
						<div class="relative">
							<!-- Avambraccio -->
							<div
								class="w-12 h-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-t-2xl mx-auto"
							></div>

							<!-- Polso -->
							<div
								class="w-10 h-6 bg-gradient-to-b from-amber-300 to-amber-400 mx-auto -mt-1"
							></div>

							<!-- Mano semplice -->
							<div
								class="w-14 h-12 bg-gradient-to-b from-amber-400 to-amber-500 mx-auto -mt-1 rounded-b-2xl"
							></div>
						</div>

						<!-- Bracciale Arvify sovrapposto al polso -->
						<div class="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<div
								class="w-20 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full relative shadow-2xl"
							>
								<!-- Cinturino sinistro -->
								<div
									class="absolute -left-6 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-gradient-to-l from-gray-700 to-gray-800 rounded-l-full"
								></div>
								<!-- Cinturino destro -->
								<div
									class="absolute -right-6 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-full"
								></div>

								<!-- Wearable Device Center -->
								{#key currentScenario}
									{@const IconComponent = scenarios[currentScenario].icon}
									<div
										class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 {scenarios[
											currentScenario
										].wearableColor} shadow-xl {scenarios[currentScenario].status === 'waiting'
											? 'animate-pulse'
											: ''}"
									>
										<!-- Screen con Fingerprint -->
										<div class="w-full h-full bg-black rounded-xl p-1">
											<div
												class="w-full h-full bg-gradient-to-br {scenarios[currentScenario]
													.screenGradient} rounded-lg flex flex-col items-center justify-center relative"
											>
												<!-- Fingerprint principale -->
												<Fingerprint class="w-4 h-4 text-white mb-0.5 opacity-90" />
												<!-- Icona scenario piccola -->
												<div class="absolute top-0.5 right-0.5">
													<IconComponent class="w-2 h-2 text-white/70" />
												</div>
											</div>
										</div>
									</div>

									<!-- Vibration Effect for waiting status -->
									{#if scenarios[currentScenario].status === 'waiting'}
										<div
											class="absolute -top-1 -left-1 w-22 h-16 border-2 {scenarios[currentScenario]
												.wearableColor} rounded-full animate-ping opacity-30"
										></div>
									{/if}
								{/key}
							</div>
						</div>

						<!-- Label Arvify -->
						<div class="text-center mt-4">
							<ArvifyLogo
								size="lg"
								showText={true}
								textColor="text-white"
								className="justify-center"
							/>
							<div class="text-blue-400 text-xs mt-1">{t('home.hero.deviceLabel')}</div>
						</div>
					</div>

					<!-- Smartphone con App - Dimensioni più larghe e realistiche -->
					<div class="relative">
						<!-- Container smartphone più largo e con proporzioni migliori -->
						<div class="bg-gray-900 rounded-3xl shadow-2xl relative overflow-hidden w-78 mx-auto">
							<!-- Solo freccia destra, grande e moderna -->
							<button
								onclick={() => {
									nextScenario();
								}}
								aria-label="Scenario successivo"
								class="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
							>
								<ChevronRight class="w-6 h-6" />
							</button>

							<!-- Smartphone Frame con proporzioni migliori -->
							<div class="bg-black rounded-3xl p-3 shadow-2xl">
								<!-- Status Bar Space -->
								<div class="h-2"></div>

								<!-- Notch/Camera piccolo e realistico -->
								<div class="w-20 h-4 bg-black rounded-full mx-auto relative -mb-2 z-10">
									<div
										class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-2 bg-gray-800 rounded-full flex items-center justify-center"
									>
										<div class="w-1 h-1 bg-gray-600 rounded-full mr-1"></div>
										<div class="w-6 h-0.5 bg-gray-700 rounded-full"></div>
									</div>
								</div>

								<!-- Screen con altezza fissa e scroll interno, più largo -->
								<div class="bg-white rounded-2xl overflow-hidden relative" style="height: 520px;">
									<!-- App Interface con scroll container -->
									{#key currentScenario}
										<div class="h-full overflow-y-auto transition-all duration-500">
											<ArvifyAppInterface scenario={scenarios[currentScenario].id} />
										</div>
									{/key}
								</div>

								<!-- Home indicator -->
								<div class="w-20 h-1 bg-gray-600 rounded-full mx-auto mt-2"></div>
								<div class="h-1"></div>
							</div>

							<!-- Label Smartphone -->
							<!-- <div class="text-center mt-3">
								<div class="text-gray-300 text-sm">
									Demo! Prova l'app Arvify qui sopra, funziona proprio così.
								</div>
							</div> -->
						</div>
					</div>

					<!-- Scenario Labels (sotto) -->
					<!-- <div class="text-center mt-8">
					<h3 class="text-white font-semibold text-xl mb-2">
						{scenarios[currentScenario].name}
					</h3>
					<p class="text-gray-400 text-sm max-w-md mx-auto">
						{scenarios[currentScenario].description}
					</p>
				</div> -->
				</div>
			</div>
		</div>
	</div>
</section>
