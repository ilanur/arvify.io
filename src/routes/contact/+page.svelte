<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { Mail, MessageCircle, Phone, MapPin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contatti | Arvify - Mettiti in contatto con noi</title>
	<meta name="description" content="Contatta il team di Arvify per domande sui nostri server MCP, supporto tecnico o collaborazioni. Siamo qui per aiutarti." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
	<!-- Hero Section -->
	<section class="relative py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="relative max-w-4xl mx-auto px-4 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
				Mettiti in <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">contatto</span> con noi
			</h1>
			<p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
				Hai domande sui nostri server MCP? Vuoi collaborare con noi? 
				Il team di Arvify è qui per aiutarti.
			</p>
		</div>
	</section>

	<!-- Contact Content -->
	<section class="py-16">
		<div class="max-w-6xl mx-auto px-4">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				
				<!-- Contact Form -->
				<div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
					<div class="mb-8">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">Inviaci un messaggio</h2>
						<p class="text-gray-600 text-lg">
							Compila il modulo e ti risponderemo il prima possibile. 
							Tutti i campi contrassegnati con * sono obbligatori.
						</p>
					</div>
					
					<ContactForm variant="contact" showPhone={true} />
				</div>

				<!-- Contact Info & FAQ -->
				<div class="space-y-8">
					
					<!-- Contact Cards -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
							<div class="flex items-center space-x-3 mb-4">
								<div class="p-3 bg-blue-100 rounded-lg">
									<Mail class="w-6 h-6 text-blue-600" />
								</div>
								<h3 class="text-lg font-semibold text-gray-900">Email</h3>
							</div>
							<p class="text-gray-600 mb-2">Scrivici per qualsiasi domanda</p>
							<a href="mailto:info@arvify.com" class="text-blue-600 hover:text-blue-700 font-medium">
								info@arvify.com
							</a>
						</div>

						<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
							<div class="flex items-center space-x-3 mb-4">
								<div class="p-3 bg-green-100 rounded-lg">
									<MessageCircle class="w-6 h-6 text-green-600" />
								</div>
								<h3 class="text-lg font-semibold text-gray-900">Community</h3>
							</div>
							<p class="text-gray-600 mb-2">Unisciti alla discussione</p>
							<a href="#" class="text-green-600 hover:text-green-700 font-medium">
								Discord Community
							</a>
						</div>

						<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
							<div class="flex items-center space-x-3 mb-4">
								<div class="p-3 bg-purple-100 rounded-lg">
									<Phone class="w-6 h-6 text-purple-600" />
								</div>
								<h3 class="text-lg font-semibold text-gray-900">Supporto</h3>
							</div>
							<p class="text-gray-600 mb-2">Assistenza tecnica</p>
							<span class="text-purple-600 font-medium">
								Lun-Ven 9:00-18:00
							</span>
						</div>

						<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
							<div class="flex items-center space-x-3 mb-4">
								<div class="p-3 bg-orange-100 rounded-lg">
									<MapPin class="w-6 h-6 text-orange-600" />
								</div>
								<h3 class="text-lg font-semibold text-gray-900">Sede</h3>
							</div>
							<p class="text-gray-600 mb-2">Team distribuito</p>
							<span class="text-orange-600 font-medium">
								Italia & Europa
							</span>
						</div>
					</div>

					<!-- FAQ Section -->
					<div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
						<h3 class="text-2xl font-bold text-gray-900 mb-6">Domande frequenti</h3>
						
						<div class="space-y-6">
							<div class="border-b border-gray-200 pb-4">
								<h4 class="text-lg font-semibold text-gray-900 mb-2">
									Come posso contribuire al progetto?
								</h4>
								<p class="text-gray-600">
									Puoi contribuire aggiungendo nuovi server MCP, migliorando la documentazione 
									o segnalando bug. Visita il nostro repository GitHub per iniziare.
								</p>
							</div>

							<div class="border-b border-gray-200 pb-4">
								<h4 class="text-lg font-semibold text-gray-900 mb-2">
									Quanto tempo ci vuole per una risposta?
								</h4>
								<p class="text-gray-600">
									Cerchiamo di rispondere a tutte le richieste entro 24-48 ore lavorative. 
									Per questioni urgenti, contattaci tramite i nostri canali social.
								</p>
							</div>

							<div>
								<h4 class="text-lg font-semibold text-gray-900 mb-2">
									Offrite supporto tecnico?
								</h4>
								<p class="text-gray-600">
									Sì! Offriamo supporto per l'implementazione dei server MCP e l'integrazione 
									con i tuoi progetti. Contattaci per discutere le tue esigenze specifiche.
								</p>
							</div>
						</div>
					</div>

					<!-- Newsletter Signup -->
					<div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
						<h3 class="text-2xl font-bold mb-4">Resta aggiornato</h3>
						<p class="text-blue-100 mb-6">
							Ricevi le ultime novità sui server MCP e gli aggiornamenti di Arvify.
						</p>
						<ContactForm variant="newsletter" />
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
