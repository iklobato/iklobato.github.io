# iklobato.github.io: knowledge index

Snapshot: `always-visible-nav` (uncommitted, on top of `main` @ `cb58bf7`) (2026-11-25). Verified by a local `bundle exec jekyll build` and headless Chrome probes; only the layout, main.css and _config.yml were read. Facts rot; re-check before acting on a number or line ref.

## Status at a glance
- **Done:** the top nav (`.sticky-nav`) is always visible, from scroll 0. Before, it slid in only after 400px of scroll.
- **Discovered:** on phones (375px and 320px) the nav links wrap to two rows, so the nav is 67px tall there vs 48px on desktop. See `navigation.md`.
- **Next steps:** commit the branch `always-visible-nav` and open a PR (waiting on Henry).
- **What's left:** the 2-row nav on phones takes 67px of screen; making it one row (smaller gap, hamburger) was not done.
- **Monitor:** nothing.

## Topics
- `navigation.md`: how the fixed top nav, its height variable and the theme toggle fit together.

## Session log
- 2026-11-25: made the top nav always visible (`_layouts/default.html`, `assets/css/main.css`), added `knowledge` to `_config.yml` `exclude` so these notes are not published. Branch `always-visible-nav`, not committed yet.
