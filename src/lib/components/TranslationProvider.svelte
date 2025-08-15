<script>
	// @ts-nocheck
	import { setContext } from 'svelte';
	import { browser } from '$app/environment';
	import { useTranslations } from '$lib/utils/translations.js';

	// Import delle traduzioni
	import itTranslations from '$lib/i18n/it.json';
	import enTranslations from '$lib/i18n/en.json';
	import esTranslations from '$lib/i18n/es.json';

	let { children, defaultLanguage = 'it' } = $props();

	const TRANSLATION_KEY = 'translations';
	const CURRENT_LANGUAGE_KEY = 'currentLanguage';

	// Mappa delle traduzioni disponibili
	const translations = {
		it: itTranslations,
		en: enTranslations,
		es: esTranslations
	};

	// Stato reattivo per la lingua corrente
	let currentLanguage = $state(defaultLanguage);

	// Funzione per ottenere la lingua dal localStorage o browser
	function getInitialLanguage() {
		if (!browser) return defaultLanguage;

		// Prima controlla localStorage
		const savedLanguage = localStorage.getItem('giuna-language');
		if (savedLanguage && translations[savedLanguage]) {
			return savedLanguage;
		}

		// Poi controlla le preferenze del browser
		const browserLanguage = navigator.language.split('-')[0];
		if (translations[browserLanguage]) {
			return browserLanguage;
		}

		return defaultLanguage;
	}

	// Inizializza la lingua
	if (browser) {
		currentLanguage = getInitialLanguage();
	}

	// Funzione per tradurre con interpolazione
	function translate(key, params = {}) {
		const keys = key.split('.');
		let value = translations[currentLanguage];

		// Naviga attraverso l'oggetto delle traduzioni
		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k];
			} else {
				// Fallback alla lingua di default se la chiave non esiste
				let fallbackValue = translations[defaultLanguage];
				for (const fallbackK of keys) {
					if (fallbackValue && typeof fallbackValue === 'object' && fallbackK in fallbackValue) {
						fallbackValue = fallbackValue[fallbackK];
					} else {
						console.warn(
							`Translation key "${key}" not found in ${currentLanguage} or ${defaultLanguage}`
						);
						return key; // Ritorna la chiave se non trova traduzione
					}
				}
				value = fallbackValue;
				break;
			}
		}

		if (typeof value !== 'string') {
			console.warn(`Translation value for "${key}" is not a string:`, value);
			return key;
		}

		// Interpola i parametri
		return Object.keys(params).reduce((str, param) => {
			return str.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
		}, value);
	}

	// Funzione per cambiare lingua
	function setLanguage(newLanguage) {
		if (translations[newLanguage]) {
			currentLanguage = newLanguage;
			if (browser) {
				localStorage.setItem('giuna-language', newLanguage);
			}
		} else {
			console.warn(`Language "${newLanguage}" not available`);
		}
	}

	// Funzione per ottenere tutte le lingue disponibili
	function getAvailableLanguages() {
		return Object.keys(translations);
	}

	// Oggetto per il context
	const translationContext = {
		translate,
		setLanguage,
		getAvailableLanguages,
		get currentLanguage() {
			return currentLanguage;
		}
	};

	// Imposta il context
	setContext(TRANSLATION_KEY, translationContext);
	setContext(CURRENT_LANGUAGE_KEY, () => currentLanguage);

	// Assicurati che il context sia cached per uso in async functions
	try {
		useTranslations();
	} catch {
		// Può fallire durante il primo render, è normale
	}
</script>

{@render children()}
