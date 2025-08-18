<script>
	// Import del nuovo sistema modulare
	import AppInterface from '$lib/components/arvify-app/AppInterface.svelte';

	// Props forwarding - manteniamo la stessa API pubblica
	let {
		// Scenario configuration
		scenario = 'development',
		requestText = null,

		// Display options
		theme = null,
		size = 'normal',

		// Data configuration
		dataTypes = null,
		ttlSeconds = null,

		// State management
		showNotification = true,
		isWaitingConsent = true,
		processingStatus = null,

		// Backend configuration
		backendType = null,

		// Privacy settings
		encryptionLevel = 'AES-256',
		autoCleanup = true,
		auditLog = true,

		// User configuration (nuove props per maggiore flessibilità)
		userAvatar = '/emanuele-strano1.xbaffbba2.jpg',
		userInitials = 'E.',
		userName = 'Emanuele',

		// Callback per quando l'utente interagisce
		onUserInteraction = null
	} = $props();
</script>

<!-- Il nuovo componente modulare gestisce tutto -->
<AppInterface
	{scenario}
	{requestText}
	{theme}
	{size}
	{dataTypes}
	{ttlSeconds}
	{showNotification}
	{isWaitingConsent}
	{processingStatus}
	{backendType}
	{encryptionLevel}
	{autoCleanup}
	{auditLog}
	{userAvatar}
	{userInitials}
	{userName}
	{onUserInteraction}
/>
