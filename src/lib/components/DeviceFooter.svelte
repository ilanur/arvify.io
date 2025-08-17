<script>
	import { Shield, Mail, MapPin, Github, ExternalLink } from 'lucide-svelte';

	const contactInfo = [
		{ icon: Mail, label: 'Email', value: 'ilanurs@gmail.com' },
		{ icon: Github, label: 'GitHub', value: 'github.com/ilanur' },
		{ icon: MapPin, label: 'Location', value: 'Open Source Developer' }
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
						href="https://github.com/ilanur"
						class="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
						aria-label="GitHub"
					>
						<Github class="w-5 h-5" />
					</a>
					<a
						href="mailto:ilanurs@gmail.com"
						class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
						aria-label="Email"
					>
						<Mail class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Support Links -->
			<div>
				<h3 class="text-lg font-semibold mb-6">Risorse</h3>
				<ul class="space-y-3">
					<li>
						<a href="/mcp-servers" class="text-gray-300 hover:text-white transition-colors">
							Server MCP
						</a>
					</li>
					<li>
						<a
							href="https://modelcontextprotocol.io"
							class="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
						>
							<span>Documentazione MCP</span>
							<ExternalLink class="w-3 h-3" />
						</a>
					</li>
				</ul>
			</div>

			<!-- Project Links -->
			<div>
				<h3 class="text-lg font-semibold mb-6">Progetto</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="https://github.com/ilanur/mcp-list/blob/main/README.md"
							class="text-gray-300 hover:text-white transition-colors"
						>
							Come contribuire
						</a>
					</li>
					<li>
						<a
							href="https://github.com/ilanur/mcp-list/issues"
							class="text-gray-300 hover:text-white transition-colors"
						>
							Segnala un problema
						</a>
					</li>
					<li>
						<a
							href="https://github.com/ilanur"
							class="text-gray-300 hover:text-white transition-colors"
						>
							Altri progetti
						</a>
					</li>
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
					<p class="text-gray-300">Seguimi su GitHub per nuovi aggiornamenti del progetto</p>
				</div>

				<div class="flex items-center space-x-4">
					<a
						href="https://github.com/ilanur"
						class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
					>
						<Github class="w-4 h-4" />
						<span>Segui su GitHub</span>
					</a>
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
					<span>Made in Italy 🇮🇹 by Emanuele Strano (+ AI assistants <span>🤖</span>)</span>
				</div>

				<div class="flex items-center space-x-6 text-sm text-gray-400">
					<a href="https://github.com/ilanur/mcp-list" class="hover:text-white transition-colors">
						Disponibile su GitHub
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
