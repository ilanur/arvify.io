import { json, type RequestHandler } from '@sveltejs/kit';
import { sendContactEmail, sendContactConfirmation } from '$lib/server/email.js';

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

		// Invio email all'admin
		const adminResult = await sendContactEmail({
			name,
			email,
			message,
			subject: subject || 'Nuovo contatto dal sito Arvify',
			phone
		});

		if (!adminResult.success) {
			console.error('Errore invio email admin:', adminResult.error);
			return json(
				{
					success: false,
					error: "Errore durante l'invio del messaggio. Riprova più tardi."
				},
				{ status: 500 }
			);
		}

		// Invio email di conferma all'utente (opzionale, non bloccare se fallisce)
		try {
			await sendContactConfirmation(email, name);
		} catch (error) {
			console.warn('Email di conferma non inviata:', error);
			// Non blocchiamo il processo se la conferma fallisce
		}

		return json({
			success: true,
			message: 'Messaggio inviato con successo! Ti risponderemo al più presto.',
			messageId: adminResult.messageId
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
