export type ForumCommentOverlay = {
  author?: string;
  age?: string;
  body?: string;
};

export type ForumPostOverlay = {
  title?: string;
  excerpt?: string;
  flair?: string;
  category?: string;
  body?: string[];
  comments?: ForumCommentOverlay[];
};

export type ForumPostPack = Record<string, ForumPostOverlay>;
