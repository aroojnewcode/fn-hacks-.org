import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://fnhacks.org',
  trailingSlash: 'always',
  server: {
    port: 4321,
    host: true,
  },
  preview: {
    port: 4321,
    host: true,
  },
  redirects: {
    '/cheats/': '/products/fortnite-cheats/',
    '/cheats/lite/': '/products/fortnite-cheats/',
    '/cheats/pro/': '/products/fortnite-cheats/',
    '/cheats/elite/': '/products/fortnite-cheats/elite/',
    '/cheats/compare/': '/blog/fortnite-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/fortnite-cheats/',
    '/products/dota-2-cheats/elite/': '/products/fortnite-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/fortnite-cheats/utilities/',
    '/products/aion-2-cheats/': '/products/fortnite-cheats/',
    '/products/aion-2-cheats/elite/': '/products/fortnite-cheats/elite/',
    '/products/aion-2-cheats/utilities/': '/products/fortnite-cheats/utilities/',
    '/go/aion-2/': '/go/fortnite/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ko: 'ko-KR',
          'zh-tw': 'zh-TW',
          de: 'de-DE',
          'pt-br': 'pt-BR',
          th: 'th-TH',
          ja: 'ja-JP',
          es: 'es-ES',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
