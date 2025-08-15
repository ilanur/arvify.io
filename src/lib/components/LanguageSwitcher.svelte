<script>
	import { useTranslations } from '$lib/utils/translations.js';

	let { variant = 'floating' } = $props();

	const { setLanguage, currentLanguage } = useTranslations();

	const languages = [
		{ code: 'it', name: 'Italiano', flag: '🇮🇹' },
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' }
	];

	function handleLanguageChange(langCode) {
		setLanguage(langCode);
	}
</script>

<!-- Language Switcher -->
{#if variant === 'floating'}
	<div class="fixed right-4 bottom-4 z-50">
		<div class="rounded-full border border-gray-200 bg-white p-2 shadow-lg">
			<select
				class="border-none bg-transparent text-sm focus:ring-0 focus:outline-none"
				value={currentLanguage}
				onchange={(e) => handleLanguageChange(e.target.value)}
			>
				{#each languages as lang (lang.code)}
					<option value={lang.code}>
						{lang.flag}
						{lang.name}
					</option>
				{/each}
			</select>
		</div>
	</div>
{:else if variant === 'dropdown'}
	<div class="relative">
		<select
			class="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
			value={currentLanguage}
			onchange={(e) => handleLanguageChange(e.target.value)}
		>
			{#each languages as lang (lang.code)}
				<option value={lang.code}>
					{lang.flag}
					{lang.name}
				</option>
			{/each}
		</select>
	</div>
{:else if variant === 'buttons'}
	<div class="flex space-x-2">
		{#each languages as lang (lang.code)}
			<button
				type="button"
				class="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 {currentLanguage ===
				lang.code
					? 'bg-pink-100 text-pink-700'
					: 'text-gray-600 hover:bg-gray-100'}"
				onclick={() => handleLanguageChange(lang.code)}
			>
				{lang.flag}
				{lang.name}
			</button>
		{/each}
	</div>
{/if}
