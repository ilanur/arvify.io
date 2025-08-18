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
	<!-- Logo Bracciale Arvify con sensore biometrico migliorato -->
	<div class="{sizes[size]} flex items-center justify-center">
		<svg viewBox="0 0 24 24" fill="none" class={sizes[size]}>
			<!-- Bracciale principale con gradient -->
			<defs>
				<linearGradient id="braceletGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
					<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.4" />
				</linearGradient>
				<radialGradient id="sensorGradient" cx="50%" cy="50%" r="50%">
					<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.3" />
					<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.1" />
				</radialGradient>
			</defs>

			<g transform={transforms[variant]}>
				<!-- Avambraccio stilizzato -->
				<rect x="2" y="8" width="20" height="8" rx="4" fill="currentColor" opacity="0.1" />

				<!-- Bracciale/Band con design migliorato -->
				<path
					d="M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V18C16 19.6569 14.6569 21 13 21H11C9.34315 21 8 19.6569 8 18V6Z"
					stroke="currentColor"
					stroke-width="1.5"
					fill="url(#braceletGradient)"
					stroke-linejoin="round"
				/>

				<!-- Sensore centrale con effetto glow -->
				<circle
					cx="12"
					cy="12"
					r="3.5"
					stroke="currentColor"
					stroke-width="1"
					fill="url(#sensorGradient)"
				/>
				<circle
					cx="12"
					cy="12"
					r="2.5"
					stroke="currentColor"
					stroke-width="0.8"
					fill="none"
					opacity="0.6"
				/>

				<!-- Pattern impronta digitale stilizzato e migliorato -->
				<path
					d="M10.2 10.8C10.5 10.3 11.2 10 12 10C12.8 10 13.5 10.3 13.8 10.8"
					stroke="currentColor"
					stroke-width="0.7"
					stroke-linecap="round"
					opacity="0.8"
				/>
				<path
					d="M10.5 12C10.7 11.6 11.3 11.3 12 11.3C12.7 11.3 13.3 11.6 13.5 12"
					stroke="currentColor"
					stroke-width="0.7"
					stroke-linecap="round"
					opacity="0.8"
				/>
				<path
					d="M10.8 13.2C11 12.9 11.4 12.7 12 12.7C12.6 12.7 13 12.9 13.2 13.2"
					stroke="currentColor"
					stroke-width="0.7"
					stroke-linecap="round"
					opacity="0.8"
				/>

				<!-- Dettagli banda laterali migliorati -->
				<rect x="5.5" y="8" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="5.5" y="13.5" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="16.5" y="8" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="16.5" y="13.5" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />

				<!-- Piccoli LED di stato -->
				<circle cx="9" cy="7" r="0.5" fill="currentColor" opacity="0.5" />
				<circle cx="15" cy="7" r="0.5" fill="currentColor" opacity="0.5" />

				<!-- Linee decorative sui lati -->
				<line
					x1="8.5"
					y1="5"
					x2="8.5"
					y2="19"
					stroke="currentColor"
					stroke-width="0.3"
					opacity="0.3"
				/>
				<line
					x1="15.5"
					y1="5"
					x2="15.5"
					y2="19"
					stroke="currentColor"
					stroke-width="0.3"
					opacity="0.3"
				/>
			</g>
		</svg>
	</div>

	{#if showText}
		<span class="{textColor} {textSizes[size]} font-semibold">Arvify</span>
	{/if}
</div>
