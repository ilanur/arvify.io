import sgMail from '@sendgrid/mail';
import { EMAIL_SENDGRID_API_KEY, SENDGRID_FROM_EMAIL } from '$env/static/private';
import { PUBLIC_BASE_URL } from '$env/static/public';

sgMail.setApiKey(EMAIL_SENDGRID_API_KEY);

export async function sendVerificationEmail(email, name, token) {
	// Validazione environment variables
	if (!EMAIL_SENDGRID_API_KEY) {
		console.error('EMAIL_SENDGRID_API_KEY not found');
		throw new Error('EMAIL_SENDGRID_API_KEY not configured');
	}
	if (!SENDGRID_FROM_EMAIL) {
		console.error('SENDGRID_FROM_EMAIL not found');
		throw new Error('SENDGRID_FROM_EMAIL not configured');
	}
	if (!PUBLIC_BASE_URL) {
		console.error('PUBLIC_BASE_URL not found');
		throw new Error('PUBLIC_BASE_URL not configured');
	}

	const verificationUrl = `${PUBLIC_BASE_URL}/api/auth/verify-email?token=${token}`;

	const msg = {
		to: email,
		from: SENDGRID_FROM_EMAIL,
		subject: 'Verifica il tuo account - Giuna AI',
		html: `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<h2>Ciao ${name}!</h2>
				<p>Grazie per esserti registrato su Giuna AI. Per completare la registrazione, clicca sul link qui sotto:</p>
				<div style="text-align: center; margin: 30px 0;">
					<a href="${verificationUrl}" 
						 style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
						Verifica Account
					</a>
				</div>
				<p>Se non hai richiesto questa registrazione, puoi ignorare questa email.</p>
				<p>Il link scadrà tra 24 ore.</p>
				<hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
				<p style="color: #666; font-size: 12px;">Giuna AI</p>
			</div>
			`
	};

	try {
		const result = await sgMail.send(msg);
		console.log('Email inviata con successo:', result[0].statusCode);
		return result;
	} catch (error) {
		console.error('Errore SendGrid completo:', error);
		console.error('Status code:', error.code);
		console.error('Response body:', JSON.stringify(error.response?.body, null, 2));

		// Temporaneamente per debug - commenta questa riga quando funziona
		// throw new Error(`SendGrid error: ${error.message} - Response: ${JSON.stringify(error.response?.body)}`);
		throw error;
	}
}

export async function sendEmail({ to, subject, html, text = null }) {
	// Validazione environment variables
	if (!EMAIL_SENDGRID_API_KEY) {
		console.error('EMAIL_SENDGRID_API_KEY not found');
		throw new Error('EMAIL_SENDGRID_API_KEY not configured');
	}
	if (!SENDGRID_FROM_EMAIL) {
		console.error('SENDGRID_FROM_EMAIL not found');
		throw new Error('SENDGRID_FROM_EMAIL not configured');
	}

	const msg = {
		to,
		from: SENDGRID_FROM_EMAIL,
		subject,
		html,
		text: text || html.replace(/<[^>]*>/g, '') // Strip HTML if no text version provided
	};

	try {
		const result = await sgMail.send(msg);
		console.log('Email inviata con successo:', result[0].statusCode);
		return result;
	} catch (error) {
		console.error('Errore SendGrid completo:', error);
		console.error('Status code:', error.code);
		console.error('Response body:', JSON.stringify(error.response?.body, null, 2));
		throw error;
	}
}
