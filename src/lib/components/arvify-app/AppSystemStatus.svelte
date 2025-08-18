<script>
	let {
		// Configurazione stato sistema
		deviceStatus = 'online', // 'online', 'offline', 'syncing'
		processingStatus = 'waiting', // 'waiting', 'processing', 'completed', 'denied'
		backendType = 'bolt',

		// Styling
		gridClass = 'grid grid-cols-3 gap-2'
	} = $props();

	// Device status configuration
	const deviceConfig = {
		online: {
			color: 'bg-green-500/20 border-green-500/30',
			icon: '●',
			textColor: 'text-green-400',
			text: 'Bracciale'
		},
		offline: {
			color: 'bg-red-500/20 border-red-500/30',
			icon: '●',
			textColor: 'text-red-400',
			text: 'Offline'
		},
		syncing: {
			color: 'bg-blue-500/20 border-blue-500/30',
			icon: '⟳',
			textColor: 'text-blue-400',
			text: 'Syncing'
		}
	};

	// Processing status configuration
	const processingConfig = {
		waiting: {
			color: 'bg-amber-500/20 border-amber-500/30',
			icon: '⏳',
			textColor: 'text-amber-400',
			text: 'Waiting',
			animate: 'animate-pulse'
		},
		processing: {
			color: 'bg-blue-500/20 border-blue-500/30',
			icon: '🔄',
			textColor: 'text-blue-400',
			text: 'Processing',
			animate: ''
		},
		completed: {
			color: 'bg-green-500/20 border-green-500/30',
			icon: '✅',
			textColor: 'text-green-400',
			text: 'Approved',
			animate: ''
		},
		denied: {
			color: 'bg-red-500/20 border-red-500/30',
			icon: '❌',
			textColor: 'text-red-400',
			text: 'Denied',
			animate: ''
		}
	};

	// Backend configuration
	const backends = {
		openai: { icon: '🤖', color: 'text-green-400', name: 'OpenAI' },
		anthropic: { icon: '🧠', color: 'text-orange-400', name: 'Claude' },
		google: { icon: '🔍', color: 'text-blue-400', name: 'Gemini' },
		bolt: { icon: '⚡', color: 'text-yellow-400', name: 'Bolt' },
		local: { icon: '🏠', color: 'text-gray-400', name: 'Local' }
	};

	const currentDevice = deviceConfig[deviceStatus] || deviceConfig.online;
	const currentProcessing = processingConfig[processingStatus] || processingConfig.waiting;
	const currentBackend = backends[backendType] || backends.bolt;
</script>

<div class="{gridClass} mb-4">
	<!-- Device Status -->
	<div class="{currentDevice.color} rounded-lg p-2 text-center">
		<div class="{currentDevice.textColor} text-lg">{currentDevice.icon}</div>
		<div class="{currentDevice.textColor} text-xs">{currentDevice.text}</div>
	</div>

	<!-- Processing Status -->
	<div class="{currentProcessing.color} rounded-lg p-2 text-center">
		<div class="{currentProcessing.textColor} text-lg {currentProcessing.animate}">
			{currentProcessing.icon}
		</div>
		<div class="{currentProcessing.textColor} text-xs">
			{currentProcessing.text}
		</div>
	</div>

	<!-- Backend Status -->
	<div class="bg-blue-500/20 rounded-lg p-2 text-center border border-blue-500/30">
		<div class="{currentBackend.color} text-lg">
			{currentBackend.icon}
		</div>
		<div class="text-blue-300 text-xs">{currentBackend.name}</div>
	</div>
</div>
