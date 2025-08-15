// Cloudflare Pages Functions middleware
// Questo file gestisce middleware globali per tutte le route

export async function onRequest(context: { next: () => Promise<Response> }): Promise<Response> {
	// Esegui la request
	const response = await context.next();

	// Aggiungi headers di sicurezza
	const newHeaders = new Headers(response.headers);

	// Security headers
	newHeaders.set('X-Content-Type-Options', 'nosniff');
	newHeaders.set('X-Frame-Options', 'DENY');
	newHeaders.set('X-XSS-Protection', '1; mode=block');
	newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	// Cache headers per asset statici
	if (
		context.request.url.includes('/assets/') ||
		context.request.url.includes('.css') ||
		context.request.url.includes('.js') ||
		context.request.url.includes('.png') ||
		context.request.url.includes('.jpg') ||
		context.request.url.includes('.svg')
	) {
		newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
	}

	// Restituisci response con nuovi headers
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders
	});
}
