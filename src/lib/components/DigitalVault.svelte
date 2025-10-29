<script>
	import {
		Layers,
		Shield,
		BellRing,
		Fingerprint,
		GitBranch,
		Calendar,
		KeyRound,
		FileText
	} from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';

	const useCases = [
		{
			title: 'Consent-gated RAG',
			description:
				'GitHub + Gmail diventano fonti controllate. L’AI ottiene solo file ed email pertinenti per X secondi, poi tutto si richiude.',
			icon: GitBranch,
			highlights: ['Policy per branch e label', 'TTL automatico 30-90s', 'Diff e thread auditati']
		},
		{
			title: 'Just-in-time PII',
			description:
				'Calendar e Docs condivisi solo quando serve. Lo slot viene aperto al volo, la PII torna nel vault al timeout.',
			icon: Calendar,
			highlights: ['Scope temporanei', 'Segnalazione PII', 'Log condiviso con il DPO']
		},
		{
			title: 'Secrets broker',
			description:
				'Token e credenziali ruotabili on demand. Arvify emette segreti a tempo e li revoca appena l’AI termina.',
			icon: KeyRound,
			highlights: ['Integrazione AWS/GCP/Azure', 'Supporto YubiKey Bio', 'Kill switch immediato']
		}
	];

	const protectedItems = [
		t('home.vault.vault_items.items.emails'),
		t('home.vault.vault_items.items.documents'),
		t('home.vault.vault_items.items.calendar'),
		t('home.vault.vault_items.items.photos'),
		t('home.vault.vault_items.items.contacts'),
		t('home.vault.vault_items.items.finance'),
		t('home.vault.vault_items.items.health'),
		t('home.vault.vault_items.items.custom')
	];
</script>

<section
	class="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden"
>
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 24px 24px, rgba(148, 163, 184, 0.3) 2px, transparent 0); background-size: 48px 48px;"
		></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
		<div class="text-center mb-16">
			<div
				class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
			>
				<Layers class="w-4 h-4 text-cyan-300" />
				<span>{t('home.vault.title')}</span>
			</div>
			<h2 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-emerald-300 to-cyan-300"
				>
					{t('home.vault.subtitle')}
				</span>
			</h2>
			<p class="text-xl text-slate-100/80 max-w-3xl mx-auto leading-relaxed">
				{t('home.vault.description')}
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-20">
			<div class="relative">
				<div
					class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl space-y-6"
				>
					<div class="flex items-start gap-4">
						<div class="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
							<BellRing class="w-7 h-7 text-blue-200" />
						</div>
						<div>
							<h3 class="text-2xl font-semibold mb-2">Flow completo</h3>
							<p class="text-slate-200/80 leading-relaxed">
								Request → notifica telefono → Touch ID/Face ID → rilascio con TTL → audit trail
								firmato.
							</p>
						</div>
					</div>

					<div class="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
						<div class="flex items-center gap-3 mb-3 text-emerald-200">
							<Fingerprint class="w-5 h-5" />
							<span class="text-sm font-semibold uppercase tracking-wide">Biometria esistente</span>
						</div>
						<p class="text-slate-100/80 text-sm leading-relaxed">
							FIDO2/WebAuthn e chiavi biometriche (YubiKey Bio, Token) diventano fattori opzionali.
							Partiamo con ciò che hai già in mano: Touch ID e Face ID.
						</p>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div class="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4">
							<p class="text-sm font-semibold text-blue-100 mb-2">
								{t('home.vault.features.control.title')}
							</p>
							<p class="text-xs text-blue-100/80 leading-relaxed">
								{t('home.vault.features.control.description')}
							</p>
						</div>
						<div class="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4">
							<p class="text-sm font-semibold text-cyan-100 mb-2">
								{t('home.vault.features.privacy.title')}
							</p>
							<p class="text-xs text-cyan-100/80 leading-relaxed">
								{t('home.vault.features.privacy.description')}
							</p>
						</div>
						<div class="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
							<p class="text-sm font-semibold text-emerald-100 mb-2">
								{t('home.vault.features.fingerprint.title')}
							</p>
							<p class="text-xs text-emerald-100/80 leading-relaxed">
								{t('home.vault.features.fingerprint.description')}
							</p>
						</div>
						<div class="rounded-xl border border-purple-400/30 bg-purple-500/10 p-4">
							<p class="text-sm font-semibold text-purple-100 mb-2">
								{t('home.vault.features.universal.title')}
							</p>
							<p class="text-xs text-purple-100/80 leading-relaxed">
								{t('home.vault.features.universal.description')}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="space-y-6">
				{#each useCases as useCase, index (index)}
					<div
						class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-emerald-300/40 transition-all"
					>
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
								<svelte:component this={useCase.icon} class="w-6 h-6 text-emerald-200" />
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-semibold mb-2">{useCase.title}</h3>
								<p class="text-slate-200/80 text-sm leading-relaxed mb-4">{useCase.description}</p>
								<div class="flex flex-wrap gap-2">
									{#each useCase.highlights as highlight, highlightIndex (highlightIndex)}
										<span
											class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs font-medium text-emerald-100"
										>
											<Shield class="w-3 h-3" />
											{highlight}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-16">
			<h3 class="text-2xl font-semibold text-center mb-6">{t('home.vault.vault_items.title')}</h3>
			<p class="text-center text-slate-200/70 mb-10">{t('home.vault.vault_items.subtitle')}</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{#each protectedItems as label, index (index)}
					<div
						class="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center"
					>
						<FileText class="w-5 h-5 mx-auto mb-2 text-emerald-200" />
						<p class="text-sm text-slate-100">{label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
