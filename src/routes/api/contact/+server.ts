import { json, type RequestHandler } from '@sveltejs/kit';
// import { sendContactEmail, sendContactConfirmation } from '$lib/server/email.js';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { name, email, message, subject, phone } = body;

		// Validazione base
		if (!name || !email || !message) {
			return json(
				{
					success: false,
					error: 'Nome, email e messaggio sono obbligatori'
				},
				{ status: 400 }
			);
		}

		// Validazione email semplice
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{
					success: false,
					error: 'Formato email non valido'
				},
				{ status: 400 }
			);
		}

		// TODO: Implementare servizio email compatibile con Cloudflare Workers
		// Per ora logghiamo i dati del contatto
		console.log('Contact form submission:', {
			name,
			email,
			message,
			subject: subject || 'Nuovo contatto dal sito',
			phone,
			timestamp: new Date().toISOString()
		});

		// Simuliamo un successo per ora
		return json({
			success: true,
			message: 'Messaggio ricevuto! Ti risponderemo al più presto.',
			messageId: `temp-${Date.now()}`
		});
	} catch (error) {
		console.error('Errore API contact:', error);
		return json(
			{
				success: false,
				error: 'Errore interno del server'
			},
			{ status: 500 }
		);
	}
};
