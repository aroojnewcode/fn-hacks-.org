/**
 * Compile scripts/forum-i18n/{locale}.json → src/i18n/forum/locales/{locale}.ts
 * Usage: node scripts/forum-i18n/generate-forum-locale.mjs all
 */
import fs from 'node:fs';

const ROOT = 'scripts/forum-i18n';
const OUT = 'src/i18n/forum/locales';

const EXPORT = {
  de: 'deForum',
  es: 'esForum',
  fr: 'frForum',
  'pt-br': 'ptBrForum',
  ko: 'koForum',
  ja: 'jaForum',
  'zh-tw': 'zhTwForum',
};

function compile(locale) {
  const jsonPath = `${ROOT}/${locale}.json`;
  if (!fs.existsSync(jsonPath)) {
    console.warn('skip missing', jsonPath);
    return;
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const exportName = EXPORT[locale];
  const ts = `import type { ForumPostPack } from '../types';

/** Forum discussion translations — ${locale}. */
export const ${exportName}: ForumPostPack = ${JSON.stringify(data, null, 2)};
`;
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(`${OUT}/${locale}.ts`, ts, 'utf8');
  console.log('wrote', `${OUT}/${locale}.ts`, Object.keys(data).length, 'posts');
}

const arg = process.argv[2] ?? 'all';
const locales = arg === 'all' ? Object.keys(EXPORT) : [arg];
for (const locale of locales) compile(locale);
