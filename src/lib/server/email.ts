import sgMail from '@sendgrid/mail';

// Tipi per le funzioni email
interface ContactFormData {
	name: string;
	email: string;
	message: string;
	subject?: string;
	phone?: string;
}

interface EmailResponse {
	success: boolean;
	messageId?: string;
	error?: string;
}

// Configurazione SendGrid (verrà inizializzata quando necessario)
function initializeSendGrid(): boolean {
	// In un ambiente di produzione, queste variabili dovranno essere configurate
	// attraverso Cloudflare Workers environment variables
	const apiKey = process.env.SENDGRID_API_KEY || 'your-sendgrid-api-key';
	
	if (!apiKey || apiKey === 'your-sendgrid-api-key') {
		console.warn('SendGrid API key not configured');
		return false;
	}
	
	sgMail.setApiKey(apiKey);
	return true;
}

/**
 * Invia email di contatto dal modulo della landing page Arvify
 */
export async function sendContactEmail(contactData: ContactFormData): Promise<EmailResponse> {
	if (!initializeSendGrid()) {
		return {
			success: false,
			error: 'Email service not configured'
		};
	}

	const { name, email, message, subject = 'Nuovo contatto dal sito Arvify', phone } = contactData;
	
	// Email da inviare all'admin
	const adminMsg = {
		to: 'info@arvify.io', // Cambia con la tua email
		from: 'noreply@arvify.io', // Deve essere un dominio verificato in SendGrid
		subject: `[Arvify Contact] ${subject}`,
		html: `
			<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
				<div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
					<h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
						🔷 Nuovo Contatto Arvify
					</h1>
				</div>
				
				<div style="background: #f8fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6;">
					<h2 style="color: #1e40af; margin-top: 0; font-size: 18px;">Dettagli Contatto</h2>
					
					<div style="margin: 15px 0;">
						<strong style="color: #334155;">Nome:</strong> 
						<span style="color: #64748b;">${name}</span>
					</div>
					
					<div style="margin: 15px 0;">
						<strong style="color: #334155;">Email:</strong> 
						<a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
					</div>
					
					${phone ? `
					<div style="margin: 15px 0;">
						<strong style="color: #334155;">Telefono:</strong> 
						<span style="color: #64748b;">${phone}</span>
					</div>
					` : ''}
					
					<div style="margin: 15px 0;">
						<strong style="color: #334155;">Oggetto:</strong> 
						<span style="color: #64748b;">${subject}</span>
					</div>
				</div>
				
				<div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px;">
					<h3 style="color: #1e40af; margin-top: 0; font-size: 16px;">Messaggio:</h3>
					<div style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</div>
				</div>
				
				<div style="text-align: center; margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
					<p style="color: #64748b; font-size: 14px; margin: 0;">
						Questo messaggio è stato inviato automaticamente dal modulo di contatto del sito 
						<strong style="color: #1e40af;">Arvify.io</strong>
					</p>
					<p style="color: #94a3b8; font-size: 12px; margin: 5px 0 0 0;">
						Data: ${new Date().toLocaleString('it-IT')}
					</p>
				</div>
			</div>
		`,
		text: `
Nuovo contatto dal sito Arvify

Nome: ${name}
Email: ${email}
${phone ? `Telefono: ${phone}` : ''}
Oggetto: ${subject}

Messaggio:
${message}

---
Inviato automaticamente dal sito Arvify.io
Data: ${new Date().toLocaleString('it-IT')}
		`
	};

	try {
		const result = await sgMail.send(adminMsg);
		console.log('Email di contatto inviata con successo:', result[0].statusCode);
		
		return {
			success: true,
			messageId: result[0].headers?.['x-message-id'] || 'unknown'
		};
	} catch (error: any) {
		console.error('Errore invio email di contatto:', error);
		
		return {
			success: false,
			error: error.message || 'Errore sconosciuto durante l\'invio email'
		};
	}
}

/**
 * Invia email di conferma all'utente che ha compilato il modulo
 */
