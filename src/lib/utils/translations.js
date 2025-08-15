// @ts-nocheck
import { getContext } from 'svelte';

const TRANSLATION_KEY = 'translations';

// Variabile per memorizzare il context delle traduzioni
let cachedTranslationContext = null;

/**
 * Hook per utilizzare le traduzioni nei componenti
 * @returns {Object} Oggetto con funzioni di traduzione
 */
export function useTranslations() {
	const context = getContext(TRANSLATION_KEY);

	if (!context) {
		throw new Error("useTranslations deve essere utilizzato all'interno di un TranslationProvider");
	}

	// Cache il context per uso successivo
	cachedTranslationContext = context;
	return context;
}

/**
 * Funzione abbreviata per tradurre rapidamente
 * Funziona sia durante l'inizializzazione del componente che in async functions/event handlers
 * @param {string} key - Chiave di traduzione
 * @param {Object} params - Parametri per interpolazione
 * @returns {string} Testo tradotto
 */
export function t(key, params = {}) {
	let context = null;

	try {
		// Prova prima a usare getContext (funziona durante l'inizializzazione del componente)
		context = getContext(TRANSLATION_KEY);
	} catch {
		// getContext() fallisce - siamo in un async function o event handler
		// Usa il context cached
		context = cachedTranslationContext;
	}

	if (!context) {
		console.warn(
			`Translation context not available for key "${key}". Make sure to call useTranslations() in at least one component first.`
		);
		return key; // Fallback alla chiave
	}

	return context.translate(key, params);
}

/**
 * Hook per ottenere la lingua corrente
 * @returns {string} Codice lingua corrente
 */
export function useCurrentLanguage() {
	const { currentLanguage } = useTranslations();
	return currentLanguage;
}

/**
 * Hook per cambiare lingua
 * @returns {Function} Funzione per cambiare lingua
 */
export function useLanguageSwitcher() {
	const { setLanguage, getAvailableLanguages } = useTranslations();
	return { setLanguage, getAvailableLanguages };
}
