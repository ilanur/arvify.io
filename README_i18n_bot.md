# i18n Bot per SvelteKit (arvify.io)

Questo bot:
- Scansiona `src/**/*.svelte|js|ts` alla ricerca di chiamate `t('chiave')` ed assicura che le chiavi esistano in `src/lib/i18n/{lang}.json`.
- (Opzionale) Include un codemod conservativo che può avvolgere testi "nudi" in `{t('auto...')}` e aggiornare i JSON. Il codemod NON è eseguito dal workflow, è da usare solo localmente.
- Apre una PR automatica con le modifiche quando eseguito in CI.

Compatibilità CF Pages/Workers:
- Gli script usano API Node solo in CI/locale (GitHub Actions o in locale). Il bundle di produzione non usa `fs`/`path`.

## Script

- Estrazione chiavi: `node scripts/i18n-extract.mjs`
- Codemod (manuale): `node scripts/i18n-codemod.mjs`

## Note

- L'estrattore aggiunge chiavi mancanti trovate nei sorgenti tramite `t('...')` e le crea in tutte le lingue trovate in `src/lib/i18n/*.json`.
- Se `src/lib/i18n/` non esiste o non contiene JSON, crea i file vuoti `it.json`, `en.json`, `es.json`.
- I valori placeholder sono la stessa chiave (per l'estrattore) o il testo sorgente (per il codemod), da tradurre in seguito.