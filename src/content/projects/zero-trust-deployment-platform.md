---
title: Org-wide Secure Deployment Platform
tagline: Cloudflare Zero Trust + Coolify — the paved road that lets an organisation ship AI-built internal tools fast without betting its security posture on hope.
category: Infra
period: 2024 – Present
role: Owner & architect — platform design, access model, and rollout
client: AtliQ Technologies (org-wide)
featured: true
order: 15
accent: cyan
stack:
  - Cloudflare Zero Trust
  - Cloudflare Access
  - Coolify
  - Docker
  - CI/CD (GitHub Actions)
  - GitLab CI
  - Terraform
highlights:
  - "Every internal tool behind Cloudflare Zero Trust — nothing exposed to the public internet"
  - "Coolify as self-hosted PaaS: push code, get TLS + running service, same baseline for every team"
  - "Centralized access policies and audit trails instead of shared VPN credentials"
  - "Built for the AI era — guardrails that keep deployment faster than the dirt path"
metrics:
  - { label: "Access", value: "Zero Trust" }
  - { label: "Exposure", value: "No public apps" }
  - { label: "Deploy path", value: "Push → live" }
  - { label: "Audit", value: "Centralized" }
description: An org-wide secure deployment platform on Cloudflare Zero Trust + Coolify — how employees ship AI-built internal tools safely, quickly, and with full audit trails.
---

## Overview

AI coding agents changed the rate at which internal tools get *created* inside a company. When anyone can build a working dashboard or automation in a day, the bottleneck moves from building to **deploying safely**. I run the platform that solved this for our organisation: **Cloudflare Zero Trust** for access, **Coolify** for deployment, and centralized audit trails for trust.

The design principle: **guardrails, not gates.** A security process slower than the dirt path gets routed around; no process at all ends in a leaked secret. This platform is both fast and safe by default.

## The problem

AI-built internal tools were appearing faster than the org could review them. Every option was bad:

- **Block them** → teams go around IT, tools run on personal machines, nobody wins.
- **Review everything heavily** → two-week queues, momentum dies, AI leverage evaporates.
- **Let anything ship** → one exposed database or leaked secret ends the whole program.

The answer isn't a gate. It's a paved road so good that the secure path *is* the fast path.

## What I built

### Cloudflare Zero Trust — the access layer

Every internal tool sits behind Cloudflare's edge, authenticated against our identity provider:

- **Nothing public.** No internal tool is exposed to the open internet — every request passes Cloudflare Access first.
- **No shared VPN credentials.** Access policies are centralized, per-app, and auditable.
- **Same experience everywhere.** Office or café, the identity flow is identical — security that doesn't feel like punishment.

### Coolify — the deployment layer

A self-hosted PaaS so teams own deployment without hand-rolling Docker-on-a-VM each time:

- **Push code → running service**, with TLS handled, on the same baseline for every team.
- **Standardized but flexible** — teams aren't fighting the platform to do their jobs.
- **Right-sized isolation** per tool, so one team's experiment can't take down another's production.

### Audit trails — the trust layer

Deployments and access events flow through centralized logging. When anyone asks "who shipped what, who reached this app" — there's an answer. In an AI-accelerated org, that visibility is what lets leadership say *yes* to speed.

### CI/CD wiring

GitHub Actions and GitLab CI pipelines integrate with the platform, so the paved road starts at the repo: merge → build → deploy behind Zero Trust, automatically.

## Why it matters

This project is my answer to the question every organisation now faces: *how do you let AI accelerate teams without losing control?* It's platform engineering in its most practical form — infrastructure as organizational design. And it runs on Cloudflare's edge, which I know well from years of using Cloudflare CDN and Stream in production at scale.

## My role

Owner and architect — platform selection, the Zero Trust access model, Coolify deployment, CI/CD integration, and the rollout that made teams trust it (the technical build is half the work; adoption is the other half).
