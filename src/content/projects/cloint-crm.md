---
title: Cloint — B2B SaaS CRM
tagline: A multi-role B2B CRM with built-in phone calling and event-driven data imports.
category: Web
period: 2018 – 2020
role: Software Engineer — full-stack build, including mobile + backend
client: Infobizzs Services Pvt Ltd
featured: false
order: 60
accent: rose
stack:
  - Laravel
  - React Native
  - Twilio (VoIP)
  - RabbitMQ
  - Redis
  - AWS
  - MySQL
highlights:
  - "Multi-role CRM with workflows, pipelines, statuses, tasks, notifications"
  - "In-app Twilio VoIP calling for staff and vendors"
  - "Event-driven Python data-import microservices (RabbitMQ/Redis)"
  - "Converted a monolith into a 12-factor distributed system"
  - "Multi-tenant SaaS serving staff, vendor, and customer roles"
metrics:
  - { label: "Architecture", value: "12-factor" }
  - { label: "Roles", value: "Multi-tenant" }
  - { label: "Calling", value: "Twilio VoIP" }
  - { label: "Imports", value: "Event-driven" }
description: Cloint — an operations-heavy B2B SaaS CRM built with Laravel, React Native, Twilio VoIP, and event-driven Python data-import microservices.
---

## Overview

**Cloint** was an operations-heavy **B2B SaaS CRM** — the kind of product where "CRM" undersells it. It had multi-role workflows, pipelines, statuses, tasks, notifications, and **in-app voice calling**. I built it full-stack and, over time, **converted the monolith into a 12-factor distributed system**.

This is the project where I cut my teeth on production B2B software: real operational complexity, real money (VoIP minutes), and real scale on data imports.

## The challenge

A B2B CRM used by **staff, vendors, and customers** — each with different roles, permissions, and workflows. Operations teams live in it all day, so it had to be fast and reliable. On top of that:

- **Calling inside the app** — staff should be able to call leads/vendors without leaving the CRM.
- **Heavy data imports** — bulk data coming in from external sources, constantly.
- **Multi-tenant** — different organisations and roles, properly isolated.
- **It had to scale beyond a single monolith** as usage grew.

## What I built

### Multi-role operations CRM

A full CRM with **pipelines, statuses, tasks, and notifications** — the operational backbone. Multi-role design serving **staff, vendor, and customer roles**, each with the right visibility and permissions. Multi-tenant SaaS so different organisations were properly isolated.

### In-app Twilio VoIP calling

**Twilio VoIP** calling built into the app — staff could call leads and vendors directly from the CRM without switching tools. This was a real differentiator for an operations team: the call, the context, and the follow-up task all in one place.

### Event-driven data imports

**Event-driven Python microservices** (RabbitMQ/Redis) handled the heavy data-import workload — bulk data from external sources ingested asynchronously, so the main app stayed responsive. This was the beginning of the move off the monolith.

### Monolith → 12-factor distributed system

I converted the original Laravel monolith into a **12-factor distributed system** — decoupling the import workers, the calling logic, and the core CRM. The kind of architecture work that pays off forever: each piece independently deployable and scalable.

### React Native mobile

A **React Native** mobile app so field staff could work from anywhere — same workflows, optimised for mobile.

## Why it matters

Cloint taught me that operations-heavy B2B software is won and lost on the operational details: the calling integration that actually works, the data imports that don't time out, the multi-role permissions that are correct. It's also where I first did serious distributed-systems work — the monolith-to-12-factor conversion.

## My role

Software Engineer — full-stack build of the CRM, the React Native mobile app, the Twilio VoIP integration, the event-driven Python import microservices, and the monolith-to-distributed-system conversion.
