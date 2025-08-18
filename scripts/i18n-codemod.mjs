// Codemod conservativo: avvolge testi nudi in {t('auto...')} e inietta import t.
// Aggiorna anche i JSON in src/lib/i18n con il testo di base come valore placeholder.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globby } from 'globby';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const LOCALES_DIR = path.join(SRC, 'lib', 'i18n');

// Helpers JSON
const ensureDir = async (dir) => fs.mkdir(dir, { recursive: true });
const readJson = async (p) => JSON.parse(await fs.readFile(p, 'utf8'));
const writeJson = async (p, obj) =>
  fs.writeFile(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');

const sortObject = (obj) => {
  if (Array.isArray(obj)) return obj.map(sortObject);
  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .sort()
      .reduce((acc, k) => {
        acc[k] = sortObject(obj[k]);
        return acc;
      }, {});
  }
  return obj;
};

const setNested = (obj, dottedKey, value) => {
  const parts = dottedKey.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (i === parts.length - 1) {
      if (cur[p] === undefined) cur[p] = value;
    } else {
      if (!cur[p] || typeof cur[p] !== 'object') cur[p] = {};
      cur = cur[p];
    }
  }
};

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);

const getLocales = async () => {
  await ensureDir(LOCALES_DIR);
  const files = await globby('*.json', { cwd: LOCALES_DIR });
  if (files.length === 0) {
    await writeJson(path.join(LOCALES_DIR, 'it.json'), {});
    await writeJson(path.join(LOCALES_DIR, 'en.json'), {});
    await writeJson(path.join(LOCALES_DIR, 'es.json'), {});
    return ['it', 'en', 'es'];
  }
  return files.map((f) => path.basename(f, '.json'));
};

const loadLocaleMaps = async (locales) => {
  const maps = {};
  for (const l of locales) {
    const p = path.join(LOCALES_DIR, `${l}.json`);
    try {
      maps[l] = await readJson(p);
    } catch {
      maps[l] = {};
    }
  }
  return maps;
};

// Inject "import { t } from '$lib/utils/translations.js';" in a Svelte file
const ensureTImport = (code) => {
  const importLine = `import { t } from '$lib/utils/translations.js';`;
  if (code.includes(importLine)) return code;
  const reAnyImportFromUtil = /import\s+{[^}]*}\s+from\s+['"]\\$lib\\/utils\\/translations\\.js['"]\s*;?/;
  if (reAnyImportFromUtil.test(code)) {
    // augment existing import
    return code.replace(reAnyImportFromUtil, (m) => {
      // insert t if missing
      if (/\bt\b/.test(m)) return m;
      return m.replace(/{([^}]*)}/, (mm, names) => `{ ${names.trim().replace(/^\s*$/, '')}${names.trim() ? ', ' : ''}t }`);
    });
  }
  // Insert inside first <script>...</script> or create one
  const scriptOpen = code.indexOf('<script');
  if (scriptOpen !== -1) {
    const scriptClose = code.indexOf('</script>');
    if (scriptClose !== -1) {
      const insertPos = scriptClose;
      return code.slice(0, insertPos) + `\n${importLine}\n` + code.slice(insertPos);
    }
  }
  // No script tag: create at top
  return `<script>\n${importLine}\n<\/script>\n\n` + code;
};

// Replace bare text between tags with {t('auto...')} conservatively
const replaceBareText = (code, fileBaseKey, addKeyCb) => {
  // Match text between > and < that doesn't contain { } or < >
  const re = />\s*([^<>{}]*[A-Za-zÀ-ÖØ-öø-ÿ][^<>{}]*)\s*</g;
  let changed = false;
  const replaced = code.replace(re, (full, text) => {
    const trimmed = text.trim();
    // skip very short or all-non-word
    if (!trimmed || trimmed.length < 3) return full;

    // skip if it already looks like a translation {t(...)} around
    if (/\{?\s*t\s*\(/.test(full)) return full;

    const slug = slugify(trimmed.split(/\s+/).slice(0, 7).join(' ')) || 'text';
    const key = `auto.${fileBaseKey}.${slug}`;
    addKeyCb(key, trimmed);
    changed = true;
    return `>{t('${key}')}<`;
  });
  return { code: replaced, changed };
};

const main = async () => {
  const svelteFiles = await globby(
    [
      'src/**/*.svelte',
      '!src/lib/components/TranslationProvider.svelte',
      '!src/lib/components/LanguageSwitcher.svelte'
    ],
    { gitignore: true }
  );

  const locales = await getLocales();
  const maps = await loadLocaleMaps(locales);

  const additions = new Map(); // key -> default text

  for (const f of svelteFiles) {
    const abs = path.join(ROOT, f);
    let code = await fs.readFile(abs, 'utf8');

    // Compute base key from file path
    const rel = path.relative(SRC, abs).replace(/\\/g, '/');
    const fileBaseKey = slugify(rel.replace(/\.[^/.]+$/, '').replace(/\//g, '.'));

    const addKeyCb = (key, text) => {
      if (!additions.has(key)) additions.set(key, text);
    };

    const { code: replaced, changed } = replaceBareText(code, fileBaseKey, addKeyCb);
    if (!changed) continue;

    const withImport = ensureTImport(replaced);

    if (withImport !== code) {
      await fs.writeFile(abs, withImport, 'utf8');
      console.log(`codemod: updated ${f}`);
    }
  }

  if (additions.size > 0) {
    for (const [key, text] of additions) {
      for (const lang of locales) {
        const value = text; // placeholder: copy source text
        setNested(maps[lang], key, value);
      }
    }
    for (const lang of locales) {
      const p = path.join(LOCALES_DIR, `${lang}.json`);
      await writeJson(p, sortObject(maps[lang]));
    }
    console.log(`codemod: added ${additions.size} keys to locales in ${path.relative(ROOT, LOCALES_DIR)}`);
  } else {
    console.log('codemod: no bare text found.');
  }
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});