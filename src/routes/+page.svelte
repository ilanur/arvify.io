<script>
	import DeviceHero from '$lib/components/DeviceHero.svelte';
	import DeviceAdvantages from '$lib/components/DeviceAdvantages.svelte';
	import DigitalVault from '$lib/components/DigitalVault.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import ArvifyFlow from '$lib/components/ArvifyFlow.svelte';
	import { Shield } from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';
</script>

<svelte:head>
	<title>Arvify.io - Consent Layer Software-first per il Controllo AI</title>
	<meta
		name="description"
		content="Arvify Consent Layer: estensione + proxy MCP. Notifica sul telefono, Touch ID/Face ID e rilascio dati con TTL. Software-first, hardware-second."
	/>
	<meta
		name="keywords"
		content="Arvify, Consent Layer, MCP Proxy, Touch ID, Face ID, FIDO2, AI Governance"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/" />
	<meta property="og:title" content="Arvify.io - Consent Layer Software-first" />
	<meta
		property="og:description"
		content="Blocca le richieste AI con estensione + proxy MCP. Notifica telefono, Touch ID/Face ID e TTL controllato."
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

	<ArvifyFlow className="mt-12" />

	<!-- Product Showcase Section -->
	<section class="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div class="text-white space-y-6">
					<h2 class="text-4xl md:text-5xl font-bold leading-tight">
						Il futuro del consenso AI
						<span
							class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
						>
							È già nel tuo telefono
						</span>
					</h2>
					<p class="text-xl text-gray-300 leading-relaxed">
						Arvify lancia il Consent Layer software-first: estensione + proxy MCP che blocca le
						richieste AI prima che lascino la tua organizzazione. Niente hardware da spedire, solo
						valore misurabile.
					</p>
					<ul class="space-y-3 text-gray-200">
						<li class="flex items-center gap-3">
							<span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
							Notifica telefono con contesto completo
						</li>
						<li class="flex items-center gap-3">
							<span class="w-2 h-2 bg-blue-400 rounded-full"></span>
							Touch ID/Face ID o chiavi biometriche opzionali
						</li>
						<li class="flex items-center gap-3">
							<span class="w-2 h-2 bg-purple-400 rounded-full"></span>
							TTL, audit trail e metriche integrate
						</li>
					</ul>
				</div>

				<div class="relative">
					<div
						class="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full"
					></div>
					<div
						class="absolute -bottom-12 -left-12 w-36 h-36 bg-emerald-500/30 blur-3xl rounded-full"
					></div>

					<div
						class="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-2xl"
					>
						<div class="grid gap-4">
							<div class="rounded-2xl border border-blue-400/40 bg-blue-500/20 p-4">
								<p class="text-sm font-semibold text-blue-100">GitHub + Gmail</p>
								<p class="text-xs text-blue-100/80">
									Consent-gated RAG con TTL e policy automatiche.
								</p>
							</div>
							<div class="rounded-2xl border border-emerald-400/40 bg-emerald-500/20 p-4">
								<p class="text-sm font-semibold text-emerald-100">Calendar & Docs</p>
								<p class="text-xs text-emerald-100/80">Just-in-time PII e revoca immediata.</p>
							</div>
							<div class="rounded-2xl border border-cyan-400/40 bg-cyan-500/20 p-4">
								<p class="text-sm font-semibold text-cyan-100">Secrets broker</p>
								<p class="text-xs text-cyan-100/80">Token temporanei rotabili con audit trail.</p>
							</div>
							<div
								class="rounded-2xl border border-purple-400/40 bg-purple-500/20 p-4 text-xs text-purple-100/80"
							>
								<p class="font-semibold text-sm text-purple-100 mb-1">Metriche</p>
								<p>TTR, % auto-negate, leak prevented, audit trail firmato.</p>
							</div>
						</div>
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
					href="/roadmap"
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
