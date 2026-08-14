---
title: "Replatforming to headless WordPress + NextJS without breaking the editors"
description: "CFR.org moved off legacy Drupal while the editorial team kept publishing every day. The trick: custom Gutenberg-mapped rendering blocks and a Python migration pipeline."
pubDate: 2026-03-20
tags: ["WordPress", "NextJS", "Migration"]
relatedProject: cfr-org
---

The hardest part of replatforming a publication isn't the new stack — it's the people who publish on it every day. When we replatformed CFR.org from legacy Drupal, the editorial team couldn't stop, retrain, and resume three months later. Foreign-policy news doesn't pause for infrastructure.

So the real requirements were:

1. Readers get a modern, fast site (NextJS, SSR/ISR)
2. Editors keep their existing workflow (WordPress, untouched muscle memory)
3. Years of content migrate safely — no manual copy-paste

Headless architecture solved for #1 and #2. The third needed actual engineering.

## Headless, but the editors don't feel it

WordPress stays the content system — drafting, editing, scheduling, the whole editorial muscle memory. NextJS consumes it as a content API and renders the public site. Editors never see the front-end stack; readers never see the CMS.

The critical piece making this *actually* seamless: **custom Gutenberg-mapped rendering blocks**. Editorial components built in the WordPress block editor map one-to-one to React rendering components in NextJS. An editor composes a page in Gutenberg exactly as they always have; the front-end renders it faithfully. No new blocks vocabulary, no "what does this look like on the site now?" anxiety.

## The migration pipeline, not the migration weekend

Content migrations fail when they're events ("migration weekend!") instead of processes. Ours was a **Python pipeline**: programmatic, repeatable, re-runnable. Why that matters:

- **Re-runnable means fixable.** When we found corrupted source content or mapping gaps, we fixed the pipeline and ran it again — no manual patching of already-migrated articles.
- **Repeatable means verifiable.** Counts, checksums, spot-checks comparing source and destination — the pipeline produced evidence, not hope.
- **Drift-proof.** Editorial kept publishing during the project; re-running the pipeline picked up new and updated content.

## Shipping without a big-bang cutover

The classic replatform trap is the months-long freeze followed by a high-stakes launch. The pipeline-first approach lets you validate real content on the real new stack long before cutover — performance, SEO, rendering edge cases — while the old site keeps serving.

Infrastructure was the boring, reliable part: Terraform for reproducible environments, Azure DevOps for repeatable deploys.

## What I'd tell anyone attempting this

- **Model your blocks before you model your database.** The block inventory drives everything: rendering components, migration mappings, editor training (ideally zero).
- **Migrate content as a pipeline, never as a project phase.** If your migration can't run twice, it can't run once — not safely.
- **Editorial workflow is a production system.** Treat disruption to it with the same seriousness as downtime.

Modernizing the delivery layer while preserving the workflow layer is the whole game in publishing replatforms. The stack is replaceable; the newsroom's rhythm isn't.
