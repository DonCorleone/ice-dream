---
title: Prerendering Blog Posts at Build Time
slug: prerendering-blog-posts
description: Generate a static HTML page for every markdown post during build.
coverImage: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200
publishedAt: 2026-11-14
tags:
  - analogjs
  - ssr
  - performance
---

Every post is prerendered to static HTML at build time:

```ts
analog({
  prerender: {
    routes: async () => [
      '/',
      {
        contentDir: 'src/content/blog',
        transform: (file) =>
          file.attributes.draft ? false : `/blog/${file.attributes.slug}`,
      },
    ],
  },
});
```

Drafts are skipped automatically. Fast loads, no server needed.
