import type { ForumComment, ForumPost } from '../../data/forum';
import type { Locale } from '../locales';
import type { ForumPostPack } from './types';

import { deForum } from './locales/de';
import { esForum } from './locales/es';
import { frForum } from './locales/fr';
import { ptBrForum } from './locales/pt-br';
import { koForum } from './locales/ko';
import { jaForum } from './locales/ja';
import { zhTwForum } from './locales/zh-tw';

const PACKS: Partial<Record<Locale, ForumPostPack>> = {
  de: deForum,
  es: esForum,
  fr: frForum,
  'pt-br': ptBrForum,
  ko: koForum,
  ja: jaForum,
  'zh-tw': zhTwForum,
};

const CATEGORY_KEY: Record<string, keyof import('../types').Translations['forum']['categories']> = {
  General: 'general',
  'Guides & Builds': 'guides',
  'Patch Talk': 'patch',
  Community: 'community',
};

export function localizeForumCategory(category: string, locale: Locale, t: import('../types').Translations): string {
  const key = CATEGORY_KEY[category];
  if (key && t.forum?.categories?.[key]) return t.forum.categories[key];
  const pack = PACKS[locale]?.['__categories'];
  return pack?.category ?? category;
}

export function localizeForumPost(post: ForumPost, locale: Locale, t: import('../types').Translations): ForumPost {
  if (locale === 'en') return post;
  const overlay = PACKS[locale]?.[post.slug];
  const category = overlay?.category ?? localizeForumCategory(post.category, locale, t);
  const body = overlay?.body?.length ? overlay.body : post.body;
  const comments = post.comments.map((c, i) => {
    const o = overlay?.comments?.[i];
    if (!o) return c;
    return {
      ...c,
      author: o.author ?? c.author,
      age: o.age ?? c.age,
      body: o.body ?? c.body,
    };
  });
  return {
    ...post,
    title: overlay?.title ?? post.title,
    excerpt: overlay?.excerpt ?? post.excerpt,
    flair: overlay?.flair ?? post.flair,
    category,
    body,
    comments,
  };
}

export function localizeForumPosts(
  posts: ForumPost[],
  locale: Locale,
  t: import('../types').Translations,
): ForumPost[] {
  return posts.map((p) => localizeForumPost(p, locale, t));
}
