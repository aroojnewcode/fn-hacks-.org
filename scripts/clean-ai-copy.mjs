import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['FortniteCheats Editorial', 'Fortnite Hacks'],
  ['FortniteCheats Community Forum', 'Fortnite Hacks Forum'],
  ['FortniteCheats Blog', 'Fortnite Hacks Blog'],
  ['FortniteCheats Support', 'Fortnite Hacks Support'],
  ['Join FortniteCheats on Discord', 'Join Fortnite Hacks on Discord'],
  ['FortniteCheats home', 'Fortnite Hacks home'],
  ['FortniteCheats', 'Fortnite Hacks'],
  ["TITLE_PREFIX = 'Fortnite Hacks'", "TITLE_PREFIX = 'Fortnite Hacks'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing ranked play with fortnite aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'ranked Fortnite aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and instances—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Fortnite cheats for Windows PC Battle Royale and instances. Check status before you queue after a patch.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and instances. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Fortnite cheats for Windows PC Battle Royale and instances. Check status before you queue after a patch.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and instances. Check live status before every patch-day queue.',
    'sells Fortnite cheats for Windows PC Battle Royale and instances. Check status before you queue after a patch.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and instances.',
    'sells Fortnite cheats for Windows PC Battle Royale and instances.',
  ],
  [
    'ships a modular external suite for Windows PC ranked play—not lobby cheat codes. Aimbot tracks targets, loot assist clears zones, ESP wallhack exposes hostile players, and utility tools like Radar Hack and Skin Changer round out the toolkit. This is the complete feature map across',
    'sells external Fortnite cheats for PC Ranked. Aimbot, loot assist, ESP wallhack, radar and Skin Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
