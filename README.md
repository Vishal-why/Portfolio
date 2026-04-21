# Modern Portfolio Website

A modern, responsive personal portfolio built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` - main structure
- `styles.css` - styling and responsive layout
- `script.js` - mobile menu + dynamic footer year

## Run Locally

Open `index.html` directly in your browser.

## Publish on GitHub Pages

1. Create a new repository on GitHub (example: `portfolio`).
2. Open terminal in this folder and run:

```bash
git init
git add .
git commit -m "Create modern portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. On GitHub, go to:
   - `Settings` -> `Pages`
   - `Build and deployment` -> `Source: Deploy from a branch`
   - Branch: `main`, folder: `/ (root)`
4. Save, then wait 1 to 2 minutes.
5. Your site will be live at:
   - `https://<your-username>.github.io/<repo-name>/`

## Customize Quickly

- Replace project text in `index.html`
- Update colors in `styles.css` (`:root` variables)
- Change contact links in the `#contact` section
