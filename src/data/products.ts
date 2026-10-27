import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['fortnite-esp-wallhack-setup', 'fortnite-lite-vs-pro', 'fortnite-radar-hack-guide', 'eac-patch-day-checklist'],
  pro: [
    'fortnite-aimbot-ranked-guide',
    'fortnite-aimbot-combat-guide',
    'fortnite-lite-vs-pro',
    'fortnite-stream-proof-setup',
  ],
  elite: [
    'fortnite-elite-tier-guide',
    'fortnite-cheats-features-guide',
    'fortnite-esp-wallhack-setup',
    'eac-patch-day-checklist',
    'how-to-buy-fortnite-cheats-2026',
  ],
  'hwid-spoofer': [
    'fortnite-hwid-spoofer-after-ban',
    'eac-bypass-fortnite-guide',
    'eac-patch-day-checklist',
    'fortnite-external-cheat-guide',
  ],
  ugc: [
    'eac-bypass-fortnite-guide',
    'fortnite-hwid-spoofer-after-ban',
    'how-to-buy-fortnite-cheats-2026',
  ],
  'unlock-all': [
    'fortnite-skin-changer-guide',
    'fortnite-cheats-features-guide',
    'fortnite-stream-proof-setup',
  ],
};

const productBase = '/products/fortnite-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on fnhacks.org and Discord #status before purchase—especially after an Fortnite or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite fortnite cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Epic platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a safe zone, load presets, then enter Ranked or instances.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Fortnite and EAC receive frequent updates. Confirm module availability on the live status panel at fnhacks.org before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Fortnite can violate Epic Terms of Service and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const fortniteSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqEpic', text: 'Current Fortnite client via the official launcher with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Fortnite published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/fortnite-esp-wallhack.png`,
    alt: 'Fortnite ESP wallhack showing player boxes, snaplines and distance labels in the pre-match lobby',
    caption: 'Player ESP',
    captionDesc: 'Boxes, tracers and distance readouts on every target.',
  },
  gpScripts: {
    src: `${gameplay}/fortnite-aimbot-combat.png`,
    alt: 'Fortnite combat ESP with skeleton overlays and threat arcs around multiple enemies in the open',
    caption: 'Combat ESP',
    captionDesc: 'Skeleton ESP and threat indicators during squad fights.',
  },
  gpZoomHack: {
    src: `${gameplay}/fortnite-radar-hack.png`,
    alt: 'Fortnite beach zone gameplay with skeleton ESP and bot distance tags on nearby players',
    caption: 'Skeleton ESP',
    captionDesc: 'Bone ESP and bot tags on a coastal drop.',
  },
  gpSkinChanger: {
    src: `${gameplay}/fortnite-loot-radar.png`,
    alt: 'Fortnite loot ESP listing weapons, shields and ammo through walls near retail POIs',
    caption: 'Loot ESP',
    captionDesc: 'Weapon and consumable tags with meter distances.',
  },
  gpAutoKill: {
    src: `${gameplay}/fortnite-auto-aim.png`,
    alt: 'Fortnite night aim assist view with scoped target box and weapon readout',
    caption: 'Aim assist',
    captionDesc: 'Scoped lock with distance and loadout tags.',
  },
  gpFarmBot: {
    src: `${gameplay}/fortnite-loot-radar.png`,
    alt: 'Fortnite loot ESP listing weapons, shields and ammo through walls near retail POIs',
    caption: 'Loot ESP',
    captionDesc: 'Weapon and consumable tags with meter distances.',
  },
  gpHeroEsp: {
    src: `${gameplay}/fortnite-player-esp.png`,
    alt: 'Fortnite roof fight with skeleton wallhack highlighting an enemy through metal cover',
    caption: 'Through-cover ESP',
    captionDesc: 'Track enemies on height and metal roofs.',
  },
  gpThermal: {
    src: `${gameplay}/fortnite-thermal-esp.png`,
    alt: 'Fortnite sniper scope with thermal-style skeleton ESP on distant players',
    caption: 'Thermal scope',
    captionDesc: 'Long-range skeleton ESP inside the scope.',
  },
  gpBuildFight: {
    src: `${gameplay}/fortnite-build-fight-esp.png`,
    alt: 'Fortnite boardwalk fight with snaplines, skeleton ESP and shotgun tags on close targets',
    caption: 'Close-range ESP',
    captionDesc: 'Snaplines and weapon info in build fights.',
  },
  gpArena: {
    src: `${gameplay}/fortnite-arena-wallhack.png`,
    alt: 'Fortnite wallhack showing enemy markers through a brick wall with distance tags',
    caption: 'Enemy markers',
    captionDesc: 'Player tags and distance through structures.',
  },
  gpSpawn: {
    src: `${gameplay}/fortnite-aimbot-combat.png`,
    alt: 'Fortnite combat ESP with skeleton overlays and threat arcs around multiple enemies in the open',
    caption: 'Squad awareness',
    captionDesc: 'Multiple targets tracked at once.',
  },
  gpLongRange: {
    src: `${gameplay}/fortnite-aimbot-lock.png`,
    alt: 'Fortnite scoped aim lock on a bot with hitbox overlay and range callout',
    caption: 'Scoped lock',
    captionDesc: 'Precision box ESP through the scope.',
  },
  gpChams: {
    src: `${gameplay}/fortnite-thermal-esp.png`,
    alt: 'Fortnite sniper scope with thermal-style skeleton ESP on distant players',
    caption: 'Thermal scope',
    captionDesc: 'Long-range skeleton ESP inside the scope.',
  },
  gpSquad: {
    src: `${gameplay}/fortnite-auto-aim.png`,
    alt: 'Fortnite night aim assist view with scoped target box and weapon readout',
    caption: 'Aim assist',
    captionDesc: 'Scoped lock with distance and loadout tags.',
  },
  gpAimLock: {
    src: `${gameplay}/fortnite-aimbot-lock.png`,
    alt: 'Fortnite scoped aim lock on a bot with hitbox overlay and range callout',
    caption: 'Aim lock',
    captionDesc: 'Hitbox overlay with live range readout.',
  },
  gpCombat: {
    src: `${gameplay}/fortnite-arena-wallhack.png`,
    alt: 'Fortnite wallhack showing enemy markers through a brick wall with distance tags',
    caption: 'Ranked ready',
    captionDesc: 'Structure ESP for ranked pushes.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'fortnite-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Fortnite Lite is built for players who want map awareness first. In ranked play, knowing enemy positions, drop locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without skill automation.',
    },
    { type: 'h2', text: 'Abyss-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, radar hack and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Fortnite Pro is the sweet spot for Ranked grinders. Aimbot, Smooth Aim and Sticky Aim help you win squad fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Skill Assist, Bone Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with skill assist that stays human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Fortnite Elite is the private build for players who want everything—Loot Assist, Auto Finish, Auto Shield Break, Skin Changer, full ESP wallhack and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first Ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, chest and reboot-van locator, loot spawn timers, radar hack, and stream-safe overlay hiding. Config presets for Ranked, Arena and instances ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Skill Assist, Smooth Aim, Sticky Aim with Prediction, Bone Priority and hotkey macros for heals and mobility. Smoothness sliders tunes cast timing so skill assist stays natural in Ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at fnhacks.org—enough firepower for high-rank fights without Elite slot limits. Pair with our skill-assist guide in the blog before your first Ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Loot Assist, Flight Assist AI, Auto Finish, Auto Shield Break, Skin Changer and full ESP wallhack with stealth alerts. Use safe-zone testing before Ranked—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Epic accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/fortnite-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before Ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Epic account restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for Epic review. Pair with [HWID Spoofer](/products/fortnite-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players nearby see your actual inventory, not preview outfit skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpLongRange', 'gpSquad'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Drop & loot locator',
      'Zone awareness',
      'Health & shield tracking',
      'Mini-radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Radar hack',
      'instances preset config',
      'ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Fortnite Lite: ESP and radar',
      paragraphs: [
        'Lite is for player ESP, drop markers, loot timers and radar. No skill assist. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in Ranked, arenas and instances without combat automation. Overlays are updated after Fortnite patches.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpAimLock', 'gpCombat'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Bone Priority',
      'Hotkey macros (heals/shields)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-weapon skill-assist profiles',
      'Third-party alert integration',
      'Abyss-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Fortnite Pro: skill assist plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for Ranked, arenas and instances. Target priority (torso/chest) and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpThermal', 'gpBuildFight'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Loot Assist',
      'Flight Assist AI',
      'Drop respawn timer',
      'Auto loadout manager',
      'Auto Finish',
      'Auto Shield Break',
      'Full ESP wallhack suite',
      'Third-party alert system',
      'Visibility detector',
      'Skin Changer (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Fortnite Elite: full cheat + extras',
      paragraphs: [
        'Elite includes Lite and Pro modules, plus loot assist, Auto Finish, Auto Shield Break, Skin Changer, full ESP wallhack and faster patch priority.',
        'Slots are limited. Discord support helps you set safer profiles before Ranked. Check the status banner on fnhacks.org before you buy.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpSpawn', 'gpArena', 'gpChams'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Fortnite.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Fortnite after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for Fortnite PC bans',
      paragraphs: [
        'Use the HWID Spoofer when Easy Anti-Cheat flags your PC hardware but the Epic account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only EAC bans. After spoofing, use a safer cheat profile before Ranked.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on fnhacks.org or at checkout on fnhacks.org.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for Epic restrictions and EAC bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpChams', 'gpCombat'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players nearby see your real inventory—not preview outfit skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Epic locker or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: fortniteSystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & wrap preview',
      'Wrap & pickaxe customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Drop & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin Changer / Unlock All',
      paragraphs: [
        'Unlock All lets you preview outfits, appearances and wings on your Fortnite client. It does not change your Epic locker or store purchases.',
        'Only you see the preview outfit skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Fortnite Lite' : cheat.name === 'Pro' ? 'Fortnite Pro' : 'Fortnite Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimLock', 'gpThermal', 'gpArena');

/** Homepage hero — one slide per gameplay file (10 unique PNGs). */
export const heroSlides = slide(
  'gpMapHack',
  'gpBuildFight',
  'gpZoomHack',
  'gpAutoKill',
  'gpArena',
  'gpAimLock',
  'gpThermal',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Fortnite Elite cheats with ESP and skill assist, plus HWID spoofer, UGC recovery and Skin Changer for PC.',
  buyUrl: checkoutPath('fortnite'),
};
