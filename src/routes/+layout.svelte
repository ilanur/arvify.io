<script>
	import '../app.css';
	import TranslationProvider from '$lib/components/TranslationProvider.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';

	let { children } = $props();
</script>

<TranslationProvider>
	<div class="min-h-screen flex flex-col">
		<Navigation />

		<main class="flex-1">
			{@render children()}
		</main>

		<DeviceFooter />

		<!-- Floating Language Switcher - sempre visibile -->
		<LanguageSwitcher variant="floating" />
	</div>
</TranslationProvider>
