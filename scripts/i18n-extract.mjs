// Estrae le chiavi usate con t('...') e aggiorna i JSON in src/lib/i18n
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globby } from 'globby';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const LOCALES_DIR = path.join(SRC, 'lib', 'i18n');

// Utility
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

const getLocales = async () => {
  await ensureDir(LOCALES_DIR);
  const files = await globby('*.json', { cwd: LOCALES_DIR });
  if (files.length === 0) {
    // default set in case missing
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

const collectKeysFromSource = async () => {
  const patterns = [
    'src/**/*.svelte',
    'src/**/*.js',
    'src/**/*.ts',
    '!src/lib/i18n/**'
  ];
  const files = await globby(patterns, { gitignore: true });
  const keySet = new Set();
  const re = /(?:\b|[^A-Za-z0-9_])t\s*\(\s*(['"`])([^'"`]+)\1/gm;

  for (const f of files) {
    const code = await fs.readFile(path.join(ROOT, f), 'utf8');
    let m;
    while ((m = re.exec(code))) {
      const key = m[2].trim();
      if (key) keySet.add(key);
    }
  }
  return keySet;
};

const main = async () => {
  const locales = await getLocales();
  const maps = await loadLocaleMaps(locales);
  const keys = await collectKeysFromSource();

  for (const key of keys) {
    for (const lang of locales) {
      const map = maps[lang];
      // fallback value: use key itself as placeholder
      setNested(map, key, key);
    }
  }

  // Sort and write
  for (const lang of locales) {
    const p = path.join(LOCALES_DIR, `${lang}.json`);
    const sorted = sortObject(maps[lang]);
    await writeJson(p, sorted);
  }

  console.log(
    `i18n-extract: ensured ${keys.size} keys across locales [${locales.join(
      ', '
    )}] in ${path.relative(ROOT, LOCALES_DIR)}`
  );
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});