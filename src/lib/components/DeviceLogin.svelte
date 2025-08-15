<script>
	import { User, Shield, Smartphone, Settings, BarChart3, Wifi, Lock, Eye } from 'lucide-svelte';

	let isLoginMode = $state(true);
	let email = $state('');
	let password = $state('');
	let deviceId = $state('');

	// Mock data for dashboard
	const deviceStats = {
		status: 'online',
		localQueries: 247,
		cloudQueries: 23,
		dataShared: '2.3 MB',
		uptime: '15 giorni'
	};

	const recentActivity = [
		{ time: '14:32', type: 'local', query: 'Riassunto documento PDF', cost: 'Gratuito' },
		{ time: '13:15', type: 'cloud', query: 'Analisi complessa dati', cost: '€0.15' },
		{ time: '11:45', type: 'local', query: 'Traduzione testo', cost: 'Gratuito' },
		{ time: '10:22', type: 'cloud', query: 'Generazione codice', cost: '€0.08' }
	];

	function toggleMode() {
		isLoginMode = !isLoginMode;
	}

	function handleLogin() {
		// Mock login logic
		console.log('Login attempt:', { email, password, deviceId });
	}
</script>

<section class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if isLoginMode}
			<!-- Login/Register Section -->
			<div class="max-w-md mx-auto">
				<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
					<!-- Header -->
					<div class="text-center mb-8">
						<div
							class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
						>
							<User class="w-8 h-8 text-blue-400" />
						</div>
						<h2 class="text-3xl font-bold text-white mb-2">Accedi al Tuo Device</h2>
						<p class="text-blue-100">Gestisci il tuo Smart AI Box</p>
					</div>

					<!-- Login Form -->
					<form
						onsubmit={(e) => {
							e.preventDefault();
							handleLogin();
						}}
						class="space-y-6"
					>
						<div>
							<label for="email" class="block text-sm font-medium text-blue-100 mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
								placeholder="il-tuo@email.com"
								required
							/>
						</div>

						<div>
							<label for="password" class="block text-sm font-medium text-blue-100 mb-2">
								Password
							</label>
							<input
								type="password"
								id="password"
								bind:value={password}
								class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
								placeholder="••••••••"
								required
							/>
						</div>

						<div>
							<label for="deviceId" class="block text-sm font-medium text-blue-100 mb-2">
								Device ID (opzionale)
							</label>
							<input
								type="text"
								id="deviceId"
								bind:value={deviceId}
								class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
								placeholder="SAB-XXXX-XXXX"
							/>
							<p class="text-xs text-blue-200 mt-1">Trova l'ID sotto il tuo dispositivo</p>
						</div>

						<button
							type="submit"
							class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
						>
							Accedi al Dashboard
						</button>
					</form>

					<!-- Divider -->
					<div class="my-6 border-t border-white/20"></div>

					<!-- Alternative Actions -->
					<div class="space-y-3 text-center">
						<button class="text-blue-300 hover:text-blue-200 text-sm transition-colors">
							Password dimenticata?
						</button>
						<br />
						<button class="text-blue-300 hover:text-blue-200 text-sm transition-colors">
							Non hai ancora un device? <span class="font-semibold">Ordinalo ora</span>
						</button>
					</div>

					<!-- Demo Button -->
					<div class="mt-6 text-center">
						<button
							onclick={toggleMode}
							class="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600/20 text-emerald-300 rounded-lg hover:bg-emerald-600/30 transition-colors"
						>
							<Eye class="w-4 h-4" />
							<span>Visualizza Dashboard Demo</span>
						</button>
					</div>
				</div>
			</div>
		{:else}
			<!-- Dashboard Demo -->
			<div class="space-y-8">
				<!-- Header -->
				<div class="text-center mb-12">
					<h2 class="text-4xl font-bold text-white mb-4">Dashboard Smart AI Box</h2>
					<p class="text-blue-100 text-lg">Controllo completo del tuo assistente AI</p>
					<button
						onclick={toggleMode}
						class="mt-4 text-blue-300 hover:text-blue-200 text-sm transition-colors"
					>
						← Torna al Login
					</button>
				</div>

				<!-- Stats Grid -->
				<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<div class="flex items-center space-x-3 mb-2">
							<Wifi class="w-5 h-5 text-green-400" />
							<span class="text-green-400 font-medium">Status</span>
						</div>
						<p class="text-2xl font-bold text-white capitalize">{deviceStats.status}</p>
						<p class="text-green-200 text-sm">Uptime: {deviceStats.uptime}</p>
					</div>

					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<div class="flex items-center space-x-3 mb-2">
							<Shield class="w-5 h-5 text-blue-400" />
							<span class="text-blue-400 font-medium">Query Locali</span>
						</div>
						<p class="text-2xl font-bold text-white">{deviceStats.localQueries}</p>
						<p class="text-blue-200 text-sm">100% privato</p>
					</div>

					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<div class="flex items-center space-x-3 mb-2">
							<BarChart3 class="w-5 h-5 text-purple-400" />
							<span class="text-purple-400 font-medium">Query Cloud</span>
						</div>
						<p class="text-2xl font-bold text-white">{deviceStats.cloudQueries}</p>
						<p class="text-purple-200 text-sm">Con approvazione</p>
					</div>

					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<div class="flex items-center space-x-3 mb-2">
							<Lock class="w-5 h-5 text-amber-400" />
							<span class="text-amber-400 font-medium">Dati Condivisi</span>
						</div>
						<p class="text-2xl font-bold text-white">{deviceStats.dataShared}</p>
						<p class="text-amber-200 text-sm">Auto-cancellati</p>
					</div>
				</div>

				<!-- Main Dashboard Grid -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<!-- Recent Activity -->
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="text-xl font-bold text-white mb-6 flex items-center space-x-2">
							<BarChart3 class="w-5 h-5" />
							<span>Attività Recente</span>
						</h3>

						<div class="space-y-4">
							{#each recentActivity as activity}
								<div class="flex items-center justify-between p-4 bg-white/5 rounded-lg">
									<div class="flex items-center space-x-3">
										<div
											class="w-8 h-8 bg-{activity.type === 'local'
												? 'green'
												: 'blue'}-500/20 rounded-lg flex items-center justify-center"
										>
											{#if activity.type === 'local'}
												<Shield class="w-4 h-4 text-green-400" />
											{:else}
												<Wifi class="w-4 h-4 text-blue-400" />
											{/if}
										</div>
										<div>
											<p class="text-white font-medium">{activity.query}</p>
											<p class="text-gray-300 text-sm">{activity.time}</p>
										</div>
									</div>
									<div class="text-right">
										<p class="text-{activity.type === 'local' ? 'green' : 'blue'}-400 font-medium">
											{activity.cost}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- Device Settings -->
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
						<h3 class="text-xl font-bold text-white mb-6 flex items-center space-x-2">
							<Settings class="w-5 h-5" />
							<span>Impostazioni Device</span>
						</h3>

						<div class="space-y-6">
							<div>
								<label
									for="processing-preference"
									class="block text-blue-100 text-sm font-medium mb-2"
								>
									Preferenza Elaborazione
								</label>
								<select
									id="processing-preference"
									class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
								>
									<option>Locale quando possibile</option>
									<option>Sempre locale</option>
									<option>Bilanciato</option>
									<option>Cloud per qualità massima</option>
								</select>
							</div>

							<div>
								<label for="ttl-default" class="block text-blue-100 text-sm font-medium mb-2">
									TTL Default Cloud
								</label>
								<select
									id="ttl-default"
									class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
								>
									<option>30 minuti</option>
									<option>1 ora</option>
									<option>6 ore</option>
									<option>24 ore</option>
								</select>
							</div>

							<div class="flex items-center justify-between">
								<span class="text-blue-100">Approvazione automatica query semplici</span>
								<button
									aria-label="Toggle approvazione automatica"
									class="w-12 h-6 bg-blue-600 rounded-full relative"
								>
									<div
										class="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"
									></div>
								</button>
							</div>

							<div class="flex items-center justify-between">
								<span class="text-blue-100">Notifiche push app</span>
								<button
									aria-label="Toggle notifiche push"
									class="w-12 h-6 bg-green-600 rounded-full relative"
								>
									<div
										class="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"
									></div>
								</button>
							</div>
						</div>

						<button
							class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
						>
							Salva Impostazioni
						</button>
					</div>
				</div>

				<!-- Mobile App Download -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
					<Smartphone class="w-12 h-12 text-blue-400 mx-auto mb-4" />
					<h3 class="text-2xl font-bold text-white mb-3">Scarica l'App Mobile</h3>
					<p class="text-blue-100 mb-6">Controlla il tuo Smart AI Box ovunque tu sia</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button class="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
							<span class="text-2xl">📱</span>
							<div class="text-left">
								<p class="text-xs">Download on the</p>
								<p class="font-semibold">App Store</p>
							</div>
						</button>
						<button class="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
							<span class="text-2xl">🤖</span>
							<div class="text-left">
								<p class="text-xs">Get it on</p>
								<p class="font-semibold">Google Play</p>
							</div>
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
