# Arvify.io - Landing Page

Una moderna landing page per Arvify, il primo bracciale biometrico per il controllo del consenso AI. Questo progetto presenta il dispositivo wearable con un'interfaccia utente attraente e funzionale.

## ✨ Caratteristiche

- **🎨 Design Moderno**: Landing page responsive costruita con SvelteKit 5 e Tailwind CSS
- **🔒 Privacy-First**: Sezione dedicata al controllo biometrico dell'AI
- **📱 App Mobile**: Showcase dell'app di controllo dedicata
- **💰 Pricing**: Sezione con piani di acquisto e specifiche tecniche
- **👤 Dashboard**: Area login e dashboard demo per gestione dispositivo
- **⚡ Performance**: Caricamento veloce e animazioni fluide
- **📱 Responsive**: Ottimizzato per desktop, tablet e mobile

## 🚀 Prodotto: Arvify

**Arvify** è un bracciale biometrico rivoluzionario basato su:

### Hardware

- **Sensore Fingerprint** - Riconoscimento biometrico sicuro
- **Secure Element** - Chip crittografico per firme ECDSA
- **MCU ESP32-C6** - Connettività BLE/Wi-Fi a basso consumo
- **LED RGB** - Notifiche visive dello stato
- **Vibrazione** - Feedback tattile per richieste di consenso
- **Batteria LiPo** - Autonomia 5-7 giorni, ricarica magnetica

### Software

- **Firmware dedicato** - Gestione biometrica e consenso
- **App mobile iOS/Android** - Controllo completo da smartphone
- **Backend Bolt** - Server cloud per gestione dati AI
- **API MCP** - Supporto Model Context Protocol
- **Consenso biometrico** - Approvazione fisica per ogni richiesta AI

### Vantaggi Chiave

1. **Controllo fisico** - Il tuo dito approva ogni uso dei tuoi dati
2. **Privacy garantita** - Solo tu puoi autorizzare l'AI
3. **TTL automatico** - I dati condivisi si auto-cancellano
4. **Audit completo** - Log di ogni operazione
5. **Universale** - Compatibile con qualsiasi AI provider

## 🔄 Come Funziona

1. **Richiesta AI** - Chiedi qualcosa a ChatGPT, Claude o qualsiasi AI
2. **Intercettazione** - Il backend Bolt rileva la richiesta e prepara i dati
3. **Richiesta Consenso** - Il bracciale vibra e mostra cosa vuoi condividere
4. **Consenso Biometrico** - Posizioni il dito sul sensore per approvare
5. **Risposta e Cleanup** - L'AI risponde, poi i dati vengono cancellati automaticamente

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
│       ├── DeviceHero.svelte        # Hero section bracciale
│       ├── DeviceAdvantages.svelte  # Vantaggi controllo biometrico
│       ├── TechSpecs.svelte         # Specifiche hardware bracciale
│       ├── HowItWorks.svelte        # Workflow consenso biometrico
│       ├── Pricing.svelte           # Modelli e prezzi bracciale
│       ├── DeviceLogin.svelte       # Login e dashboard
│       └── DeviceFooter.svelte      # Footer dedicato
├── routes/
│   └── +page.svelte                 # Landing page principale
├── app.css                          # Stili globali e wearable-specific
└── app.html                         # Template HTML
```

## 🎨 Sistema di Design

Il progetto utilizza un sistema di design moderno con:

- **Gradients**: Blu/emerald per tech, slate/indigo per eleganza
- **Glass effects**: Backdrop blur per modernità
- **Animazioni**: Slide-up, fade-in, bounce per interattività
- **Typography**: Gerarchia chiara con focus su leggibilità
- **Spacing**: Sistema consistente per layout armonioso

## 🏷️ Modelli di Prezzo

### Starter - €149

- Bracciale base con sensore fingerprint
- App mobile inclusa
- Connettività BLE

### Pro - €249 (Più venduto)

- Include tutto dello Starter
- Secure element integrato
- Ricarica magnetica
- Cloud credits per 6 mesi

### Enterprise - €399

- Include tutto del Pro
- Materiali premium (titanio)
- Certificazione IP68
- API personalizzate + consulenza
- Cloud credits illimitati primo anno

## 🎯 Design e Materiali

- **Form Factor**: Elegante e discreto, simile a smartwatch premium
- **Materiali**: Alluminio anodizzato (Pro) | Titanio grado medico (Enterprise)
- **Cinturino**: Sport silicone + opzione pelle premium
- **Resistenza**: IP67 standard | IP68 Enterprise
- **Colori**: Nero siderale, Argento, Oro rosa (Pro+)

## 🔒 Privacy e Sicurezza

- **Biometria on-device** - Template fingerprint mai condivisi online
- **Secure Element** - Chip crittografico ATECC608A per firme ECDSA
- **Consenso fisico** - Impossibile aggirare via software
- **TTL automatico** - Cancellazione garantita dei dati condivisi
- **Audit trail** - Log completo di ogni operazione
- **Zero persistenza** - Nessun dato permanente sui server cloud

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
