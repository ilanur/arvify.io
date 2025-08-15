<script>
	import {
		Shield,
		Mail,
		Phone,
		MapPin,
		Github,
		Twitter,
		MessageCircle,
		ExternalLink
	} from 'lucide-svelte';

	const contactInfo = [
		{ icon: Mail, label: 'Email', value: 'info@arvify.io' },
		{ icon: Phone, label: 'Telefono', value: '+39 02 1234 5678' },
		{ icon: MapPin, label: 'Indirizzo', value: "Via dell'Innovazione 42, Milano" }
	];

	const legalLinks = [
		'Privacy Policy',
		'Termini di Servizio',
		'Garanzia',
		'Reso e Rimborsi',
		'Cookie Policy'
	];

	const supportLinks = [
		'Centro Assistenza',
		'Documentazione',
		'Video Tutorial',
		'Community Forum',
		'Contattaci'
	];
</script>

<footer class="bg-gray-900 text-white">
	<!-- Main Footer -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Company Info -->
			<div class="lg:col-span-2">
				<div class="flex items-center space-x-3 mb-6">
					<div
						class="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center"
					>
						<Shield class="w-6 h-6 text-white" />
					</div>
					<span class="text-2xl font-bold">Arvify.io</span>
				</div>

				<p class="text-gray-300 text-lg mb-6 leading-relaxed max-w-md">
					Il primo assistente AI ibrido che rispetta la tua privacy senza rinunciare alle
					prestazioni del cloud.
				</p>

				<!-- Contact Info -->
				<div class="space-y-3">
					{#each contactInfo as contact}
						<div class="flex items-center space-x-3">
							<svelte:component this={contact.icon} class="w-4 h-4 text-blue-400" />
							<span class="text-gray-300">{contact.value}</span>
						</div>
					{/each}
				</div>

				<!-- Social Links -->
				<div class="flex items-center space-x-4 mt-6">
					<a
						href="https://twitter.com/arvifyio"
						class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
						aria-label="Twitter"
					>
						<Twitter class="w-5 h-5" />
					</a>
					<a
						href="https://github.com/arvify"
						class="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
						aria-label="GitHub"
					>
						<Github class="w-5 h-5" />
					</a>
					<a
						href="https://discord.gg/arvify"
						class="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
						aria-label="Discord"
					>
						<MessageCircle class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Support Links -->
			<div>
				<h3 class="text-lg font-semibold mb-6">Supporto</h3>
				<ul class="space-y-3">
					{#each supportLinks as link}
						<li>
							<a
								href="/support/{link.toLowerCase().replace(/\s+/g, '-')}"
								class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
							>
								<span>{link}</span>
								{#if link === 'Centro Assistenza'}
									<ExternalLink class="w-3 h-3" />
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Legal Links -->
			<div>
				<h3 class="text-lg font-semibold mb-6">Legale</h3>
				<ul class="space-y-3">
					{#each legalLinks as link}
						<li>
							<a
								href="/legal/{link.toLowerCase().replace(/\s+/g, '-')}"
								class="text-gray-300 hover:text-white transition-colors"
							>
								{link}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<!-- Newsletter Section -->
	<div class="border-t border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
				<div>
					<h3 class="text-lg font-semibold mb-2">Resta aggiornato</h3>
					<p class="text-gray-300">Ricevi le ultime novità su Arvify e aggiornamenti software</p>
				</div>

				<div class="flex space-x-3 w-full md:w-auto">
					<input
						type="email"
						placeholder="il-tuo@email.com"
						class="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
					/>
					<button
						class="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium transition-all"
					>
						Iscriviti
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
				<div class="flex items-center space-x-6 text-sm text-gray-400">
					<span>© 2025 Arvify.io. Tutti i diritti riservati.</span>
					<span>Made in Italy 🇮🇹</span>
				</div>

				<div class="flex items-center space-x-6 text-sm text-gray-400">
					<span>Raspberry Pi® è un marchio registrato di Raspberry Pi Foundation</span>
				</div>
			</div>
		</div>
	</div>
</footer>
