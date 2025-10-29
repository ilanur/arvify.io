<script>
	import Pricing from '$lib/components/Pricing.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
	<title>Pilot - Arvify Consent Layer</title>
	<meta
		name="description"
		content="Programma pilot software-first di 3 mesi: estensione + proxy MCP, metriche TTR, leak prevented, integrazione FIDO2 opzionale e accesso al dev kit hardware."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/pricing" />
	<meta property="og:title" content="Pilot - Arvify Consent Layer" />
	<meta
		property="og:description"
		content="Lancia il pilot software di Arvify: consenso AI via telefono, policy granulari e roadmap hardware dopo i risultati."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/pricing" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
	<!-- Navigation -->
	<Navigation />

	<!-- Header Section -->

	<!-- Pricing Section -->
	<Pricing />

	<!-- FAQ Section -->
	<section class="py-20 bg-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Domande Frequenti</h2>

			<div class="space-y-8">
				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">
						Quanto dura il pilot e cosa include?
					</h3>
					<p class="text-gray-600">
						Il pilot dura 12 settimane: deploy estensione + proxy MCP, configurazione policy,
						onboarding di tre team e report settimanali con metriche TTR, auto-negate e leak
						prevented.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Serve hardware dedicato?</h3>
					<p class="text-gray-600">
						No. Usiamo Touch ID/Face ID o WebAuthn già disponibili. Il dev kit biometrico (20–50
						unità) arriva solo dopo il pilot, basato sui feedback raccolti.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">
						Possiamo integrare FIDO2 o YubiKey Bio?
					</h3>
					<p class="text-gray-600">
						Sì, l’integrazione FIDO2/WebAuthn è opzionale. Configuriamo YubiKey Bio o token
						biometrici come fattore aggiuntivo dove necessario.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Come misurate il successo?</h3>
					<p class="text-gray-600">
						Tracciamo TTR, percentuale di richieste auto-negate, leak prevented e qualità dell’audit
						trail. Condividiamo un dossier finale con raccomandazioni per l’hardening.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<DeviceFooter />
</div>