export async function sendContactConfirmation(email: string, name: string): Promise<EmailResponse> {
	if (!initializeSendGrid()) {
		return {
			success: false,
			error: 'Email service not configured'
		};
	}

	const confirmationMsg = {
		to: email,
		from: 'noreply@arvify.io',
		subject: 'Grazie per averci contattato - Arvify',
		html: `
			<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
				<div style="background: linear-gradient(135deg, #1e40af 0%, #10b981 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
					<h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
						🔷 Arvify
					</h1>
					<p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px;">
						Il futuro del controllo biometrico AI
					</p>
				</div>
				
				<div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
					<h2 style="color: #1e40af; margin-top: 0; font-size: 24px;">Ciao ${name}! 👋</h2>
					
					<p style="color: #475569; line-height: 1.6; font-size: 16px;">
						Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.
					</p>
					
					<div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 25px 0;">
						<h3 style="color: #0c4a6e; margin: 0 0 10px 0; font-size: 18px;">
							🚀 Nel frattempo, scopri Arvify
						</h3>
						<p style="color: #0369a1; margin: 0; line-height: 1.5;">
							Il primo bracciale biometrico che ti dà il controllo totale sui tuoi dati AI. 
							Solo il tuo dito può autorizzare l'accesso alle tue informazioni personali.
						</p>
					</div>
					
					<div style="text-align: center; margin: 30px 0;">
						<a href="https://arvify.io" 
							 style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
							Scopri di più su Arvify.io
						</a>
					</div>
					
					<div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 25px;">
						<h4 style="color: #334155; margin: 0 0 15px 0; font-size: 16px;">
							🔐 Caratteristiche principali:
						</h4>
						<ul style="color: #64748b; margin: 0; padding-left: 20px; line-height: 1.6;">
							<li>Controllo biometrico delle richieste AI</li>
							<li>Cancellazione automatica dei dati (TTL)</li>
							<li>Compatibile con tutti i provider AI</li>
							<li>Audit completo di ogni operazione</li>
						</ul>
					</div>
				</div>
				
				<div style="text-align: center; margin-top: 30px; padding: 20px;">
					<p style="color: #94a3b8; font-size: 14px; margin: 0;">
						Arvify Team | Il futuro della privacy AI è nelle tue mani
					</p>
					<p style="color: #cbd5e1; font-size: 12px; margin: 5px 0 0 0;">
						Se hai domande urgenti, scrivici a: 
						<a href="mailto:info@arvify.io" style="color: #3b82f6;">info@arvify.io</a>
					</p>
				</div>
			</div>
		`,
		text: `
Ciao ${name}!

Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.

Nel frattempo, scopri Arvify - il primo bracciale biometrico che ti dà il controllo totale sui tuoi dati AI.

Caratteristiche principali:
- Controllo biometrico delle richieste AI
- Cancellazione automatica dei dati (TTL)
- Compatibile con tutti i provider AI
- Audit completo di ogni operazione

Visita: https://arvify.io

Arvify Team
Il futuro della privacy AI è nelle tue mani

Per domande urgenti: info@arvify.io
		`
	};

	try {
		const result = await sgMail.send(confirmationMsg);
		console.log('Email di conferma inviata con successo:', result[0].statusCode);
		
		return {
			success: true,
			messageId: result[0].headers?.['x-message-id'] || 'unknown'
		};
	} catch (error: any) {
		console.error('Errore invio email di conferma:', error);
		
		return {
			success: false,
			error: error.message || 'Errore sconosciuto durante l\'invio email'
		};
	}
}

/**
 * Funzione generica per inviare email personalizzate
 */
export async function sendCustomEmail({
	to,
	subject,
	html,
	text
}: {
	to: string;
	subject: string;
	html: string;
	text?: string;
}): Promise<EmailResponse> {
	if (!initializeSendGrid()) {
		return {
			success: false,
			error: 'Email service not configured'
		};
	}

	const msg = {
		to,
		from: 'noreply@arvify.io',
		subject,
		html,
		text: text || html.replace(/<[^>]*>/g, '') // Strip HTML se non fornito testo
	};

	try {
		const result = await sgMail.send(msg);
		console.log('Email personalizzata inviata con successo:', result[0].statusCode);
		
		return {
			success: true,
			messageId: result[0].headers?.['x-message-id'] || 'unknown'
		};
	} catch (error: any) {
		console.error('Errore invio email personalizzata:', error);
		
		return {
			success: false,
			error: error.message || 'Errore sconosciuto durante l\'invio email'
		};
	}
}
