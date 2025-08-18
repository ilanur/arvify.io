<script>
	import Pricing from '$lib/components/Pricing.svelte';
</script>

<svelte:head>
	<title>Pricing - Arvify.io | Scegli il Tuo Piano</title>
	<meta
		name="description"
		content="Scopri i piani di Arvify: Starter €299, Pro €449, Enterprise €799. Dispositivo AI ibrido con Raspberry Pi 5 e Ollama integrato."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://arvify.io/pricing" />
	<meta property="og:title" content="Pricing - Arvify.io" />
	<meta
		property="og:description"
		content="Scopri i piani di Arvify: Starter, Pro ed Enterprise con hardware e servizi AI integrati."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://arvify.io/pricing" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="bg-gradient-to-br from-gray-50 to-white">
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
						Posso cambiare piano dopo l'acquisto?
					</h3>
					<p class="text-gray-600">
						Sì, puoi sempre fare upgrade del tuo piano acquistando componenti aggiuntivi o servizi
						cloud. Contattaci per le opzioni disponibili.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">
						Cosa succede se non sono soddisfatto?
					</h3>
					<p class="text-gray-600">
						Offriamo una garanzia soddisfatti o rimborsati di 30 giorni. Puoi restituire il
						dispositivo per un rimborso completo.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">
						I cloud credits si rinnovano automaticamente?
					</h3>
					<p class="text-gray-600">
						No, i cloud credits non si rinnovano automaticamente. Puoi acquistare credits aggiuntivi
						quando necessario direttamente dall'app.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">
						Posso usare i miei modelli AI personalizzati?
					</h3>
					<p class="text-gray-600">
						Sì, Arvify supporta modelli Ollama personalizzati. Nel piano Enterprise includiamo anche
						supporto per setup personalizzati.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
