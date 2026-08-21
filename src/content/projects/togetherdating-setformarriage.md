---
title: TogetherDating & SetForMarriage
tagline: Two React Native dating apps on one serverless AWS Lambda platform — Algolia search, DynamoDB, and GetStream chat.
category: Mobile
period: "2020 – 2022"
role: Full-stack engineer — serverless backend and React Native apps
client: TogetherDating / SetForMarriage
order: 55
accent: rose
stack:
  - AWS Lambda
  - NodeJS
  - React Native
  - Algolia
  - DynamoDB
  - GetStream
highlights:
  - "Two dating products — TogetherDating and SetForMarriage — on one shared serverless platform"
  - "AWS Lambda + NodeJS backend: no servers to run, pay-per-request, scales with the app"
  - "React Native apps for iOS and Android from a shared codebase, branded per product"
  - "Algolia for instant, faceted match discovery and search"
  - "DynamoDB as the low-ops, high-scale data backbone"
  - "Real-time chat powered by GetStream"
metrics:
  - { label: "Backend", value: "AWS Lambda" }
  - { label: "Apps", value: "React Native" }
  - { label: "Search", value: "Algolia" }
  - { label: "Chat", value: "GetStream" }
description: TogetherDating & SetForMarriage — two React Native dating apps on a serverless AWS Lambda platform with NodeJS, Algolia, DynamoDB, and GetStream chat.
---

## Overview

**TogetherDating** and **SetForMarriage** are two dating products with distinct brands and audiences. I helped build both on a single **serverless platform**: an **AWS Lambda + NodeJS** backend, **React Native** mobile apps, **Algolia** for match discovery, **DynamoDB** for data, and **GetStream** for real-time chat.

The interesting part was the architecture decision: one serverless backend powering two products, so every improvement to matching, chat, or notifications shipped to both.

## The challenge

Dating apps have a brutal profile for infrastructure: traffic that spikes hard (evenings, weekends), features that are cheap to demo but expensive to run at scale (search, chat, matching), and no guarantee the product finds its audience. Running always-on servers for two unproven products would have burned money while they found traction.

## What I built

### Serverless backend on AWS Lambda

A **NodeJS** API layer on **AWS Lambda** — no idle servers, no patching, pay-per-request. New endpoints deploy independently, and the platform scales with the apps' evening and weekend spikes without anyone capacity-planning for Valentine's Day.

### React Native apps, two brands

**React Native** apps for iOS and Android from a shared codebase, branded per product. One feature built ships to both apps; the brand differences live in configuration, not forks.

### Match discovery with Algolia

**Algolia** powers instant, faceted search over profiles — filter by distance, age, and preferences and get results as you type. Search is core to the product, and it's the kind of feature that's painful to self-run but trivial to get right with Algolia.

### DynamoDB + GetStream

**DynamoDB** for profile and activity data — low-ops, and it takes traffic spikes without breaking a sweat. **GetStream** for real-time chat: typing indicators, delivery states, and message history without building and operating a chat infrastructure from scratch.

## Why it matters

This project is a case study in **buying the hard parts and owning the product**: serverless compute, managed search, and managed chat let a small team run two full dating products end-to-end — matching, chat, notifications — while spending their time on the product instead of the plumbing.

## My role

Full-stack engineer across the platform — the Lambda/NodeJS backend, the React Native apps, and the Algolia, DynamoDB, and GetStream integrations.
