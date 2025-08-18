# Arvify App Components

Sistema modulare di componenti per l'interfaccia dell'app Arvify, progettato per essere riutilizzabile in altri progetti.

## Struttura

```
arvify-app/
├── AppInterface.svelte      # Componente principale orchestratore
├── AppHeader.svelte         # Header con logo e controlli utente
├── AppRequest.svelte        # Visualizzazione richiesta AI
├── AppStatus.svelte         # Indicatore stato principale
├── AppSettings.svelte       # Pannello impostazioni device
├── AppDataOverview.svelte   # Panoramica dati richiesti
├── AppSystemStatus.svelte   # Griglia stato sistema
├── index.js                 # Export centralizzato
└── README.md               # Questo file
```

## Utilizzo Base

```svelte
<script>
	import { AppInterface } from '$lib/components/arvify-app';
</script>

<AppInterface scenario="development" onUserInteraction={() => console.log('User interaction')} />
```

## Utilizzo Modulare

Puoi usare i singoli componenti per costruire interfacce personalizzate:

```svelte
<script>
	import { AppHeader, AppRequest, AppStatus } from '$lib/components/arvify-app';
</script>

<div class="app-container">
	<AppHeader showDetails={false} userName="Mario" />
	<AppRequest requestText="La mia richiesta personalizzata" />
	<AppStatus status="processing" ttlSeconds={60} />
</div>
```

## Props Principali

### AppInterface (Componente Principale)

- `scenario`: Scenario predefinito ('development', 'travel', 'email', 'finance')
- `requestText`: Testo della richiesta (override scenario)
- `theme`: Tema colori (override scenario)
- `processingStatus`: Stato corrente ('waiting', 'processing', 'completed', 'denied')
- `backendType`: Backend AI ('openai', 'anthropic', 'google', 'bolt', 'local')
- `dataTypes`: Array dati richiesti (override scenario)
- `userAvatar`, `userInitials`, `userName`: Configurazione utente
- `onUserInteraction`: Callback per interazioni utente

### Componenti Individuali

Ogni componente ha props specifiche per personalizzazione completa. Controlla il codice sorgente per dettagli completi.

## Personalizzazione

Tutti i componenti sono progettati per essere:

- **Configurabili**: Props per ogni aspetto visivo e funzionale
- **Tematizzabili**: Classi CSS personalizzabili
- **Riutilizzabili**: Nessuna dipendenza specifica dal progetto
- **Modulari**: Usabili singolarmente o in combinazione

## Esempi di Scenario

Il sistema include 4 scenari predefiniti con dati di esempio:

- **development**: Workflow sviluppo AI
- **travel**: Gestione viaggi automatica
- **email**: Analisi email intelligente
- **finance**: Budget e finanze personali

Ogni scenario include configurazione completa di:

- Tema colori
- Testo richiesta
- Dati necessari
- Backend preferito
- Stato iniziale
