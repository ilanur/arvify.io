# MCP Servers Showcase

Una moderna interfaccia web per esplorare e scoprire server Model Context Protocol (MCP). Questo progetto presenta una collezione curata di server MCP con un'interfaccia utente bella e funzionale.

## ✨ Caratteristiche

- **🎨 Design Moderno**: Interfaccia pulita e responsive costruita con SvelteKit 5 e Tailwind CSS
- **🔍 Ricerca Avanzata**: Cerca server per nome, descrizione o funzionalità
- **🏷️ Filtri per Categoria**: Filtra per categorie specifiche (Database, Cloud, AI, ecc.)
- **📊 Statistiche**: Panoramica completa dei server disponibili
- **⚡ Performance**: Caricamento veloce e animazioni fluide
- **📱 Responsive**: Ottimizzato per desktop, tablet e mobile

## 🚀 Tecnologie Utilizzate

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

# Anteprima build
npm run preview

# Linting e formattazione
npm run lint
npm run format

# Type checking
npm run check
```

## 📁 Struttura del Progetto

```
src/
├── lib/
│   └── components/
│       ├── Hero.svelte           # Sezione hero
│       ├── McpCard.svelte        # Card per server MCP
│       ├── SearchBar.svelte      # Barra di ricerca
│       ├── CategoryFilter.svelte # Filtri categoria
│       └── StatsCard.svelte      # Card statistiche
├── routes/
│   └── +page.svelte             # Pagina principale
├── app.css                      # Stili globali
└── app.html                     # Template HTML
```

## 🎨 Sistema di Design

Il progetto utilizza un sistema di design atomico con:

- **Colori**: Palette di colori consistente con variazioni primary/gray
- **Componenti**: Card, badge, bottoni e form riutilizzabili
- **Animazioni**: Transizioni fluide e micro-interazioni
- **Typography**: Gerarchia tipografica chiara
- **Spacing**: Sistema di spaziatura consistente

## 📊 Dati dei Server

I dati dei server MCP sono memorizzati in `mcp-servers.json` e includono:

```json
{
	"id": "server-id",
	"name": "Organization/Repository",
	"description": "Descrizione del server",
	"category": "🔗 Aggregators",
	"url": "https://github.com/...",
	"badges": ["📇", "☁️", "🏠"],
	"features": ["Feature 1", "Feature 2"]
}
```

## 🤝 Contribuire

1. Fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/amazing-feature`)
3. Commit delle modifiche (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

## 🙏 Riconoscimenti

- Dati originali da [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
- Icone da [Lucide](https://lucide.dev/)
- Framework da [SvelteKit](https://kit.svelte.dev/)
- Styling da [Tailwind CSS](https://tailwindcss.com/)
