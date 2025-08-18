import { Fingerprint, Zap, Code, Plane, Heart, Home } from 'lucide-svelte';

/**
 * Configurazione centralizzata degli scenari Arvify
 * Ogni scenario include sia la configurazione UI che i dati specifici
 */
export const scenarios = {
	development: {
		id: 'development',
		name: '💻 Sviluppo AI',
		description: "Connetti i tuoi repository per ottimizzare il workflow di sviluppo con l'AI",
		theme: 'blue',
		request: 'Connetti i miei repository per ottimizzare il workflow di sviluppo...',
		ttl: 180,
		status: 'waiting',
		backend: 'bolt',
		wearableColor: 'border-blue-500',
		screenGradient: 'from-blue-500 to-purple-600',
		icon: Code,
		label: 'Code OK?',
		dataTypes: [
			{ name: '💻 Project repositories', status: 'approved', sensitive: false },
			{ name: '🔧 System configurations', status: 'approved', sensitive: true },
			{ name: '📊 Development metrics', status: 'approved', sensitive: false },
			{ name: '🚀 Deployment keys', status: 'denied', sensitive: true },
			{ name: '📝 Code documentation', status: 'pending', sensitive: false }
		]
	},

	travel: {
		id: 'travel',
		name: '✈️ Gestione Viaggi',
		description: 'Bolt salva automaticamente orari voli e pickup macchina nel sistema vettoriale',
		theme: 'emerald',
		request: 'Salva gli orari del volo e il pickup della macchina nel sistema vettoriale...',
		ttl: 120,
		status: 'processing',
		backend: 'bolt',
		wearableColor: 'border-emerald-500',
		screenGradient: 'from-emerald-500 to-teal-600',
		icon: Plane,
		label: 'Travel?',
		dataTypes: [
			{ name: '✈️ Flight schedules', status: 'approved', sensitive: false },
			{ name: '🚗 Car pickup details', status: 'approved', sensitive: false },
			{ name: '🏨 Hotel reservations', status: 'pending', sensitive: true },
			{ name: '📍 Location preferences', status: 'approved', sensitive: false },
			{ name: '💳 Payment methods', status: 'denied', sensitive: true }
		]
	},

	email: {
		id: 'email',
		name: '📧 Analisi Email',
		description: "L'AI accede alle tue email solo con il tuo consenso biometrico",
		theme: 'purple',
		request: 'Analizza le mie email per trovare progetti urgenti...',
		ttl: 120,
		status: 'completed',
		backend: 'openai',
		wearableColor: 'border-purple-500',
		screenGradient: 'from-purple-500 to-pink-600',
		icon: Fingerprint,
		label: 'Email OK?',
		dataTypes: [
			{ name: '📧 Email threads', status: 'approved', sensitive: false },
			{ name: '📅 Meeting notes', status: 'approved', sensitive: false },
			{ name: '👤 Contact info', status: 'denied', sensitive: true },
			{ name: '📊 Email analytics', status: 'pending', sensitive: true }
		]
	},

	finance: {
		id: 'finance',
		name: '💰 Budget Intelligente',
		description: 'Gestione finanziaria automatica con privacy garantita',
		theme: 'amber',
		request: 'Crea un budget mensile dai miei dati di spesa...',
		ttl: 90,
		status: 'waiting',
		backend: 'anthropic',
		wearableColor: 'border-amber-500',
		screenGradient: 'from-amber-500 to-orange-600',
		icon: Zap,
		label: 'Budget?',
		dataTypes: [
			{ name: '💳 Transaction history', status: 'approved', sensitive: true },
			{ name: '📈 Spending patterns', status: 'approved', sensitive: true },
			{ name: '🏦 Bank accounts', status: 'denied', sensitive: true },
			{ name: '📊 Investment data', status: 'pending', sensitive: true },
			{ name: '🧾 Receipt data', status: 'approved', sensitive: false }
		]
	},

	health: {
		id: 'health',
		name: '❤️ Benessere Personale',
		description: 'Monitora parametri vitali e condividi dati con il tuo medico solo quando vuoi tu',
		theme: 'purple',
		request: 'Analizza i miei parametri cardiaci delle ultime 24 ore...',
		ttl: 60,
		status: 'waiting',
		backend: 'google',
		wearableColor: 'border-purple-500',
		screenGradient: 'from-purple-500 to-pink-600',
		icon: Heart,
		label: 'Health?',
		dataTypes: [
			{ name: '❤️ Heart rate', status: 'approved', sensitive: true },
			{ name: '🩺 Blood pressure', status: 'pending', sensitive: true },
			{ name: '🏃‍♂️ Activity logs', status: 'approved', sensitive: false },
			{ name: '🧬 Genetic data', status: 'denied', sensitive: true }
		]
	},

	smarthome: {
		id: 'smarthome',
		name: '🏠 Casa Intelligente',
		description: 'Controlla dispositivi smart home con consenso biometrico',
		theme: 'blue',
		request: 'Accendi le luci del salotto e imposta il termostato a 22°C...',
		ttl: 45,
		status: 'processing',
		backend: 'local',
		wearableColor: 'border-blue-500',
		screenGradient: 'from-blue-500 to-purple-600',
		icon: Home,
		label: 'Home?',
		dataTypes: [
			{ name: '💡 Lighting control', status: 'approved', sensitive: false },
			{ name: '🌡️ Thermostat', status: 'approved', sensitive: false },
			{ name: '📹 Security cameras', status: 'denied', sensitive: true },
			{ name: '🔐 Door locks', status: 'pending', sensitive: true }
		]
	}
};

/**
 * Array ordinato degli scenari per il carousel
 */
export const scenarioOrder = ['development', 'travel', 'email', 'finance', 'health', 'smarthome'];

/**
 * Ottieni un scenario specifico
 */
export function getScenario(id) {
	return scenarios[id] || scenarios.development;
}

/**
 * Ottieni tutti gli scenari come array ordinato
 */
export function getAllScenarios() {
	return scenarioOrder.map((id) => scenarios[id]);
}

/**
 * Ottieni solo i dataTypes di uno scenario (per compatibilità con ArvifyAppInterface)
 */
export function getScenarioDataTypes(id) {
	return scenarios[id]?.dataTypes || scenarios.development.dataTypes;
}
