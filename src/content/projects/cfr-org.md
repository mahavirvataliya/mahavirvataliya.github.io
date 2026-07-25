---
title: CFR.org
tagline: Replatformed the Council on Foreign Relations publication to headless WordPress + NextJS — modern performance, preserved editorial workflow.
category: Web
period: "2025"
role: Lead engineer — replatforming, content migration, custom rendering
client: Council on Foreign Relations (CFR.org)
featured: true
order: 30
accent: emerald
stack:
  - NextJS
  - React
  - Headless WordPress
  - Gutenberg
  - Python
  - Terraform
  - Azure DevOps
highlights:
  - "Migrated CFR.org from legacy Drupal to headless WordPress + NextJS"
  - "Custom Gutenberg-mapped rendering blocks for pixel-faithful content"
  - "Python content-migration pipelines moved legacy content safely"
  - "Preserved editorial workflows while modernising the delivery layer"
metrics:
  - { label: "Stack", value: "Headless CMS" }
  - { label: "Delivery", value: "NextJS SSR/ISR" }
  - { label: "Migration", value: "Python pipeline" }
  - { label: "Infra", value: "Terraform + Azure" }
description: CFR.org — replatformed the Council on Foreign Relations publication from legacy Drupal to headless WordPress + NextJS with custom Gutenberg rendering blocks and Python content migration.
---

## Overview

**CFR.org** — the Council on Foreign Relations, a high-profile foreign-policy publication — was running on a legacy Drupal stack that was hard to maintain and slow to evolve. I led the **replatforming to a modern headless architecture**: **headless WordPress** as the content backbone paired with **NextJS** for a fast, modern front-end.

The hard part wasn't the new stack. It was doing the migration **without disrupting the editorial team** — preserving their existing workflow in WordPress while delivering a completely new, faster experience to readers.

## The challenge

A high-profile publication with a deep content history and a non-technical editorial team. The constraints:

- **Don't break the editors' workflow** — they know WordPress; keep them there.
- **Preserve every piece of content** — years of articles, custom layouts, embeds.
- **Make it fast and modern** for readers, on a publication that gets serious traffic.
- **Migrate safely** — no manual copy-paste of thousands of articles.

## What I built

### Headless WordPress + NextJS

Editors continue working in **WordPress**, which now serves purely as a **headless CMS** — the content API. **NextJS** consumes that API and renders the public site with SSR/ISR, giving readers a modern, fast experience while editors keep the workflow they know.

### Custom Gutenberg-mapped rendering blocks

The clever bit: editorial components built in the WordPress **Gutenberg** block editor are mapped 1:1 to **custom React rendering blocks** in NextJS. When an editor composes a page in Gutenberg, the front-end renders it pixel-faithfully. This is what let the new front-end ship without retraining the editorial team.

### Python content-migration pipeline

A **Python pipeline** migrated the legacy Drupal content into the new WordPress structure — programmatically, repeatably, and safely. No manual migration of thousands of articles; the pipeline did the heavy lifting and could be re-run as source data was corrected.

### Infrastructure

Deployed via **Terraform** with **Azure DevOps** — infrastructure as code so the environment is reproducible and the deploy is repeatable.

## Why it matters

CFR.org is the kind of project where the "boring" engineering — content modelling, migration pipelines, mapping blocks — is exactly what makes the difference between a replatform that ships and one that stalls. The result: a modern, fast publication with an editorial team that never had to change how they work.

## My role

Lead engineer on the replatforming — architecture decisions, the headless WordPress + NextJS integration, the custom Gutenberg rendering blocks, the Python migration pipeline, and the Terraform/Azure deployment.
