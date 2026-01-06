
# HouseHomie — Vite + React + Tailwind + PWA

This is a production-ready setup that emulates a real mobile app experience:

- React 18 built with Vite (fast, no Babel-in-browser)
- TailwindCSS compiled (no CDN jank)
- Installable PWA (manifest + service worker)
- Works great on mobile; centered phone-width on desktop

## Requirements
- Node.js 18+ and npm

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```bash
npm run build
```
This outputs the production site to `dist/`.

## Deploy to Netlify
### Option 1: Manual upload
1. Run `npm run build`.
2. Upload the generated `dist/` folder (or a zip of it) in Netlify → **Add new site → Deploy manually**.

### Option 2: Import from Git
1. Push this project to GitHub/GitLab.
2. In Netlify, choose **Import from Git** and set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## Notes
- The manifest currently uses `icon.svg`. For best iOS home-screen support, provide PNG icons (e.g., 192×192 and 512×512) and update `manifest.json`.
- Service worker does a simple cache strategy. Adjust `public/sw.js` for finer control.
