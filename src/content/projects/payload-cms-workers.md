---
title: AtliQ.com — Payload CMS on Cloudflare Workers
tagline: Migrated the company website off WordPress to serverless Payload CMS + NextJS, hosted on Cloudflare Workers — zero servers to maintain.
category: Web
period: "2025 – Present"
role: Lead engineer — architecture, CMS migration, Cloudflare Workers deployment
client: AtliQ Technologies (atliq.com)
order: 32
accent: indigo
stack:
  - Payload CMS
  - NextJS
  - Cloudflare Workers
  - TypeScript
  - Serverless
highlights:
  - "Migrated the company website from WordPress to a serverless Payload CMS + NextJS stack"
  - "Hosted on Cloudflare Workers — no servers, no patching, no idle costs"
  - "Editors still get a real CMS with structured content, not a markdown folder"
  - "Content modelled properly in Payload — typed, versioned, and API-first"
metrics:
  - { label: "CMS", value: "Payload" }
  - { label: "Front-end", value: "NextJS" }
  - { label: "Hosting", value: "Cloudflare Workers" }
  - { label: "Servers to patch", value: "0" }
description: Migration of the AtliQ website from WordPress to a serverless Payload CMS + NextJS stack hosted on Cloudflare Workers.
---

## Overview

I migrated our company website off **WordPress** to a **serverless Payload CMS + NextJS** stack hosted on **Cloudflare Workers**. Same idea as the CFR.org replatforming — keep editors in a real CMS, modernise everything underneath — but taken one step further: this time there is **no server at all**.

## The challenge

The WordPress site was the classic treadmill: a VM or hosting plan to maintain, plugins to update, a security surface to watch, and performance that depended on caching layers bolted on after the fact. For a marketing site, that's a lot of standing infrastructure for what should be a static-ish deliverable — but editors still need a proper CMS, so "just write HTML" was never an option.

## What I built

### Payload CMS — serverless, inside NextJS

**Payload CMS** runs embedded in the NextJS app and is serverless by design — no separate CMS server to run or patch. Content is modelled properly: **typed, versioned, and API-first**, so the front-end consumes structured content instead of parsing HTML blobs. Editors get a clean admin UI that feels familiar coming from WordPress.

### NextJS on Cloudflare Workers

The whole site — front-end *and* CMS — deploys to **Cloudflare Workers**. That means:

- **Zero servers.** No VM to patch, no PHP runtime, no database server to babysit.
- **Edge performance everywhere.** The site is served from Cloudflare's network, close to every visitor.
- **Pay for what you use.** A marketing site with spiky traffic costs effectively nothing when it's quiet.

### The migration

Content moved out of WordPress into the Payload schema — pages, posts, media, and redirects mapped across so no link broke and no page went missing. The new site replaced the old one with the same URLs and better numbers on every Core Web Vital.

## Why it matters

WordPress powers a huge share of the web, but for most sites it's 2010s architecture: a server, a PHP runtime, and plugins doing jobs a modern stack does natively. This project is the template I'd hand anyone still on that treadmill: **a real editorial CMS, a modern front-end, and an ops footprint of exactly zero servers** — running on the Cloudflare platform I've used in production for years.

## My role

Lead engineer — the architecture, the Payload content model, the WordPress content migration, and the Cloudflare Workers deployment, plus ongoing improvements since.
