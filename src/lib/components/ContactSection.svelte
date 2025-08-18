<script>
	import { Mail, Phone, MapPin, MessageCircle, Clock, Shield } from 'lucide-svelte';
	import ContactForm from './ContactForm.svelte';

	const contactMethods = [
		{
			icon: Mail,
			title: 'Email',
			description: 'Scrivi per informazioni dettagliate',
			value: 'ilanurs@gmail.com',
			action: 'mailto:ilanurs@gmail.com',
			color: 'blue'
		},
		{
			icon: Phone,
			title: 'Telefono',
			description: 'Parla direttamente con il nostro team',
			value: '+39 02 1234 5678',
			action: 'tel:+390212345678',
			color: 'emerald'
		},
		{
			icon: MessageCircle,
			title: 'Chat Live',
			description: 'Supporto in tempo reale',
			value: 'Attivo Lun-Ven 9-18',
			action: '#',
			color: 'purple'
		}
	];

	const faqs = [
		{
			question: 'Quando sarà disponibile Arvify?',
			answer:
				'Stiamo finalizzando lo sviluppo. I primi dispositivi saranno disponibili per il pre-ordine nel Q2 2025.'
		},
		{
			question: 'Arvify è compatibile con tutti gli AI?',
			answer:
				'Sì, Arvify funziona con qualsiasi provider AI grazie al protocollo MCP e alle nostre API universali.'
		},
		{
			question: 'Come funziona la cancellazione automatica dei dati?',
			answer:
				'Ogni dato condiviso ha un TTL (Time To Live) configurabile. Dopo la scadenza, viene automaticamente cancellato dai server.'
		},
		{
			question: 'Posso usare Arvify per lavoro?',
			answer:
				'Assolutamente! La versione Enterprise include funzionalità avanzate per team e aziende con audit completo.'
		}
	];
</script>

<section id="contatti" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-gray-900 mb-4">
				Hai domande su <span
					class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"
					>Arvify</span
				>?
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Il nostro team è qui per aiutarti a scoprire come Arvify può rivoluzionare il tuo controllo
				sui dati AI. Contattaci per informazioni dettagliate.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Contact Methods -->
			<div class="lg:col-span-1">
				<h3 class="text-2xl font-bold text-gray-900 mb-8">Come raggiungerci</h3>

				<div class="space-y-6">
					{#each contactMethods as method}
						<a
							href={method.action}
							class="group block p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-{method.color}-200 transition-all duration-300"
						>
							<div class="flex items-start space-x-4">
								<div
									class="w-12 h-12 bg-{method.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
								>
									<svelte:component this={method.icon} class="w-6 h-6 text-{method.color}-600" />
								</div>

								<div class="flex-1">
									<h4 class="font-semibold text-gray-900 mb-1">{method.title}</h4>
									<p class="text-sm text-gray-600 mb-2">{method.description}</p>
									<p class="text-{method.color}-600 font-medium">{method.value}</p>
								</div>
							</div>
						</a>
					{/each}
				</div>

				<!-- Support Hours -->
				<div class="mt-8 p-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl text-white">
					<div class="flex items-center space-x-3 mb-3">
						<Clock class="w-5 h-5" />
						<h4 class="font-semibold">Orari di Supporto</h4>
					</div>
					<div class="space-y-1 text-sm text-blue-100">
						<p>Lunedì - Venerdì: 9:00 - 18:00</p>
						<p>Sabato: 9:00 - 13:00</p>
						<p>Domenica: Chiuso</p>
					</div>
					<div class="mt-4 flex items-center space-x-2 text-sm">
						<Shield class="w-4 h-4" />
						<span class="text-blue-100">Supporto tecnico garantito</span>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<div class="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
					<div class="mb-8">
						<h3 class="text-2xl font-bold text-gray-900 mb-3">Inviaci un messaggio</h3>
						<p class="text-gray-600">
							Compila il modulo e ti risponderemo entro 24 ore. Per urgenze, chiamaci direttamente o
							usa la chat live.
						</p>
					</div>

					<ContactForm variant="full" showPhone={true} />

					<!-- Privacy Notice -->
					<div class="mt-6 p-4 bg-gray-50 rounded-lg">
						<div class="flex items-start space-x-3">
							<Shield class="w-5 h-5 text-blue-600 mt-0.5" />
							<div class="text-sm text-gray-600">
								<p class="font-medium text-gray-800 mb-1">La tua privacy è protetta</p>
								<p>
									I tuoi dati sono trattati secondo il GDPR e utilizzati solo per rispondere alla
									tua richiesta. Non li condividiamo con terze parti.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mt-20">
			<div class="text-center mb-12">
				<h3 class="text-3xl font-bold text-gray-900 mb-4">Domande Frequenti</h3>
				<p class="text-lg text-gray-600">Le risposte alle domande più comuni su Arvify</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each faqs as faq}
					<div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
						<h4 class="font-semibold text-gray-900 mb-3">{faq.question}</h4>
						<p class="text-gray-600 leading-relaxed">{faq.answer}</p>
					</div>
				{/each}
			</div>

			<!-- More Questions CTA -->
			<div class="text-center mt-12">
				<p class="text-gray-600 mb-4">Non hai trovato quello che cercavi?</p>
				<a
					href="#contatti"
					class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
				>
					<MessageCircle class="w-5 h-5" />
					<span>Facci una domanda</span>
				</a>
			</div>
		</div>
	</div>
</section>
