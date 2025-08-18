<script>
	// @ts-nocheck
	import { Shield, Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { t } from '$lib/utils/translations.js';
	import ArvifyLogo from '$lib/components/ArvifyLogo.svelte';

	let { variant = 'default', showCTA = true } = $props();

	// variant can be: 'default', 'transparent', 'dark'
	let currentPath = $derived($page?.url?.pathname || '/');
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav
	class="sticky top-0 z-50 w-full
        {variant === 'transparent'
		? 'bg-white/10 backdrop-blur-sm border-b border-white/20'
		: variant === 'dark'
			? 'bg-gray-900 border-b border-gray-800'
			: 'bg-white/80 backdrop-blur-sm border-b border-gray-200'}
"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16 items-center">
			<div class="flex items-center space-x-8">
				<a href="/" class="flex items-center">
					<ArvifyLogo
						size="lg"
						showText={true}
						textColor={variant === 'transparent'
							? 'text-white'
							: variant === 'dark'
								? 'text-white'
								: 'text-gray-900'}
						className="hover:opacity-80 transition-opacity"
					/>
					{#if currentPath === '/mcp-servers'}
						<span
							class="ml-2 text-sm font-medium {variant === 'transparent'
								? 'text-blue-200'
								: variant === 'dark'
									? 'text-blue-400'
									: 'text-blue-600'}"
						>
							MCP
						</span>
					{/if}
				</a>

				<div class="hidden md:flex items-center space-x-6">
					<a
						href="/technology"
						class="
							{currentPath === '/technology'
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
						{t('nav.mcpServers')}
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
						{t('nav.pricing')}
					</a>
					<a
						href="/roadmap"
						class="
							{currentPath === '/roadmap'
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
						Roadmap
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
						{t('nav.login')}
					</a>
				</div>
			</div>

			{#if showCTA}
				<div class="flex items-center space-x-4">
					<!-- Desktop CTA -->
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
								{t('nav.cta.from')}
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
							{currentPath === '/pricing' ? t('nav.cta.choosePlan') : t('nav.cta.orderNow')}
						</a>
					</div>

					<!-- Mobile menu button -->
					<button
						type="button"
						class="md:hidden p-2 rounded-md {variant === 'transparent'
							? 'text-white/70 hover:text-white hover:bg-white/10'
							: variant === 'dark'
								? 'text-gray-300 hover:text-white hover:bg-gray-800'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
						onclick={toggleMobileMenu}
						aria-expanded={mobileMenuOpen}
					>
						{#if mobileMenuOpen}
							<X class="w-5 h-5" />
						{:else}
							<Menu class="w-5 h-5" />
						{/if}
					</button>
				</div>
			{:else}
				<div class="flex items-center space-x-4">
					<div class="hidden md:block">
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
							{t('nav.home')}
						</a>
					</div>

					<!-- Mobile menu button -->
					<button
						type="button"
						class="md:hidden p-2 rounded-md {variant === 'transparent'
							? 'text-white/70 hover:text-white hover:bg-white/10'
							: variant === 'dark'
								? 'text-gray-300 hover:text-white hover:bg-gray-800'
								: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
						onclick={toggleMobileMenu}
						aria-expanded={mobileMenuOpen}
					>
						{#if mobileMenuOpen}
							<X class="w-5 h-5" />
						{:else}
							<Menu class="w-5 h-5" />
						{/if}
					</button>
				</div>
			{/if}
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div
			class="md:hidden {variant === 'transparent'
				? 'bg-white/95 backdrop-blur-sm border-t border-white/20'
				: variant === 'dark'
					? 'bg-gray-900 border-t border-gray-800'
					: 'bg-white border-t border-gray-200'}"
		>
			<div class="px-4 pt-2 pb-4 space-y-2">
				<a
					href="/technology"
					class="block py-2 px-3 rounded-md text-base font-medium {currentPath === '/technology'
						? variant === 'transparent'
							? 'text-gray-900 bg-gray-100'
							: variant === 'dark'
								? 'text-blue-400 bg-gray-800'
								: 'text-blue-600 bg-blue-50'
						: variant === 'transparent'
							? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
							: variant === 'dark'
								? 'text-gray-300 hover:text-white hover:bg-gray-800'
								: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} transition-colors"
					onclick={toggleMobileMenu}
				>
					{t('nav.mcpServers')}
				</a>
				<a
					href="/pricing"
					class="block py-2 px-3 rounded-md text-base font-medium {currentPath === '/pricing'
						? variant === 'transparent'
							? 'text-gray-900 bg-gray-100'
							: variant === 'dark'
								? 'text-blue-400 bg-gray-800'
								: 'text-blue-600 bg-blue-50'
						: variant === 'transparent'
							? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
							: variant === 'dark'
								? 'text-gray-300 hover:text-white hover:bg-gray-800'
								: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} transition-colors"
					onclick={toggleMobileMenu}
				>
					{t('nav.pricing')}
				</a>
				<a
					href="/roadmap"
					class="block py-2 px-3 rounded-md text-base font-medium {currentPath === '/roadmap'
						? variant === 'transparent'
							? 'text-gray-900 bg-gray-100'
							: variant === 'dark'
								? 'text-blue-400 bg-gray-800'
								: 'text-blue-600 bg-blue-50'
						: variant === 'transparent'
							? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
							: variant === 'dark'
								? 'text-gray-300 hover:text-white hover:bg-gray-800'
								: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} transition-colors"
					onclick={toggleMobileMenu}
				>
					Roadmap
				</a>
				<a
					href="/login"
					class="block py-2 px-3 rounded-md text-base font-medium {currentPath === '/login'
						? variant === 'transparent'
							? 'text-gray-900 bg-gray-100'
							: variant === 'dark'
								? 'text-blue-400 bg-gray-800'
								: 'text-blue-600 bg-blue-50'
						: variant === 'transparent'
							? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
							: variant === 'dark'
								? 'text-gray-300 hover:text-white hover:bg-gray-800'
								: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} transition-colors"
					onclick={toggleMobileMenu}
				>
					{t('nav.login')}
				</a>

				{#if showCTA}
					<div
						class="pt-4 mt-4 border-t {variant === 'transparent'
							? 'border-gray-200'
							: variant === 'dark'
								? 'border-gray-700'
								: 'border-gray-200'}"
					>
						<a
							href="/pricing"
							class="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-medium transition-all"
							onclick={toggleMobileMenu}
						>
							{currentPath === '/pricing' ? t('nav.cta.choosePlan') : t('nav.cta.orderNow')}
						</a>
					</div>
				{:else}
					<div
						class="pt-4 mt-4 border-t {variant === 'transparent'
							? 'border-gray-200'
							: variant === 'dark'
								? 'border-gray-700'
								: 'border-gray-200'}"
					>
						<a
							href="/"
							class="block py-2 px-3 rounded-md text-base font-medium {variant === 'transparent'
								? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
								: variant === 'dark'
									? 'text-gray-300 hover:text-white hover:bg-gray-800'
									: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'} transition-colors"
							onclick={toggleMobileMenu}
						>
							{t('nav.home')}
						</a>
					</div>
				{/if}

				<!-- Mobile Language Switcher in menu -->
				<div
					class="pt-4 mt-4 border-t {variant === 'transparent'
						? 'border-gray-200'
						: variant === 'dark'
							? 'border-gray-700'
							: 'border-gray-200'}"
				>
					<div class="px-3">
						<p
							class="text-sm font-medium {variant === 'transparent'
								? 'text-gray-900'
								: variant === 'dark'
									? 'text-gray-300'
									: 'text-gray-700'} mb-2"
						>
							{t('nav.language')}
						</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</nav>
