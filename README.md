# Arvify.io – Consent Layer software-first per il controllo AI

Arvify intercetta ogni richiesta AI con estensione + proxy MCP. Notifica il tuo telefono, richiede Touch ID/Face ID e rilascia i dati solo per il TTL impostato. Dimostri il valore subito, prima di costruire hardware dedicato.

---

## ✨ Cosa cambia

- **Software-first** – Estensione browser + proxy MCP distribuiti in poche ore, senza spedire device.
- **Consenso biometrico esistente** – Touch ID/Face ID oggi, FIDO2/WebAuthn (YubiKey Bio, token biometrici) come fattore opzionale.
- **Policy dinamiche** – TTL, scope e redaction per GitHub, Gmail, Calendar, Docs, segreti e API custom.
- **Metriche concrete** – TTR, % auto-negate, leak prevented, audit trail firmato e esportabile.
- **Roadmap onesta** – Dev kit hardware limitato (20–50 unità) solo dopo il pilot pagato e gli audit indipendenti.

---

## 🧱 Stack

| Layer                    | Descrizione                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| Estensione browser       | Intercetta agenti, plugin e API prima che raggiungano i dati     |
| Proxy MCP                | Applica policy, redige dati, gestisce TTL e audit trail          |
| App mobile               | Notifica, mostra il contesto e raccoglie il consenso biometrico  |
| FIDO2/WebAuthn opzionale | Integrazione con YubiKey Bio / token biometrici per team critici |
| Audit & secrets store    | Token rotabili, log firmati, export verso SIEM/SOC               |

---

## 📚 MCP Server Hub

Nel repository troverai `src/lib/mcp-servers.js`: una raccolta curata di server MCP (Model Context Protocol) per costruire integrazioni rapide con Arvify e sperimentare nuovi flussi.

---

## 🧪 Scenari d’uso pronti

`src/lib/scenarios.js` definisce i tre use case “killer” del pilot: consent-gated RAG (GitHub + Gmail), just-in-time PII (Calendar & Docs) e secrets broker con credenziali a TTL. Puoi usarli per demo, PoC e test con i team.

---

## 🖥️ Tech stack landing page

- **SvelteKit 5 + Svelte Runes** – Performance e DX moderne
- **Tailwind CSS 4** – Design system atomico e responsive
- **TypeScript** – Tipizzazione completa
- **Vite** – Build estremamente rapida
- **Cloudflare Pages/Workers** – Distribuzione edge globale

---

## 🚀 Avvio rapido

```bash
git clone https://github.com/tuo-org/arvify.io
cd arvify.io
npm install
npm run dev    # http://localhost:5173
```

---

## ☁️ Deploy su Cloudflare

```bash
npm run build
wrangler pages deploy   # oppure: npm run deploy
```

Configura le variabili d’ambiente (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) per l’upload automatico.

---

## 🤝 Contribuire

1. Fork & clone del repository
2. Crea la tua feature branch
3. `npm run lint` & `npm run format`
4. Invia la pull request

Contributi su sicurezza, governance AI e integrazioni MCP sono particolarmente apprezzati.

---

## 📄 Licenza

Progetto rilasciato sotto licenza **MIT**. Usa, modifica e condividi liberamente (citando la fonte).

---

## 💬 Resta in contatto

- 🌐 [arvify.io](https://arvify.io)
- 📧 ilanurs@gmail.com
- 💬 Community & supporto ufficiale

---

## Testing

⚠️ Nessun test eseguito: ambiente QA in sola lettura.

---

Arvify porta il consenso AI sul tuo telefono: software-first oggi, hardware solo quando i dati lo dimostrano.
