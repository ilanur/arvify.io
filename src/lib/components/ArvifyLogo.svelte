<script>
	let {
		size = 'md', // 'sm', 'md', 'lg', 'xl'
		showText = true,
		textColor = 'text-white',
		className = '',
		variant = 1 // 1, 2, 3
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
</script>

<div class="flex items-center space-x-2 {className}">
	<div class="{sizes[size]} flex items-center justify-center">
		{#if variant === 1}
			<svg viewBox="0 0 24 24" fill="none" class={sizes[size]}>
				<defs>
					<linearGradient id="braceletGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
						<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.4" />
					</linearGradient>
					<radialGradient id="sensorGradient1" cx="50%" cy="50%" r="50%">
						<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.1" />
					</radialGradient>
				</defs>
				<path
					d="M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V18C16 19.6569 14.6569 21 13 21H11C9.34315 21 8 19.6569 8 18V6Z"
					stroke="currentColor"
					stroke-width="1.5"
					fill="url(#braceletGradient1)"
					stroke-linejoin="round"
				/>
				<circle
					cx="12"
					cy="12"
					r="3.5"
					stroke="currentColor"
					stroke-width="1"
					fill="url(#sensorGradient1)"
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
				<rect x="5.5" y="8" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="5.5" y="13.5" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="16.5" y="8" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<rect x="16.5" y="13.5" width="2" height="2.5" rx="1" fill="currentColor" opacity="0.4" />
				<circle cx="9" cy="7" r="0.5" fill="currentColor" opacity="0.5" />
				<circle cx="15" cy="7" r="0.5" fill="currentColor" opacity="0.5" />
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
			</svg>
		{:else if variant === 2}
			<svg viewBox="0 0 24 24" fill="none" class={sizes[size]}>
				<defs>
					<linearGradient id="braceletGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
						<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.4" />
					</linearGradient>
					<radialGradient id="sensorGradient2" cx="50%" cy="50%" r="50%">
						<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.1" />
					</radialGradient>
				</defs>
				<g transform="rotate(-15 12 12)">
					<path
						d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V19C17 20.6569 15.6569 22 14 22H10C8.34315 22 7 20.6569 7 19V5Z"
						stroke="currentColor"
						stroke-width="1.5"
						fill="url(#braceletGradient2)"
						stroke-linejoin="round"
						stroke-dasharray="2 2"
					/>
					<circle
						cx="12"
						cy="12"
						r="4"
						stroke="currentColor"
						stroke-width="1"
						fill="url(#sensorGradient2)"
					/>
					<circle
						cx="12"
						cy="12"
						r="3"
						stroke="currentColor"
						stroke-width="0.8"
						fill="none"
						opacity="0.6"
					/>
					<path
						d="M10 11.5C10.3 11 11 10.7 12 10.7C13 10.7 13.7 11 14 11.5"
						stroke="currentColor"
						stroke-width="0.7"
						stroke-linecap="round"
						opacity="0.8"
					/>
					<rect x="4.5" y="8" width="2" height="8" rx="1" fill="currentColor" opacity="0.4" />
					<rect x="17.5" y="8" width="2" height="8" rx="1" fill="currentColor" opacity="0.4" />
					<circle cx="9" cy="6" r="0.5" fill="currentColor" opacity="0.5" />
					<circle cx="15" cy="6" r="0.5" fill="currentColor" opacity="0.5" />
				</g>
			</svg>
		{:else}
			<svg viewBox="0 0 24 24" fill="none" class={sizes[size]}>
				<defs>
					<linearGradient id="braceletGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
						<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.4" />
					</linearGradient>
					<radialGradient id="sensorGradient3" cx="50%" cy="50%" r="50%">
						<stop offset="0%" style="stop-color:currentColor;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:currentColor;stop-opacity:0.1" />
					</radialGradient>
				</defs>
				<g transform="rotate(15 12 12)">
					<path
						d="M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V17C15 18.1046 14.1046 19 13 19H11C9.89543 19 9 18.1046 9 17V7Z"
						stroke="currentColor"
						stroke-width="1.5"
						fill="url(#braceletGradient3)"
						stroke-linejoin="round"
					/>
					<circle
						cx="12"
						cy="12"
						r="3"
						stroke="currentColor"
						stroke-width="1"
						fill="url(#sensorGradient3)"
					/>
					<circle
						cx="12"
						cy="12"
						r="2"
						stroke="currentColor"
						stroke-width="0.8"
						fill="none"
						opacity="0.6"
					/>
					<path
						d="M10.4 11.2C10.7 10.8 11.3 10.5 12 10.5C12.7 10.5 13.3 10.8 13.6 11.2"
						stroke="currentColor"
						stroke-width="0.7"
						stroke-linecap="round"
						opacity="0.8"
					/>
					<rect x="6" y="9" width="1.5" height="6" rx="0.75" fill="currentColor" opacity="0.4" />
					<rect x="16.5" y="9" width="1.5" height="6" rx="0.75" fill="currentColor" opacity="0.4" />
					<circle cx="9.5" cy="6.5" r="0.4" fill="currentColor" opacity="0.5" />
					<circle cx="14.5" cy="6.5" r="0.4" fill="currentColor" opacity="0.5" />
				</g>
			</svg>
		{/if}
	</div>

	{#if showText}
		<span class="{textColor} {textSizes[size]} font-semibold">Arvify</span>
	{/if}
</div>
