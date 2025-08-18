<script>
	let {
		size = 'md', // 'sm', 'md', 'lg', 'xl'
		showText = true,
		textColor = 'text-white',
		className = '',
		variant = 'center' // 'left', 'center', 'right'
	} = $props();

	// Dimensioni responsive
	const sizes = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-8 h-8',
		xl: 'w-12 h-12'
	};

	const textSizes = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-lg',
		xl: 'text-2xl'
	};

	const transforms = {
		left: 'rotate(-30 12 12)',
		center: '',
		right: 'rotate(30 12 12)'
	};
</script>

<div class="flex items-center space-x-2 {className}">
	<!-- Logo Arvify con background colorato caratteristico -->
	<div class="{sizes[size]} flex items-center justify-center">
		<svg viewBox="0 0 32 32" fill="none" class={sizes[size]}>
			<!-- Definizioni gradiente e effetti -->
			<defs>
				<!-- Gradiente background principale -->
				<linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:#667eea" />
					<stop offset="50%" style="stop-color:#764ba2" />
					<stop offset="100%" style="stop-color:#f093fb" />
				</linearGradient>

				<!-- Gradiente per la "A" -->
				<linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
					<stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.9" />
				</linearGradient>

				<!-- Ombra interna -->
				<radialGradient id="innerShadow" cx="50%" cy="20%" r="80%">
					<stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2" />
					<stop offset="100%" style="stop-color:#000000;stop-opacity:0.1" />
				</radialGradient>
			</defs>

			<!-- Background circolare con gradiente -->
			<circle
				cx="16"
				cy="16"
				r="15"
				fill="url(#bgGradient)"
				stroke="rgba(255,255,255,0.2)"
				stroke-width="0.5"
			/>

			<!-- Effetto luminoso superiore -->
			<ellipse cx="16" cy="8" rx="12" ry="6" fill="url(#innerShadow)" />

			<!-- Forma principale: "A" geometrica moderna -->
			<path
				d="M16 7L11 23H13.5L14.8 19.5H17.2L18.5 23H21L16 7Z"
				fill="url(#letterGradient)"
				stroke="none"
			/>

			<!-- Barra trasversale stilizzata -->
			<rect x="14.8" y="16.5" width="2.4" height="1.2" rx="0.6" fill="rgba(255,255,255,0.8)" />

			<!-- Punto digitale caratteristico con glow -->
			<circle cx="16" cy="17.1" r="0.8" fill="#00ff88" filter="drop-shadow(0 0 3px #00ff88)" />

			<!-- Piccolo riflesso sul punto -->
			<circle cx="15.7" cy="16.8" r="0.2" fill="rgba(255,255,255,0.8)" />
		</svg>
	</div>

	{#if showText}
		<span class="{textColor} {textSizes[size]} font-semibold">Arvify</span>
	{/if}
</div>
