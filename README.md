# Arvify.io – Il bracciale che mette il controllo dell’AI al tuo polso

Arvify è il primo wearable che collega il mondo dell’intelligenza artificiale al consenso biometrico reale. Ogni richiesta AI passa dal tuo dito, trasformando il consenso in un gesto fisico, verificabile e auditabile.

---

## ✨ Perché Arvify è innovativo

- **Consenso biometrico in tempo reale** – L’AI non agisce finché tu non appoggi il dito sul sensore.
- **Secure Element + TTL automatico** – Le chiavi crittografiche sono protette e ogni dato condiviso scade in autonomia.
- **Compatibilità universale** – Funziona con qualunque provider AI grazie all’API e al supporto del Model Context Protocol.
- **Trasparenza totale** – Log completi di ogni operazione, nessuna persistenza permanente nel cloud.
- **Made in Italy** – Hardware di qualità e design elegante progettati e assemblati in Italia.

---

## 🛠️ Hardware & Software

| Hardware                     | Software                          |
| ---------------------------- | --------------------------------- |
| Sensore fingerprint          | Firmware dedicato per consenso    |
| Secure element crittografico | App mobile iOS/Android            |
| MCU ESP32‑C6 con BLE/Wi‑Fi   | Backend Bolt per gestione dati AI |
| LED RGB + vibrazione         | API MCP per integrazioni avanzate |
| Batteria LiPo 5‑7 giorni     | Dashboard web e demo scenari      |

---

## 📚 MCP Server Hub

Nel repository troverai `src/lib/mcp-servers.js`:  
una **raccolta curata di server MCP** (Model Context Protocol) con centinaia di integrazioni (traduzione, automazione, dati in tempo reale, ecc.).  
Perfetto per esplorare e collegare Arvify a nuovi scenari di utilizzo AI.

---

## 🧪 Scenari d’uso pronti

`src/lib/scenarios.js` definisce diversi scenari interattivi (Sviluppo AI, Viaggi, Analisi Email, Budget, …) che mostrano come Arvify gestisce tipologie di dati, livelli di sensibilità e stato del consenso.  
È un ottimo punto di partenza per costruire flussi personalizzati o demo da presentare a utenti e investitori.

---

## 🖥️ Tech Stack Landing Page

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

Ogni contributo che migliora sicurezza, UX o integrazioni MCP è benvenuto.

---

## 📄 Licenza

Progetto rilasciato sotto licenza **MIT**. Usa, modifica e condividi liberamente (citando la fonte).

---

## 💬 Resta in contatto

- 🌐 [arvify.io](https://arvify.io)
- 📧 info@arvify.io
- 💬 Community & supporto ufficiale

---

## Testing

⚠️ Nessun test eseguito: ambiente QA in sola lettura.

---

Scopri come Arvify trasforma l’intelligenza artificiale in un’esperienza sicura, tangibile e profondamente umana. Ready to take control?
