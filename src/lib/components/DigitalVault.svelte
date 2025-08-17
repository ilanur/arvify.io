<script>
	import {
		Fingerprint,
		Shield,
		Lock,
		Key,
		Mail,
		FileText,
		Calendar,
		Image,
		Users,
		CreditCard,
		Heart,
		Plus,
		Eye,
		Edit3,
		Trash2,
		Zap
	} from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';

	// Vault items con icone
	const vaultItems = [
		{ icon: Mail, label: t('home.vault.vault_items.items.emails'), color: 'blue' },
		{ icon: FileText, label: t('home.vault.vault_items.items.documents'), color: 'emerald' },
		{ icon: Calendar, label: t('home.vault.vault_items.items.calendar'), color: 'purple' },
		{ icon: Image, label: t('home.vault.vault_items.items.photos'), color: 'pink' },
		{ icon: Users, label: t('home.vault.vault_items.items.contacts'), color: 'indigo' },
		{ icon: CreditCard, label: t('home.vault.vault_items.items.finance'), color: 'amber' },
		{ icon: Heart, label: t('home.vault.vault_items.items.health'), color: 'red' },
		{ icon: Plus, label: t('home.vault.vault_items.items.custom'), color: 'gray' }
	];

	// Animazione per gli elementi del vault
	let hoveredItem = $state(null);
</script>

<section
	class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0); background-size: 50px 50px;"
		></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<div
				class="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
			>
				<Key class="w-4 h-4 mr-2 text-blue-400" />
				<span class="text-blue-200">{t('home.vault.title')}</span>
			</div>

			<h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
					{t('home.vault.subtitle')}
				</span>
			</h2>

			<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
				{t('home.vault.description')}
			</p>
		</div>

		<!-- Main Features Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
			<!-- Left - Fingerprint Vault Visual -->
			<div class="relative">
				<!-- Central Fingerprint -->
				<div class="relative flex justify-center">
					<!-- Outer Rings -->
					<div
						class="absolute w-96 h-96 border-2 border-blue-500/20 rounded-full animate-ping opacity-20"
					></div>
					<div
						class="absolute w-80 h-80 border-2 border-blue-500/30 rounded-full animate-ping opacity-30"
						style="animation-delay: 0.5s"
					></div>
					<div
						class="absolute w-64 h-64 border-2 border-blue-500/40 rounded-full animate-ping opacity-40"
						style="animation-delay: 1s"
					></div>

					<!-- Central Fingerprint -->
					<div
						class="relative w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl"
					>
						<div
							class="w-40 h-40 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center"
						>
							<Fingerprint class="w-20 h-20 text-white" />
						</div>

						<!-- Pulse effect -->
						<div
							class="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full animate-ping opacity-20"
						></div>
					</div>

					<!-- Data Orbits -->
					{#each vaultItems.slice(0, 6) as item, index}
						{@const IconComponent = item.icon}
						{@const angle = index * 60 * (Math.PI / 180)}
						{@const radius = 140}
						{@const x = Math.cos(angle) * radius}
						{@const y = Math.sin(angle) * radius}

						<div
							class="absolute w-12 h-12 bg-{item.color}-500/20 backdrop-blur-sm rounded-xl border border-{item.color}-400/30 flex items-center justify-center"
							style="transform: translate({x}px, {y}px)"
							onmouseenter={() => (hoveredItem = index)}
							onmouseleave={() => (hoveredItem = null)}
							role="button"
							tabindex="0"
						>
							<IconComponent class="w-5 h-5 text-{item.color}-400" />

							{#if hoveredItem === index}
								<div
									class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10"
								>
									{item.label}
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Lock/Unlock Animation -->
				<div class="mt-8 flex justify-center">
					<div class="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
						<div class="flex items-center space-x-3">
							<Lock class="w-5 h-5 text-green-400" />
							<span class="text-green-400 text-sm font-medium">Vault Protetto</span>
							<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right - Features List -->
			<div class="text-white">
				<div class="space-y-8">
					<!-- Feature 1: Fingerprint Key -->
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
						>
							<Fingerprint class="w-6 h-6 text-blue-400" />
						</div>
						<div>
							<h3 class="text-xl font-bold mb-2">{t('home.vault.features.fingerprint.title')}</h3>
							<p class="text-gray-300">{t('home.vault.features.fingerprint.description')}</p>
						</div>
					</div>

					<!-- Feature 2: Total Control -->
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
						>
							<Shield class="w-6 h-6 text-emerald-400" />
						</div>
						<div>
							<h3 class="text-xl font-bold mb-2">{t('home.vault.features.control.title')}</h3>
							<p class="text-gray-300">{t('home.vault.features.control.description')}</p>

							<!-- Control Actions -->
							<div class="mt-3 flex space-x-4">
								<div class="flex items-center space-x-1 text-emerald-400 text-sm">
									<Plus class="w-3 h-3" />
									<span>Aggiungi</span>
								</div>
								<div class="flex items-center space-x-1 text-blue-400 text-sm">
									<Edit3 class="w-3 h-3" />
									<span>Modifica</span>
								</div>
								<div class="flex items-center space-x-1 text-red-400 text-sm">
									<Trash2 class="w-3 h-3" />
									<span>Rimuovi</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Feature 3: Privacy -->
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
						>
							<Lock class="w-6 h-6 text-purple-400" />
						</div>
						<div>
							<h3 class="text-xl font-bold mb-2">{t('home.vault.features.privacy.title')}</h3>
							<p class="text-gray-300">{t('home.vault.features.privacy.description')}</p>
						</div>
					</div>

					<!-- Feature 4: Universal AI -->
					<div class="flex items-start space-x-4">
						<div
							class="w-12 h-12 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
						>
							<Zap class="w-6 h-6 text-amber-400" />
						</div>
						<div>
							<h3 class="text-xl font-bold mb-2">{t('home.vault.features.universal.title')}</h3>
							<p class="text-gray-300">{t('home.vault.features.universal.description')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Vault Items Showcase -->
		<div class="mt-20">
			<div class="text-center mb-12">
				<h3 class="text-3xl font-bold text-white mb-4">
					{t('home.vault.vault_items.title')}
				</h3>
				<p class="text-gray-300 text-lg">
					{t('home.vault.vault_items.subtitle')}
				</p>
			</div>

			<!-- Items Grid -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				{#each vaultItems as item, index}
					{@const IconComponent = item.icon}
					<div
						class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-{item.color}-400/50 transition-all hover:scale-105 group"
						onmouseenter={() => (hoveredItem = index + 10)}
						onmouseleave={() => (hoveredItem = null)}
						role="button"
						tabindex="0"
					>
						<div class="text-center">
							<div
								class="w-12 h-12 bg-{item.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
							>
								<IconComponent class="w-6 h-6 text-{item.color}-400" />
							</div>
							<p class="text-white text-sm font-medium">{item.label}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA Section -->
		<div class="mt-20 text-center">
			<div
				class="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
			>
				<h3 class="text-2xl font-bold text-white mb-4">
					Pronto a Diventare il Custode dei Tuoi Dati?
				</h3>
				<p class="text-gray-300 mb-6 max-w-2xl mx-auto">
					Nessuna AI potrà mai accedere ai tuoi dati senza il tuo consenso biometrico. Il tuo dito è
					l'unica chiave che conta.
				</p>
				<button
					class="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
				>
					Scopri Arvify
				</button>
			</div>
		</div>
	</div>
</section>
