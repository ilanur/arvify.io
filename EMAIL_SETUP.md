# Configurazione Email per Arvify Landing Page

Questo documento spiega come configurare il sistema email per gestire i contatti dalla landing page di Arvify.

## 🔧 Setup SendGrid

### 1. Creazione Account SendGrid

1. Vai su [SendGrid](https://sendgrid.com) e crea un account gratuito
2. Verifica la tua email e completa la configurazione del profilo
3. Il piano gratuito include 100 email/giorno, sufficiente per una landing page

### 2. Configurazione API Key

1. Accedi al [dashboard SendGrid](https://app.sendgrid.com)
2. Vai su **Settings > API Keys**
3. Clicca **Create API Key**
4. Scegli **Restricted Access**
5. Seleziona le seguenti permissions:
   - **Mail Send**: Full Access
6. Copia l'API key generata (non sarà più visibile)

### 3. Verifica Domini

**IMPORTANTE**: Gli indirizzi email nel codice devono essere verificati in SendGrid.

1. Vai su **Settings > Sender Authentication**
2. Scegli una di queste opzioni:

#### Opzione A: Verifica Dominio Completo (Raccomandato)

- Clicca **Authenticate Your Domain**
- Inserisci il tuo dominio (es. `arvify.io`)
- Segui le istruzioni per aggiungere i record DNS
- Questo permetterà di usare qualsiasi indirizzo `@arvify.io`

#### Opzione B: Verifica Single Sender

- Vai su **Settings > Sender Authentication > Single Sender Verification**
- Aggiungi gli indirizzi email che vuoi usare:
  - `info@arvify.io` (per ricevere messaggi)
  - `noreply@arvify.io` (per inviare conferme)

## 🌐 Deployment su Cloudflare

### Configurazione Environment Variables

1. Vai al dashboard di [Cloudflare Pages](https://pages.cloudflare.com)
2. Seleziona il tuo progetto Arvify
3. Vai su **Settings > Environment variables**
4. Aggiungi la variabile:
   - **Variable name**: `SENDGRID_API_KEY`
   - **Value**: La tua API key di SendGrid
   - **Environment**: Production (e Preview se vuoi testare)

### Test del Sistema

Dopo il deployment:

1. Visita la tua landing page
2. Prova il form newsletter nel footer
3. Prova il form di contatto completo (se implementato)
4. Controlla la console di Cloudflare per eventuali errori

## 📧 Personalizzazione Email

### Modifica Indirizzi Email

Nel file `src/lib/server/email.ts`, aggiorna:

```typescript
// Cambia questi indirizzi con i tuoi
to: 'info@tuodominio.com',        // Dove ricevi i messaggi
from: 'noreply@tuodominio.com',   // Da chi vengono inviate le email
```

### Personalizzazione Template

Le email hanno template HTML responsive. Puoi modificare:

- Colori e stili in linea
- Testo e messaggi
- Struttura HTML
- Link e call-to-action

### Brand Customization

Aggiorna nel file `email.ts`:

- Nome azienda (attualmente "Arvify")
- Logo/icone
- Colori brand
- Messaggi di benvenuto
- Link al sito

## 🔍 Debugging

### Log delle Email

In development, controlla i log del server per:

```bash
# Success
Email inviata con successo: 202

# Errori comuni
SendGrid API key not configured
EMAIL_SENDGRID_API_KEY not found
```

### Errori Comuni

1. **API Key non configurata**
   - Assicurati di aver aggiunto `SENDGRID_API_KEY` nelle environment variables

2. **Dominio non verificato**
   - Verifica i domini in SendGrid prima di usarli

3. **Rate limiting**
   - Il piano gratuito ha limiti giornalieri

4. **DNS non propagato**
   - Dopo la verifica del dominio, aspetta 24-48h per la propagazione DNS

## 🚀 Funzionalità Implementate

### Form Newsletter (Footer)

- Raccolta email per newsletter
- Validazione formato email
- Conferma automatica all'utente
- Notifica al team

### Form Contatto Completo

- Nome, email, telefono, oggetto, messaggio
- Validazione completa
- Email formattata all'admin
- Email di ringraziamento all'utente
- Gestione errori user-friendly

### Sicurezza

- Validazione server-side
- Rate limiting (implementabile)
- Sanitizzazione input
- GDPR compliance ready

## 📱 Testing in Development

Per testare in locale:

1. Crea `.env.local`:

```bash
SENDGRID_API_KEY=your_actual_api_key_here
```

2. Avvia il server di sviluppo:

```bash
npm run dev
```

3. Testa i form su `http://localhost:5173`

## 📞 Supporto

Se hai problemi con la configurazione:

1. Controlla i log di Cloudflare Functions
2. Verifica la configurazione SendGrid
3. Testa prima in development
4. Contatta il supporto SendGrid se necessario

---

**Nota**: Ricorda di non committare mai le API key nel repository. Usa sempre environment variables per i secrets.
