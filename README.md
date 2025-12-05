# PC-Webshop

Concept specification for a high-performance PC hardware webshop with a dark, gaming-inspired aesthetic, rich faceted filtering, and a compatibility-aware custom PC builder.

## Live prototype
- Open `index.html` for the redesigned home experience (dark mode hero, category spotlights, and feature highlights).
- Browse dedicated catalog pages:
  - `catalog.html` for all categories
  - `gpus.html`, `cpus.html`, `ram.html` for category-focused faceted filtering with chips, skeleton loading, hover specs, and cart fly-out
- Use `builder.html` for the compatibility-aware PC builder with socket/RAM checks, wattage budgeting, GPU clearance validation, progress, and sticky totals.
- Serve locally with `python -m http.server 8000` and visit http://localhost:8000.

## Documentation
- [Feature and experience specification](docs/feature_spec.md)
