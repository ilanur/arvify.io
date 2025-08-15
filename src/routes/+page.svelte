<script>
	import DeviceHero from '$lib/components/DeviceHero.svelte';
	import DeviceAdvantages from '$lib/components/DeviceAdvantages.svelte';
	import TechSpecs from '$lib/components/TechSpecs.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { Shield } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isLoaded = $state(false);

	onMount(() => {
		isLoaded = true;
	});
</script>

<svelte:head>
	<title>Smart AI Box - Il Primo Assistente AI Ibrido Privacy-First</title>
	<meta
		name="description"
		content="Smart AI Box: Raspberry Pi 5 con Ollama integrato per AI locale e cloud ibrido. Massima privacy, controllo totale via app mobile. Ordinalo ora!"
	/>
	<meta
		name="keywords"
		content="AI Box, Raspberry Pi, Ollama, Privacy AI, Hybrid AI, Model Context Protocol, MCP"
	/>
	<meta property="og:title" content="Smart AI Box - Assistente AI Ibrido Privacy-First" />
	<meta
		property="og:description"
		content="Il primo dispositivo AI che combina elaborazione locale e cloud con controllo totale dei tuoi dati"
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
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Pronto per il Futuro dell'AI?</h2>
			<p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
				Unisciti a migliaia di utenti che hanno già scelto Smart AI Box per un'esperienza AI davvero
				privata e potente.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a
					href="/pricing"
					class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
				>
					Vedi Tutti i Piani
				</a>
				<a
					href="/mcp-servers"
					class="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
				>
					Esplora MCP Servers
				</a>
			</div>

			<!-- Trust Indicators -->
			<div class="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
				<div class="flex items-center space-x-2">
					<Shield class="w-5 h-5" />
					<span>30 giorni garanzia</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="text-lg">🚚</span>
					<span>Spedizione gratuita</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="text-lg">🇮🇹</span>
					<span>Made in Italy</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<DeviceFooter />
</div>
