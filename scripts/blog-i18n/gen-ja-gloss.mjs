/**
 * Generate Japanese for missing dict-ja entries using EN source + link-preserving gloss pass.
 * Not MT—rule-based for remaining keys when APIs are blocked.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../..');
const dir = path.join(ROOT, 'scripts/blog-i18n');
const enStrings = JSON.parse(fs.readFileSync(path.join(dir, '_unique-strings.json'), 'utf8'));
let ja = JSON.parse(fs.readFileSync(path.join(dir, 'dict-ja.json'), 'utf8'));
for (const f of fs.readdirSync(dir).filter((x) => x.startsWith('ja-bulk-') && x.endsWith('.json'))) {
  Object.assign(ja, JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
}

const LINK_RE = /(\[[^\]]+\]\([^)]+\))/g;

const PHRASES = [
  ['Check status before launch', '????????????'],
  ['Checkout on fnhacks.org', 'fnhacks.org ????????'],
  ['Choose Lite if', 'Lite ?????'],
  ['Choose Pro if', 'Pro ?????'],
  ['Creative practice', '???????????'],
  ['Creative vs Ranked tools', 'Creative ? Ranked ???'],
  ['Private cheats', '?????????'],
  ['Practice checklist', '?????????'],
  ['When to move to private cheats', '???????????????????'],
  ['Ready for Ranked tools?', 'ranked ??????????????'],
  ['Get private fortnite cheats', 'private fortnite cheats ???'],
  ['Upgrade to Elite', 'Elite ????????'],
  ['Start checkout', '??????????'],
  ['External loader architecture', 'external loader ???????'],
  ['External vs internal cheats', 'external ? internal ???'],
  ['Why patch day matters', '??????????'],
  ['Reload loader and configs', 'loader ?????????'],
  ['Lobby verification', '?????'],
  ['Humanized tracking, not snaps', '????????????????'],
  ['Stream test', '????????'],
  ['Stream proof', 'Stream proof'],
  ['Drill', '???'],
  ['Module', '?????'],
  ['Goal', '??'],
  ['No', '???'],
  ['Yes—unlimited resets', '??—???????'],
  ['N/A', 'N/A'],
];

function glossLinks(text) {
  const parts = [];
  let last = 0;
  const re = new RegExp(LINK_RE.source, 'g');
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(glossPlain(text.slice(last, m.index)));
    const inner = m[1].match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (inner) {
      parts.push(`[${glossPlain(inner[1])}](${inner[2]})`);
    } else parts.push(m[1]);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(glossPlain(text.slice(last)));
  return parts.join('');
}

const WORDS = [
  ['secure checkout', '???????????'],
  ['operator portal', '??????????'],
  ['EAC', '??????'],
  ['Battle Royale', 'Battle Royale'],
  ['ranked play', 'ranked play'],
  ['Training', 'Training'],
  ['instances', '??????'],
  ['patch day', '????'],
  ['stream-proof', 'stream-proof'],
  ['ESP wallhack', 'ESP wallhack'],
  ['Hotkey macros', 'Hotkey macros'],
  ['Bone Priority', 'Bone Priority'],
  ['Smoothness', 'Smoothness'],
  ['Skin Changer', 'Skin Changer'],
  ['Loot Assist', 'Loot Assist'],
  ['Auto Finish', 'Auto Finish'],
  ['Auto Shield Break', 'Auto Shield Break'],
  ['radar hack', 'radar hack'],
  ['private fortnite cheats', 'private fortnite cheats'],
  ['fnhacks.org', 'fnhacks.org'],
  ['NCSOFT', 'NCSOFT'],
  ['Discord', 'Discord'],
  ['OBS', 'OBS'],
  ['HWID', 'HWID'],
  ['Lite', 'Lite'],
  ['Pro', 'Pro'],
  ['Elite', 'Elite'],
];

function glossPlain(s) {
  let t = s;
  for (const [en, ph] of PHRASES) {
    if (t === en) return ph;
  }
  for (const [en, jp] of WORDS) {
    t = t.split(en).join(jp);
  }
  // Light JP particles for common headings ending with :
  if (t.length < 80 && !t.includes('?') && !t.includes('?') && /^[A-Za-z0-9 \-/]+$/.test(t.trim())) {
    return t; // keep short labels mixed EN/JA for product terms
  }
  if (!t.includes('?') && t.length > 40) t += '?';
  return t;
}

const missing = enStrings.filter((s) => !ja[s]);
const bulk = {};
for (const s of missing) {
  bulk[s] = glossLinks(s);
}
fs.writeFileSync(path.join(dir, 'ja-bulk-gloss.json'), `${JSON.stringify(bulk, null, 2)}\n`, 'utf8');
Object.assign(ja, bulk);
fs.writeFileSync(path.join(dir, 'dict-ja.json'), `${JSON.stringify(ja, null, 2)}\n`, 'utf8');
console.log('Filled gloss', missing.length, 'total', Object.keys(ja).length);
