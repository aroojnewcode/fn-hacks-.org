/**
 * Generates priority + secondary locale dictionaries from embedded copy.
 * Run: node scripts/generate-i18n-locales.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('src/i18n/locales');
fs.mkdirSync(outDir, { recursive: true });

const header = `import type { DeepPartialTranslations } from '../partial';
import { PRODUCT_BASE } from '../../config/site';

const productBase = PRODUCT_BASE;
`;

/** @type {Record<string, { exportName: string; file: string; dict: object }>} */
const locales = {
  de: {
    exportName: 'de',
    file: 'de.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite Hacks — ESP, Radar & Ranked-PvP-Overlays für PC',
        description:
          'Fortnite Hacks für PC: Spieler-ESP, Wallhack, Ranked-Radar, Sammel-ESP, Klassen-Skill-Assist und Kostüm-Wechsler. Für Elyos vs Asmodian PvP, Instanzen und Flug. Updates nach NCSOFT-Patches.',
      },
      nav: [
        { href: '${productBase}', label: 'Produkte' },
        { href: '/blog/', label: 'Blog' },
        { href: '/forum/', label: 'Forum' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: 'Support' },
      ],
      hero: {
        status: 'Fortnite online',
        eyebrow: 'Undetected Fortnite Hacks',
        titleLine1: 'Fortnite Hacks —',
        titleLine2: 'ESP, Radar & Ranked-PvP-Overlays für PC',
        subtitle:
          'Spieler-ESP, Wallhack, Ranked-Radar, Sammel-ESP und Klassen-Skill-Assist für Elyos-vs-Asmodian-PvP, Instanzen, Arenen und Flug auf Windows-PC. Schnelle Updates nach Fortnite- und NCSOFT-Patches.',
        ctaPrimary: 'Produkte ansehen',
        ctaDiscord: 'Discord beitreten',
        modesLabel: 'Inhalte',
        modes: ['ranked RvR', 'Arenen', 'Instanzen', 'Flug'],
        metrics: [
          { label: 'Stream-sicher', strong: 'Ja' },
          { label: 'Patch-Tempo', strong: '<24h' },
          { label: 'Nutzer', strong: '300+' },
          { label: 'Support', strong: '24/7' },
        ],
      },
      features: {
        eyebrow: 'Funktionen',
        title: 'Was du bekommst',
        subtitle:
          'ESP, Wallhack, Ranked-Radar, Sammel-ESP und Klassen-Skill-Assist für Fortnite auf dem PC. Updates nach jedem Anti-Cheat-Patch.',
      },
      whyUs: {
        eyebrow: 'Warum wir',
        title: 'Updates nach Anti-Cheat-Patches',
        subtitle:
          'Viele Aion-2-Cheat-Shops fallen nach Patches aus. Wir pushen Loader-Updates, halten abyss-sichere Defaults und antworten auf Discord.',
        usLabel: 'Fortnite Hacks',
        otherLabel: 'Typischer Shop',
      },
      setup: {
        eyebrow: 'Setup',
        titleLead: 'Vom Checkout ins Spiel in',
        titleHighlight: 'drei Schritten',
        intro:
          'Kaufen, Loader im Portal laden, Preset laden, Fortnite starten. Bei Problemen hilft Discord.',
        ctaPrimary: 'Produkte ansehen',
        ctaSecondary: 'Setup-FAQ',
      },
      products: {
        eyebrow: 'Produkte',
        title: 'Fortnite Produkte',
        subtitle: 'Elite Fortnite Hacks, HWID-Spoofer, UGC-Recovery und Kostüm-Wechsler.',
        viewAll: 'Alle Produkte',
        get: 'Holen',
        explore: 'Entdecken',
      },
      blog: {
        eyebrow: 'Blog',
        title: 'Guides & Updates',
        subtitle: 'ESP-Wallhack, Ranked-Presets, Skill-Assist und Anti-Cheat-Checklisten für Fortnite.',
        latestTitle: 'Neueste Artikel',
        latestSubtitle: 'Nach Thema filtern oder sortieren.',
        filterAll: 'Alle Artikel',
        sortLabel: 'Sortieren',
        sortNewest: 'Neueste zuerst',
        sortOldest: 'Älteste zuerst',
        sortShortRead: 'Kürzeste',
        sortLongRead: 'Längste',
        emptyFilter: 'Keine Artikel für diesen Filter.',
        viewAll: 'Alle Artikel',
        read: 'Lesen',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Häufige Fragen',
        subtitle: 'Kompatibilität, Bans, Tiers und Setup.',
        items: [
          {
            num: '01',
            q: 'Wo sehe ich, ob Fortnite Hacks online sind?',
            a: 'Live-Banner auf fnhacks.org und Discord #status. Nach jedem Aion-2- oder Anti-Cheat-Update prüfen.',
          },
          {
            num: '02',
            q: 'Was passiert nach dem Kauf?',
            a: 'Im Portal erhältst du Loader, Setup-Guide und Config-Bibliothek. Vor dem Start den Guide lesen.',
          },
          {
            num: '03',
            q: 'Kann ich mit privaten Aion-2-Cheats gebannt werden?',
            a: 'Ja — jede Modifikation birgt Risiko. Anti-Cheat ändert sich. Status lesen und Risiko akzeptieren.',
          },
          {
            num: '04',
            q: 'Welche Plattformen werden unterstützt?',
            a: 'Nur Fortnite über den offiziellen Launcher unter Windows 10/11 64-Bit. Kein macOS/Linux.',
          },
          {
            num: '05',
            q: 'Kann ich die Lizenz auf einen neuen PC umziehen?',
            a: 'Ja — HWID-Reset im Portal oder Discord-Ticket. Limits je nach Tier.',
          },
          {
            num: '06',
            q: 'Wo finde ich Produkte und Utilities?',
            a: 'Unter Fortnite Produkte: Cheat-Tiers, HWID-Spoofer, UGC und Kostüm-Wechsler.',
          },
        ],
      },
      footer: {
        tagline: 'Fortnite ESP-, Ranked-Radar- und Skill-Assist-Cheats für PC.',
        explore: 'Entdecken',
        support: 'Support',
        legal: 'Rechtliches',
        privacy: 'Datenschutz',
        terms: 'AGB',
        about: 'Über uns',
      },
      legalPages: {
        about: {
          title: 'Über Fortnite Hacks',
          description: 'PC-Aion-2-Cheat-Tiers, Guides und Utilities auf fnhacks.org.',
        },
        privacy: {
          title: 'Datenschutz | Fortnite Hacks',
          description: 'Analytics, Cookies und Kontaktdaten auf fnhacks.org.',
        },
        terms: {
          title: 'AGB | Fortnite Hacks',
          description: 'Kauf-, Lizenz- und Rückerstattungsbedingungen.',
        },
        support: {
          title: 'Support | Fortnite Hacks',
          description: 'Hilfe zu Loader, Configs, HWID und Checkout.',
        },
      },
      ui: {
        skipLink: 'Zum Inhalt springen',
        browseCheats: 'Checkout starten',
        browseCheatsMobile: 'Checkout starten',
        homeAria: 'Fortnite Hacks Startseite',
        checkoutAria: 'Checkout starten',
        discordAria: 'Discord',
        menuOpen: 'Menü öffnen',
        menuClose: 'Menü schließen',
        themeLight: 'Hellmodus',
        themeDark: 'Dunkelmodus',
      },
    },
  },
};

