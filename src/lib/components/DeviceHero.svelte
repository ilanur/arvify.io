<script>
	import {
		Shield,
		Smartphone,
		Fingerprint,
		BellRing,
		Clock,
		ChevronRight,
		Play
	} from 'lucide-svelte';
	import { t } from '$lib/utils/translations.js';
</script>

<section
	class="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
>
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0); background-size: 32px 32px;"
		></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="text-white">
				<div
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
				>
					<Shield class="w-4 h-4 text-emerald-300" />
					<span>{t('home.hero.tagline')}</span>
				</div>

				<h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
					Arvify Consent Layer
					<span
						class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-emerald-300 to-cyan-300"
					>
						{t('home.hero.highlight')}
					</span>
				</h1>

				<p class="text-xl text-slate-200/90 leading-relaxed mb-8 max-w-xl">
					{t('home.hero.description')}
				</p>

				<div class="space-y-4 mb-10">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
							<BellRing class="w-5 h-5 text-blue-300" />
						</div>
						<span class="text-slate-200">{t('home.hero.features.localProcessing')}</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
							<Shield class="w-5 h-5 text-emerald-300" />
						</div>
						<span class="text-slate-200">{t('home.hero.features.hybridCloud')}</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
							<Clock class="w-5 h-5 text-cyan-300" />
						</div>
						<span class="text-slate-200">{t('home.hero.features.mobileControl')}</span>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-4">
					<a
						class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 hover:from-blue-400 hover:to-emerald-400 transition-all shadow-lg shadow-blue-900/40"
						href="/pricing"
					>
						<span>{t('home.hero.cta.order')}</span>
						<ChevronRight class="w-5 h-5" />
					</a>
					<a
						class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all"
						href="/technology"
					>
						<Play class="w-5 h-5" />
						<span>{t('home.hero.cta.demo')}</span>
					</a>
				</div>
			</div>

			<div class="relative">
				<div
					class="absolute -top-20 -right-10 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"
				></div>
				<div
					class="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full"
				></div>

				<div class="relative mx-auto w-full max-w-md">
					<div
						class="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
					>
						<div class="flex items-center justify-between text-xs text-slate-200/70 mb-4">
							<span>Browser Extension</span>
							<span class="inline-flex items-center gap-1 text-emerald-300">
								<Shield class="w-3 h-3" />
								Zero-trust
							</span>
						</div>

						<div class="rounded-2xl bg-slate-950/60 border border-white/5 p-4">
							<div class="flex items-center gap-3 mb-4">
								<div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
									<Smartphone class="w-6 h-6 text-blue-200" />
								</div>
								<div class="text-sm text-slate-200">
									<p class="font-semibold">{t('home.hero.deviceLabel')}</p>
									<p class="text-slate-400">request → phone → Touch ID/Face ID → TTL</p>
								</div>
							</div>

							<div class="space-y-3">
								<div class="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
									<p class="text-sm font-semibold text-blue-100">GitHub + Gmail</p>
									<p class="text-xs text-blue-200/80">
										{t('home.hero.scenarios.email.description')}
									</p>
								</div>
								<div class="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
									<p class="text-sm font-semibold text-emerald-100">Secrets broker</p>
									<p class="text-xs text-emerald-200/80">
										{t('home.hero.scenarios.finance.description')}
									</p>
								</div>
								<div class="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3">
									<p class="text-sm font-semibold text-cyan-100">Calendar & Docs</p>
									<p class="text-xs text-cyan-200/80">
										{t('home.hero.scenarios.calendar.description')}
									</p>
								</div>
							</div>
						</div>

						<div class="mt-6 flex items-center justify-between text-xs text-slate-200/70">
							<div class="flex items-center gap-2">
								<Fingerprint class="w-4 h-4 text-emerald-300" />
								<span>Biometria esistente</span>
							</div>
							<div class="flex items-center gap-2">
								<Clock class="w-4 h-4 text-blue-300" />
								<span>TTL personalizzato</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
