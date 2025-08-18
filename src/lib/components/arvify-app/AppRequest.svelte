<script>
	let {
		// Configurazione richiesta
		requestText = 'Connetti i miei repository per ottimizzare il workflow di sviluppo...',
		backendType = 'bolt',

		// Styling
		requestBgClass = 'bg-white/20',
		requestTextClass = 'text-white text-sm'
	} = $props();

	// Backend configuration
	const backends = {
		openai: { icon: '🤖', color: 'text-green-400', name: 'OpenAI' },
		anthropic: { icon: '🧠', color: 'text-orange-400', name: 'Claude' },
		google: { icon: '🔍', color: 'text-blue-400', name: 'Gemini' },
		bolt: { icon: '⚡', color: 'text-yellow-400', name: 'Bolt' },
		local: { icon: '🏠', color: 'text-gray-400', name: 'Local' }
	};

	const currentBackend = backends[backendType] || backends.bolt;
</script>

<div class="mb-4">
	<div class="{requestBgClass} rounded-lg p-3 mb-3">
		<div class="flex items-start justify-between">
			<p class="{requestTextClass} flex-1">"{requestText}"</p>
			<div class="text-white/50 text-xs ml-2">
				{currentBackend.icon}
				{currentBackend.name}
			</div>
		</div>
	</div>
</div>
