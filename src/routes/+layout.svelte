<script>
	import TranslationProvider from '$lib/components/TranslationProvider.svelte';
	let { children } = $props();
</script>

<TranslationProvider>
	{@render children()}
</TranslationProvider>
