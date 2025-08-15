# Arvify.io - Landing Page

Una moderna landing ### Vantaggi Chiave

1. **Privacy totale** - Elaborazione locale quando possibile
2. **Potenza cloud** - Accesso a GPT-4, Claude, Gemini quando serve
3. **Controllo granulare** - Approvi cosa condividere e per quanto tempo
4. **Auto-cancellazione** - TTL automatico per tutti i dati cloud
5. **Tracciabilità completa** - Log di ogni operazione

## 🛠️ Tecnologie Landing PageArvify.io, il primo assistente AI ibrido privacy-first basato su Raspberry Pi 5. Questo progetto presenta il dispositivo Arvify con un'interfaccia utente attraente e funzionale.

## ✨ Caratteristiche

- **🎨 Design Moderno**: Landing page responsive costruita con SvelteKit 5 e Tailwind CSS
- **🔒️ Privacy-First**: Sezione dedicata ai vantaggi dell'approccio ibrido locale/cloud
- **📱 App Mobile**: Showcase dell'app di controllo dedicata
- **💰 Pricing**: Sezione con piani di acquisto e specifiche tecniche
- **👤 Dashboard**: Area login e dashboard demo per gestione dispositivo
- **⚡ Performance**: Caricamento veloce e animazioni fluide
- **📱 Responsive**: Ottimizzato per desktop, tablet e mobile

## 🚀 Prodotto: Arvify

**Arvify** è un dispositivo fisico basato su:Landing Page

Una moderna landing page per Smart AI Box, il primo assistente AI ibrido privacy-first basato su Raspberry Pi 5. Questo progetto presenta il dispositivo con un'interfaccia utente attraente e funzionale.

## ✨ Caratteristiche

- **🎨 Design Moderno**: Landing page responsive costruita con SvelteKit 5 e Tailwind CSS
- **�️ Privacy-First**: Sezione dedicata ai vantaggi dell'approccio ibrido locale/cloud
- **📱 App Mobile**: Showcase dell'app di controllo dedicata
- **💰 Pricing**: Sezione con piani di acquisto e specifiche tecniche
- **👤 Dashboard**: Area login e dashboard demo per gestione dispositivo
- **⚡ Performance**: Caricamento veloce e animazioni fluide
- **📱 Responsive**: Ottimizzato per desktop, tablet e mobile

## 🚀 Prodotto: Smart AI Box

**Smart AI Box** è un dispositivo fisico basato su:

### Hardware

- **Raspberry Pi 5 (8GB)** - Processore dedicato per AI
- **Ollama integrato** - Modelli AI locali preinstallati
- **sqlite-vec** - Database vettoriale per indicizzazione semantica
- **Storage espandibile** - MicroSD + SSD opzionale

### Software

- **Router AI ibrido** - Sceglie automaticamente tra locale e cloud
- **App mobile dedicata** - Controllo totale da iOS/Android
- **MCP Server** - Supporto completo Model Context Protocol
- **Privacy by design** - Dati locali, cloud solo su approvazione

### Vantaggi Chiave

1. **Privacy totale** - Elaborazione locale quando possibile
2. **Potenza cloud** - Accesso a GPT-4, Claude, Gemini quando serve
3. **Controllo granulare** - Approvi cosa condividere e per quanto tempo
4. **Auto-cancellazione** - TTL automatico per tutti i dati cloud
5. **Tracciabilità completa** - Log di ogni operazione

## �️ Tecnologie Landing Page

- **SvelteKit 5**: Framework moderno con Svelte Runes
- **Tailwind CSS 4**: Sistema di design atomico
- **Lucide Icons**: Icone moderne e consistenti
- **TypeScript**: Tipizzazione statica
- **Vite**: Build tool veloce

## 📦 Installazione

```bash
# Clona il repository
git clone <repository-url>
cd mcp-list

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:5173
```

## 🛠️ Comandi Disponibili

```bash
# Sviluppo
npm run dev

# Build per produzione
npm run build

# Anteprima build locale
npm run preview

# Deploy su Cloudflare Pages
npm run deploy

# Deploy preview su Cloudflare Pages
npm run deploy:preview

# Build per Cloudflare
npm run cf:build

# Dev locale con Cloudflare
npm run cf:dev

# Linting e formattazione
npm run lint
npm run format

# Type checking
npm run check
```

