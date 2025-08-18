<script>
	import { Wifi, WifiOff, RotateCw, Clock, Zap, CheckCircle, XCircle } from 'lucide-svelte';

	let {
		// Configurazione stato sistema
		deviceStatus = 'online', // 'online', 'offline', 'syncing'
		processingStatus = 'waiting', // 'waiting', 'processing', 'completed', 'denied'

		// Styling
		gridClass = 'flex space-x-2'
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
	const currentDevice = deviceConfig[deviceStatus] || deviceConfig.online;
	const currentProcessing = processingConfig[processingStatus] || processingConfig.waiting;
</script>

<div class="{gridClass} mb-4">
	<!-- Device Status - Indicatore elegante -->
	<div class="flex-1 {currentDevice.bgColor} rounded-lg border {currentDevice.borderColor} p-2">
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
		class="flex-1 {currentProcessing.bgColor} rounded-lg border {currentProcessing.borderColor} p-2"
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
</div>
