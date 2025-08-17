<script>
	import {
		Check,
		Star,
		Zap,
		Shield,
		Smartphone,
		Package,
		CreditCard,
		Truck,
		Fingerprint,
		Battery,
		Cpu
	} from 'lucide-svelte';

	const packages = [
		{
			name: 'Starter',
			price: '149',
			originalPrice: '179',
			popular: false,
			description: 'Essenziale, leggero, senza schermo',
			color: 'blue',
			features: [
				'Bracciale con sensore fingerprint',
				'MCU ESP32-C6 con Wi-Fi 6 (BLE + tether)',
				'LED RGB discreto (niente schermo)',
				'App mobile iOS/Android',
				'Connettività BLE/Wi-Fi via telefono',
				'Cinturino sport in silicone',
				'Garanzia 1 anno'
			],
			limits: ['Autonomia 3–5 giorni', 'Ricarica USB-C standard']
		},
		{
			name: 'Pro',
			price: '249',
			originalPrice: '299',
			popular: true,
			description: 'Secure Element e autonomia estesa',
			color: 'emerald',
			features: [
				'Tutto del piano Starter',
				'Secure Element ATECC608A (chiavi on-device)',
				'Autonomia 5–7 giorni',
				'Ricarica magnetica wireless',
				'Cassa in alluminio anodizzato',
				'Credit cloud inclusi (€15/mese × 6 mesi)',
				'Doppio cinturino: pelle + sport',
				'Supporto prioritario',
				'Garanzia 2 anni'
			],
			limits: []
		},
		{
			name: 'Enterprise',
			price: '399',
			originalPrice: '479',
			popular: false,
			description: 'Fleet management e massima robustezza',
			color: 'purple',
			features: [
				'Tutto del piano Pro',
				'Titanio grado medicale, anti-corrosione',
				'Certificazione IP68 (polvere/acqua)',
				'Autonomia fino a 10 giorni',
				'API aziendali e SSO (SAML/OIDC)',
				'Gestione multi-dispositivo e policy',
				'Credit cloud illimitati primo anno',
				'Consulenza sicurezza dedicata',
				'Setup aziendale on-site',
				'SLA 99.9% e supporto 24/7',
				'Garanzia 3 anni'
			],
			limits: []
		}
	];

	const included = [
		{ icon: Package, text: 'Spedizione gratuita mondiale' },
		{ icon: Truck, text: 'Consegna in 7–10 giorni lavorativi' },
		{ icon: Shield, text: 'Reso facile 30 giorni' },
		{ icon: Smartphone, text: 'App mobile per iOS e Android' }
	];
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Scegli il Tuo
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
					Arvify
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
				Tutti i modelli includono controllo biometrico, app mobile e supporto completo
			</p>
			<div
				class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
			>
				<Zap class="w-5 h-5 mr-2" />
				<span>Preordine: -17% fino al 31 Agosto</span>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			<!-- Starter Plan -->
			<div
				class="relative bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
				style="animation-delay: 0ms;"
			>
				<div class="p-8">
					<div class="text-center mb-8">
						<h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
						<p class="text-gray-600 mb-6">Essenziale, leggero, senza schermo</p>
						<div class="flex items-center justify-center space-x-2 mb-2">
							<span class="text-4xl font-bold text-gray-900">€149</span>
							<span class="text-lg text-gray-500 line-through">€179</span>
						</div>
						<p class="text-sm text-gray-500">IVA inclusa, pagamento unico</p>
					</div>
					<div class="space-y-4 mb-8">
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Bracciale con sensore fingerprint</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">MCU ESP32-C6 con Wi-Fi 6 (BLE + tether)</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">LED RGB discreto (niente schermo)</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">App mobile iOS/Android</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Connettività BLE/Wi-Fi via telefono</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Cinturino sport in silicone</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Garanzia 1 anno</span>
						</div>
						<div class="pt-4 border-t border-gray-200">
							<div class="flex items-start space-x-3 text-sm text-gray-500">
								<span class="w-5 h-5 text-center mt-0.5">•</span>
								<span>Autonomia 3–5 giorni</span>
							</div>
							<div class="flex items-start space-x-3 text-sm text-gray-500">
								<span class="w-5 h-5 text-center mt-0.5">•</span>
								<span>Ricarica USB-C standard</span>
							</div>
						</div>
					</div>
					<button class="w-full btn-blue py-4 text-lg font-semibold transition-all">
						<CreditCard class="w-5 h-5 mr-2 inline" />
						Preordina Starter
					</button>
				</div>
			</div>

			<!-- Pro Plan -->
			<div
				class="relative bg-white rounded-2xl shadow-lg border-2 border-emerald-500 scale-105 hover:shadow-xl transition-all duration-300"
				style="animation-delay: 150ms;"
			>
				<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
					<div
						class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1"
					>
						<Star class="w-4 h-4" />
						<span>Più Venduto</span>
					</div>
				</div>
				<div class="p-8">
					<div class="text-center mb-8">
						<h3 class="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
						<p class="text-gray-600 mb-6">Secure Element e autonomia estesa</p>
						<div class="flex items-center justify-center space-x-2 mb-2">
							<span class="text-4xl font-bold text-gray-900">€249</span>
							<span class="text-lg text-gray-500 line-through">€299</span>
						</div>
						<p class="text-sm text-gray-500">IVA inclusa, pagamento unico</p>
					</div>
					<div class="space-y-4 mb-8">
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Tutto del piano Starter</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Secure Element ATECC608A (chiavi on-device)</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Autonomia 5–7 giorni</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Ricarica magnetica wireless</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Cassa in alluminio anodizzato</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Credit cloud inclusi (€15/mese × 6 mesi)</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Doppio cinturino: pelle + sport</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Supporto prioritario</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Garanzia 2 anni</span>
						</div>
					</div>
					<button
						class="w-full btn-emerald py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
					>
						<CreditCard class="w-5 h-5 mr-2 inline" />
						Preordina Pro
					</button>
				</div>
			</div>

			<!-- Enterprise Plan -->
			<div
				class="relative bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
				style="animation-delay: 300ms;"
			>
				<div class="p-8">
					<div class="text-center mb-8">
						<h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
						<p class="text-gray-600 mb-6">Per aziende e massima sicurezza</p>
						<div class="flex items-center justify-center space-x-2 mb-2">
							<span class="text-4xl font-bold text-gray-900">€399</span>
							<span class="text-lg text-gray-500 line-through">€479</span>
						</div>
						<p class="text-sm text-gray-500">IVA inclusa, pagamento unico</p>
					</div>
					<div class="space-y-4 mb-8">
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Tutto del piano Pro</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Titanio grado medicale, anti-corrosione</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Certificazione IP68 (polvere/acqua)</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Autonomia fino a 10 giorni</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">API aziendali e SSO (SAML/OIDC)</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Gestione multi-dispositivo e policy</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Credit cloud illimitati primo anno</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Consulenza sicurezza dedicata</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Setup aziendale on-site</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">SLA 99.9% e supporto 24/7</span>
						</div>
						<div class="flex items-start space-x-3">
							<Check class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">Garanzia 3 anni</span>
						</div>
					</div>
					<button class="w-full btn-purple py-4 text-lg font-semibold transition-all">
						<CreditCard class="w-5 h-5 mr-2 inline" />
						Preordina Enterprise
					</button>
				</div>
			</div>
		</div>

		<div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
			<h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Incluso in Tutti i Piani</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
					<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
						<Package class="w-5 h-5 text-blue-600" />
					</div>
					<span class="text-gray-700 font-medium">Spedizione gratuita mondiale</span>
				</div>
				<div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
					<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
						<Truck class="w-5 h-5 text-blue-600" />
					</div>
					<span class="text-gray-700 font-medium">Consegna in 7–10 giorni lavorativi</span>
				</div>
				<div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
					<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
						<Shield class="w-5 h-5 text-blue-600" />
					</div>
					<span class="text-gray-700 font-medium">Reso facile 30 giorni</span>
				</div>
				<div class="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
					<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
						<Smartphone class="w-5 h-5 text-blue-600" />
					</div>
					<span class="text-gray-700 font-medium">App mobile per iOS e Android</span>
				</div>
			</div>
		</div>

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

		<div class="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
			<Shield class="w-16 h-16 text-emerald-600 mx-auto mb-4" />
			<h3 class="text-2xl font-bold text-gray-900 mb-3">Garanzia Soddisfatti o Rimborsati</h3>
			<p class="text-gray-600 text-lg max-w-2xl mx-auto">
				Prova Arvify per 30 giorni. Se il controllo biometrico dell'AI non ti convince al 100%, ti
				rimborsiamo l'intero importo senza domande.
			</p>
		</div>
	</div>
</section>
