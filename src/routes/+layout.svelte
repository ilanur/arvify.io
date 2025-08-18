<script>
	import '../app.css';
	import TranslationProvider from '$lib/components/TranslationProvider.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	// Percorso corrente per personalizzare la navigazione
	let currentPath = $derived($page?.url?.pathname || '/');
	let navVariant = $derived(currentPath === '/' ? 'transparent' : 'dark');

	// Alcune pagine nascondono il pulsante di call to action
	let showCTA = $derived(!['/login', '/mcp-servers'].includes(currentPath));
</script>

<TranslationProvider>
	<div class="flex flex-col min-h-screen">
		<Navigation variant={navVariant} {showCTA} />
		<main class="flex-1">
			{@render children()}
		</main>
		<DeviceFooter />
		<LanguageSwitcher variant="floating" />
	</div>
</TranslationProvider>
