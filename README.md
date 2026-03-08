# San Francisco Surfing — Site Guide

## Folder Structure

```
sfsurf/
├── index.html              ← Homepage
├── ocean-beach.html        ← Ocean Beach spot guide
├── cronkite-rodeo-beach.html
├── ft-point.html           ← Fort Point spot guide
├── lindamar.html           ← Lindamar / Pacifica
├── surf-shops.html         ← Surf shop directory
├── videos.html             ← Video embeds
├── css/
│   └── styles.css          ← All styles (edit colors/fonts here)
├── js/
│   └── layout.js           ← Shared nav and footer (edit once, updates everywhere)
└── images/                 ← Drop all photos here
    └── (add your .jpg/.webp images here)
```

## How to Update the Site

### Change text on a page
Open the `.html` file and edit the text directly. Everything between the `<p>` and `</p>` tags is body text.

### Add a photo to a page
1. Drop the image file into the `/images/` folder (use .jpg or .webp for best performance)
2. Add this HTML where you want the image to appear:
   ```html
   <img src="images/your-photo.jpg" alt="Description of photo" style="width:100%; margin: 1.5rem 0;">
   ```

### Add a new surf spot page
1. Duplicate one of the existing spot pages (e.g. `ocean-beach.html`)
2. Rename it (e.g. `mavericks.html`)
3. Update the content inside
4. Add a link to it in `js/layout.js` in both the nav dropdown and footer

### Change the nav or footer
Edit `js/layout.js` — the nav and footer are defined there once and injected into every page automatically.

### Add a YouTube video
In `videos.html`, copy one of the `<div class="video-embed">` blocks and replace the YouTube video ID in the `src` attribute.

### Change colors or fonts
Open `css/styles.css` and edit the `:root` variables at the top:
```css
:root {
  --ocean: #0a3d5c;    /* main dark blue */
  --wave: #1a7a9a;     /* medium blue */
  --sun: #f0a500;      /* gold accent */
  --sand: #d4b896;     /* warm tan */
}
```

## Deploying to Netlify

1. Go to netlify.com and drag this entire folder onto the dashboard
2. Your site is live instantly at a netlify.app URL
3. Go to Site Settings → Domain Management to connect sanfranciscosurfing.com
4. Update your domain's nameservers to Netlify's (they'll show you exactly what to enter)
