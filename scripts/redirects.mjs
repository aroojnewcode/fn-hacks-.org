/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/fortnite-cheats/'],
  ['/cheats/', '/products/fortnite-cheats/'],
  ['/cheats/lite', '/products/fortnite-cheats/'],
  ['/cheats/lite/', '/products/fortnite-cheats/'],
  ['/cheats/pro', '/products/fortnite-cheats/'],
  ['/cheats/pro/', '/products/fortnite-cheats/'],
  ['/cheats/elite', '/products/fortnite-cheats/elite/'],
  ['/cheats/elite/', '/products/fortnite-cheats/elite/'],
  ['/cheats/compare', '/blog/fortnite-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/fortnite-lite-vs-pro/'],
  ['/products/fortnite-cheats/utilities', '/products/fortnite-cheats/utilities/'],
  ['/products/fortnite-cheats', '/products/fortnite-cheats/'],
  ['/products/fortnite-cheats/account-recovery', '/products/fortnite-cheats/ugc/'],
  ['/products/fortnite-cheats/account-recovery/', '/products/fortnite-cheats/ugc/'],
  ['/products/dota-2-cheats', '/products/fortnite-cheats/'],
  ['/products/dota-2-cheats/', '/products/fortnite-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/fortnite-cheats/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/fortnite-cheats/elite/'],
  ['/products/dota-2-cheats/utilities', '/products/fortnite-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/fortnite-cheats/utilities/'],
  ['/products/fortnite-cheats', '/products/fortnite-cheats/'],
  ['/products/fortnite-cheats/', '/products/fortnite-cheats/'],
  ['/products/fortnite-cheats/elite', '/products/fortnite-cheats/elite/'],
  ['/products/fortnite-cheats/elite/', '/products/fortnite-cheats/elite/'],
  ['/products/fortnite-cheats/utilities', '/products/fortnite-cheats/utilities/'],
  ['/products/fortnite-cheats/utilities/', '/products/fortnite-cheats/utilities/'],
  ['/go/fortnite', '/go/fortnite/'],
  ['/go/fortnite/', '/go/fortnite/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
