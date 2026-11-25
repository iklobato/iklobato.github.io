# iklobato.github.io: navigation

Snapshot: `always-visible-nav` (uncommitted, on top of `main` @ `cb58bf7`) (2026-11-25). Verified by a local `bundle exec jekyll build` and headless Chrome probes; only the layout, main.css and _config.yml were read. Facts rot; re-check before acting on a number or line ref.

## Top nav (`.sticky-nav`, `#stickyNav`)
- Markup: `_layouts/default.html` (every page with `layout: default`; `/pdf/` uses `layout: null` and has no nav).
- Since 2026-11-25 it is `position: fixed; top: 0` all the time. The old scroll handler that toggled a `.visible` class past 400px is gone, and so is the `.visible` CSS rule.
- Because it is fixed it takes no room in the flow. The layout script sets `--nav-height` on `<html>` from `stickyNav.offsetHeight` with a `ResizeObserver`. CSS uses it for `.container { margin-top }` and `html { scroll-padding-top }` (so `/#hire-me` lands below the nav). Fallback is 48px.
- Why measured and not hard-coded: the height changes with width. Probe on the built site, page at scroll 0:
```
1280: navTop=0 navBottom=48.1 var=48px firstContentTop=72(header) toggleTop=72
768:  navTop=0 navBottom=45.2 var=45px firstContentTop=60(header) toggleTop=68
375:  navTop=0 navBottom=66.8 var=67px firstContentTop=82(header) toggleTop=68
320:  navTop=0 navBottom=66.8 var=67px firstContentTop=75(header) toggleTop=68
```
- Print CSS already hides `.sticky-nav` and zeroes `.container` margin, so the PDF is not affected.

## Theme toggle (`#theme-toggle`, end of main.css)
- Fixed at `top: 4.5rem`, below the nav, so it does not cover the "Let's Talk" button. On phones it sits 1px under the 67px nav (toggleTop=68 above); if the nav grows taller it will overlap.

## Gotchas
- Headless Chrome will not go below a 500px window. To measure phone widths, load the page inside iframes of the target width.
- `jekyll` is not on PATH; use `bundle exec jekyll build` (gems already in `vendor/bundle`).
