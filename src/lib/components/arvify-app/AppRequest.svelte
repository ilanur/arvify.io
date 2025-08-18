<script>
	import { Mic, Type, Zap, User } from 'lucide-svelte';

	let {
		// Configurazione richiesta
		requestText = 'Connetti i miei repository per ottimizzare il workflow di sviluppo...',
                inputType = 'audio', // 'audio', 'text', 'system'

		// Styling
		requestBgClass = 'bg-white/10',
		requestTextClass = 'text-white text-sm'
	} = $props();

	// Tipi di input - Palette uniforme blu
	const inputTypes = {
		audio: {
			icon: Mic,
			color: 'text-blue-400',
			label: 'Comando vocale',
			indicator: '🎤'
		},
		text: {
			icon: Type,
			color: 'text-blue-300',
			label: 'Testo digitato',
			indicator: '✍️'
		},
		system: {
			icon: Zap,
			color: 'text-blue-500',
			label: 'Sistema integrato',
			indicator: '⚡'
		}
	};

	const currentInput = inputTypes[inputType] || inputTypes.audio;
</script>

<div class="mb-4">
	<!-- Header della richiesta con info utente e tipo input -->
	<div class="flex items-center space-x-2 mb-2">
		<div class="flex items-center space-x-1">
			<User class="w-4 h-4 text-white/70" />
			<span class="text-white/70 text-xs font-medium">Tu</span>
		</div>

		<div class="flex items-center space-x-1 {currentInput.color}">
			<svelte:component this={currentInput.icon} class="w-3 h-3" />
			<span class="text-xs">{currentInput.label}</span>
		</div>
	</div>

	<!-- Messaggio della richiesta -->
	<div class="{requestBgClass} backdrop-blur-sm rounded-xl p-4 border border-white/10">
		<div class="flex items-start space-x-3">
			<!-- Indicatore tipo input -->
			<div
				class="flex-shrink-0 w-8 h-8 {currentInput.color} bg-white/10 rounded-full flex items-center justify-center"
			>
				<svelte:component this={currentInput.icon} class="w-4 h-4" />
			</div>

			<!-- Testo della richiesta -->
			<div class="flex-1">
				<p class="{requestTextClass} leading-relaxed">
					"{requestText}"
				</p>

				<!-- Timestamp simulato -->
				<div class="mt-2 text-white/50 text-xs">
					{new Date().toLocaleTimeString('it-IT', {
						hour: '2-digit',
						minute: '2-digit'
					})}
				</div>
			</div>
		</div>
	</div>
</div>
