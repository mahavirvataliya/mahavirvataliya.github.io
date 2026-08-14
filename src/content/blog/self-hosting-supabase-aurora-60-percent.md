---
title: "Cutting cloud spend 60% by self-hosting Supabase on Aurora Serverless"
description: "A build-vs-buy story: when managed services quietly become your biggest line item, and how self-hosting Supabase on Aurora Serverless v2 gave us Postgres + Auth back at 60% less."
pubDate: 2026-07-12
tags: ["Infrastructure", "Supabase", "AWS", "Build vs Buy"]
relatedProject: codebasics-io
---

Managed services are a great default — right up until the invoice arrives. When we audited our cloud spend, a couple of line items had quietly grown into the biggest part of the bill. The uncomfortable question was obvious: what were we actually paying for, and could we run it ourselves without losing sleep?

## Do the math before you pick a side

"Build vs buy" arguments are usually argued with adjectives. I prefer arithmetic. For each candidate service we listed:

- **What we pay today**, at current and projected scale
- **What it would cost us to run** — infrastructure plus the operational hours we'd realistically spend
- **The blast radius** — what breaks if we get it wrong

That last row is why you don't self-host everything. We self-hosted exactly one thing: the Postgres + Auth backbone.

## Why Supabase, self-hosted, on Aurora Serverless v2

Supabase gave us Postgres, auth, and the client APIs our product already used. Self-hosting it meant keeping the developer experience while owning the infrastructure underneath. Two decisions mattered:

**Aurora Serverless v2 for the database.** It scales capacity with load and scales down when idle — which matches a platform whose traffic has real peaks and valleys. Multi-AZ kept the resilience story intact.

**Treat it like production, because it is.** Backups, connection pooling, monitoring from day one. If you self-host without observability, you haven't cut costs — you've just deferred them to an incident.

## What actually got cheaper

The headline number: **cloud spend down 60%**. But the interesting part is what didn't degrade — auth latency, query performance, uptime. The savings came from right-sizing capacity and removing per-seat-style premiums, not from cutting corners users would feel.

## When I'd make the opposite call

Plenty of teams should stay fully managed: if your ops bench is thin, if the service is a small fraction of spend, or if your traffic is spiky in ways serverless Postgres handles poorly — keep paying. The point isn't "self-host everything." The point is that "we always use managed services" is a policy, not a decision. Policies are how invoices grow 10% at a time.

Run the numbers yearly. Your stack's economics change under your feet.
