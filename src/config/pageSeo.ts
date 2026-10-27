/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Fortnite Hacks | ESP, Radar & ranked play',
    description:
      'Fortnite cheats for PC with player ESP, wallhack, Ranked radar, gather ESP, skill assist and skin changer. Built for Elyos vs Asmodian PvP, instances and flight.',
  },
  '/products/fortnite-cheats/': {
    title: 'Fortnite Hacks Products | Elite, HWID & Skin Changer',
    description:
      'Fortnite Elite cheats, HWID spoofer, UGC recovery and Skin Changer for Ranked RvR, arenas, instances and flight on PC.',
  },
  '/products/fortnite-cheats/elite/': {
    title: 'Fortnite Elite Cheats | ESP, Skill Assist & Loot Assist',
    description:
      'Fortnite Elite with ESP wallhack, class skill assist, loot assist, Auto Finish, Skin Changer and priority patch updates.',
  },
  '/products/fortnite-cheats/utilities/': {
    title: 'Fortnite Utilities | HWID Spoofer, UGC & Skin Changer',
    description:
      'HWID Spoofer after hardware bans, UGC for Epic and EAC appeals, and local Skin Changer / Unlock All.',
  },
  '/blog/': {
    title: 'Fortnite Hacks Guides | ESP, Ranked & Anti-Cheat',
    description:
      'Guides on Fortnite ESP wallhack, Ranked presets, Lite vs Pro, class skill assist and Easy Anti-Cheat patch checks.',
  },
  '/forum/': {
    title: 'Fortnite Hacks Forum',
    description:
      'Talk Fortnite cheat setup, ESP and weapon configs, Ranked status and product questions.',
  },
  '/faq/': {
    title: 'FAQ | Fortnite ESP, Skill Assist & Setup',
    description:
      'Answers on Fortnite cheat tiers, ESP wallhack, Ranked radar, skill assist, HWID spoofer, Skin Changer and loader setup.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Fortnite Hacks',
    description:
      'Purchase terms, license use and refund policy for Fortnite cheat products on fnhacks.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Fortnite Hacks',
    description:
      'How fnhacks.org uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Fortnite Hacks',
    description:
      'Fortnite Hacks sells PC Fortnite cheat tiers, guides and utilities at fnhacks.org.',
  },
  '/support/': {
    title: 'Support | Fortnite Hacks',
    description:
      'Help with Fortnite cheat loader setup, configs, HWID spoofing and checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
