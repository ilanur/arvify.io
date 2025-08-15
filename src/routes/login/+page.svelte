<script>
	import DeviceLogin from '$lib/components/DeviceLogin.svelte';
	import DeviceFooter from '$lib/components/DeviceFooter.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { Shield } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Login - Smart AI Box | Accedi al Tuo Dispositivo</title>
	<meta
		name="description"
		content="Accedi al dashboard del tuo Smart AI Box. Gestisci impostazioni, monitora attività e controlla il tuo assistente AI ibrido."
	/>
</svelte:head>

<div class="min-h-screen">
	<!-- Navigation -->
	<Navigation variant="transparent" showCTA={false} />

	<!-- Login/Dashboard Content -->
	<DeviceLogin />

	<!-- Footer -->
	<DeviceFooter />
</div>
