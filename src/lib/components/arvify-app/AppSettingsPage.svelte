<script>
	import { ArrowLeft, Settings, Shield, Bell, FileText, Zap } from 'lucide-svelte';

	let {
		// Configurazione impostazioni
		autoApproval = true,
		pushNotifications = true,
		auditLog = true,
		encryptionLevel = 'AES-256',
		autoCleanup = true,

		// Callbacks
		onBack = null,
		onSettingChange = null,
		onSaveSettings = null
	} = $props();

	function handleBack() {
		if (onBack) onBack();
	}

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

	function toggleSetting(settingName) {
		const currentValue = eval(settingName);
		const newValue = !currentValue;

		// Aggiorna il valore locale
		if (settingName === 'autoApproval') autoApproval = newValue;
		else if (settingName === 'pushNotifications') pushNotifications = newValue;
		else if (settingName === 'auditLog') auditLog = newValue;
		else if (settingName === 'autoCleanup') autoCleanup = newValue;

		handleChange(settingName, newValue);
	}
</script>

<div class="h-full flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
	<!-- Header -->
	<div class="flex items-center justify-between p-4 border-b border-slate-700/50">
		<button
			onclick={handleBack}
			class="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
		>
			<ArrowLeft class="w-4 h-4" />
			<span class="text-sm font-medium">Torna alla richiesta</span>
		</button>
		<h1 class="text-white text-lg font-semibold">Impostazioni</h1>
		<div></div>
		<!-- Spacer -->
	</div>

	<!-- Content -->
	<div class="flex-1 overflow-y-auto p-4 space-y-6">
		<!-- Privacy Settings -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
				<Shield class="w-4 h-4" />
				<span>Privacy e Sicurezza</span>
			</h2>

			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<span class="text-white text-xs font-medium block">Auto-approvazione</span>
						<span class="text-slate-300 text-xs">Approva automaticamente richieste semplici</span>
					</div>
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
					<div>
						<span class="text-white text-xs font-medium block">Cleanup automatico</span>
						<span class="text-slate-300 text-xs">Elimina dati dopo l'elaborazione</span>
					</div>
					<button
						onclick={() => toggleSetting('autoCleanup')}
						aria-label="Toggle cleanup automatico"
						class="w-10 h-5 bg-{autoCleanup
							? 'blue'
							: 'gray'}-600 rounded-full relative transition-colors"
					>
						<div
							class="w-4 h-4 bg-white rounded-full absolute top-0.5 {autoCleanup
								? 'right-0.5'
								: 'left-0.5'} transition-transform"
						></div>
					</button>
				</div>

				<div>
					<label for="encryption-level" class="text-white text-xs font-medium block mb-2"
						>Livello Crittografia</label
					>
					<select
						id="encryption-level"
						bind:value={encryptionLevel}
						onchange={() => handleChange('encryptionLevel', encryptionLevel)}
						class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-xs"
					>
						<option value="AES-128">AES-128 (Veloce)</option>
						<option value="AES-256">AES-256 (Sicuro)</option>
						<option value="AES-256-GCM">AES-256-GCM (Massima sicurezza)</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Notifications -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
				<Bell class="w-4 h-4" />
				<span>Notifiche</span>
			</h2>

			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<span class="text-white text-xs font-medium block">Notifiche push</span>
						<span class="text-slate-300 text-xs">Ricevi notifiche per nuove richieste</span>
					</div>
					<button
						onclick={() => toggleSetting('pushNotifications')}
						aria-label="Toggle notifiche push"
						class="w-10 h-5 bg-{pushNotifications
							? 'blue'
							: 'gray'}-600 rounded-full relative transition-colors"
					>
						<div
							class="w-4 h-4 bg-white rounded-full absolute top-0.5 {pushNotifications
								? 'right-0.5'
								: 'left-0.5'} transition-transform"
						></div>
					</button>
				</div>
			</div>
		</div>

		<!-- Audit & Logging -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
				<FileText class="w-4 h-4" />
				<span>Logging</span>
			</h2>

			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<span class="text-white text-xs font-medium block">Audit log</span>
						<span class="text-slate-300 text-xs">Registra tutte le attività per sicurezza</span>
					</div>
					<button
						onclick={() => toggleSetting('auditLog')}
						aria-label="Toggle audit log"
						class="w-10 h-5 bg-{auditLog
							? 'blue'
							: 'gray'}-600 rounded-full relative transition-colors"
					>
						<div
							class="w-4 h-4 bg-white rounded-full absolute top-0.5 {auditLog
								? 'right-0.5'
								: 'left-0.5'} transition-transform"
						></div>
					</button>
				</div>
			</div>
		</div>

		<!-- Device Info -->
		<div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
			<h2 class="text-white text-sm font-semibold mb-4 flex items-center space-x-2">
				<Zap class="w-4 h-4" />
				<span>Informazioni Device</span>
			</h2>

			<div class="space-y-2 text-xs">
				<div class="flex justify-between">
					<span class="text-slate-300">Modello:</span>
					<span class="text-white">Arvify Pro v1.0</span>
				</div>
				<div class="flex justify-between">
					<span class="text-slate-300">Firmware:</span>
					<span class="text-white">2.1.4</span>
				</div>
				<div class="flex justify-between">
					<span class="text-slate-300">Batteria:</span>
					<span class="text-green-400">87%</span>
				</div>
				<div class="flex justify-between">
					<span class="text-slate-300">Connessione:</span>
					<span class="text-blue-400">WiFi + Bluetooth</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Save Button -->
	<div class="p-4 border-t border-slate-700/50">
		<button
			onclick={handleSave}
			class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors text-sm"
		>
			Salva Impostazioni
		</button>
	</div>
</div>
