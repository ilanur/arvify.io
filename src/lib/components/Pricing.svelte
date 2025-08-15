<script>
	import { Check, Star, Zap, Shield, Smartphone, Package, CreditCard, Truck } from 'lucide-svelte';

	const packages = [
		{
			name: 'Starter',
			price: '299',
			originalPrice: '349',
			popular: false,
			description: "Perfetto per iniziare con l'AI privata",
			color: 'blue',
			features: [
				'Raspberry Pi 5 (8GB)',
				'MicroSD 64GB inclusa',
				'Setup guidato',
				'App mobile inclusa',
				'3 modelli Ollama preinstallati',
				'Supporto email',
				'Garanzia 1 anno'
			],
			limits: ['Modelli fino a 7B parametri', 'Storage base 64GB']
		},
		{
			name: 'Pro',
			price: '449',
			originalPrice: '529',
			popular: true,
			description: 'La scelta migliore per utenti avanzati',
			color: 'emerald',
			features: [
				'Tutto del piano Starter',
				'SSD esterno 256GB',
				'Case premium alluminio',
				'Raffreddamento attivo',
				'5 modelli Ollama ottimizzati',
				'Cloud credits inclusi (10€/mese per 6 mesi)',
				'Setup prioritario',
				'Supporto prioritario',
				'Garanzia 2 anni'
			],
			limits: []
		},
		{
			name: 'Enterprise',
			price: '799',
			originalPrice: '949',
			popular: false,
			description: 'Per aziende e sviluppatori',
			color: 'purple',
			features: [
				'Tutto del piano Pro',
				'SSD esterno 1TB',
				'Backup automatico cloud',
				'API personalizzate',
				'Multi-device management',
				'Cloud credits illimitati primo anno',
				'Consulenza tecnica dedicata',
				'Setup on-site disponibile',
				'SLA garantito',
				'Garanzia 3 anni'
			],
			limits: []
		}
	];

	const included = [
		{ icon: Package, text: 'Spedizione gratuita in Italia' },
		{ icon: Truck, text: 'Consegna in 3-5 giorni lavorativi' },
		{ icon: Shield, text: 'Garanzia soddisfatti o rimborsati 30gg' },
		{ icon: Smartphone, text: 'App mobile per iOS e Android' }
	];
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Scegli il Tuo
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
					Smart AI Box
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
				Tutti i piani includono hardware dedicato, software preconfigurato e supporto completo
			</p>

			<!-- Limited Time Offer -->
			<div
				class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
			>
				<Zap class="w-5 h-5 mr-2" />
				<span>Offerta lancio: -15% fino al 31 Agosto</span>
			</div>
		</div>

		<!-- Pricing Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			{#each packages as pkg, i}
				<div
					class="relative bg-white rounded-2xl shadow-lg border-2 {pkg.popular
						? 'border-emerald-500 scale-105'
						: 'border-gray-200'} hover:shadow-xl transition-all duration-300"
					style="animation-delay: {i * 150}ms"
				>
					<!-- Popular Badge -->
					{#if pkg.popular}
						<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
							<div
								class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1"
							>
								<Star class="w-4 h-4" />
								<span>Più Venduto</span>
							</div>
						</div>
					{/if}

					<div class="p-8">
						<!-- Header -->
						<div class="text-center mb-8">
							<h3 class="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
							<p class="text-gray-600 mb-6">{pkg.description}</p>

							<!-- Price -->
							<div class="flex items-center justify-center space-x-2 mb-2">
								<span class="text-4xl font-bold text-gray-900">€{pkg.price}</span>
								<span class="text-lg text-gray-500 line-through">€{pkg.originalPrice}</span>
							</div>
							<p class="text-sm text-gray-500">IVA inclusa, pagamento unico</p>
						</div>

						<!-- Features -->
						<div class="space-y-4 mb-8">
							{#each pkg.features as feature}
								<div class="flex items-start space-x-3">
									<Check class="w-5 h-5 text-{pkg.color}-500 mt-0.5 flex-shrink-0" />
									<span class="text-gray-700">{feature}</span>
								</div>
							{/each}

							{#if pkg.limits.length > 0}
								<div class="pt-4 border-t border-gray-200">
									{#each pkg.limits as limit}
										<div class="flex items-start space-x-3 text-sm text-gray-500">
											<span class="w-5 h-5 text-center mt-0.5">•</span>
											<span>{limit}</span>
										</div>
									{/each}
								</div>
							{/if}
						</div>

						<!-- CTA Button -->
						<button
							class="w-full btn-{pkg.color} py-4 text-lg font-semibold {pkg.popular
								? 'shadow-lg hover:shadow-xl transform hover:scale-105'
								: ''} transition-all"
						>
							<CreditCard class="w-5 h-5 mr-2 inline" />
							Ordina {pkg.name}
						</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- What's Included -->
		<div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
			<h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Incluso in Tutti i Piani</h3>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each included as item}
					<div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
						<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
							<svelte:component this={item.icon} class="w-5 h-5 text-blue-600" />
						</div>
						<span class="text-gray-700 font-medium">{item.text}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Payment Methods -->
		<div class="mt-12 text-center">
			<p class="text-gray-600 mb-4">Metodi di pagamento accettati:</p>
			<div class="flex items-center justify-center space-x-6">
				<div class="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
					<span class="text-2xl">💳</span>
					<span class="text-gray-700">Carte di credito</span>
				</div>
				<div class="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
					<span class="text-2xl">🏦</span>
					<span class="text-gray-700">Bonifico bancario</span>
				</div>
				<div class="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
					<span class="text-2xl">📱</span>
					<span class="text-gray-700">PayPal</span>
				</div>
			</div>
		</div>

		<!-- Satisfaction Guarantee -->
		<div class="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
			<Shield class="w-16 h-16 text-emerald-600 mx-auto mb-4" />
			<h3 class="text-2xl font-bold text-gray-900 mb-3">Garanzia Soddisfatti o Rimborsati</h3>
			<p class="text-gray-600 text-lg max-w-2xl mx-auto">
				Prova Smart AI Box per 30 giorni. Se non sei completamente soddisfatto, ti rimborsiamo il
				100% del prezzo pagato.
			</p>
		</div>
	</div>
</section>
