<script>
	import DeviceHero from '$lib/components/DeviceHero.svelte';
	import DeviceAdvantages from '$lib/components/DeviceAdvantages.svelte';
	import TechSpecs from '$lib/components/TechSpecs.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { Shield } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/utils/translations.js';

	let isLoaded = $state(false);

	onMount(() => {
		isLoaded = true;
	});
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
	<meta property="og:title" content="Arvify.io - Bracciale Biometrico per Controllo AI" />
	<meta
		property="og:description"
		content="Il primo bracciale al mondo che ti dà controllo totale sull'AI con la tua impronta digitale"
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen">
	<!-- Navigation -->
	<Navigation variant="transparent" />

	<!-- Hero Section -->
	<DeviceHero />

	<!-- Advantages Section -->
	<DeviceAdvantages />

	<!-- Technical Specifications -->
	<TechSpecs />

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
					href="/tecnologia"
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
