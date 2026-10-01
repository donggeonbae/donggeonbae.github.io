# Donggeon Bae — academic homepage

A responsive academic homepage with dark editorial typography, an intentionally open hero, and a small original portrait in About. Fonts, images, and scripts are served locally. Brief section reveals respect reduced-motion preferences. The site includes research, publications, presentations, an updated CV, and a Journal for future posts and photos.

## Edit and build

Node 24, no package installation:

```
cd website
npm test
npm run build
npm run dev
```

Public content lives in `profile.json`; `verified=true` is required for publication/presentation/news records, and any source links must be public HTTPS URLs. Conference acceptance and published papers are labeled separately. The 200×200 LinkedIn photo is displayed at a small size.

## Pages publishing

This repository publishes **main / (root)**. Commit generated `website/dist/` files to the repository root after building. Preserve `CNAME` (`d-bae.com`) and the two original thesis PDFs. Source stays in `website/`, and a read-only CI workflow tests and verifies generated files match root output. No Actions deployment-source change is needed. Root static HTML/CSS/JS/assets is the actual Pages site.

The current CV is `assets/donggeon-bae-cv.pdf`; the legacy `CV_BDG.pdf` URL receives the same updated, sanitized PDF. Editable Markdown is `cv/Donggeon_Bae_CV.md`, with an HTML CV at `/cv/`. The two thesis PDFs remain untouched. The old CV and original root `index.html` remain in Git history. No old CV containing personal identifiers is copied into a new archive. When updating the profile, also refresh the PDF from the HTML CV using the browser's A4 print layout before rebuilding and committing generated files.

Canonical URL: https://d-bae.com/. GitHub Pages serves the site with a custom domain and enforced HTTPS.

Journal publishing instructions: journal/README.md. The hero uses intentional negative space. The original portrait appears in About. Brief section reveals respect reduced-motion preferences; no particle renderer or continuous animation runs.
