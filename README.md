# Lumio Apps website

Source of [lumio-apps.online](https://lumio-apps.online): the home page and the
pages for [Calculator](https://github.com/lumio-apps/calculator),
[PocketTally](https://github.com/lumio-apps/pockettally),
[Paperwise](https://github.com/lumio-apps/paperwise),
[Stamply](https://github.com/lumio-apps/stamply),
[Pow2](https://github.com/lumio-apps/pow2),
[Cuboo](https://github.com/lumio-apps/cuboo),
[Verto](https://github.com/lumio-apps/verto),
[Somno](https://github.com/lumio-apps/somno),
[Anatomo](https://github.com/lumio-apps/anatomo),
[Heliora](https://github.com/lumio-apps/heliora) and
[Lockeye](https://github.com/lumio-apps/lockeye).

Plain HTML and CSS, no build step and no JavaScript frameworks. Hosted with
GitHub Pages. No ads, no tracking, no cookies.

## Pages

- `index.html`: home page, with a category filter (Everyday, Money, Documents, Travel, Games, Health, Learn, Security)
- `calculator.html`, `pockettally.html`, `paperwise.html`, `stamply.html`, `pow2.html`, `cuboo.html`, `verto.html`, `somno.html`, `anatomo.html`, `heliora.html`, `lockeye.html`: app pages
- `privacy.html` and `privacy-<app>.html`: privacy policy and one policy per app
- `terms.html`, `licenses.html`, `about.html`, `faq.html`, `contact.html`: other pages
- `404.html`, `sitemap.xml`, `robots.txt`

## Files

- `style.css`: shared styles, with a light and a dark theme
- `theme.js`: the light/dark switch (saved only in the visitor's browser)
- `img/`: app icons and screenshots
- `CNAME`: custom domain for GitHub Pages

## Adding an app

1. Add its icon (`<app>-icon.png`) and screenshots to `img/`.
2. Add `<app>.html` and `privacy-<app>.html`.
3. Add a card with a category on the home page, a link in the header and footer, and an entry in `sitemap.xml`.
4. Update About, Contact, Terms and Licenses.

## License

Code: MIT. Screenshots and icons belong to Lumio Apps.
