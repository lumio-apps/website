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
[Heliora](https://github.com/lumio-apps/heliora),
[Lockeye](https://github.com/lumio-apps/lockeye),
[Peekless](https://github.com/lumio-apps/peekless) and
[Muster](https://github.com/lumio-apps/muster).

Plain HTML and CSS, no build step and no JavaScript frameworks (a few lines of plain JavaScript run the light/dark switch). Hosted with
GitHub Pages. No ads, no tracking, no cookies.

## Pages

- `index.html`: home page: "Small Apps. Big Freedom.", all 13 apps as cards, privacy and open-source cards, the developer, a 2026 timeline, the honest list of network use and a short FAQ
- `calculator.html`, `pockettally.html`, `paperwise.html`, `stamply.html`, `pow2.html`, `cuboo.html`, `verto.html`, `somno.html`, `anatomo.html`, `heliora.html`, `lockeye.html`, `peekless.html`, `muster.html`: app pages
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

## Updating an app

When an app gets a new version, check three things so the site stays honest:

1. The version number on its page ("Current version") and on its home card.
2. New features, new permissions and any new network use, on the app page **and** in its `privacy-<app>.html`, the master privacy page, the FAQ and the Terms.
3. Screenshots in `img/`. Only use images that match the current look of the app.

Current versions on the site: Calculator 1.9.0, PocketTally 1.11.0, Paperwise 1.11.0, Stamply 0.16.0, Pow2 1.6.5, Cuboo 1.3.6, Verto 1.2.0, Somno 1.3.1, Anatomo 3.0.0, Heliora 1.16.1, Lockeye 1.1.2, Peekless 2.2.1, Muster 1.5.0.

## License

Code: MIT. Screenshots and icons belong to Lumio Apps.
