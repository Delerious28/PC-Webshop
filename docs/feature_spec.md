# PC Webshop Experience & System Specification

This document captures the core experience, interface patterns, and backend logic needed for the PC Webshop. It turns the high-level vision into implementable requirements for designers and engineers.

## 1. Visual Design & Look-and-Feel
- **Theme:** Dark mode default with `#121212` background. Accent palette uses cyberpunk yellow, neon blue, or Nvidia green for primary and secondary CTAs.
- **Typography:**
  - Headlines: Bold, condensed sans-serif for strong hierarchy.
  - Specs & prices: Monospaced face (e.g., Roboto Mono or Fira Code) to convey a technical, coding-inspired feel.
- **Product cards:** Floating style with subtle shadow that deepens on hover; cards elevate via transform to reinforce interactivity.
- **Feedback cues:** Success states in neon green; warnings/errors in vibrant red; focus rings use accent blue for accessibility.

## 2. Faceted Search & Filtering
- **Dynamic sidebar:** Filter groups change per category (e.g., GPU filters: chipset, VRAM tiers, length, outputs; RAM filters: type, speed, latency, RGB).
- **Range sliders:** Support price plus technical metrics (e.g., wattage, clock speed). Sliders show min/max and current selection.
- **Multi-select:** Brand and chipset filters allow multiple selections simultaneously (e.g., ASUS + MSI).
- **Instant filtering:** AJAX/fetch updates results without full-page reloads; debounce input to limit requests.
- **Active filter chips:** Display above result grid with a clear "×" control to remove individual filters.
- **State persistence:** Filters encoded in URL query params to support sharing and bookmarking.
- **Skeleton loading:** Use placeholder cards while results refresh to maintain perceived speed.

## 3. Custom PC Builder (Core USP)
- **Flow:** Step-by-step selection beginning with CPU or GPU, then guiding through motherboard, RAM, storage, cooling, case, PSU, and extras.
- **Compatibility logic:**
  - **Socket match:** Motherboards limited to sockets matching the chosen CPU (e.g., LGA1700 only for a Core i9-13900K).
  - **RAM match:** Motherboard memory type gates the RAM list (DDR4 vs DDR5).
  - **Wattage calculator:** Combine CPU+GPU TDP, apply 1.5× headroom, and show PSUs meeting or exceeding the requirement.
  - **Clearance checks:** Validate GPU length against case maximum GPU length.
- **Feedback:** Inline badges per part (green "Compatible" or red "Incompatible" with reason). Show a completion progress bar and a sticky total-price tracker that updates on every selection.
- **Actions:** One-click "Add full build to cart" bundles all chosen SKUs. Optional "Build Score" summarizes use-case fitness (e.g., 4K gaming ready).

## 4. Product Page Features
- **Specification table:** Structured, scannable grid (no prose) for technical data to enable comparisons.
- **Inventory signals:** Real-time stock messaging (e.g., "Nog 2 op voorraad", "Morgen in huis").
- **Bundles & cross-sells:** Surface "Vaak samen gekocht" combos (e.g., CPU + koelpasta).
- **Comparison tool:** Products can be marked for comparison; comparison view aligns specs side-by-side and highlights differences.

## 5. Micro-interactions & Effects
- **Hover specs:** Product grid hover reveals top three specs (e.g., GPU VRAM, clock, length) without navigation.
- **Cart fly-out:** Adding to cart opens a right-side drawer with line items and subtotal instead of redirecting.
- **Loading polish:** Skeletons during filter or comparison fetches; smooth fade/slide animations on state changes.

## 6. Data Model Foundations
- **Product table:** Core fields such as SKU, name, price, hero image, category.
- **Attribute table:** Catalog of possible attributes (e.g., socket, chipset, wattage, VRAM, length, memory type, RGB flag).
- **Product attribute values:** Join table linking products to attributes with typed values to keep the schema extensible across new hardware types.
- **Compatibility rules:** Declarative ruleset defining allowed matches (e.g., socket compatibility matrix, RAM type per motherboard, clearance constraints, PSU wattage thresholds).
- **Filter metadata:** Definitions for per-category filter groups, allowed operators, and display types (range, select, multi-select).

## 7. API & Interaction Contracts
- **Product listing API:** Accepts filter query parameters (including ranges and multi-select arrays) and returns paginated results plus active filter summaries.
- **Filter config API:** Returns filter groups relevant to the current category for dynamic sidebar rendering.
- **Builder logic API:** Endpoints for compatibility validation and wattage calculations as parts are selected; returns status badges and messages.
- **Cart actions:** Supports adding individual items or a full build bundle; returns updated cart state for the fly-out drawer.

## 8. Performance & UX Considerations
- Debounce filter requests and cache responses for recent filter sets.
- Lazy-load product images; prefer WebP/AVIF.
- Maintain accessibility with sufficient contrast on dark backgrounds, focus-visible outlines, and ARIA live regions for async updates.
- Keep sticky price bar and progress indicators lightweight to avoid layout shifts.

## 9. Open Questions / Next Steps
- Define exact accent palette tokens and typography scale.
- Decide on comparison limit (2 vs 3 products) and difference-highlighting colors.
- Confirm analytics events for filter usage, builder compatibility errors, and add-to-cart from the builder flow.
