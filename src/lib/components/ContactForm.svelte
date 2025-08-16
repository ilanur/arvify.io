<script>
	import { Check, Send, AlertCircle, X } from 'lucide-svelte';

	// Props
	let { variant = 'newsletter', showPhone = false } = $props();

	// State
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let submitStatus = $state(/** @type {'success' | 'error' | null} */ (null));
	let errorMessage = $state('');

	// Reactive validation
	let isValid = $derived(
		variant === 'newsletter'
			? formData.email.length > 0
			: formData.name.trim() && formData.email.trim() && formData.message.trim()
	);

	// Handle form submission
	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();

		if (!isValid || isSubmitting) return;

		isSubmitting = true;
		submitStatus = null;
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...formData,
					subject:
						variant === 'newsletter'
							? 'Iscrizione newsletter Arvify'
							: formData.subject || 'Contatto dal sito Arvify'
				})
			});

			const result = await response.json();

			if (result.success) {
				submitStatus = 'success';
				// Reset form after successful submission
				setTimeout(() => {
					formData = {
						name: '',
						email: '',
						phone: '',
						subject: '',
						message: ''
					};
					submitStatus = null;
				}, 3000);
			} else {
				submitStatus = 'error';
				errorMessage = result.error || "Errore durante l'invio";
			}
		} catch (error) {
			console.error('Errore submit form:', error);
			submitStatus = 'error';
			errorMessage = 'Errore di connessione. Riprova più tardi.';
		} finally {
			isSubmitting = false;
		}
	}

	function clearStatus() {
		submitStatus = null;
		errorMessage = '';
	}
</script>

{#if variant === 'newsletter'}
	<!-- Newsletter Form Compact -->
	<form onsubmit={handleSubmit} class="flex space-x-3 w-full md:w-auto">
		<div class="flex-1 md:w-64 relative">
			<input
				type="email"
				bind:value={formData.email}
				placeholder="il-tuo@email.com"
				required
				disabled={isSubmitting}
				class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 disabled:opacity-50"
			/>

			{#if submitStatus === 'success'}
				<div class="absolute right-2 top-1/2 -translate-y-1/2">
					<Check class="w-4 h-4 text-green-400" />
				</div>
			{:else if submitStatus === 'error'}
				<div class="absolute right-2 top-1/2 -translate-y-1/2">
					<AlertCircle class="w-4 h-4 text-red-400" />
				</div>
			{/if}
		</div>

		<button
			type="submit"
			disabled={!isValid || isSubmitting}
			class="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
		>
			{#if isSubmitting}
				<div
					class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
				></div>
				<span>Invio...</span>
			{:else}
				<Send class="w-4 h-4" />
				<span>Iscriviti</span>
			{/if}
		</button>
	</form>

	{#if submitStatus === 'success'}
		<div class="mt-2 text-sm text-green-400 flex items-center space-x-2">
			<Check class="w-4 h-4" />
			<span>Iscrizione confermata! Controlla la tua email.</span>
		</div>
	{:else if submitStatus === 'error'}
		<div class="mt-2 text-sm text-red-400 flex items-center space-x-2">
			<AlertCircle class="w-4 h-4" />
			<span>{errorMessage}</span>
			<button onclick={clearStatus} class="text-gray-400 hover:text-white">
				<X class="w-3 h-3" />
			</button>
		</div>
	{/if}
{:else}
	<!-- Full Contact Form -->
	<form onsubmit={handleSubmit} class="space-y-6">
		<!-- Status Messages -->
		{#if submitStatus === 'success'}
			<div class="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
				<Check class="w-5 h-5 text-green-600 mt-0.5" />
				<div>
					<h4 class="font-medium text-green-800">Messaggio inviato!</h4>
					<p class="text-sm text-green-700 mt-1">
						Grazie per averci contattato. Ti risponderemo al più presto.
					</p>
				</div>
			</div>
		{:else if submitStatus === 'error'}
			<div class="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
				<AlertCircle class="w-5 h-5 text-red-600 mt-0.5" />
				<div>
					<h4 class="font-medium text-red-800">Errore durante l'invio</h4>
					<p class="text-sm text-red-700 mt-1">{errorMessage}</p>
				</div>
				<button onclick={clearStatus} class="text-red-400 hover:text-red-600">
					<X class="w-4 h-4" />
				</button>
			</div>
		{/if}

		<!-- Form Fields -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700 mb-2"> Nome * </label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
					disabled={isSubmitting}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50"
					placeholder="Il tuo nome"
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email * </label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
					disabled={isSubmitting}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50"
					placeholder="la-tua@email.com"
				/>
			</div>

			{#if showPhone}
				<div>
					<label for="phone" class="block text-sm font-medium text-gray-700 mb-2"> Telefono </label>
					<input
						type="tel"
						id="phone"
						bind:value={formData.phone}
						disabled={isSubmitting}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50"
						placeholder="+39 123 456 7890"
					/>
				</div>
			{/if}

			<div class={showPhone ? '' : 'md:col-span-2'}>
				<label for="subject" class="block text-sm font-medium text-gray-700 mb-2"> Oggetto </label>
				<input
					type="text"
					id="subject"
					bind:value={formData.subject}
					disabled={isSubmitting}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50"
					placeholder="Di cosa vorresti parlare?"
				/>
			</div>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
				Messaggio *
			</label>
			<textarea
				id="message"
				bind:value={formData.message}
				required
				disabled={isSubmitting}
				rows="6"
				class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50 resize-none"
				placeholder="Raccontaci come possiamo aiutarti o cosa ti interessa di Arvify..."
			></textarea>
		</div>

		<div class="flex items-center justify-between">
			<p class="text-sm text-gray-500">* Campi obbligatori</p>

			<button
				type="submit"
				disabled={!isValid || isSubmitting}
				class="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg"
			>
				{#if isSubmitting}
					<div
						class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
					></div>
					<span>Invio in corso...</span>
				{:else}
					<Send class="w-5 h-5" />
					<span>Invia Messaggio</span>
				{/if}
			</button>
		</div>
	</form>
{/if}
