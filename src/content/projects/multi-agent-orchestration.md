---
title: Multi-Agent Orchestration Platforms
tagline: Paperclip, Hermes, OpenClaw — LLM agent platforms with governance, audit trails, and evaluation gates so autonomous automation earns trust before it earns scope.
category: AI
period: 2023 – Present
role: Architect — orchestration design, governance, and production evaluation
client: AtliQ Technologies (client deployments)
featured: false
order: 45
accent: indigo
stack:
  - Python
  - FastAPI
  - LangChain
  - OpenAI
  - Ollama
  - Redis
  - PostgreSQL
highlights:
  - "Three deployed platforms (Paperclip, Hermes, OpenClaw) orchestrating LLM agents for real workflows"
  - "Structured-output automation for email, document, and operational pipelines"
  - "Governance and audit trails on every agent action"
  - "Evaluation gates before anything reaches production"
  - "Cost-aware routing between local and hosted models"
metrics:
  - { label: "Platforms", value: "3 deployed" }
  - { label: "Outputs", value: "Structured" }
  - { label: "Actions", value: "Audited" }
  - { label: "Prod entry", value: "Eval-gated" }
description: Multi-agent orchestration platforms (Paperclip, Hermes, OpenClaw) with governance, audit trails, and evaluation gates — LLM automation that earns trust before it earns scope.
---

## Overview

I architected and deployed **three multi-agent orchestration platforms** — **Paperclip, Hermes, and OpenClaw** — that run LLM agents against real business workflows: email processing, document handling, and operational automation. The platforms turn "an LLM could probably do this" into audited, governed pipelines that production systems depend on.

The philosophy across all three: **autonomy is earned in stages.** Agents start scoped, structured, and supervised; they get more responsibility when the evaluation data says they're ready.

## The problem

Businesses have workflows drowning in unstructured input — inbound emails, documents, operational events — where the "processing" is humans reading, classifying, extracting, and routing. Classical automation fails because the inputs don't follow rules. Pure LLM demos fail because they're unreliable.

The gap between "impressive demo" and "trusted production worker" is filled with engineering: structure, evaluation, governance.

## What I built

### Agent orchestration core

A Python/FastAPI orchestration layer where agents are composed as pipelines with defined inputs, outputs, and transitions. Each agent does one job; workflows chain them. Redis-backed state so long-running pipelines survive; PostgreSQL for durable records.

### Structured outputs everywhere

Every agent produces **typed, validated, structured output** — never free text where a schema will do. Email classification returns categories and entities, not prose. Document extraction returns fields, confidence scores, and source references. Downstream systems can rely on the shape.

### Governance & audit trails

Every agent action is logged: what it saw, what it decided, what it did, on whose behalf. When an automation routes an email or updates a record, there's an audit trail explaining exactly why — the non-negotiable for giving agents write access to business systems.

### Evaluation gates before production

No agent workflow reaches production without passing evaluation. Test corpora, golden outputs, regression runs on every change — CI discipline applied to LLM behaviour. This is what lets the platforms evolve without eroding trust.

### Cost-aware model routing

Workflows route between local (Ollama) and hosted models per task: cheap classification stays local; complex reasoning goes to bigger models when the task justifies it. Token cost is a first-class metric, not a month-end surprise.

## Why it matters

These platforms are where my "AI agents as daily leverage" philosophy meets production reality — the same patterns I use personally (Claude Code with custom skills, hooks, and MCP servers), applied to business workflows with the governance that enterprises require.

## My role

Architect — orchestration design, the governance/audit model, structured-output schemas, evaluation infrastructure, and the staged-autonomy rollout model for each deployment.