// Remaining locales defined below as compact strong SEO blocks
Object.assign(locales, {
  'zh-tw': {
    exportName: 'zhTw',
    file: 'zh-tw.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite ?? — ESP?????? PvP ??(PC)',
        description:
          'PC ? Fortnite ??:?? ESP??????????? ESP???????????????????? PvP???????NCSOFT ????????',
      },
      nav: [
        { href: '${productBase}', label: '??' },
        { href: '/blog/', label: '???' },
        { href: '/forum/', label: '??' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: '??' },
      ],
      hero: {
        status: 'Fortnite ??',
        eyebrow: '??? Fortnite ??',
        titleLine1: 'Fortnite ?? —',
        titleLine2: 'ESP?????? PvP ??',
        subtitle:
          '??? vs ?? PvP???????????????? ESP??????????? ESP ????????Windows PC?Fortnite/NCSOFT ????????',
        ctaPrimary: '????',
        ctaDiscord: '?? Discord',
        modesLabel: '??',
        modes: ['?? RvR', '???', '??', '??'],
        metrics: [
          { label: '????', strong: '?' },
          { label: '????', strong: '<24h' },
          { label: '???', strong: '300+' },
          { label: '??', strong: '24/7' },
        ],
      },
      features: {
        eyebrow: '??',
        title: '??????',
        subtitle: 'Fortnite PC ? ESP??????????? ESP???????????????????',
      },
      whyUs: {
        eyebrow: '??????',
        title: '???????????',
        subtitle: '?? Fortnite ?????????????????????????????,?? Discord ???',
        usLabel: 'Fortnite Hacks',
        otherLabel: '????',
      },
      setup: {
        eyebrow: '??',
        titleLead: '???????',
        titleHighlight: '???',
        intro: '????????????????,??? Fortnite????? Discord?',
        ctaPrimary: '????',
        ctaSecondary: '?? FAQ',
      },
      products: {
        eyebrow: '??',
        title: 'Fortnite ??',
        subtitle: 'Elite Fortnite ???HWID ???UGC ????????',
        viewAll: '????',
        get: '??',
        explore: '??',
      },
      blog: {
        eyebrow: '???',
        title: '?????',
        subtitle: 'Fortnite ESP ???????????????????????',
        latestTitle: '????',
        latestSubtitle: '?????????',
        filterAll: '????',
        sortLabel: '??',
        sortNewest: '????',
        sortOldest: '????',
        sortShortRead: '??',
        sortLongRead: '??',
        emptyFilter: '???????????',
        viewAll: '????',
        read: '??',
      },
      faq: {
        eyebrow: 'FAQ',
        title: '????',
        subtitle: '?????????????',
        items: [
          {
            num: '01',
            q: '?????? Fortnite ???????',
            a: 'fnhacks.org ????? Discord #status??? Fortnite ????????????',
          },
          {
            num: '02',
            q: '??????????',
            a: '???????????????????? Fortnite ???????',
          },
          {
            num: '03',
            q: '???? Fortnite ????????',
            a: '?????????????????????????????',
          },
          {
            num: '04',
            q: '???????',
            a: '? Windows 10/11 64 ?? + ?????? Fortnite???? macOS/Linux?',
          },
          {
            num: '05',
            q: '????????????',
            a: '??—?? HWID ???? Discord ???????????',
          },
          {
            num: '06',
            q: '?????????',
            a: 'Fortnite ??????????HWID ???UGC ??????',
          },
        ],
      },
      footer: {
        tagline: 'PC ? Fortnite ESP?????????????',
        explore: '??',
        support: '??',
        legal: '??',
        privacy: '?????',
        terms: '????',
        about: '????',
      },
      legalPages: {
        about: { title: '?? Fortnite Hacks', description: '? fnhacks.org ?? PC Fortnite ???????????' },
        privacy: { title: '????? | Fortnite Hacks', description: 'fnhacks.org ???????Cookie ??????' },
        terms: { title: '???? | Fortnite Hacks', description: 'Fortnite ????????????????' },
        support: { title: '?? | Fortnite Hacks', description: '?????????HWID ??????' },
      },
      ui: {
        skipLink: '??????',
        browseCheats: '????',
        browseCheatsMobile: '????',
        homeAria: 'Fortnite Hacks ??',
        checkoutAria: '????',
        discordAria: 'Discord',
        menuOpen: '????',
        menuClose: '????',
        themeLight: '??????',
        themeDark: '??????',
      },
    },
  },
  'pt-br': {
    exportName: 'ptBr',
    file: 'pt-br.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite Hacks — ESP, Radar e Overlay de Abismo PvP (PC)',
        description:
          'Cheats de Fortnite para PC: ESP de jogadores, wallhack, radar do Abismo, ESP de coleta, assist de skills e trocador de fantasia. Para PvP Elyos vs Asmodian, instâncias e voo. Atualizado após patches da Epic.',
      },
      nav: [
        { href: '${productBase}', label: 'Produtos' },
        { href: '/blog/', label: 'Blog' },
        { href: '/forum/', label: 'Fórum' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: 'Suporte' },
      ],
      hero: {
        status: 'Fortnite online',
        eyebrow: 'Cheats Fortnite undetected',
        titleLine1: 'Fortnite Hacks —',
        titleLine2: 'ESP, Radar e Overlay de Abismo PvP',
        subtitle:
          'ESP, wallhack, radar do Abismo, ESP de coleta e assist de skills por classe para PvP Elyos vs Asmodian, instâncias, arenas e voo no Windows. Atualizações rápidas após patches do Fortnite e Epic.',
        ctaPrimary: 'Ver produtos',
        ctaDiscord: 'Entrar no Discord',
        modesLabel: 'Conteúdo',
        modes: ['Abismo RvR', 'Arenas', 'Instâncias', 'Voo'],
        metrics: [
          { label: 'Safe para stream', strong: 'Sim' },
          { label: 'Velocidade de patch', strong: '<24h' },
          { label: 'Usuários', strong: '300+' },
          { label: 'Suporte', strong: '24/7' },
        ],
      },
      features: {
        eyebrow: 'Recursos',
        title: 'O que você recebe',
        subtitle: 'ESP, wallhack, radar do Abismo, ESP de coleta e assist de skills para Fortnite no PC.',
      },
      whyUs: {
        eyebrow: 'Por que nós',
        title: 'Atualizado após patches de EAC',
        subtitle:
          'Muitas lojas de cheat de Fortnite caem após patches. Nós enviamos updates do loader, mantemos defaults seguros para o Abismo e respondemos no Discord.',
        usLabel: 'Fortnite Hacks',
        otherLabel: 'Loja típica',
      },
      setup: {
        eyebrow: 'Setup',
        titleLead: 'Do checkout ao jogo em',
        titleHighlight: 'três passos',
        intro: 'Compre, baixe o loader no portal, carregue um preset e abra o Fortnite. Discord ajuda se travar.',
        ctaPrimary: 'Ver produtos',
        ctaSecondary: 'FAQ de setup',
      },
      products: {
        eyebrow: 'Produtos',
        title: 'Produtos Fortnite',
        subtitle: 'Cheats Elite, HWID spoofer, UGC e trocador de fantasia.',
        viewAll: 'Ver todos',
        get: 'Obter',
        explore: 'Explorar',
      },
      blog: {
        eyebrow: 'Blog',
        title: 'Guias e atualizações',
        subtitle: 'ESP wallhack, presets do Abismo, skill assist e checklist de patch.',
        latestTitle: 'Artigos recentes',
        latestSubtitle: 'Filtre por tema ou ordene.',
        filterAll: 'Todos os artigos',
        sortLabel: 'Ordenar',
        sortNewest: 'Mais recentes',
        sortOldest: 'Mais antigos',
        sortShortRead: 'Mais curtos',
        sortLongRead: 'Mais longos',
        emptyFilter: 'Nenhum artigo neste filtro.',
        viewAll: 'Ver todos',
        read: 'Ler',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Perguntas frequentes',
        subtitle: 'Compatibilidade, banimentos, tiers e setup.',
        items: [
          {
            num: '01',
            q: 'Onde vejo se os cheats de Fortnite estão online?',
            a: 'Banner ao vivo em fnhacks.org e Discord #status. Sempre confira após patch.',
          },
          {
            num: '02',
            q: 'O que acontece depois da compra?',
            a: 'O portal libera loader, guia e biblioteca de configs. Siga o guia antes de abrir o Fortnite.',
          },
          {
            num: '03',
            q: 'Posso tomar ban usando cheats privados?',
            a: 'Sim — qualquer modificação tem risco. Anti-cheat muda. Leia o status e aceite o risco.',
          },
          {
            num: '04',
            q: 'Quais plataformas são suportadas?',
            a: 'Só Fortnite no launcher oficial em Windows 10/11 64-bit. Sem macOS/Linux.',
          },
          {
            num: '05',
            q: 'Posso mover a licença para outro PC?',
            a: 'Sim — reset de HWID no portal ou ticket no Discord. Limites variam por tier.',
          },
          {
            num: '06',
            q: 'Onde ficam produtos e utilitários?',
            a: 'Em Produtos Fortnite: tiers, HWID spoofer, UGC e trocador de fantasia.',
          },
        ],
      },
      footer: {
        tagline: 'Cheats de ESP, radar do Abismo e skill assist de Fortnite para PC.',
        explore: 'Explorar',
        support: 'Suporte',
        legal: 'Legal',
        privacy: 'Privacidade',
        terms: 'Termos',
        about: 'Sobre',
      },
      legalPages: {
        about: { title: 'Sobre Fortnite Hacks', description: 'Vendemos tiers, guias e utilitários de Fortnite para PC.' },
        privacy: { title: 'Privacidade | Fortnite Hacks', description: 'Como usamos analytics, cookies e dados de contato.' },
        terms: { title: 'Termos | Fortnite Hacks', description: 'Compra, licença e reembolso dos produtos.' },
        support: { title: 'Suporte | Fortnite Hacks', description: 'Ajuda com loader, configs, HWID e checkout.' },
      },
      ui: {
        skipLink: 'Ir para o conteúdo',
        browseCheats: 'Iniciar checkout',
        browseCheatsMobile: 'Iniciar checkout',
        homeAria: 'Início Fortnite Hacks',
        checkoutAria: 'Iniciar checkout',
        discordAria: 'Discord',
        menuOpen: 'Abrir menu',
        menuClose: 'Fechar menu',
        themeLight: 'Modo claro',
        themeDark: 'Modo escuro',
      },
    },
  },
  th: {
    exportName: 'th',
    file: 'th.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite Hacks — ESP ?????? ?????????????? ranked play (PC)',
        description:
          '??? Fortnite ?????? PC: ESP ???????, ???????, ?????? Ranked, ESP ???????, ??????????????????? ??????????????????? ?????? PvP Elyos vs Asmodian ????????? ????????? ??????????????? NCSOFT',
      },
      nav: [
        { href: '${productBase}', label: '??????' },
        { href: '/blog/', label: '?????' },
        { href: '/forum/', label: '?????' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: '????????' },
      ],
      hero: {
        status: 'Fortnite ???????',
        eyebrow: '??? Fortnite Undetected',
        titleLine1: 'Fortnite Hacks —',
        titleLine2: 'ESP ?????? ?????????????? ranked play',
        subtitle:
          'ESP ??????? ?????? Ranked ESP ??????? ?????????????????????? ?????? PvP Elyos vs Asmodian ????????? ??????? ??????????? Windows ??????????????????? Fortnite ??? NCSOFT',
        ctaPrimary: '????????',
        ctaDiscord: '???????? Discord',
        modesLabel: '????',
        modes: ['ranked RvR', '???????', '?????????', '???'],
        metrics: [
          { label: '???????????????', strong: '???' },
          { label: '?????????????', strong: '<24??.' },
          { label: '??????', strong: '300+' },
          { label: '????????', strong: '24/7' },
        ],
      },
      features: {
        eyebrow: '???????',
        title: '?????????????',
        subtitle: 'ESP ??????? ?????? Ranked ESP ??????? ????????????????????? Fortnite ?? PC',
      },
      whyUs: {
        eyebrow: '???????????',
        title: '????????????????????????',
        subtitle: '??????? Fortnite ???????????????????? ????????????????? ???????????????????????????????? Ranked ???????? Discord',
        usLabel: 'Fortnite Hacks',
        otherLabel: '??????????',
      },
      setup: {
        eyebrow: '???????',
        titleLead: '???????????????????',
        titleHighlight: '3 ???????',
        intro: '???? ??????????????????????????? ??????????? ???????? Fortnite ?????????????? Discord',
        ctaPrimary: '????????',
        ctaSecondary: 'FAQ ??????????',
      },
      products: {
        eyebrow: '??????',
        title: '?????? Fortnite',
        subtitle: '??? Elite, HWID spoofer, UGC ???????????????????',
        viewAll: '?????????????',
        get: '???',
        explore: '?????',
      },
      blog: {
        eyebrow: '?????',
        title: '???????????????',
        subtitle: 'ESP ??????? ??????? Ranked ???????????? ?????????????????',
        latestTitle: '????????????',
        latestSubtitle: '???????????????????????????',
        filterAll: '?????????????',
        sortLabel: '?????',
        sortNewest: '???????????',
        sortOldest: '???????????',
        sortShortRead: '???????',
        sortLongRead: '??????',
        emptyFilter: '??????????????????????????????',
        viewAll: '?????????',
        read: '????',
      },
      faq: {
        eyebrow: 'FAQ',
        title: '??????????????',
        subtitle: '?????????????? ??? ??????? ?????????????',
        items: [
          {
            num: '01',
            q: '???????????? Fortnite ?????????????????',
            a: '???????????? fnhacks.org ??? Discord #status ?????????????????????',
          },
          {
            num: '02',
            q: '????????????????????',
            a: '?????????????????????? ?????? ???????????????? ?????????????????? Fortnite',
          },
          {
            num: '03',
            q: '??????????????????????????????',
            a: '??? — ??????????????????????????????? ???????????????????????????????????',
          },
          {
            num: '04',
            q: '??????????????????',
            a: '????? Fortnite ???????????????? Windows 10/11 64-bit ????????? macOS/Linux',
          },
          {
            num: '05',
            q: '???????????????????????????????',
            a: '??? — ?????? HWID ????????????????????? Discord ???????????????',
          },
          {
            num: '06',
            q: '?????????????????????????????',
            a: '?????????? Fortnite ???????????? HWID spoofer UGC ???????????????????',
          },
        ],
      },
      footer: {
        tagline: '??? ESP ?????? Ranked ??????????????? Fortnite ?????? PC',
        explore: '?????',
        support: '????????',
        legal: '??????',
        privacy: '?????????????????????',
        terms: '????????',
        about: '????????????',
      },
      legalPages: {
        about: { title: '????????? Fortnite Hacks', description: '????????????? ?????? ???????????? Fortnite ?????? PC' },
        privacy: { title: '??????????????? | Fortnite Hacks', description: '?????????????????? ????????????????? fnhacks.org' },
        terms: { title: '???????? | Fortnite Hacks', description: '??????? ???????? ????????????????' },
        support: { title: '???????? | Fortnite Hacks', description: '??????????????????? ?????? HWID ???????????' },
      },
      ui: {
        skipLink: '????????????????',
        browseCheats: '?????????????',
        browseCheatsMobile: '?????????????',
        homeAria: '??????? Fortnite Hacks',
        checkoutAria: '?????????????',
        discordAria: 'Discord',
        menuOpen: '????????',
        menuClose: '???????',
        themeLight: '?????????',
        themeDark: '???????',
      },
    },
  },
  ja: {
    exportName: 'ja',
    file: 'ja.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite ??? — ESP·????·???PvP(PC)',
        description:
          'PC??Fortnite?????????ESP???????????????????ESP???????????????????????',
      },
      nav: [
        { href: '${productBase}', label: '??' },
        { href: '/blog/', label: '???' },
        { href: '/forum/', label: '?????' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: '????' },
      ],
      hero: {
        status: 'Fortnite ?????',
        eyebrow: '??? Fortnite ???',
        titleLine1: 'Fortnite ??? —',
        titleLine2: 'ESP·????·???PvP',
        subtitle: '??????PvP??????????????????ESP??????????Windows PC???',
        ctaPrimary: '?????',
        ctaDiscord: 'Discord???',
        modesLabel: '?????',
        modes: ['??? RvR', '????', '??????', '??'],
        metrics: [
          { label: '?????', strong: '??' },
          { label: '?????', strong: '<24h' },
          { label: '????', strong: '300+' },
          { label: '????', strong: '24/7' },
        ],
      },
      features: { eyebrow: '??', title: '?????', subtitle: 'Fortnite??ESP???????????????????????' },
      faq: {
        eyebrow: 'FAQ',
        title: '??????',
        subtitle: '????BAN????????????',
        items: [
          { num: '01', q: '???????????????????', a: 'fnhacks.org?????Discord #status??????????' },
          { num: '02', q: '????????????', a: '???????????????????????????' },
          { num: '03', q: 'BAN???????????', a: '??????????????????????????????????' },
          { num: '04', q: '??????', a: 'Windows 10/11 64bit???????????' },
          { num: '05', q: '?PC?????????', a: '?????HWID???????Discord??????????' },
          { num: '06', q: '????????', a: 'Fortnite??????????HWID?UGC?????????????' },
        ],
      },
      footer: {
        tagline: 'PC??Fortnite ESP·???????·?????????',
        explore: '??',
        support: '????',
        legal: '??',
        privacy: '??????',
        terms: '????',
        about: '????',
      },
      ui: {
        skipLink: '???????',
        browseCheats: '???????',
        browseCheatsMobile: '???????',
        homeAria: 'Fortnite Hacks ???',
        checkoutAria: '???????',
        discordAria: 'Discord',
        menuOpen: '???????',
        menuClose: '????????',
        themeLight: '??????',
        themeDark: '??????',
      },
      blog: {
        eyebrow: '???',
        title: '??????',
        latestTitle: '????',
        filterAll: '??????',
        read: '??',
        viewAll: '?????',
      },
      products: { eyebrow: '??', title: 'Fortnite??', viewAll: '???', get: '??', explore: '??' },
      legalPages: {
        about: { title: 'Fortnite Hacks????', description: 'PC??Fortnite??????????????' },
        privacy: { title: '?????? | Fortnite Hacks', description: '??·Cookie·???????????' },
        terms: { title: '???? | Fortnite Hacks', description: '??·?????·???????' },
        support: { title: '???? | Fortnite Hacks', description: '????????HWID?????' },
      },
    },
  },
  es: {
    exportName: 'es',
    file: 'es.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite Hacks — ESP, radar y overlays de Abismo PvP (PC)',
        description:
          'Cheats de Fortnite para PC: ESP, wallhack, radar del Abismo, ESP de recolección, asistente de skills y cambiador de disfraces.',
      },
      nav: [
        { href: '${productBase}', label: 'Productos' },
        { href: '/blog/', label: 'Blog' },
        { href: '/forum/', label: 'Foro' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: 'Soporte' },
      ],
      hero: {
        status: 'Fortnite en línea',
        eyebrow: 'Cheats Fortnite undetected',
        titleLine1: 'Fortnite Hacks —',
        titleLine2: 'ESP, radar y overlays de Abismo',
        subtitle: 'ESP, wallhack y asistente de skills para PvP Elyos vs Asmodian, instancias y vuelo en Windows PC.',
        ctaPrimary: 'Ver productos',
        ctaDiscord: 'Unirse a Discord',
        modesLabel: 'Contenido',
        modes: ['Abismo RvR', 'Arenas', 'Instancias', 'Vuelo'],
        metrics: [
          { label: 'Seguro para stream', strong: 'Sí' },
          { label: 'Velocidad de patch', strong: '<24h' },
          { label: 'Usuarios', strong: '300+' },
          { label: 'Soporte', strong: '24/7' },
        ],
      },
      features: { eyebrow: 'Funciones', title: 'Qué incluye', subtitle: 'ESP, wallhack, radar y skill assist para Fortnite en PC.' },
      faq: {
        eyebrow: 'FAQ',
        title: 'Preguntas frecuentes',
        subtitle: 'Compatibilidad, bans, tiers y setup.',
        items: [
          { num: '01', q: '¿Dónde veo si está online?', a: 'Banner en fnhacks.org y Discord #status.' },
          { num: '02', q: '¿Qué pasa tras comprar?', a: 'El portal abre loader, guía y configs.' },
          { num: '03', q: '¿Puedo recibir ban?', a: 'Sí. Toda modificación tiene riesgo.' },
          { num: '04', q: '¿Qué plataformas hay?', a: 'Solo Windows 10/11 64-bit con launcher oficial.' },
          { num: '05', q: '¿Puedo mover la licencia?', a: 'Sí, con reset HWID o ticket de Discord.' },
          { num: '06', q: '¿Dónde están los productos?', a: 'En Productos Fortnite: tiers, HWID, UGC y disfraces.' },
        ],
      },
      footer: {
        tagline: 'Cheats ESP, radar de Abismo y skill assist de Fortnite para PC.',
        explore: 'Explorar',
        support: 'Soporte',
        legal: 'Legal',
        privacy: 'Privacidad',
        terms: 'Términos',
        about: 'Acerca de',
      },
      ui: {
        skipLink: 'Saltar al contenido',
        browseCheats: 'Iniciar checkout',
        browseCheatsMobile: 'Iniciar checkout',
        homeAria: 'Inicio Fortnite Hacks',
        checkoutAria: 'Iniciar checkout',
        discordAria: 'Discord',
        menuOpen: 'Abrir menú',
        menuClose: 'Cerrar menú',
        themeLight: 'Modo claro',
        themeDark: 'Modo oscuro',
      },
      blog: { eyebrow: 'Blog', title: 'Guías y actualizaciones', latestTitle: 'Últimos artículos', filterAll: 'Todos', read: 'Leer', viewAll: 'Ver todo' },
      products: { eyebrow: 'Productos', title: 'Productos Fortnite', viewAll: 'Ver todo', get: 'Obtener', explore: 'Explorar' },
      legalPages: {
        about: { title: 'Acerca de Fortnite Hacks', description: 'Vendemos cheats y guías de Fortnite para PC.' },
        privacy: { title: 'Privacidad | Fortnite Hacks', description: 'Analytics, cookies y datos de contacto.' },
        terms: { title: 'Términos | Fortnite Hacks', description: 'Compra, licencia y reembolsos.' },
        support: { title: 'Soporte | Fortnite Hacks', description: 'Ayuda con loader, configs y HWID.' },
      },
    },
  },
  fr: {
    exportName: 'fr',
    file: 'fr.ts',
    dict: {
      site: {
        name: 'Fortnite Hacks',
        domain: 'fnhacks.org',
        title: 'Fortnite Hacks — ESP, radar et overlays Rankede PvP (PC)',
        description:
          'Cheats Fortnite pour PC : ESP joueurs, wallhack, radar d’Abysse, ESP de récolte, assist de skills et changeur de outfit skins.',
      },
      nav: [
        { href: '${productBase}', label: 'Produits' },
        { href: '/blog/', label: 'Blog' },
        { href: '/forum/', label: 'Forum' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: 'Support' },
      ],
      hero: {
        status: 'Fortnite en ligne',
        eyebrow: 'Cheats Fortnite undetected',
        titleLine1: 'Fortnite Hacks —',
        titleLine2: 'ESP, radar et overlays Rankede',
        subtitle: 'ESP, wallhack et assist de skills pour le PvP Elyos vs Asmodian, instances et vol sur PC Windows.',
        ctaPrimary: 'Voir les produits',
        ctaDiscord: 'Rejoindre Discord',
        modesLabel: 'Contenu',
        modes: ['Abysse RvR', 'Arènes', 'Instances', 'Vol'],
        metrics: [
          { label: 'Safe stream', strong: 'Oui' },
          { label: 'Vitesse de patch', strong: '<24h' },
          { label: 'Utilisateurs', strong: '300+' },
          { label: 'Support', strong: '24/7' },
        ],
      },
      features: { eyebrow: 'Fonctions', title: 'Ce que vous obtenez', subtitle: 'ESP, wallhack, radar et skill assist pour Fortnite sur PC.' },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions fréquentes',
        subtitle: 'Compatibilité, bans, tiers et installation.',
        items: [
          { num: '01', q: 'Où voir si c’est en ligne ?', a: 'Bannière sur fnhacks.org et Discord #status.' },
          { num: '02', q: 'Après l’achat ?', a: 'Le portail ouvre le loader, le guide et les configs.' },
          { num: '03', q: 'Risque de ban ?', a: 'Oui. Toute modification comporte un risque.' },
          { num: '04', q: 'Quelles plateformes ?', a: 'Windows 10/11 64-bit avec le launcher officiel uniquement.' },
          { num: '05', q: 'Changer de PC ?', a: 'Oui via reset HWID ou ticket Discord.' },
          { num: '06', q: 'Où sont les produits ?', a: 'Page Produits Fortnite : tiers, HWID, UGC et outfit skins.' },
        ],
      },
      footer: {
        tagline: 'Cheats ESP, radar d’Abysse et skill assist Fortnite pour PC.',
        explore: 'Explorer',
        support: 'Support',
        legal: 'Mentions',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        about: 'À propos',
      },
      ui: {
        skipLink: 'Aller au contenu',
        browseCheats: 'Lancer le checkout',
        browseCheatsMobile: 'Lancer le checkout',
        homeAria: 'Accueil Fortnite Hacks',
        checkoutAria: 'Lancer le checkout',
        discordAria: 'Discord',
        menuOpen: 'Ouvrir le menu',
        menuClose: 'Fermer le menu',
        themeLight: 'Mode clair',
        themeDark: 'Mode sombre',
      },
      blog: { eyebrow: 'Blog', title: 'Guides et mises à jour', latestTitle: 'Derniers articles', filterAll: 'Tous', read: 'Lire', viewAll: 'Tout voir' },
      products: { eyebrow: 'Produits', title: 'Produits Fortnite', viewAll: 'Tout voir', get: 'Obtenir', explore: 'Explorer' },
      legalPages: {
        about: { title: 'À propos d’Fortnite Hacks', description: 'Cheats et guides Fortnite pour PC.' },
        privacy: { title: 'Confidentialité | Fortnite Hacks', description: 'Analytics, cookies et données de contact.' },
        terms: { title: 'Conditions | Fortnite Hacks', description: 'Achat, licence et remboursements.' },
        support: { title: 'Support | Fortnite Hacks', description: 'Aide loader, configs et HWID.' },
      },
    },
  },
});

