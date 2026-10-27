/**
 * Import Fortnite screenshots into public/images/gameplay and blog heroes.
 * Every blog cover uses a different source file (no repeated art across posts).
 *
 * Run: node scripts/import-fnhacks-screenshots.mjs && npm run optimize:images
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsBase =
  'C:\\Users\\DELL 7280\\.cursor\\projects\\c-Users-DELL-7280-Documents-fn-hack\\assets';

const gameplayDir = path.join(root, 'public', 'images', 'gameplay');
const blogDir = path.join(root, 'public', 'images', 'blog');
fs.mkdirSync(gameplayDir, { recursive: true });
fs.mkdirSync(blogDir, { recursive: true });

const A = {
  lobbyNew:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn8-4feb28a5-a012-45ef-b989-b044db5aa0c2.webp',
  boardwalkNew:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn9-f6d063ed-03d7-4bea-8850-0dd1212c019c.webp',
  beachNew:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn5-f0f56426-d40a-4c7a-ae7b-d6c50562cb27.webp',
  punkWall:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn_1-48b1c94e-9b8d-4f0d-9e24-e25a87e57354.webp',
  sniperCoastal:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_Sniper_Scope_Over_Coastal_Battlefield-9528292d-2210-4aec-9592-2630f44f54f8.jpg',
  thermalScope:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_Thermal_Scope_Over_Blue_Ruins-5a37e361-3d0e-47df-b37f-bff2a7a4c095.jpg',
  patioAim:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_Blue-Hour_Patio_Aim_Assist-4f7e19da-3a38-4e1e-aa14-404b215d8b37.jpg',
  combatMulti:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn7-aa5bbf7e-20e8-49f1-bbab-84a559593d5d.webp',
  roofEsp:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn6-b1a1e911-b249-4899-9e34-d770442bf20f.webp',
  lootEsp:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn9-b8be96a5-3a24-4e7c-82b1-1ddd717a0606.webp',
  boardwalkOld:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn3-0d441872-dc06-40d7-920a-81aa1880a29d.webp',
  wallEnemy:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn4-e336c52d-ba55-479f-8f34-9bc46da70b10.webp',
  nightAim:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn10_remove-d0388953-e62b-4d83-ba04-9838cebaf0b5.webp',
  thermalWebp:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn2-bcfc1ec7-7236-4927-ba9e-5885bb572aec.webp',
  scopeBot:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn_1-1fe4e07f-8a30-4520-8be5-a60b457a8d9a.webp',
  beachOld:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn5-2aeb6d61-a620-4720-9806-1736859337fd.webp',
  lobbyOld:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn8-2c2b7e24-94a6-4470-b71b-75d159780bca.webp',
  punkAlt:
    'c__Users_DELL_7280_AppData_Roaming_Cursor_User_workspaceStorage_f40ede2f24164b28f44d730d12e1081a_images_fn_1-48b1c94e-9b8d-4f0d-9e24-e25a87e57354-43fd948f-1ab0-4c5b-943e-3a83282b1ed5.webp',
};

/** @type {{ asset: string; file: string }[]} */
const GAMEPLAY = [
  { asset: A.lobbyNew, file: 'fortnite-esp-wallhack.png' },
  { asset: A.boardwalkNew, file: 'fortnite-build-fight-esp.png' },
  { asset: A.beachNew, file: 'fortnite-radar-hack.png' },
  { asset: A.patioAim, file: 'fortnite-auto-aim.png' },
  { asset: A.punkWall, file: 'fortnite-arena-wallhack.png' },
  { asset: A.sniperCoastal, file: 'fortnite-aimbot-lock.png' },
  { asset: A.thermalScope, file: 'fortnite-thermal-esp.png' },
  { asset: A.combatMulti, file: 'fortnite-aimbot-combat.png' },
  { asset: A.roofEsp, file: 'fortnite-player-esp.png' },
  { asset: A.lootEsp, file: 'fortnite-loot-radar.png' },
];

/** One unique source per blog cover (18 posts). */
const BLOG = [
  { asset: A.thermalWebp, file: 'fortnite-cheat-codes-guide.png' },
  { asset: A.roofEsp, file: 'fortnite-console-cheats-tips.png' },
  { asset: A.boardwalkOld, file: 'how-to-use-fortnite-cheat-codes.png' },
  { asset: A.punkWall, file: 'fortnite-cheats-features-guide.png' },
  { asset: A.punkAlt, file: 'fortnite-console-commands-cheats.png' },
  { asset: A.nightAim, file: 'fortnite-lite-vs-pro.png' },
  { asset: A.beachOld, file: 'fortnite-elite-tier-guide.png' },
  { asset: A.sniperCoastal, file: 'fortnite-aimbot-ranked-guide.png' },
  { asset: A.lobbyNew, file: 'fortnite-esp-wallhack-setup.png' },
  { asset: A.beachNew, file: 'fortnite-radar-hack-guide.png' },
  { asset: A.lootEsp, file: 'fortnite-skin-changer-guide.png' },
  { asset: A.scopeBot, file: 'eac-patch-day-checklist.png' },
  { asset: A.wallEnemy, file: 'fortnite-hwid-spoofer-after-ban.png' },
  { asset: A.lobbyOld, file: 'how-to-buy-fortnite-cheats-2026.png' },
  { asset: A.boardwalkNew, file: 'fortnite-aimbot-combat-guide.png' },
  { asset: A.patioAim, file: 'eac-bypass-fortnite-guide.png' },
  { asset: A.thermalScope, file: 'fortnite-external-cheat-guide.png' },
  { asset: A.combatMulti, file: 'fortnite-stream-proof-setup.png' },
];

async function writePng(input, output) {
  const buf = fs.readFileSync(input);
  await sharp(buf).png({ compressionLevel: 9 }).toFile(output);
  console.log('Wrote', path.relative(root, output));
}

for (const { asset, file } of GAMEPLAY) {
  const input = path.join(assetsBase, asset);
  if (!fs.existsSync(input)) {
    console.error('Missing asset:', input);
    process.exitCode = 1;
    continue;
  }
  await writePng(input, path.join(gameplayDir, file));
}

const blogSources = new Set();
for (const { asset, file } of BLOG) {
  if (blogSources.has(asset)) {
    console.error('Blog source reused:', asset);
    process.exitCode = 1;
    continue;
  }
  blogSources.add(asset);
  const input = path.join(assetsBase, asset);
  if (!fs.existsSync(input)) {
    console.error('Missing asset:', input);
    process.exitCode = 1;
    continue;
  }
  await writePng(input, path.join(blogDir, file));
}

console.log(`Imported ${GAMEPLAY.length} gameplay + ${BLOG.length} unique blog covers.`);
