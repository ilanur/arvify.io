<script>
	import '../app.css';
	import TranslationProvider from '$lib/components/TranslationProvider.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	let currentPath = $derived($page.url.pathname);
	const transparentRoutes = ['/', '/login'];
	let navVariant = $derived(transparentRoutes.includes(currentPath) ? 'transparent' : 'default');
	let showCTA = $derived(!(currentPath === '/login' || currentPath === '/mcp-servers'));
	let showFooter = $derived(currentPath !== '/mcp-servers');
</script>

<TranslationProvider>
	<Navigation variant={navVariant} {showCTA} />

	{@render children()}

	{#if showFooter}
		<DeviceFooter />
	{/if}

	<!-- Floating Language Switcher - sempre visibile -->
	<LanguageSwitcher variant="floating" />
</TranslationProvider>
