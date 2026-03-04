# SharpSigma Website

**Sharp by Design. Sigma by Standard.**  
Full-lifecycle manufacturing partner — engineering, consultancy, and turnkey parts delivery.

---

## Project Structure

```
sharpsigma/
├── index.html      → Full website (6 pages + Insights Hub). Never needs editing.
├── articles.js     → Your blog content. Only file you ever edit.
├── CNAME           → Custom domain config for GitHub Pages.
└── README.md       → This file.
```

**Rule of thumb:** To update the website content or add a blog post → edit `articles.js` only.  
Everything else lives in `index.html` and should not need to be touched.

---

## Deployment — GitHub Pages + Custom Domain

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **New repository**
3. Name it exactly: `sharpsigma.com` *(or any name you prefer)*
4. Set it to **Public**
5. Click **Create repository**

---

### Step 2 — Upload Your Files

**Option A — Drag and Drop (easiest)**
1. Open your new repository on GitHub
2. Click **Add file → Upload files**
3. Drag all three files into the window:
   - `index.html`
   - `articles.js`
   - `CNAME`
4. Scroll down, click **Commit changes**

**Option B — Git CLI**
```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sharpsigma.com.git
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**
2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. GitHub will show: *"Your site is published at https://YOUR_USERNAME.github.io/sharpsigma.com"*

Wait 1–2 minutes for the initial build.

---

### Step 4 — Connect Your Custom Domain

GitHub Pages needs 4 DNS A records and 1 CNAME record at your domain registrar.

#### At your DNS provider (GoDaddy / Namecheap / Cloudflare / etc.)

Add these **A records** (pointing to GitHub's servers):

| Type | Name | Value          | TTL  |
|------|------|----------------|------|
| A    | @    | 185.199.108.153 | Auto |
| A    | @    | 185.199.109.153 | Auto |
| A    | @    | 185.199.110.153 | Auto |
| A    | @    | 185.199.111.153 | Auto |

Add this **CNAME record** (for www redirect):

| Type  | Name | Value                              | TTL  |
|-------|------|------------------------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io            | Auto |

> **Replace `YOUR_USERNAME`** with your actual GitHub username.

#### Back in GitHub Pages Settings

1. Go to **Settings → Pages**
2. Under **Custom domain**, type: `sharpsigma.com`
3. Click **Save**
4. Tick **Enforce HTTPS** (wait a few minutes for the certificate to provision)

#### DNS Propagation

DNS changes take **15 minutes to 48 hours** to fully propagate globally.  
You can check status at [dnschecker.org](https://dnschecker.org) — search for `sharpsigma.com`.

Once live, both `https://sharpsigma.com` and `https://www.sharpsigma.com` will work.

---

## Adding a New Blog Article

Open `articles.js`. Scroll to the bottom. You'll find a template block in the comments.

**Quick version — copy this block and fill it in:**

```javascript
,{
  id: "your-article-slug",           // lowercase, hyphens, no spaces — becomes the URL
  title: "Your Article Title",
  category: "engineering",           // engineering | operations | supply-chain | cost
  categoryLabel: "Engineering",      // Displayed on the card
  date: "March 2025",
  readTime: "5 min read",
  featured: false,                   // true = shown as hero on Insights page (one at a time)
  excerpt: "One or two sentences shown on the article card.",
  heroImage: "https://your-image.jpg",
  content: [
    { type: "paragraph", text: "Your opening paragraph." },
    { type: "heading",   text: "First Section" },
    { type: "paragraph", text: "Section content." }
  ]
}
```

Add it **after the last article**, before the closing `];`

Then commit and push → article appears on the site automatically.

---

## Content Block Reference

Every article is made of content blocks. Mix and match in any order:

### Text
```javascript
{ type: "paragraph",  text: "Body text paragraph." }
{ type: "heading",    text: "Major Section Heading" }
{ type: "subheading", text: "Smaller Sub-Heading" }
```

### Emphasis
```javascript
{ type: "quote",   text: "A pullquote or key insight from the article." }
{ type: "callout", text: "A tip, warning, or important note — highlighted box." }
{ type: "divider" }
```

### Lists
```javascript
{ type: "list", style: "bullet",   items: ["First point", "Second point"] }
{ type: "list", style: "numbered", items: ["Step one", "Step two"] }
```

### Image
```javascript
{
  type: "image",
  src: "https://your-image-url.jpg",
  caption: "Optional caption shown below image"
}
```

### Video (YouTube or Vimeo)
```javascript
{
  type: "video",
  url: "https://www.youtube.com/embed/VIDEO_ID",
  caption: "Optional video caption"
}
```
> For YouTube: take the URL `youtube.com/watch?v=ABC123` → change to `youtube.com/embed/ABC123`  
> For Vimeo: use `player.vimeo.com/video/VIDEO_ID`

### Table
```javascript
{
  type: "table",
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Row 1A", "Row 1B", "Row 1C"],
    ["Row 2A", "Row 2B", "Row 2C"]
  ]
}
```

---

## Adding Images

**Option 1 — External URL (easiest)**  
Paste any public image URL directly into `"src"` or `"heroImage"`.  
Free image sources: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)

**Option 2 — Cloudinary (recommended for your own photos)**  
1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Upload your image
3. Copy the URL → paste into `"src"`

**Option 3 — GitHub itself**  
1. Upload your image to a folder in the repo (e.g. `/images/`)
2. Reference it as `"src": "images/your-photo.jpg"`

> Recommended image size: **1200 × 630px minimum** for hero images. Wider is better.

---

## Updating an Existing Article

Find the article in `articles.js` by its `id`, edit the fields directly, commit, and push.  
Changes go live within 1–2 minutes.

---

## Setting a Featured Article

Only one article should have `featured: true` at a time — it shows as the large hero on the Insights page.  
To change the featured article: set the current one to `false`, set the new one to `true`.

---

## Making Updates After Launch

Every update follows the same pattern:

```
1. Edit articles.js (or index.html for design changes)
2. Save the file
3. Commit to GitHub (drag-drop upload OR git push)
4. Wait 1–2 minutes
5. Refresh sharpsigma.com — done
```

No build tools. No npm. No deployment pipeline. Just save and push.

---

## Pages Overview

| Page | What It Contains |
|------|-----------------|
| Home | Hero, 3 pillars, service overview, process preview, credentials, CTA |
| Services | Full detail across all 3 pillars and 8+ services |
| How We Work | 3 engagement models + full 8-phase CM lifecycle |
| Industries | Capability-first framing + 4 sector deep-dives |
| About | Story, metrics, philosophy, team |
| Contact | Contact form + info |
| Insights | Blog hub with featured article, filtering, full article view |

---

## Troubleshooting

**Site not showing at custom domain**  
→ DNS propagation takes up to 48 hours. Check [dnschecker.org](https://dnschecker.org)

**HTTPS not working**  
→ Go to Settings → Pages → tick "Enforce HTTPS". May take 10–20 min after domain connects.

**Articles not showing**  
→ Make sure `articles.js` is in the root of the repo (same folder as `index.html`)  
→ Check for a missing comma between article objects in the array

**Images not loading**  
→ Check the URL is publicly accessible (open it directly in a browser tab)

**Changes not appearing**  
→ Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## Contact

**Email:** info@sharpsigma.com  
**Website:** www.sharpsigma.com
