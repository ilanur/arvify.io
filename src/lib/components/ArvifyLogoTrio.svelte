<script>
	import ArvifyLogo from './ArvifyLogo.svelte';
	let { size = 'md', showText = true, textColor = 'text-white', className = '' } = $props();
</script>

<div class="flex items-center space-x-2 {className}">
	<ArvifyLogo {size} showText={false} {textColor} variant="left" />
	<ArvifyLogo {size} {showText} {textColor} variant="center" />
	<ArvifyLogo {size} showText={false} {textColor} variant="right" />
</div>
