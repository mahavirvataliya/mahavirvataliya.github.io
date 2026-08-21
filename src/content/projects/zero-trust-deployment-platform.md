---
title: Org-wide Secure Deployment Platform
tagline: The internal platform our teams deploy through — self-hosted GitLab, Keycloak SSO, Vaultwarden, and Nextcloud, all behind Cloudflare Zero Trust.
category: Infra
period: "2021 – Present"
role: Owner & architect — platform design, access model, rollout, and five years of running it
client: AtliQ Technologies (org-wide)
featured: true
order: 15
accent: cyan
stack:
  - Cloudflare Zero Trust
  - Keycloak
  - GitLab (self-hosted)
  - Vaultwarden
  - Nextcloud
  - Uptime Kuma
  - Termius
  - Coolify
  - Docker
  - CI/CD (GitLab CI, GitHub Actions)
  - Terraform
highlights:
  - "Every internal tool behind Cloudflare Zero Trust — nothing exposed to the public internet"
  - "Keycloak SSO at auth.atliq.com — one identity for every internal service"
  - "Self-hosted GitLab at gitlab.atliq.com for source control and CI"
  - "Vaultwarden for org secrets, Nextcloud for the company drive, Uptime Kuma for the status page"
  - "Five years of deploying, maintaining, and upgrading the platform in production"
metrics:
  - { label: "Access", value: "Zero Trust" }
  - { label: "Exposure", value: "No public apps" }
  - { label: "Identity", value: "Keycloak SSO" }
  - { label: "In production", value: "5+ years" }
description: An org-wide secure deployment platform — Keycloak SSO, self-hosted GitLab, Vaultwarden, Nextcloud, and Uptime Kuma behind Cloudflare Zero Trust, run and upgraded in production for five years.
---

## Overview

AI coding agents changed the rate at which internal tools get *created* inside a company. When anyone can build a working dashboard or automation in a day, the bottleneck moves from building to **deploying safely**. I run the platform that solved this for our organisation — and have been running it for **five years**: **Cloudflare Zero Trust** for access, **Keycloak** for identity, **Coolify** for deployment, and a self-hosted stack of the services the org uses every day.

The design principle: **guardrails, not gates.** A security process slower than the dirt path gets routed around; no process at all ends in a leaked secret. This platform is both fast and safe by default.

## The problem

AI-built internal tools were appearing faster than the org could review them. Every option was bad:

- **Block them** → teams go around IT, tools run on personal machines, nobody wins.
- **Review everything heavily** → two-week queues, momentum dies, AI leverage evaporates.
- **Let anything ship** → one exposed database or leaked secret ends the whole program.

The answer isn't a gate. It's a paved road so good that the secure path *is* the fast path.

## What I built

### Cloudflare Zero Trust + Keycloak — the access layer

Every internal tool sits behind Cloudflare's edge, authenticated against our identity provider — **Keycloak SSO at auth.atliq.com**:

- **Nothing public.** No internal tool is exposed to the open internet — every request passes Cloudflare Access first.
- **One identity for everything.** Keycloak is the single sign-on point for the whole org: GitLab, Nextcloud, the status page, and every deployed tool.
- **No shared VPN credentials.** Access policies are centralized, per-app, and auditable.
- **Same experience everywhere.** Office or café, the identity flow is identical — security that doesn't feel like punishment.

### What runs on it — the self-hosted stack

The platform isn't an empty shell teams deploy *into*; it runs the services the org relies on daily:

- **GitLab** (gitlab.atliq.com) — self-hosted source control and CI. Our code, our runners, our retention rules.
- **Vaultwarden** — a Bitwarden-compatible server for org secrets and shared credentials, ending secrets in chat messages and spreadsheets.
- **Nextcloud** — the company drive: files, shares, and sync under our control instead of a third-party SaaS.
- **Uptime Kuma** — the org status page. When something is down, there's a page that says so before anyone asks.
- **Termius** — managed, auditable SSH access to the underlying servers.

### Coolify — the deployment layer

A self-hosted PaaS so teams own deployment without hand-rolling Docker-on-a-VM each time:

- **Push code → running service**, with TLS handled, on the same baseline for every team.
- **Standardized but flexible** — teams aren't fighting the platform to do their jobs.
- **Right-sized isolation** per tool, so one team's experiment can't take down another's production.

### Audit trails — the trust layer

Deployments and access events flow through centralized logging. When anyone asks "who shipped what, who reached this app" — there's an answer. In an AI-accelerated org, that visibility is what lets leadership say *yes* to speed.

### CI/CD wiring

GitLab CI (on our own runners) and GitHub Actions pipelines integrate with the platform, so the paved road starts at the repo: merge → build → deploy behind Zero Trust, automatically.

### Five years of running it

Deploying the platform was the start, not the end. I've **maintained and upgraded** this stack in production for the last five years — version upgrades to Keycloak, GitLab, and Nextcloud, certificate rotation, migration of services between hosts, and security patches — without the org ever losing a workday to the platform itself. Longevity is the part of platform engineering nobody demos, and it's the part that actually builds trust.

## Why it matters

This project is my answer to the question every organisation now faces: *how do you let AI accelerate teams without losing control?* It's platform engineering in its most practical form — infrastructure as organizational design. And it runs on Cloudflare's edge, which I know well from years of using Cloudflare CDN and Stream in production at scale.

## My role

Owner and architect — platform selection, the Keycloak + Zero Trust access model, the self-hosted stack (GitLab, Vaultwarden, Nextcloud, Uptime Kuma), Coolify deployment, CI/CD integration, and the rollout that made teams trust it (the technical build is half the work; adoption is the other half). And for the last five years, the person who keeps it all patched, upgraded, and boringly reliable.