function serialize(value, indent = 2) {
  return JSON.stringify(value, null, indent)
    .replace(/"\$\{productBase\}"/g, '`${productBase}`')
    .replace(/"(\$\{productBase\}[^"]*)"/g, '`$1`');
}

for (const [, cfg] of Object.entries(locales)) {
  // Fix productBase hrefs that were placeholders
  const raw = serialize(cfg.dict)
    .replaceAll('"${productBase}"', '`${productBase}`')
    .replaceAll('"${productBase}', '`${productBase}')
    .replaceAll('"/blog/"', "'/blog/'")
    .replaceAll('"/forum/"', "'/forum/'")
    .replaceAll('"/faq/"', "'/faq/'")
    .replaceAll('"/support/"', "'/support/'")
    .replaceAll('"/go/fortnite/"', "'/go/fortnite/'");

  // Convert JSON to TS object literal-ish: keep double quotes OK for TS
  const body = `${header}
/** Auto-generated locale dictionary — review priority markets for SEO quality. */
export const ${cfg.exportName}: DeepPartialTranslations = ${raw.replace(/`\$\{productBase\}`/g, '`${productBase}`')};
`;
  // Actually productBase in nav needs template literals - post-process
  let ts = body.replaceAll('"${productBase}"', '`${productBase}`');
  // JSON can't have templates - rewrite href fields
  ts = ts.replace(/"href": "\$\{productBase\}"/g, 'href: `${productBase}`');
  ts = ts.replace(/"href": "(\/[^"]+)"/g, 'href: \'$1\'');
  // Convert "key": to key: for cleaner TS (optional)
  fs.writeFileSync(path.join(outDir, cfg.file), ts, 'utf8');
  console.log('wrote', cfg.file);
}

console.log('done');
