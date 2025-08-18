<script>
	import DeviceHero from '$lib/components/DeviceHero.svelte';
	import DeviceAdvantages from '$lib/components/DeviceAdvantages.svelte';
	import DigitalVault from '$lib/components/DigitalVault.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { Shield } from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';
</script>

<svelte:head>
	<title>Arvify.io - Il Primo Bracciale Biometrico per Controllo AI</title>
	<meta
		name="description"
		content="Arvify: Il bracciale che mette il controllo dell'AI nelle tue mani. Approva o nega con la tua impronta digitale. Preordinalo ora!"
	/>
	<meta
		name="keywords"
		content="Arvify, Bracciale AI, Controllo Biometrico, Privacy AI, Fingerprint, Consenso AI, Wearable AI"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/" />
	<meta property="og:title" content="Arvify.io - Bracciale Biometrico per Controllo AI" />
	<meta
		property="og:description"
		content="Il primo bracciale al mondo che ti dà controllo totale sull'AI con la tua impronta digitale"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/" />
	<meta name="twitter:card" content="summary_large_image" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Arvify",
			"url": "https://arvify.io/",
			"logo": "https://arvify.io/arvify.jpg"
		}
	</script>
</svelte:head>

<div class="min-h-screen">
	<!-- Navigation -->
	<Navigation variant="transparent" />

	<!-- Hero Section -->
	<DeviceHero />

	<!-- Product Showcase Section -->
	<section class="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Left: Product Image -->
				<div class="relative">
					<div class="relative overflow-hidden rounded-3xl shadow-2xl">
						<img
							src="/arvify.jpg"
							alt="Arvify - Il Bracciale Biometrico per Controllo AI"
							class="w-full h-auto object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
					</div>

					<!-- Floating badge -->
					<div class="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
						<span class="text-white font-medium text-sm">Made in Italy 🇮🇹</span>
					</div>
				</div>

				<!-- Right: Product Info -->
				<div class="text-white">
					<h2 class="text-4xl md:text-5xl font-bold mb-6">
						Il Futuro del
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
						>
							Controllo AI
						</span>
					</h2>

					<p class="text-xl text-gray-300 mb-8 leading-relaxed">
						{t('home.hero.description')}
					</p>

					<div class="space-y-4 mb-8">
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
							<span class="text-gray-200">Controllo biometrico in tempo reale</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-blue-400 rounded-full"></div>
							<span class="text-gray-200">Privacy garantita al 100%</span>
						</div>
						<div class="flex items-center space-x-3">
							<div class="w-2 h-2 bg-purple-400 rounded-full"></div>
							<span class="text-gray-200">Compatibile con tutti i sistemi AI</span>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row gap-4">
						<a
							href="/pricing"
							class="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-center"
						>
							Ordina Ora - €149
						</a>
						<a
							href="/technology"
							class="border-2 border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
						>
							Scopri la Tecnologia
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Digital Vault Section -->
	<DigitalVault />

	<!-- Advantages Section -->
	<DeviceAdvantages />

	<!-- Technical Specifications -->

	<!-- How It Works -->
	<HowItWorks />

	<!-- Call to Action Section -->
	<section class="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">{t('home.cta.headline')}</h2>
			<p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
				{t('home.cta.description')}
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a
					href="/pricing"
					class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
				>
					{t('home.cta.buttons.plans')}
				</a>
				<a
					href="/technology"
					class="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
				>
					{t('home.cta.buttons.mcp')}
				</a>
			</div>

			<!-- Trust Indicators -->
			<div class="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
				<div class="flex items-center space-x-2">
					<Shield class="w-5 h-5" />
					<span>{t('home.cta.trust.garanzia')}</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="text-lg">🚚</span>
					<span>{t('home.cta.trust.spedizione')}</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="text-lg">🇮🇹</span>
					<span>{t('home.cta.trust.madeInItaly')}</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<DeviceFooter />
</div>