## ☁️ Deploy su Cloudflare

Questo progetto è configurato per essere deployato su **Cloudflare Pages/Workers**:

### Deployment Automatico via Git

1. **Fai push del codice** su GitHub/GitLab
2. **Connetti il repository** a [Cloudflare Pages](https://pages.cloudflare.com/)
3. **Configura le build settings**:
   - **Build command**: `npm run build`
   - **Output directory**: `build`
   - **Node.js version**: `18` o superiore

### Deployment Manuale via CLI

```bash
# Installa Wrangler CLI (se non già installato)
npm install -g wrangler

# Login a Cloudflare
wrangler login

# Build e deploy
npm run deploy
```

### Variabili d'Ambiente

Copia `.env.example` in `.env.local` e configura:

```bash
# Per deployment automatico
CLOUDFLARE_API_TOKEN=your_api_token
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

### Configurazione Avanzata

Il file `wrangler.toml` contiene la configurazione per:

- **Routing**: Gestione delle route statiche e dinamiche
- **Assets**: Servizio di file statici ottimizzato
- **D1 Database**: (Opzionale) Database SQL serverless
- **KV Storage**: (Opzionale) Key-Value storage
- **Environment Variables**: Variabili di ambiente sicure

### Vantaggi Cloudflare

- ⚡ **Edge Computing**: Deploy globale su 200+ datacenter
- 🛡️ **DDoS Protection**: Protezione automatica inclusa
- 📊 **Analytics**: Metriche avanzate di performance
- 🌐 **CDN Globale**: Cache distribuita automatica
- 💰 **Pricing Conveniente**: Piano free generoso

## 📁 Struttura del Progetto

```
src/
├── lib/
│   └── components/
│       ├── DeviceHero.svelte        # Hero section dispositivo
│       ├── DeviceAdvantages.svelte  # Vantaggi approccio ibrido
│       ├── TechSpecs.svelte         # Specifiche tecniche
│       ├── HowItWorks.svelte        # Workflow e funzionamento
│       ├── Pricing.svelte           # Piani di acquisto
│       ├── DeviceLogin.svelte       # Login e dashboard
│       └── DeviceFooter.svelte      # Footer dedicato
├── routes/
│   └── +page.svelte                 # Landing page principale
├── app.css                          # Stili globali e device-specific
└── app.html                         # Template HTML
```

## 🎨 Sistema di Design

Il progetto utilizza un sistema di design moderno con:

- **Gradients**: Blu/emerald per tech, slate/indigo per eleganza
- **Glass effects**: Backdrop blur per modernità
- **Animazioni**: Slide-up, fade-in, bounce per interattività
- **Typography**: Gerarchia chiara con focus su leggibilità
- **Spacing**: Sistema consistente per layout armonioso

## � Modelli di Prezzo

### Starter - €299

- Raspberry Pi 5 (8GB)
- Setup base con 3 modelli Ollama
- App mobile inclusa

### Pro - €449 (Più venduto)

- Include tutto dello Starter
- SSD 256GB + case premium
- Cloud credits per 6 mesi
- Supporto prioritario

### Enterprise - €799

- Include tutto del Pro
- SSD 1TB + backup cloud
- API personalizzate + consulenza
- Cloud credits illimitati primo anno

## 🔒 Privacy e Sicurezza

- **Elaborazione locale** per massima privacy
- **Approvazione manuale** per ogni condivisione cloud
- **TTL automatico** - cancellazione garantita dei dati
- **Log completi** - tracciabilità totale delle operazioni
- **Control granulare** - scegli cosa, quando e per quanto

## 🤝 Supporto

- Centro assistenza online
- Community forum attiva
- Documentazione completa
- Video tutorial
- Supporto email/telefono

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

## 🙏 Riconoscimenti

- Ispirato dal progetto [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
- Icone da [Lucide](https://lucide.dev/)
- Framework da [SvelteKit](https://kit.svelte.dev/)
- Styling da [Tailwind CSS](https://tailwindcss.com/)
- Hardware da [Raspberry Pi Foundation](https://www.raspberrypi.org/)
