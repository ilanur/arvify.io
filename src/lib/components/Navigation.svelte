<script>
	import { Shield, Code } from 'lucide-svelte';
	import { page } from '$app/stores';

	let { variant = 'default', showCTA = true } = $props();

	// variant can be: 'default', 'transparent', 'dark'
	let currentPath = $derived($page?.url?.pathname || '/');
</script>

<nav
	class="
	{variant === 'transparent'
		? 'absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20'
		: variant === 'dark'
			? 'bg-gray-900 border-b border-gray-800'
			: 'bg-white/80 backdrop-blur-sm border-b border-gray-200'}
"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16 items-center">
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center space-x-2">
					<div
						class="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center"
					>
						{#if variant === 'default' || variant === 'dark'}
							<Shield class="w-5 h-5 text-white" />
						{:else}
							<Shield class="w-5 h-5 text-white" />
						{/if}
					</div>
					<span
						class="text-xl font-bold {variant === 'transparent'
							? 'text-white'
							: variant === 'dark'
								? 'text-white'
								: 'text-gray-900'}"
					>
						Arvify {currentPath === '/mcp-servers' ? 'MCP' : ''}
					</span>
				</a>

				<div class="hidden md:flex items-center space-x-6">
					<a
						href="/mcp-servers"
						class="
							{currentPath === '/mcp-servers'
							? variant === 'transparent'
								? 'text-white font-medium'
								: variant === 'dark'
									? 'text-blue-400 font-medium'
									: 'text-blue-600 font-medium'
							: variant === 'transparent'
								? 'text-white/70 hover:text-white'
								: variant === 'dark'
									? 'text-gray-300 hover:text-white'
									: 'text-gray-700 hover:text-blue-600'} 
							transition-colors
						"
					>
						MCP Servers
					</a>
					<a
						href="/pricing"
						class="
							{currentPath === '/pricing'
							? variant === 'transparent'
								? 'text-white font-medium'
								: variant === 'dark'
									? 'text-blue-400 font-medium'
									: 'text-blue-600 font-medium'
							: variant === 'transparent'
								? 'text-white/70 hover:text-white'
								: variant === 'dark'
									? 'text-gray-300 hover:text-white'
									: 'text-gray-700 hover:text-blue-600'} 
							transition-colors
						"
					>
						Pricing
					</a>
					<a
						href="/login"
						class="
							{currentPath === '/login'
							? variant === 'transparent'
								? 'text-white font-medium'
								: variant === 'dark'
									? 'text-blue-400 font-medium'
									: 'text-blue-600 font-medium'
							: variant === 'transparent'
								? 'text-white/70 hover:text-white'
								: variant === 'dark'
									? 'text-gray-300 hover:text-white'
									: 'text-gray-700 hover:text-blue-600'} 
							transition-colors
						"
					>
						Login
					</a>
				</div>
			</div>

			{#if showCTA}
				<div class="hidden md:flex items-center space-x-4">
					{#if currentPath !== '/pricing'}
						<a
							href="/pricing"
							class="
								{variant === 'transparent'
								? 'text-white/70 hover:text-white'
								: variant === 'dark'
									? 'text-gray-300 hover:text-white'
									: 'text-gray-600 hover:text-gray-900'} 
								text-sm transition-colors
							"
						>
							A partire da €299
						</a>
					{/if}
					<a
						href="/pricing"
						class="
							{variant === 'transparent'
							? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
							: variant === 'dark'
								? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
								: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'} 
							px-4 py-2 rounded-lg font-medium transition-all
						"
					>
						{currentPath === '/pricing' ? 'Scegli Piano' : 'Ordina Ora'}
					</a>
				</div>
			{:else}
				<a
					href="/"
					class="
						{variant === 'transparent'
						? 'text-white/70 hover:text-white'
						: variant === 'dark'
							? 'text-gray-300 hover:text-white'
							: 'text-gray-600 hover:text-gray-900'} 
						text-sm transition-colors
					"
				>
					← Torna alla Home
				</a>
			{/if}
		</div>
	</div>
</nav>
