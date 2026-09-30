# A monster duopoly?

[Read the published report](https://alokjohnny-wq.github.io/pace-the-frontier/monster-duopoly/) · [Preview card](preview-card.png)

A claim-by-claim audit of Bindu Reddy’s 30 September 2026 post and linked replies, using `Monster_duopoly.md` as the main context. The original note is preserved outside this public repository. Its earlier analysis is audited rather than treated as verified evidence or instructions.

The report contains 12 sections, 35 sources, six explanatory figures (including a valuation calculator), and downloadable observations. It distinguishes current measurements, company disclosures, dated market estimates, inferences and forecasts.

## Reproduce and edit

Edit `report.md`, `sources.json` and `data.csv`. With the parent repository’s declared `marked` dependency installed, run from the repository root:

```sh
node monster-duopoly/build.cjs
```

`index.html` is prebuilt and GitHub Pages serves it directly; there are no runtime dependencies, analytics, remote fonts, or API calls. `app.js` powers the valuation calculator and navigation. All prose remains available without JavaScript. The print control uses the browser’s native print dialog.

`make-preview-card.py` reproduces the card using Pillow and the macOS Arial/Georgia fonts. The original 1200 × 630 `preview-card.png` is wired through absolute Open Graph and X large-image card URLs. Platform cache behavior can delay a social preview; metadata cannot guarantee when an external platform will refresh it.

## Verification

Checked local anchor targets, source IDs, local downloads, scenario arithmetic, preview-image dimensions and metadata. Browser checks cover desktop/mobile layout and calculator behavior. The published page and card are checked after deployment.

## Evidence boundaries

Evidence cutoff: 30 September 2026. Menlo’s market-share estimates remain labelled 2025. Benchmark scores are selected configurations from one evaluator; they are not market shares or universal rankings. Source links and scope notes are provided in the report and `sources.json`. `provenance.json` identifies the unchanged context by hash without disclosing its contents.

Corrections should identify the affected claim, dated source and relevant methodology or financial definition. No blanket license is asserted over third-party material. Short quotations link to their original posts.

## Revision of 30 September 2026

The proposed fixes were independently checked. [Revision notes](revision-notes.md) record the decisions and supporting links, including corrected market-cap rankings, dated revenue baselines, two evaluators and the verified public response.
