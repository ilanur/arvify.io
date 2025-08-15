<script>
	import Pricing from '$lib/components/Pricing.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { Shield, Code } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Pricing - Arvify.io | Scegli il Tuo Piano</title>
	<meta
		name="description"
		content="Scopri i piani di Arvify: Starter €299, Pro €449, Enterprise €799. Dispositivo AI ibrido con Raspberry Pi 5 e Ollama integrato."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
	<!-- Navigation -->
	<Navigation />

	<!-- Header Section -->
	<section class="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
				Scegli il Tuo
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
					Arvify
				</span>
			</h1>
			<p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
				Il primo assistente AI ibrido che rispetta la tua privacy senza rinunciare alle prestazioni.
				Tutti i piani includono hardware dedicato e supporto completo.
			</p>

			<!-- Key Benefits -->
			<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
					<div
						class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3"
					>
						<Shield class="w-6 h-6 text-green-400" />
					</div>
					<h3 class="text-white font-semibold mb-2">Privacy Totale</h3>
					<p class="text-blue-100 text-sm">Elaborazione locale, cloud solo su approvazione</p>
				</div>

				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
					<div
						class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3"
					>
						<Code class="w-6 h-6 text-blue-400" />
					</div>
					<h3 class="text-white font-semibold mb-2">Raspberry Pi 5</h3>
					<p class="text-blue-100 text-sm">8GB RAM, ARM Cortex-A76, ottimizzato per AI</p>
				</div>

				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
					<div
						class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3"
					>
						<span class="text-2xl">📱</span>
					</div>
					<h3 class="text-white font-semibold mb-2">App Mobile</h3>
					<p class="text-blue-100 text-sm">Controllo totale da iOS e Android</p>
				</div>
			</div>
		</div>
	</section>

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

	<!-- Footer -->
	<DeviceFooter />
</div>
