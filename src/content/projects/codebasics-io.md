---
title: Codebasics.io
tagline: High-traffic B2B/B2C learning platform serving 1M+ users at 99%+ uptime — payments, video pipeline, and full production observability.
category: Web
period: 2020 – Present
role: Full-stack owner — performance, payments, video pipeline, observability
client: AtliQ Technologies
featured: true
order: 20
accent: cyan
stack:
  - Laravel
  - React
  - AWS (Elastic Beanstalk, RDS, S3)
  - Redis
  - MySQL
  - CloudFront
  - Nginx
  - Laravel Octane
highlights:
  - "Scaled to 1M+ users at 99%+ uptime with Multi-AZ RDS and CloudFront"
  - "Cut cloud spend 60% via build-vs-buy overhaul (self-hosted Supabase)"
  - "Critical stored procedure 4s → 100ms; overall DB performance +30%"
  - "Multi-currency payments with idempotent transactions and webhook reconciliation"
  - "Cross-provider video auto-sync with retries, failed-sync recovery, and DRM delivery"
metrics:
  - { label: "Users", value: "1M+" }
  - { label: "Uptime", value: "99%+" }
  - { label: "Cost cut", value: "60%" }
  - { label: "Query speedup", value: "40x" }
description: Codebasics.io — a B2B/B2C learning platform scaled to 1M+ users at 99%+ uptime. Full-stack ownership of payments, video pipeline, and production observability.
---

## Overview

Codebasics.io is a high-traffic **B2B/B2C learning platform** I've owned full-stack for years. It serves **1M+ users** at **99%+ uptime**, handling multi-currency payments, role-based portals, a complex video pipeline, and the operational reliability that scale demands.

This is the project where I learned that "working" and "working in production at scale" are different problems — and that the only way to find real bottlenecks is to trace production behaviour.

## The challenge

A data-science & analytics LMS that needed to scale to millions of users across regions, handle real money in multiple currencies, deliver video smoothly, and stay up under load. The cost of getting any of this wrong — failed payments, broken video, downtime during a launch — was high.

## What I built & scaled

### Performance & infrastructure

- **AWS Elastic Beanstalk** for deployment with **Multi-AZ RDS** for database resilience.
- **Redis caching** strategy that took hot paths off the database.
- **Database indexing** and query optimisation — most notably taking a critical stored procedure from **4 seconds down to 100ms**, lifting overall database performance by **30%**.
- **Laravel Octane** to keep PHP workers alive and cut per-request overhead.
- **Nginx tuning** and **CloudFront** for global content delivery.
- **Self-hosted Supabase** as part of a **build-vs-buy overhaul** that **cut cloud spend by 60%**.

### Multi-currency payments

Real money, multiple currencies, multiple gateways. I built **idempotent transaction handling** so retries never double-charge, plus **webhook-driven reconciliation** across Stripe and Authorize.Net — so the system's view of "what was paid" always matches the payment provider's view.

### Video pipeline

A video pipeline with **cross-provider auto-sync**, retries, failed-sync recovery, and monitoring — plus **DRM delivery** (Gumlet, with Cloudflare as fallback) so content is protected end-to-end. Course-progress tracking ties it all back to the learner.

### Production observability

This is where the real work happened. **New Relic and CloudWatch** to trace production behaviour and find actual bottlenecks (not the ones you'd guess). **Uptime Kuma** for monitoring. Retries and reconciliation so transient failures self-heal. The result: **99%+ uptime at 100K+ concurrent users**.

## Why it matters

Codebasics.io is a textbook example of owning a product at scale: the architecture, the cost discipline, the operational reliability, and the production-tracing mindset that finds the one stored procedure killing your performance. It's been in production, serving real users, for years.

## My role

Full-stack ownership — performance tuning, payments, video, infrastructure decisions, and the production observability that kept it healthy.
