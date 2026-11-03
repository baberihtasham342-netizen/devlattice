# Devlattice Academy website

A static website built with plain HTML, CSS and vanilla JavaScript. No framework, no build step.

## Run it locally

- Open `index.html` in a browser, or
- In VS Code, right-click `index.html` and choose **Open with Live Server**.

You need an internet connection to load Google Fonts and the Unsplash photos.
If a photo cannot load, the page shows a neutral placeholder instead of a broken image.

## Structure

```
devlattice-academy/
├── index.html        Page structure and static content (hero, about, contact, footer)
├── css/style.css     Design tokens, layout and components
├── js/script.js      Editable content + all interactions
├── assets/
│   ├── images/       Put your own photos here (optional)
│   └── icons/
└── README.md
```

## Everything on this site is sample content

Nothing here is confirmed by the academy. Replace it before launch.

| What | Where | Notes |
| --- | --- | --- |
| Programs | `PROGRAMS` in `js/script.js` | Title, description, skills, level. Also fills the form dropdown and footer. |
| Student projects | `PROJECTS` | Set `url` to a real link and "View project" opens it. While `url` is empty it opens a details dialog. |
| Team | `TEAM` | Placeholder profiles. Add real names, bios and a `linkedin` URL. |
| Testimonials | `TESTIMONIALS` | Marked "Sample testimonial" on screen. Remove the tag in `renderTestimonials()` when using real feedback. |
| Certificates and milestones | `GALLERY` | Certificates and the badge are drawn in code. Use `type: 'photo'` with an image URL for real ones. |
| Social links | `CONFIG.socials` | Currently point to each platform's home page. |
| Email, phone, location | `index.html` (contact section and footer) | Placeholders such as `info@devlattice.example`. |
| About copy (Story, Vision, Mission) | `index.html` | Draft wording. Confirm it matches the real academy. |

## Replacing photos

Photos come from Unsplash. To use your own, save files in `assets/images/` and change the
`image` or `src` fields in `js/script.js` (and the `<img>` tags in `index.html` for the hero and About photos), for example `assets/images/hero.jpg`.
Keep the descriptive `alt` text accurate. Check each Unsplash photo's licence before commercial use.

## Contact form

The form validates in the browser but **does not send anything** yet.
To connect it, set `CONFIG.formEndpoint` at the top of `js/script.js` to a form service URL
(for example a Formspree endpoint) or your own API. The form then sends a JSON `POST`.
A hidden honeypot field is already included for basic spam filtering. Add server-side validation too.

## Notes

- Colours and fonts are CSS variables at the top of `css/style.css`.
- Animations respect `prefers-reduced-motion`.
- Muted text on light backgrounds uses `#5A5E58` for small text, because `#777B74` is too light at small sizes.
