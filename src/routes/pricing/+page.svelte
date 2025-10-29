<script>
	import Pricing from '$lib/components/Pricing.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
	<title>Pilot Pagato - Arvify Consent Layer</title>
	<meta
		name="description"
		content="Prenota uno dei tre posti per il pilot pagato di Arvify: consent layer software-first con estensione + proxy MCP, biometria mobile e metriche di sicurezza."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/pricing" />
	<meta property="og:title" content="Pilot Pagato - Arvify" />
	<meta
		property="og:description"
		content="Contratto di 3 mesi, tre verticali target, metriche TTR e audit trail inclusi. Hardware solo dopo feedback reale."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/pricing" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
	<Navigation />

	<Pricing />

	<section class="py-20 bg-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
				Domande frequenti sul pilot
			</h2>

			<div class="space-y-8">
				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Serve hardware per iniziare?</h3>
					<p class="text-gray-600">
						No. Il pilot è 100% software-first: estensione, proxy MCP e app mobile con biometriche
						native. Il dev kit hardware viene valutato solo dopo i tre mesi di feedback.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Come definite il prezzo?</h3>
					<p class="text-gray-600">
						Si tratta di un retainer mensile concordato in base al numero di casi d’uso, utenti e
						integrazioni richieste. Il contratto copre setup, supporto e metriche settimanali.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">
						Che cosa consegnate a fine pilot?
					</h3>
					<p class="text-gray-600">
						Un report completo con TTR, policy hit, leak prevented, audit trail firmato e roadmap
						personalizzata (inclusa l’opzione per il dev kit hardware 20–50 unità).
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Possiamo estendere il pilot?</h3>
					<p class="text-gray-600">
						Sì, dopo i primi 90 giorni possiamo estendere o scalare verso un roll-out più ampio. Le
						condizioni vengono definite insieme sulla base dei risultati ottenuti.
					</p>
				</div>
			</div>
		</div>
	</section>

	<DeviceFooter />
</div>
