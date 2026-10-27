const LEVO_FORTNITE_CHECKOUT =
  'https://levocheats.com/go/8b9cad82?to=%2Ffortnite-cheats';

/** Checkout destinations keyed by internal product id (Levo affiliate). */
export const CHECKOUT_URLS = {
  fortnite: LEVO_FORTNITE_CHECKOUT,
  skinChanger: LEVO_FORTNITE_CHECKOUT,
  hwidSpoofer: LEVO_FORTNITE_CHECKOUT,
  ugc: LEVO_FORTNITE_CHECKOUT,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/fortnite', CHECKOUT_URLS.fortnite],
  ['/go/fortnite/', CHECKOUT_URLS.fortnite],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
