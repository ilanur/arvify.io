<script>
	import { Shield, Fingerprint, Lock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Arvify.io - Il bracciale che controlla la tua AI</title>
	<meta
		name="description"
		content="Arvify mette il controllo dell'AI al tuo polso con consenso biometrico e privacy totale."
	/>
</svelte:head>

<section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
		<h1 class="text-5xl md:text-6xl font-bold mb-6">Il controllo dell'AI al tuo polso</h1>
		<p class="text-xl text-blue-100 mb-8">
			Il primo bracciale che richiede la tua impronta digitale per autorizzare ogni azione
			dell'intelligenza artificiale.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/pricing"
				class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all"
			>
				Ordina Ora
			</a>
			<a
				href="/technology"
				class="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
			>
				Scopri la Tecnologia
			</a>
		</div>
	</div>
</section>

<section class="py-20 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 sm:grid-cols-3 text-center">
		<div class="flex flex-col items-center">
			<Fingerprint class="w-10 h-10 text-blue-600 mb-4" />
			<h3 class="font-semibold text-lg mb-2">Consenso Biometrico</h3>
			<p class="text-gray-600">
				Ogni azione è autorizzata solo quando appoggi il dito sul sensore.
			</p>
		</div>
		<div class="flex flex-col items-center">
			<Shield class="w-10 h-10 text-emerald-600 mb-4" />
			<h3 class="font-semibold text-lg mb-2">Privacy Totale</h3>
			<p class="text-gray-600">
				Le chiavi e i dati sono protetti da secure element e TTL automatico.
			</p>
		</div>
		<div class="flex flex-col items-center">
			<Lock class="w-10 h-10 text-purple-600 mb-4" />
			<h3 class="font-semibold text-lg mb-2">Compatibilità Universale</h3>
			<p class="text-gray-600">
				Connettiti a qualsiasi provider AI tramite API e Model Context Protocol.
			</p>
		</div>
	</div>
</section>

<section class="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-center">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Pronto a controllare l'AI?</h2>
		<p class="text-xl text-blue-100 mb-8">
			Metti al sicuro i tuoi dati con un gesto. Arvify sarà presto disponibile.
		</p>
		<a
			href="/pricing"
			class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold inline-block"
		>
			Preordina ora
		</a>
	</div>
</section>
