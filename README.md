# Who gets to set the pace?

**The race, the money, and the right to decide the future of AI.**

[Read the published visual essay](https://alokjohnny-wq.github.io/pace-the-frontier/) · [Explore the evidence desk](https://alokjohnny-wq.github.io/pace-the-frontier/evidence.html)

An eight-chapter synthesis of the project conversations **Stress test frontier analysis**, **Estimate global AI investment since**, and **Analyze Pace the frontier**, together with the expanded project sources.

The central distinction: **capability, commercial returns, and public benefit are different outcomes**. Better technology does not automatically validate every investment, and wider access does not automatically distribute power.

Curated by Alok Sharma, with AI-assisted research and synthesis. Evidence cutoff: **26 September 2026**. Published: **27 September 2026 (India)**. This is a dated research edition, not a live news feed.

## What is here

- Eight chapters covering agent incidents, pacing proposals, research automation, investment, openness, geopolitics, governance, and human freedom.
- A chart of reported global AI investment and three interactive illustrations with visible assumptions.
- An evidence desk containing 39 external references, 28 claim checks, and a coverage map of 39 project files.
- Three optional YouTube players linking to the original publishers; videos load only after a reader selects them.
- A labelled AI-generated conceptual illustration and original diagrams.

## Read and inspect

| File | Purpose |
|---|---|
| [index.html](index.html) | Complete visual essay |
| [evidence.html](evidence.html) | Methods, corrections, calculations and references |
| [story.md](story.md) | Editable narrative; source IDs resolve through the source register |
| [sources.json](sources.json) | Source URLs, dates and scope notes |
| [claims.json](claims.json) | Explicit claim assessments |
| [investment-data.csv](investment-data.csv) | Values plotted in the investment chart |
| [source-map.csv](source-map.csv) | Project-file coverage, with hashes identifying reviewed versions |
| [app.js](app.js) | Calculator formulas and optional video loading |

## Method

The conversations provide questions and research history, not independent factual corroboration. Key event, financial and policy claims were checked against primary records. Contextual material carried from earlier audits or transcripts is identified. Facts about an institution's stated position are distinguished from evidence of implementation. Estimates, forecasts, hypotheses and philosophical possibilities are labelled.

The historical September investment approximation and subjective bubble probabilities remain historical judgments. They are not presented as measured current facts. The project-file map includes duplicates and companion formats; it is not a count of independent studies.

Private conversation logs and full third-party clippings are not republished. No blanket licence is asserted over third-party sources. The original videos remain with their publishers. The opening artwork is conceptual, not documentary photography.

## Run or rebuild

The site is static and needs no build step to read or host. Serve this directory with any static server, or open `index.html` locally. All content and chart data are in the repository. Google Fonts and optional YouTube embeds require a network connection; system font fallbacks are provided.

To regenerate the HTML after editing the manuscript, data or layout:

```sh
npm install
npm run build
```

Node.js 20 or later is required for the build. `marked` is pinned to version 17.0.5. Browser code has no runtime package dependencies. The generated HTML remains readable without JavaScript; interactive controls require it.

GitHub Pages serves the root of the `main` branch. Use the site's **Print / save PDF** control for a print-friendly version.

## Revisions and corrections

Changes should preserve the distinction between an event date, a disclosure date, and this edition's evidence cutoff. Update the source register and affected claim checks alongside the narrative. Corrections and disagreement are welcome through repository issues, with a source and a description of the claim at issue.
