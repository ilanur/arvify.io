<script>
	import { Wifi, WifiOff, RotateCw, Clock, Zap, CheckCircle, XCircle } from 'lucide-svelte';

	let {
		// Configurazione stato sistema
		deviceStatus = 'online', // 'online', 'offline', 'syncing'
		processingStatus = 'waiting', // 'waiting', 'processing', 'completed', 'denied'
		backendType = 'bolt',

		// Styling
		gridClass = 'flex space-x-3'
	} = $props();

	// Device status configuration con palette uniforme
	const deviceConfig = {
		online: {
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20',
			icon: Wifi,
			iconColor: 'text-blue-400',
			text: 'Bracciale',
			description: 'Connesso',
			pulseColor: 'bg-blue-400'
		},
		offline: {
			bgColor: 'bg-gray-500/10',
			borderColor: 'border-gray-500/20',
			icon: WifiOff,
			iconColor: 'text-gray-400',
			text: 'Bracciale',
			description: 'Offline',
			pulseColor: 'bg-gray-400'
		},
		syncing: {
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20',
			icon: RotateCw,
			iconColor: 'text-blue-300',
			text: 'Bracciale',
			description: 'Sincronizzazione',
			pulseColor: 'bg-blue-300',
			animate: 'animate-spin'
		}
	};

	// Processing status configuration con palette uniforme
	const processingConfig = {
		waiting: {
			bgColor: 'bg-slate-500/10',
			borderColor: 'border-slate-500/20',
			icon: Clock,
			iconColor: 'text-slate-300',
			text: 'Elaborazione',
			description: 'In attesa',
			pulseColor: 'bg-slate-300',
			animate: 'animate-pulse'
		},
		processing: {
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20',
			icon: Zap,
			iconColor: 'text-blue-400',
			text: 'Elaborazione',
			description: 'In corso',
			pulseColor: 'bg-blue-400',
			animate: 'animate-pulse'
		},
		completed: {
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20',
			icon: CheckCircle,
			iconColor: 'text-blue-300',
			text: 'Elaborazione',
			description: 'Completata',
			pulseColor: 'bg-blue-300'
		},
		denied: {
			bgColor: 'bg-red-500/10',
			borderColor: 'border-red-500/20',
			icon: XCircle,
			iconColor: 'text-red-400',
			text: 'Elaborazione',
			description: 'Negata',
			pulseColor: 'bg-red-400'
		}
	};

	// Backend configuration con palette uniforme blu/grigia
	const backends = {
		openai: {
			name: 'OpenAI',
			logo: `<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="currentColor" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.078 6.078 0 0 0 6.518 2.9 5.991 5.991 0 0 0 4.233 1.935 6.066 6.066 0 0 0 5.645-3.862 5.965 5.965 0 0 0 4.002-2.9 6.078 6.078 0 0 0-.744-7.098l-.008-.043Zm-9.022 12.13a4.03 4.03 0 0 1-2.1-.57A4.04 4.04 0 0 1 9.61 19.71a3.99 3.99 0 0 1-.262-4.17l6.91-12.23c.329-.51.915-.51 1.244 0l6.91 12.23a3.99 3.99 0 0 1-.262 4.17 4.04 4.04 0 0 1-1.55 1.67 4.03 4.03 0 0 1-2.1.57H13.26Z"/></svg>`,
			iconColor: 'text-blue-400',
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20'
		},
		anthropic: {
			name: 'Claude',
			logo: `<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-12h-3v3h3zm-6 0H7v3h3zm3 6H7v3h6zm3 0h-3v3h3z"/></svg>`,
			iconColor: 'text-blue-300',
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20'
		},
		google: {
			name: 'Gemini',
			logo: `<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
			iconColor: 'text-blue-400',
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20'
		},
		bolt: {
			name: 'Bolt',
			logo: `<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="currentColor" d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66L13 3h1l-1 7h3.5c.49 0 .56.33.47.51L11 21z"/></svg>`,
			iconColor: 'text-blue-500',
			bgColor: 'bg-blue-500/10',
			borderColor: 'border-blue-500/20'
		},
		local: {
			name: 'Local',
			logo: `<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
			iconColor: 'text-gray-400',
			bgColor: 'bg-gray-500/10',
			borderColor: 'border-gray-500/20'
		}
	};

	const currentDevice = deviceConfig[deviceStatus] || deviceConfig.online;
	const currentProcessing = processingConfig[processingStatus] || processingConfig.waiting;
	const currentBackend = backends[backendType] || backends.bolt;
</script>

<div class="{gridClass} mb-4">
	<!-- Device Status - Indicatore elegante -->
	<div class="flex-1 {currentDevice.bgColor} rounded-lg border {currentDevice.borderColor} p-3">
		<div class="flex items-center space-x-2">
			<!-- Pulse indicator -->
			<div class="relative flex items-center">
				<div class="w-2 h-2 {currentDevice.pulseColor} rounded-full"></div>
				{#if currentDevice.animate}
					<div
						class="absolute w-2 h-2 {currentDevice.pulseColor} rounded-full {currentDevice.animate}"
					></div>
				{/if}
			</div>

			<!-- Icon e status -->
			<div class="flex items-center space-x-1">
				<svelte:component
					this={currentDevice.icon}
					class="w-4 h-4 {currentDevice.iconColor} {currentDevice.animate || ''}"
				/>
				<div>
					<div class="{currentDevice.iconColor} text-xs font-medium">{currentDevice.text}</div>
					<div class="{currentDevice.iconColor} text-xs opacity-70">
						{currentDevice.description}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Processing Status - Indicatore elegante -->
	<div
		class="flex-1 {currentProcessing.bgColor} rounded-lg border {currentProcessing.borderColor} p-3"
	>
		<div class="flex items-center space-x-2">
			<!-- Pulse indicator -->
			<div class="relative flex items-center">
				<div class="w-2 h-2 {currentProcessing.pulseColor} rounded-full"></div>
				{#if currentProcessing.animate}
					<div
						class="absolute w-2 h-2 {currentProcessing.pulseColor} rounded-full {currentProcessing.animate}"
					></div>
				{/if}
			</div>

			<!-- Icon e status -->
			<div class="flex items-center space-x-1">
				<svelte:component
					this={currentProcessing.icon}
					class="w-4 h-4 {currentProcessing.iconColor} {currentProcessing.animate || ''}"
				/>
				<div>
					<div class="{currentProcessing.iconColor} text-xs font-medium">
						{currentProcessing.text}
					</div>
					<div class="{currentProcessing.iconColor} text-xs opacity-70">
						{currentProcessing.description}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Backend Status - Indicatore elegante -->
	<div class="flex-1 {currentBackend.bgColor} rounded-lg border {currentBackend.borderColor} p-3">
		<div class="flex items-center space-x-2">
			<!-- Pulse indicator -->
			<div class="w-2 h-2 bg-blue-400 rounded-full"></div>

			<!-- Logo e backend -->
			<div class="flex items-center space-x-1">
				<div class={currentBackend.iconColor}>
					{@html currentBackend.logo}
				</div>
				<div>
					<div class="{currentBackend.iconColor} text-xs font-medium">AI Backend</div>
					<div class="{currentBackend.iconColor} text-xs opacity-70">{currentBackend.name}</div>
				</div>
			</div>
		</div>
	</div>
</div>
