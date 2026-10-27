/**
 * Aion 2 Cheats ? Fortnite Hacks rebrand (inverse of rebrand-aion2.mjs).
 * Run from project root: node scripts/rebrand-fortnite-from-aion2.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve('.');

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.svg',
  '.html',
  '.webmanifest',
  '.css',
  '.toml',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline', 'starwind']);
const SKIP_FILES = new Set([
  'rebrand-fortnite.mjs',
  'rebrand-aion2.mjs',
  'rebrand-fortnite-from-aion2.mjs',
  'vocab-fortnite.mjs',
  'vocab-aion2.mjs',
  'fetch-fortnite-gameplay.mjs',
]);

// Load REPLACEMENTS and IMAGE_RENAMES from rebrand-aion2.mjs source via eval of the arrays
const aion2Source = fs.readFileSync(path.join(root, 'scripts', 'rebrand-aion2.mjs'), 'utf8');
const replBlock = aion2Source.match(/const REPLACEMENTS = \[([\s\S]*?)\];\s*\nconst IMAGE_RENAMES/);
const imgBlock = aion2Source.match(/const IMAGE_RENAMES = \[([\s\S]*?)\];\s*\nfunction walk/);
if (!replBlock || !imgBlock) throw new Error('Could not parse rebrand-aion2.mjs');

const forwardRepl = eval(`[${replBlock[1]}]`);
const forwardImg = eval(`[${imgBlock[1]}]`);

const REPLACEMENTS = forwardRepl
  .map(([from, to]) => [to, from])
  .filter(([from, to]) => from !== to)
  .sort((a, b) => b[0].length - a[0].length);

const IMAGE_RENAMES = forwardImg.map(([from, to]) => [to, from]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function applyText(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

function renameImages() {
  const imageRoots = [
    path.join(root, 'public', 'images', 'gameplay'),
    path.join(root, 'public', 'images', 'blog'),
    path.join(root, 'public', 'images'),
  ];
  for (const dir of imageRoots) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      for (const [from, to] of IMAGE_RENAMES) {
        if (name.startsWith(from)) {
          const dest = name.replace(from, to);
          const fromPath = path.join(dir, name);
          const toPath = path.join(dir, dest);
          if (fromPath !== toPath && !fs.existsSync(toPath)) {
            fs.renameSync(fromPath, toPath);
            console.log('rename image', name, '?', dest);
          }
          break;
        }
      }
      if (name.startsWith('hero-aion-2-dark')) {
        const dest = name.replace('hero-aion-2-dark', 'hero-fortnite-dark');
        const fromPath = path.join(dir, name);
        const toPath = path.join(dir, dest);
        if (fromPath !== toPath && !fs.existsSync(toPath)) {
          fs.renameSync(fromPath, toPath);
          console.log('rename image', name, '?', dest);
        }
      }
    }
  }
}

function renameProductDirs() {
  const pairs = [
    [path.join(root, 'src', 'pages', 'products', 'aion-2-cheats'), path.join(root, 'src', 'pages', 'products', 'fortnite-cheats')],
    [
      path.join(root, 'src', 'pages', '[locale]', 'products', 'aion-2-cheats'),
      path.join(root, 'src', 'pages', '[locale]', 'products', 'fortnite-cheats'),
    ],
  ];
  for (const [from, to] of pairs) {
    if (fs.existsSync(from) && !fs.existsSync(to)) {
      fs.renameSync(from, to);
      console.log('renamed', path.relative(root, from), '?', path.relative(root, to));
    }
  }
}

function renameBlogOverlays() {
  const overlayRoot = path.join(root, 'scripts', 'blog-i18n', 'overlays');
  if (!fs.existsSync(overlayRoot)) return;
  for (const locale of fs.readdirSync(overlayRoot)) {
    const dir = path.join(overlayRoot, locale);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const name of fs.readdirSync(dir)) {
      let dest = name;
      for (const [from, to] of IMAGE_RENAMES) {
        if (name.startsWith(from)) {
          dest = name.replace(from, to);
          break;
        }
      }
      if (dest === name && name.includes('anticheat-bypass-aion-2')) {
        dest = name.replace('anticheat-bypass-aion-2', 'eac-bypass-fortnite');
      }
      if (dest === name && name.includes('anticheat-patch-day')) {
        dest = name.replace('anticheat-patch-day', 'eac-patch-day');
      }
      if (dest !== name) {
        const fromPath = path.join(dir, name);
        const toPath = path.join(dir, dest);
        if (!fs.existsSync(toPath)) {
          fs.renameSync(fromPath, toPath);
          console.log('rename overlay', name, '?', dest);
        }
      }
    }
  }
}

renameProductDirs();
renameImages();
renameBlogOverlays();

const files = walk(root).filter((f) => {
  if (SKIP_FILES.has(path.basename(f))) return false;
  return TEXT_EXTS.has(path.extname(f).toLowerCase()) || path.basename(f) === '_redirects';
});

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done. Updated ${changed} text files.`);
