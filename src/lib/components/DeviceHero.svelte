<script>
	import { Shield, Zap, Smartphone, Fingerprint, ChevronRight, Play } from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';
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

			<!-- Right Content - Wearable Visualization -->
			<div class="relative">
				<!-- Main Wearable Mockup -->
				<div
					class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl"
				>
					<!-- Wearable Band Visual -->
					<div class="flex justify-center mb-6">
						<div class="relative">
							<!-- Watch Band -->
							<div class="w-48 h-12 bg-gray-700 rounded-full relative">
								<!-- Wearable Device Center -->
								<div
									class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-gray-600 shadow-xl"
								>
									<!-- Screen -->
									<div class="w-full h-full bg-black rounded-2xl p-2">
										<div
											class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
										>
											<Fingerprint class="w-6 h-6 text-white animate-pulse" />
										</div>
									</div>
								</div>
								<!-- Band Holes -->
								{#each Array(8) as _, i}
									<div
										class="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"
										style="left: {10 + i * 8}px"
									></div>
									<div
										class="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"
										style="right: {10 + i * 8}px"
									></div>
								{/each}
							</div>
						</div>
					</div>

					<!-- Status Indicators -->
					<div class="space-y-3">
						<div class="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
							<span class="text-green-400 font-medium">Fingerprint Sensor</span>
							<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						</div>
						<div class="flex items-center justify-between p-3 bg-blue-500/20 rounded-lg">
							<span class="text-blue-400 font-medium">Secure Element</span>
							<div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
						</div>
						<div class="flex items-center justify-between p-3 bg-purple-500/20 rounded-lg">
							<span class="text-purple-400 font-medium">BLE Connected</span>
							<div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
						</div>
					</div>
				</div>

				<!-- Mobile App Mockup -->
				<div
					class="absolute -bottom-8 -right-8 w-32 h-56 bg-gray-900 rounded-2xl shadow-xl border border-gray-700"
				>
					<div class="p-2">
						<div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3">
							<div class="text-white text-xs text-center mb-2">Arvify Control</div>
							<div class="space-y-2">
								{#each Array(3) as _, i}
									<div class="h-2 bg-white/30 rounded-full">
										<div
											class="h-full bg-white rounded-full transition-all duration-1000"
											style="width: {30 + i * 25}%"
										></div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Floating Icons -->
				<div
					class="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce"
				>
					<Fingerprint class="w-8 h-8 text-blue-400" />
				</div>
				<div
					class="absolute top-8 -right-12 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse"
				>
					<Zap class="w-6 h-6 text-emerald-400" />
				</div>
			</div>
		</div>
	</div>
</section>
