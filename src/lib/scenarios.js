import { GitBranch, CalendarClock, KeyRound } from 'lucide-svelte';

export const scenarios = {
	consentRag: {
		id: 'consentRag',
		name: 'Consent-gated RAG',
		description: 'GitHub + Gmail con scope temporanei e policy automatiche.',
		theme: 'blue',
		request: 'Concedi accesso a file e email pertinenti per 30 secondi.',
		ttl: 30,
		status: 'waiting',
		backend: 'proxy',
		wearableColor: 'border-blue-500',
		screenGradient: 'from-blue-500 to-indigo-500',
		icon: GitBranch,
		label: 'RAG access',
		dataTypes: [
			{ name: '📁 Repository privati', status: 'approved', sensitive: true },
			{ name: '📬 Thread Gmail', status: 'approved', sensitive: true },
			{ name: '📝 Issue e pull request', status: 'pending', sensitive: false },
			{ name: '🔑 Token deploy', status: 'denied', sensitive: true }
		]
	},
	piiWindow: {
		id: 'piiWindow',
		name: 'Just-in-time PII',
		description: 'Calendar e Docs condivisi solo quando serve.',
		theme: 'emerald',
		request: 'Apri slot calendario e Doc con PII per 2 minuti.',
		ttl: 120,
		status: 'processing',
		backend: 'proxy',
		wearableColor: 'border-emerald-500',
		screenGradient: 'from-emerald-500 to-teal-500',
		icon: CalendarClock,
		label: 'PII window',
		dataTypes: [
			{ name: '📅 Slot calendario', status: 'approved', sensitive: true },
			{ name: '📄 Doc condivisi', status: 'approved', sensitive: true },
			{ name: '👥 Liste partecipanti', status: 'pending', sensitive: true },
			{ name: '🗒️ Note meeting', status: 'approved', sensitive: false }
		]
	},
	secretsBroker: {
		id: 'secretsBroker',
		name: 'Secrets broker',
		description: 'Token rotabili con TTL e audit trail.',
		theme: 'purple',
		request: 'Genera credenziali temporanee per deploy staging.',
		ttl: 45,
		status: 'waiting',
		backend: 'vault',
		wearableColor: 'border-purple-500',
		screenGradient: 'from-purple-500 to-violet-600',
		icon: KeyRound,
		label: 'TTL secrets',
		dataTypes: [
			{ name: '🔐 Token temporanei', status: 'approved', sensitive: true },
			{ name: '🛠️ Parametri ambiente', status: 'approved', sensitive: true },
			{ name: '📈 Metriche audit', status: 'pending', sensitive: false },
			{ name: '🔒 Chiavi permanenti', status: 'denied', sensitive: true }
		]
	}
};

export const scenarioOrder = ['consentRag', 'piiWindow', 'secretsBroker'];

export function getScenario(id) {
	return scenarios[id] || scenarios.consentRag;
}

export function getAllScenarios() {
	return scenarioOrder.map((id) => scenarios[id]);
}

export function getScenarioDataTypes(id) {
	return scenarios[id]?.dataTypes || scenarios.consentRag.dataTypes;
}
