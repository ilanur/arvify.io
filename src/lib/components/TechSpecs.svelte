<script>
	import { Cpu, HardDrive, Wifi, Zap, Settings, Monitor } from 'lucide-svelte';

	const specs = [
		{
			category: 'Hardware',
			icon: Cpu,
			color: 'blue',
			items: [
				{ label: 'Processore', value: 'ARM Cortex-A76 quad-core @ 2.4GHz' },
				{ label: 'RAM', value: '8GB LPDDR4X-4267' },
				{ label: 'Storage', value: '64GB microSD + espandibile' },
				{ label: 'Connettività', value: 'Wi-Fi 6, Bluetooth 5.2, Ethernet' }
			]
		},
		{
			category: 'Software',
			icon: Settings,
			color: 'emerald',
			items: [
				{ label: 'OS', value: 'Raspberry Pi OS ottimizzato' },
				{ label: 'AI Engine', value: 'Ollama con modelli ottimizzati' },
				{ label: 'Database', value: 'sqlite-vec per embeddings' },
				{ label: 'MCP Server', value: 'Supporto completo Model Context Protocol' }
			]
		},
		{
			category: 'Prestazioni',
			icon: Zap,
			color: 'amber',
			items: [
				{ label: 'Inferenza Locale', value: '< 100ms per query semplici' },
				{ label: 'Modelli Supportati', value: 'Llama 3.2, Mistral 7B, Phi-3' },
				{ label: 'Elaborazione', value: 'Fino a 8K token in parallelo' },
				{ label: 'Consumo', value: '< 15W in funzionamento' }
			]
		}
	];

	const cloudProviders = [
		{ name: 'OpenAI', model: 'GPT-4o', color: 'green' },
		{ name: 'Anthropic', model: 'Claude 3.5', color: 'purple' },
		{ name: 'Google', model: 'Gemini Pro', color: 'blue' },
		{ name: 'Locale', model: 'Ollama', color: 'orange' }
	];
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Specifiche
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
					Tecniche
				</span>
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Hardware dedicato e software ottimizzato per il massimo delle prestazioni AI
			</p>
		</div>

		<!-- Specs Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
			{#each specs as spec, i}
				<div
					class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
					style="animation-delay: {i * 150}ms"
				>
					<!-- Header -->
					<div class="flex items-center space-x-3 mb-6">
						<div class="w-12 h-12 bg-{spec.color}-100 rounded-xl flex items-center justify-center">
							<svelte:component this={spec.icon} class="w-6 h-6 text-{spec.color}-600" />
						</div>
						<h3 class="text-xl font-bold text-gray-900">{spec.category}</h3>
					</div>

					<!-- Specs List -->
					<div class="space-y-4">
						{#each spec.items as item}
							<div class="flex justify-between items-start">
								<span class="text-gray-600 font-medium">{item.label}</span>
								<span class="text-gray-900 font-semibold text-right ml-4">{item.value}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Cloud Providers Section -->
		<div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
			<div class="text-center mb-8">
				<h3 class="text-2xl font-bold text-gray-900 mb-3">Router AI Ibrido</h3>
				<p class="text-gray-600">
					Il dispositivo sceglie automaticamente il provider migliore per ogni richiesta
				</p>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				{#each cloudProviders as provider}
					<div
						class="text-center p-6 rounded-xl bg-gray-50 hover:bg-{provider.color}-50 transition-colors"
					>
						<div
							class="w-16 h-16 bg-{provider.color}-100 rounded-full flex items-center justify-center mx-auto mb-4"
						>
							<span class="text-2xl">
								{#if provider.name === 'OpenAI'}🤖
								{:else if provider.name === 'Anthropic'}🧠
								{:else if provider.name === 'Google'}🌟
								{:else}🏠
								{/if}
							</span>
						</div>
						<h4 class="font-bold text-gray-900 mb-1">{provider.name}</h4>
						<p class="text-sm text-gray-600">{provider.model}</p>
						{#if provider.name === 'Locale'}
							<div class="mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
								Privacy First
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Flow Diagram -->
			<div class="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
				<div class="flex items-center justify-center space-x-4 text-sm">
					<div class="flex items-center space-x-2">
						<Monitor class="w-5 h-5 text-blue-600" />
						<span class="font-medium">App Mobile</span>
					</div>
					<span class="text-gray-400">→</span>
					<div class="flex items-center space-x-2">
						<HardDrive class="w-5 h-5 text-emerald-600" />
						<span class="font-medium">Arvify</span>
					</div>
					<span class="text-gray-400">→</span>
					<div class="flex items-center space-x-2">
						<Wifi class="w-5 h-5 text-purple-600" />
						<span class="font-medium">Cloud (se necessario)</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
