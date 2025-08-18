<script>
	import { ChevronUp, Settings } from 'lucide-svelte';
	import ArvifyLogo from '$lib/components/ArvifyLogo.svelte';

	let {
		// Configurazione header
		onToggleDetails = null,

		// Configurazione utente
		userAvatar = '/emanuele-strano1.xbaffbba2.jpg',
		userInitials = 'E.',
		userName = 'Emanuele',

		// Styling
		bgClass = 'bg-white/10 backdrop-blur-sm',
		borderClass = 'border-b border-white/20'
	} = $props();

	function handleToggle() {
		if (onToggleDetails) {
			onToggleDetails();
		}
	}
</script>

<div class="{bgClass} px-4 py-3 flex items-center justify-between {borderClass} flex-shrink-0">
	<ArvifyLogo size="md" showText={true} textColor="text-white" />

	<div class="flex items-center space-x-2">
		<button
			onclick={handleToggle}
			class="text-white/70 hover:text-white transition-colors p-1"
			aria-label="Toggle settings"
		>
			<Settings class="w-4 h-4" />
		</button>

		<!-- User Profile -->
		<div class="flex items-center space-x-2 bg-white/10 rounded-full px-2 py-1">
			<img
				src={userAvatar}
				alt={userName}
				class="w-6 h-6 rounded-full object-cover border border-white/20"
			/>
			<span class="text-white text-xs font-medium">{userInitials}</span>
		</div>
	</div>
</div>
