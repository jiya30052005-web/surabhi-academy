# Surabhi Academy — Website

Plain HTML/CSS/JS site, no build tools needed. Open `index.html` in a browser to preview, or upload the whole folder to any hosting (GitHub Pages, Netlify, Hostinger, etc.).

## Files
- `index.html`, `about.html`, `courses.html`, `faculty.html`, `results.html`, `gallery.html`, `contact.html`
- `css/style.css` — all styling, one shared stylesheet
- `js/script.js` — mobile menu + contact form
- `images/` — empty for now, see below

## Adding real photos
Every photo slot on the site is currently a dashed placeholder box (`<div class="img-placeholder">…</div>`) so the layout works even without images. Once you have real photos:
1. Save the photo into the `images/` folder (e.g. `images/hero.jpg`).
2. Find the matching placeholder `<div>` in the HTML and replace it with:
   `<img src="images/hero.jpg" alt="describe the photo">`

The logo in the navbar/footer is currently a text "S" monogram — drop your real `logo.png` into `images/` and swap the `<span>S</span>` markup for `<img src="images/logo.png" alt="Surabhi Academy logo">` in every page's header/footer.

## Contact form — no backend needed
`contact.html` posts to **FormSubmit** (formsubmit.co), a free service that emails you every submission — no server or database required.
1. Open `contact.html`, find `action="https://formsubmit.co/YOUR_EMAIL_HERE"` and put your real email in place of `YOUR_EMAIL_HERE`.
2. Submit the form once for real. FormSubmit emails a confirmation link to that address — click it once.
3. Every enquiry from then on lands directly in that inbox.

### Prefer a Google Form instead?
A commented-out `<iframe>` block is already left in `contact.html` right below the form. Create a Google Form, use *Send → Embed* to get its embed link, paste it into the iframe's `src`, delete the `<form>...</form>` block above it, and uncomment the iframe.

## Editing results / faculty
`results.html` and `faculty.html` have sample rows/cards with placeholder names — copy the existing block and edit the text for each real student/faculty member.
