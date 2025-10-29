<script>
	import DeviceHero from '$lib/components/DeviceHero.svelte';
	import DeviceAdvantages from '$lib/components/DeviceAdvantages.svelte';
	import DigitalVault from '$lib/components/DigitalVault.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import ArvifyFlow from '$lib/components/ArvifyFlow.svelte';
	import { ShieldCheck } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Arvify.io - Consent Layer software-first per controllare l’AI</title>
	<meta
		name="description"
		content="Arvify lancia una Consent Layer software-first: estensione + proxy MCP, push biometrico su mobile, TTL e audit trail. Pilot pagato con 3 clienti prima dell’hardware."
	/>
	<meta
		name="keywords"
		content="Arvify, Consent Layer, MCP, Touch ID, Face ID, TTL, Audit Trail, FIDO2, Pilot Pagato"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/" />
	<meta property="og:title" content="Arvify.io - Consent Layer software-first" />
	<meta
		property="og:description"
		content="Software-first, hardware-second. Estensione + proxy MCP con biometria mobile e TTL. Pilot pagato con tre clienti selezionati."
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

<div class="min-h-screen bg-slate-950">
	<Navigation variant="transparent" />

	<DeviceHero />

	<section class="py-16">
		<ArvifyFlow className="px-4" />
	</section>

	<DigitalVault />

	<DeviceAdvantages />

	<HowItWorks />

	<section class="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-500">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Mettiamo il consenso al centro prima di costruire hardware
			</h2>
			<p class="text-xl text-blue-100 mb-10 leading-relaxed">
				Un’estensione che blocca l’AI, un proxy MCP che misura tutto, un telefono che approva con
				biometria. Se vuoi il dev kit, aiutaci a dimostrare il valore con un pilot pagato.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a
					href="/pricing"
					class="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
				>
					Prenota il pilot (3 posti)
				</a>
				<a
					href="/contact"
					class="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all"
				>
					Parla con il team
				</a>
			</div>
			<div class="mt-12 flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
				<div class="flex items-center space-x-2">
					<ShieldCheck class="w-5 h-5" />
					<span>Metriche TTR, policy hit e audit trail inclusi</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="text-lg">📱</span>
					<span>Biometria nativa, zero hardware spedito</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="text-lg">🔒</span>
					<span>FIDO2/WebAuthn opzionale per chiavi biometriche YubiKey</span>
				</div>
			</div>
		</div>
	</section>

	<DeviceFooter />
</div>
