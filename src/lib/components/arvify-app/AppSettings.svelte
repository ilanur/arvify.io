<script>
	import { Settings } from 'lucide-svelte';

	let {
		// Configurazione impostazioni
		processingPreference = 'Locale quando possibile',
		defaultTtl = '30 minuti',
		autoApproval = true,
		pushNotifications = true,
		auditLog = true,

		// Callbacks
		onSettingChange = null,
		onSaveSettings = null,

		// Styling
		bgClass = 'bg-white/10 backdrop-blur-sm',
		borderClass = 'border border-white/20'
	} = $props();

	function handleChange(setting, value) {
		if (onSettingChange) {
			onSettingChange(setting, value);
		}
	}

	function handleSave() {
		if (onSaveSettings) {
			onSaveSettings();
		}
	}

	function toggleSetting(setting) {
		const newValue = !eval(setting);
		handleChange(setting, newValue);
	}
</script>

<div class="{bgClass} rounded-lg p-4 {borderClass}">
	<h3 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
		<Settings class="w-4 h-4" />
		<span>Impostazioni Device</span>
	</h3>

	<div class="space-y-4">
		<div>
			<label for="processing-pref" class="block text-blue-100 text-xs font-medium mb-2">
				Preferenza Elaborazione
			</label>
			<select
				id="processing-pref"
				bind:value={processingPreference}
				onchange={() => handleChange('processingPreference', processingPreference)}
				class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs"
			>
				<option>Locale quando possibile</option>
				<option>Sempre locale</option>
				<option>Bilanciato</option>
				<option>Cloud per qualità massima</option>
			</select>
		</div>

		<div>
			<label for="ttl-setting" class="block text-blue-100 text-xs font-medium mb-2">
				TTL Default
			</label>
			<select
				id="ttl-setting"
				bind:value={defaultTtl}
				onchange={() => handleChange('defaultTtl', defaultTtl)}
				class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs"
			>
				<option>30 minuti</option>
				<option>1 ora</option>
				<option>6 ore</option>
				<option>24 ore</option>
			</select>
		</div>

		<div class="flex items-center justify-between">
			<span class="text-blue-100 text-xs">Auto-approvazione query semplici</span>
			<button
				onclick={() => toggleSetting('autoApproval')}
				aria-label="Toggle auto-approvazione"
				class="w-10 h-5 bg-{autoApproval
					? 'blue'
					: 'gray'}-600 rounded-full relative transition-colors"
			>
				<div
					class="w-4 h-4 bg-white rounded-full absolute top-0.5 {autoApproval
						? 'right-0.5'
						: 'left-0.5'} transition-transform"
				></div>
			</button>
		</div>

		<div class="flex items-center justify-between">
			<span class="text-blue-100 text-xs">Notifiche push</span>
			<button
				onclick={() => toggleSetting('pushNotifications')}
				aria-label="Toggle notifiche"
				class="w-10 h-5 bg-{pushNotifications
					? 'green'
					: 'gray'}-600 rounded-full relative transition-colors"
			>
				<div
					class="w-4 h-4 bg-white rounded-full absolute top-0.5 {pushNotifications
						? 'right-0.5'
						: 'left-0.5'} transition-transform"
				></div>
			</button>
		</div>

		<div class="flex items-center justify-between">
			<span class="text-blue-100 text-xs">Audit log</span>
			<button
				onclick={() => toggleSetting('auditLog')}
				aria-label="Toggle audit log"
				class="w-10 h-5 bg-{auditLog ? 'blue' : 'gray'}-600 rounded-full relative transition-colors"
			>
				<div
					class="w-4 h-4 bg-white rounded-full absolute top-0.5 {auditLog
						? 'right-0.5'
						: 'left-0.5'} transition-transform"
				></div>
			</button>
		</div>
	</div>

	<button
		onclick={handleSave}
		class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-xs"
	>
		Salva Impostazioni
	</button>
</div>
