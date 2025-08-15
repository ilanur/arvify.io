<script>
	import { Shield, Zap, Smartphone, Wifi, ChevronRight, Play } from 'lucide-svelte';
</script>

<section class="relative py-20 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
	<div
		class="absolute inset-0 opacity-20"
		style="background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0); background-size: 30px 30px;"
	></div>

	<!-- Content -->
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="text-white">
				<div
					class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
				>
					<Shield class="w-4 h-4 mr-2 text-green-400" />
					Privacy-First AI Assistant
				</div>

				<h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
					Smart AI Box
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
					>
						Hybrid Intelligence
					</span>
				</h1>

				<p class="text-xl text-gray-300 mb-8 leading-relaxed">
					Il primo dispositivo AI ibrido che combina la potenza del cloud con la privacy del locale.
					Raspberry Pi 5 con Ollama integrato, controllato dalla tua app mobile.
				</p>

				<!-- Key Features -->
				<div class="space-y-4 mb-8">
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
							<Zap class="w-4 h-4 text-blue-400" />
						</div>
						<span class="text-gray-200">Elaborazione locale per massima privacy</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
							<Wifi class="w-4 h-4 text-emerald-400" />
						</div>
						<span class="text-gray-200">Cloud ibrido quando serve potenza extra</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
							<Smartphone class="w-4 h-4 text-purple-400" />
						</div>
						<span class="text-gray-200">Controllo totale via app mobile</span>
					</div>
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4">
					<button
						class="btn-primary px-8 py-4 text-lg inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
					>
						<span>Ordina Ora</span>
						<ChevronRight class="w-5 h-5" />
					</button>

					<button
						class="inline-flex items-center space-x-2 px-6 py-4 text-lg text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
					>
						<Play class="w-5 h-5" />
						<span>Guarda Demo</span>
					</button>
				</div>

				<!-- Pricing Preview -->
				<div class="mt-8 pt-8 border-t border-white/10">
					<div class="flex items-center space-x-4">
						<span class="text-gray-400">A partire da</span>
						<span class="text-3xl font-bold text-white">€299</span>
						<span class="text-gray-400">IVA inclusa</span>
					</div>
				</div>
			</div>

			<!-- Right Content - Device Visualization -->
			<div class="relative">
				<!-- Main Device Mockup -->
				<div
					class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl"
				>
					<!-- Raspberry Pi Visual -->
					<div class="bg-green-600 rounded-lg p-6 mb-6">
						<div class="grid grid-cols-4 gap-2 mb-4">
							{#each Array(16) as _, i}
								<div
									class="w-3 h-3 bg-yellow-400 rounded-full {i % 3 === 0 ? 'animate-pulse' : ''}"
								></div>
							{/each}
						</div>
						<div class="text-center text-white font-mono text-sm">Raspberry Pi 5 (8GB)</div>
					</div>

					<!-- Status Indicators -->
					<div class="space-y-3">
						<div class="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
							<span class="text-green-400 font-medium">Ollama</span>
							<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						</div>
						<div class="flex items-center justify-between p-3 bg-blue-500/20 rounded-lg">
							<span class="text-blue-400 font-medium">Vector DB</span>
							<div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
						</div>
						<div class="flex items-center justify-between p-3 bg-purple-500/20 rounded-lg">
							<span class="text-purple-400 font-medium">MCP Server</span>
							<div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
						</div>
					</div>
				</div>

				<!-- Mobile App Mockup -->
				<div
					class="absolute -bottom-8 -right-8 w-32 h-56 bg-gray-900 rounded-2xl shadow-xl border border-gray-700"
				>
					<div class="p-2">
						<div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3">
							<div class="text-white text-xs text-center mb-2">Smart AI Control</div>
							<div class="space-y-2">
								{#each Array(3) as _, i}
									<div class="h-2 bg-white/30 rounded-full">
										<div
											class="h-full bg-white rounded-full transition-all duration-1000"
											style="width: {30 + i * 25}%"
										></div>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Floating Icons -->
				<div
					class="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce"
				>
					<Shield class="w-8 h-8 text-blue-400" />
				</div>
				<div
					class="absolute top-8 -right-12 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse"
				>
					<Zap class="w-6 h-6 text-emerald-400" />
				</div>
			</div>
		</div>
	</div>
</section>
