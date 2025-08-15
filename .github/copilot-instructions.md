# MCP SERVERS SHOWCASE COPILOT GUIDELINES

## PRINCIPI FONDAMENTALI

- **Un file alla volta** - Concentrati su una modifica per volta
- **Svelte 5 + Runes** - Usa `$state`, `$derived`, `$effect`. Mai `$:`
- **Codice pulito** - Priorità a manutenibilità e architettura robusta
- **MCP-focused** - Tutto ruota attorno ai server Model Context Protocol

## DOCUMENTAZIONE OBBLIGATORIA

**Workflow di lettura:**

1. `README.md` (root) - Visione d'insieme del progetto
2. `src/lib/mcp-servers.js` - Database dei server MCP
3. `/LLMs-docs/sveltekit-llms-small.txt` - Riferimenti tecnici SvelteKit
4. `/LLMs-docs/tailwind-llm.txt` - Riferimenti tecnici Tailwind CSS

**Prima di scrivere HTML/CSS:**

- Usa sistema atomico (componenti riutilizzabili e modulari)
- Applica classi Tailwind con `@apply` per ridurre verbosità
- Importa componenti da `$lib/components`
- Mantieni design coerente con il tema del progetto

## MODIFICHE COMPLESSE - PROTOCOLLO OBLIGATORIO

**File grandi (>200 righe Svelte, >300 altri):**

### FASE 1: PIANIFICAZIONE

Crea piano dettagliato con:

- Funzioni/sezioni da modificare
- Dipendenze e modifiche correlate
- Numero stimato di modifiche

**Formato piano:**

```
PIANO MODIFICA: [file]
Modifiche totali: [n]
```

### FASE 2: ESECUZIONE

- Una modifica concettuale alla volta
- Progress: "✅ [n/totale] completata"
- **ASPETTA conferma** prima di ogni modifica
- Aggiorna documentazione se necessario

## STACK TECNOLOGICO

- **SvelteKit** con Svelte 5 (runes) - Framework principale
- **Tailwind CSS 3.4** + design atomico con componenti riutilizzabili
- **Lucide Svelte** - Set di icone moderne e consistenti
- **TypeScript** - Tipizzazione statica
- **Vite** - Build tool veloce e moderno
- **Database MCP** - File JSON statico per i server MCP

## STANDARD SVELTE 5

**Runes obbligatorie:**

```svelte
<script>
	let { propName = defaultValue, ...otherProps } = $props();
	let localState = $state(initialValue);
	let computed = $derived(someComputation);
</script>
```

**Regole:**

- Import: usa i paths sveltekit come `$lib` o `$utils`
- Componenti: usa `$props`, `$state`, `$derived`, `$effect`
- Handlers: `onclick={handler}` (non `on:click`)
- Mai dichiarazioni reattive `$:`

## CSS/HTML MODERNE

**HTML:** Semantico (header, nav, main, section, article)
**CSS:**

- Usa `@apply` per ridurre verbosità
- Design system atomico basato su Tailwind CSS 3.4
- Gradient backgrounds e backdrop-blur per effetti moderni
- Animazioni fluide con transition e transform
- Mobile-first responsive design

## DATABASE

- **File JSON statico** - `src/lib/mcp-servers.js` per tutti i dati MCP
- **Struttura server:** id, name, description, category, url, badges, features
- **Categorie predefinite:** Aggregators, Art & Culture, Browser Automation, Cloud Platforms, etc.
- **Mai hardcodare** dati - sempre importare da `mcp-servers.js`

## STRUTTURA PROGETTO

```
mcp-list/
├── src/
│   ├── lib/
│   │   ├── components/       # Componenti riutilizzabili
│   │   │   ├── CategoryFilter.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── McpCard.svelte
│   │   │   ├── SearchBar.svelte
│   │   │   └── StatsCard.svelte
│   │   └── mcp-servers.js    # Database statico dei server MCP
│   ├── routes/
│   │   └── +page.svelte      # Pagina principale
│   ├── app.css               # Stili globali Tailwind
│   └── app.html              # Template HTML base
├── LLMs-docs/                # Documentazione per LLM
├── mcp-servers.json          # Backup dati (se presente)
└── package.json              # Dipendenze e script
```
