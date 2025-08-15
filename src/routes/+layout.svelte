<script>
	import TranslationProvider from '$lib/components/TranslationProvider.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	let { children } = $props();
</script>

<TranslationProvider>
	{@render children()}

	<!-- Floating Language Switcher - sempre visibile -->
	<LanguageSwitcher variant="floating" />
</TranslationProvider>
