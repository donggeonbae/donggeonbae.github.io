# Journal publishing

Production starts empty. Add only photos and text you approve for public access. Everything in `public/` is copied to the public website, so never put private originals there. Export selected photos, remove location/EXIF metadata, and use resized WebP/JPEG images (roughly 1600 px wide).

1. Put selected image files in `public/assets/journal/`.
2. Add an entry to `journal/posts.json`. Every published entry needs `status: "published"` and `publicApproved: true`. Draft entries are omitted. Never upload private draft files to GitHub: the source folder itself is public.
3. Run `npm test` then `npm run build`. Review `dist/journal/` using `npm run dev`.
4. Update the generated root files and the `website/` source together using the existing deployment instructions.

A photo-only entry omits title and paragraphs:

```json
[{"slug":"your-unique-slug","date":"2026-10-01","status":"published","publicApproved":true,"images":[{"src":"assets/journal/your-photo.webp","alt":"Describe what is visible","caption":"Optional caption","width":1600,"height":1067}]}]
```

For a written entry, add `title` and `paragraphs` (an array of strings). Alternatively use `bodyFile: "posts/your-unique-slug.md"`; blank lines separate paragraphs, line breaks are retained. Text is safely escaped; HTML and Markdown formatting syntax are displayed as plain text. Photos remain optional for a titled entry. Slugs must be unique lowercase words separated by hyphens. Dates must be real ISO dates. Image dimensions must match the exported image.

An image opens at full size through its ordinary link without JavaScript. With JavaScript a native dialog supports Escape, keyboard focus, a close button, and restoration of focus to the image link.

Optional tags: add a tags array of strings. Journal search matches title, date, captions, tags, and JSON paragraphs. Markdown body text is shown on the detail page; it is not included in gallery search. RSS is available at /journal/feed.xml.
