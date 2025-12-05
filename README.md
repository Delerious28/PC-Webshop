# PC-Webshop

Concept specification for a high-performance PC hardware webshop with a dark, gaming-inspired aesthetic, rich faceted filtering, and a compatibility-aware custom PC builder.

## Live prototype
- Open `index.html` for the redesigned home experience (dark mode hero, category spotlights, and feature highlights).
- Browse dedicated catalog pages:
  - `catalog.html` for all categories
  - `gpus.html`, `cpus.html`, `ram.html` for category-focused faceted filtering with chips, skeleton loading, hover specs, and cart fly-out
- Community and content pages:
  - `news.html` for Tweakers-style tech nieuws, deals, and tickers
  - `forms.html` for forums (lezen zonder login, posten/reageren met account)
  - `profile.html` to update gebruikersnaam en avatar (account vereist voor checkout en reacties)
- Use `builder.html` for the compatibility-aware PC builder with socket/RAM checks, wattage budgeting, GPU clearance validation, progress, and sticky totals.
- Serve locally with `python -m http.server 8000` and visit http://localhost:8000.

## Content management (geen hardcode)
- Alle catalogus-, nieuws- en forumitems staan in `assets/data.json` en worden bij runtime ingeladen.
- Admins kunnen lokaal overrides toevoegen zonder de code aan te passen:
  - Ga naar `profile.html` en gebruik de **Snel toevoegen**-form of plak eigen JSON in de **JSON overrides** textarea.
  - Overrides worden opgeslagen in `localStorage` (`pcwebshop_adminOverrides`) en worden live toegepast op filters, builder en zoekresultaten.
  - Via de resetknop herstel je naar de basisdata uit `assets/data.json`.

## Documentation
- [Feature and experience specification](docs/feature_spec.md)
