/**
 * Replace leftover MMO/Aion terminology with Fortnite BR copy across i18n + SEO.
 * Run: node scripts/fortnite-terminology.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const skip = new Set(['node_modules', '.git', 'dist', '.seo-baseline']);
const exts = new Set(['.ts', '.json', '.md', '.mjs']);

const REPLACEMENTS = [
  ['NCSOFT anti-cheat', 'Easy Anti-Cheat'],
  ['NCSOFT Launcher', 'Epic Games Launcher'],
  ['NCSOFT launcher', 'Epic Games launcher'],
  ['NCSOFT store', 'Epic store'],
  ['via NCSOFT', 'via Epic'],
  ['through NCSOFT', 'through Epic'],
  ['on NCSOFT', 'on Epic'],
  [' NCSOFT ', ' Epic '],
  ['PURPLE launcher', 'Epic Games Launcher'],
  ['Elyos vs Asmodian', 'squad vs squad'],
  ['Elyos-vs-Asmodian', 'Battle Royale'],
  ['Elyos / Asmodian', 'team colors'],
  ['Elyos/Asmodian', 'team'],
  ['Elyos', 'squad'],
  ['Asmodian', 'enemy'],
  ['class skill assist', 'aimbot'],
  ['Class skill assist', 'Aimbot'],
  ['Klassen-Skill-Assist', 'Aimbot'],
  ['skill assist', 'aimbot'],
  ['Skill assist', 'Aimbot'],
  ['Skill-Assist', 'Aimbot'],
  ['skill-assist', 'aimbot'],
  ['klassenbasierte Skill-Hilfe', 'Aimbot'],
  ['Skill-Hilfe', 'Aimbot'],
  ['gather ESP', 'loot ESP'],
  ['Gather ESP', 'Loot ESP'],
  ['Sammel-ESP', 'Loot-ESP'],
  ['採取 ESP', '戰利品 ESP'],
  ['採集 ESP', '战利品 ESP'],
  ['costume changer', 'skin changer'],
  ['Costume Changer', 'Skin Changer'],
  ['Kostüm-Wechsler', 'Skin-Changer'],
  ['Kostüm-Changer', 'Skin-Changer'],
  ['服裝變更器', '造型變換器'],
  ['コスチュームチェンジャー', 'スキンチェンジャー'],
  ['코스튬 체인저', '스킨 체인저'],
  ['Abyss-safe', 'Ranked-safe'],
  ['abyss-sichere', 'Ranked-sichere'],
  ['Abyss ', 'Ranked '],
  ['Abyss-', 'Ranked-'],
  ['Abyss,', 'Ranked,'],
  ['Abyss.', 'Ranked.'],
  ['Abyss/', 'Ranked/'],
  ['アビス', 'ランク'],
  ['어비스', '랭크'],
  ['深淵', '競技'],
  ['Abysse', 'Ranked'],
  ['ranked RvR', 'Ranked BR'],
  ['Ranked RvR', 'Ranked BR'],
  ['Ranked-PvP', 'Ranked BR'],
  ['open world PvP', 'Battle Royale'],
  ['Open World PvP', 'Battle Royale'],
  ['instances and flight', 'Creative and ranked'],
  ['Instanzen und Flug', 'Creative und Ranked'],
  ['arenas and flight', 'Creative and ranked'],
  ['Flight Assist', 'Rotation Assist'],
  ['flight combat', 'build fights'],
  ['Flugkämpfe', 'Build-Fights'],
  ['wing preview', 'pickaxe preview'],
  ['wings and', 'wraps and'],
  ['Auto Shield Break', 'triggerbot'],
  ['per-class', 'per-weapon'],
  ['Per-class', 'Per-weapon'],
  ['Gladiator, Ranger, Sorcerer', 'AR, SMG, shotgun'],
  ['Gladiator, Bogenschütze, Magier', 'AR, SMG, Schrotflinte'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (exts.has(path.extname(full).toLowerCase())) out.push(full);
  }
  return out;
}

const targets = walk(path.join(root, 'src', 'i18n')).filter(
  (f) => !f.includes('rebrand-aion2') && !f.includes('vocab-aion2'),
);

let changed = 0;
for (const file of targets) {
  let s = fs.readFileSync(file, 'utf8');
  let n = s;
  for (const [from, to] of REPLACEMENTS) {
    if (n.includes(from)) n = n.split(from).join(to);
  }
  if (n !== s) {
    fs.writeFileSync(file, n);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}
console.log(`Terminology pass: ${changed} files.`);
