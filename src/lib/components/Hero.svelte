<script>
	import { Github, ExternalLink, Sparkles, Code } from 'lucide-svelte';
</script>

<section class="relative py-20 overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100"></div>
	<div
		class="absolute inset-0"
		style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0); background-size: 20px 20px;"
	></div>

	<!-- Content -->
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<!-- Main Title -->
			<div class="flex items-center justify-center space-x-3 mb-6">
				<div class="p-3 bg-primary-100 rounded-2xl">
					<Code class="w-8 h-8 text-primary-600" />
				</div>
				<div>
					<h1 class="text-4xl md:text-6xl font-bold text-gray-900">MCP Servers</h1>
					<div class="flex items-center justify-center space-x-2 mt-2">
						<Sparkles class="w-5 h-5 text-primary-500" />
						<span class="text-lg text-primary-600 font-semibold">Showcase</span>
					</div>
				</div>
			</div>

			<!-- Subtitle -->
			<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
				Discover the amazing ecosystem of
				<span class="font-bold text-primary-600">Model Context Protocol</span> servers. From databases
				to AI tools, find the perfect server for your next project.
			</p>

			<!-- Call to Action -->
			<div
				class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
			>
				<a
					href="#servers"
					class="btn-primary px-8 py-4 text-lg inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
				>
					<span>Explore Servers</span>
					<Sparkles class="w-5 h-5" />
				</a>

				<a
					href="https://github.com/punkpeye/awesome-mcp-servers"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
				>
					<Github class="w-5 h-5" />
					<span>View on GitHub</span>
					<ExternalLink class="w-4 h-4" />
				</a>
			</div>

			<!-- Features Highlight -->
			<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div
						class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
					>
						<span class="text-2xl">🔗</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Aggregators</h3>
					<p class="text-gray-600">Unified servers that combine multiple MCP capabilities</p>
				</div>

				<div class="text-center">
					<div
						class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
					>
						<span class="text-2xl">🗄️</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Databases</h3>
					<p class="text-gray-600">Connect to PostgreSQL, Redis, MongoDB and more</p>
				</div>

				<div class="text-center">
					<div
						class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
					>
						<span class="text-2xl">☁️</span>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Cloud Services</h3>
					<p class="text-gray-600">AWS, Azure, Google Cloud integrations</p>
				</div>
			</div>
		</div>
	</div>
</section>
