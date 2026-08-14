---
title: "An org-wide secure deployment platform with Cloudflare Zero Trust + Coolify"
description: "When AI tools let anyone ship an app in a day, 'no' stops working. How we built guardrails: Cloudflare Zero Trust for access, Coolify for deployment, audit trails for trust."
pubDate: 2026-05-18
tags: ["Cloudflare", "DevOps", "Platform Engineering"]
relatedProject: zero-trust-deployment-platform
---

AI coding agents changed something fundamental inside companies: the rate at which internal tools get *created*. When engineers — and increasingly non-engineers — can spin up a working dashboard or automation in a day, the bottleneck moves from building to **deploying safely**.

I run the platform that solves this for our organisation. If every AI-built tool had to go through a two-week security review, people would route around the process. If there were no process, one leaked secret or exposed database would end the whole experiment. The answer isn't a gate — it's **guardrails**.

## The architecture: two jobs, two tools

**Cloudflare Zero Trust** handles *access*. Every internal tool sits behind Cloudflare's edge, authenticated against our identity provider. No tool is exposed to the public internet; no shared VPN credentials floating around; access policies centralized and auditable. Whether someone is at the office or a café, the experience is identical — log in through the identity flow, and Cloudflare enforces the rest.

**Coolify** handles *deployment*. It's a self-hosted PaaS: push code, get a running service with TLS, and let teams own their deployments without each one hand-rolling Docker-compose-on-a-VM. Standardized enough that every tool gets the same baseline, flexible enough that teams aren't fighting it.

The division of labor is deliberate: Cloudflare answers "*who can reach this?*" Coolify answers "*how does this get shipped?*" Keeping those separate means either can evolve without breaking the other.

## What "guardrails not gates" means in practice

- **Fast by default.** A new internal tool goes from repo to deployed behind Zero Trust quickly. If the paved road is slower than the dirt path, people take the dirt path.
- **Safe by default.** The baseline includes TLS, authentication, and no public exposure — security that comes with the platform, not a checklist each team remembers to run.
- **Observable by default.** Deployments and access flow through centralized logs. When someone asks "who changed what," there's an answer.
- **Escape hatches exist, but they're visible.** Teams can do special things — and the platform shows it, rather than forbidding it.

## The part nobody warns you about

The technical build is maybe half the work. The other half is trust: showing teams the platform makes them *faster*, not policed. Every early win mattered — the first team that shipped in an hour what used to take a week became the platform's best sales pitch.

AI keeps lowering the cost of building software. Platforms like this are how an organisation says yes to that speed without betting its security posture on hope.
