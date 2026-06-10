# Seongnam Future Map Locked State

Saved: 2026-06-09

## Files

- Active HTML: `index.html`
- Locked backup HTML: `index.locked-5split.html`

## Locked Map Split

The internal 5-way boundary is locked at the current state. Do not alter the five `path.base` shapes unless explicitly requested.

## Current Label / Pin Coordinates

- 재건축: `x=660`, `y=240`
- 대기업/IT: `x=365`, `y=425`
- 골목상권: `x=627`, `y=395`
- 청년: `x=401`, `y=303`
- 어르신: `x=513`, `y=555`

## Current Behavior Notes

- Demo video overlay duration: `1s` (`DEMO_VIDEO_MS` in `js/config.js`; real videos plug into `VIDEO_SOURCES` there)
- Completion state hides HUD/rail/district labels and leaves the unified glowing map plus final text, then auto-resets to the intro after `AUTO_RESET_MS` (60s).
- Final text: `성남 미래지도`
- Font: Paperlogy
- Design contract & phase structure: see `DESIGN.md` (2026-06-10 "Civic Mission Control" rewrite — geometry untouched)
