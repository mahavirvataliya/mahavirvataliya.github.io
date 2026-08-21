---
title: Whimstay
tagline: The NextJS booking experience for Whimstay — a stay-search UI built around a custom availability calendar and interactive map.
category: Web
period: "2024"
role: Front-end engineer — NextJS UI, calendar & maps experiences
client: Whimstay (whimstay.com)
order: 35
accent: amber
stack:
  - NextJS
  - React
  - TypeScript
  - Custom calendar control
  - Interactive maps
  - REST APIs
links:
  live: https://whimstay.com
highlights:
  - "Built the NextJS front-end for Whimstay's stay-booking experience"
  - "Custom calendar control for date-range search — availability, selection, and pricing state kept in sync"
  - "Interactive map control — browse stays by location with performant marker handling"
  - "Calendar and map state share one URL, so every search is linkable and shareable"
metrics:
  - { label: "Front-end", value: "NextJS" }
  - { label: "Search", value: "Calendar + Maps" }
  - { label: "Language", value: "TypeScript" }
  - { label: "Live", value: "whimstay.com" }
description: Whimstay — the NextJS booking front-end with a custom availability calendar control and interactive map search for finding stays.
---

## Overview

**Whimstay** is a platform for finding and booking stays. I built the **NextJS front-end**, and the two pieces that define the product experience are the two hardest UI problems in travel: a **calendar control** for date-range search and a **map control** for exploring stays by location.

Travel UIs live or die on these two controls — they're where users spend their time, where state gets complicated, and where slow or janky rendering kills a booking flow.

## The challenge

- **Date-range search is deceptively hard** — selection, availability, minimum stays, and pricing all have to stay consistent across the calendar, the map, and the results.
- **Maps are a performance problem** — hundreds of properties on screen at once, and every pan or zoom is a chance to drop frames.
- **The two controls have to agree** — pick dates on the calendar, the map reacts; drag the map, the results and pricing update. One source of truth, no stale state.

## What I built

### Calendar control

A custom **date-range calendar** for search and booking: range selection, availability awareness, and pricing that updates with the chosen dates. Built to stay fast and responsive while the underlying data refreshes.

### Map control

An **interactive map** for browsing stays geographically — performant rendering with many properties on screen, smooth pan/zoom, and selection that ties each marker back to its listing.

### One shared search state

Calendar, map, and results all read from a single shared state that syncs to the URL. Every search is **linkable and shareable** — send someone a URL and they land in exactly the same view.

## Why it matters

Travel booking is a frontend-performance and state-management problem dressed up as a website. This project is a showcase of the kind of front-end engineering I enjoy most: rich, interactive controls with real complexity behind them, shipped in NextJS with everything in TypeScript.

## My role

Front-end engineer on the NextJS application — the calendar control, the map control, and the shared search-state architecture that keeps them consistent.
