---
title: Knogen.ai
tagline: An enterprise RAG platform — ask questions across your company documents, get answers with citations and permissions enforced.
category: AI
period: 2024 – Present
role: Chief Architect — end-to-end ownership from customer requirements to production
client: AtliQ Technologies (enterprise deployments)
featured: true
order: 10
accent: indigo
stack:
  - Python
  - FastAPI
  - LangChain
  - Milvus
  - Azure AI Foundry
  - Ollama
  - OpenAI
  - SharePoint
highlights:
  - "Enterprise RAG with RBAC-scoped retrieval and grounded, cited answers"
  - "Cost-aware routing between local (Ollama) and hosted models for privacy + cost control"
  - "Document automation via SharePoint ingestion with auto-sync and embedding pipelines"
  - "Hallucination management and evaluation gates before anything reaches production"
  - "Human-in-the-loop review and per-deployment licensing"
metrics:
  - { label: "Latency", value: "Sub-2s retrieval" }
  - { label: "Privacy", value: "On-prem option" }
  - { label: "Cost", value: "Local routing" }
  - { label: "Reliability", value: "Eval-gated" }
description: Knogen.ai — a production enterprise agentic RAG platform with document automation, RBAC retrieval, grounded citations, and cost-aware model routing. Built with Python, FastAPI, LangChain, and Milvus.
---

## Overview

Knogen.ai is a production-grade enterprise **agentic Retrieval-Augmented Generation (RAG)** platform I architected and shipped end-to-end. It lets large organisations point the system at their document repositories (SharePoint, file shares), automatically ingest and embed the content, and then give employees an AI assistant that answers questions **grounded in their own documents — with citations they can click and verify**.

The differentiator isn't the demo; it's the production discipline. Every answer is RBAC-scoped (users only see what they're authorised to see), citations are mandatory, hallucinations are managed through evaluation gates, and there's a human-in-the-loop review path for sensitive flows.

## The problem

Enterprise teams have thousands of documents in SharePoint and shared drives, but no reliable way to "ask a question" across them. Generic LLM tools hallucinate; they don't know the company's documents; and they leak data. Enterprises needed:

- **Grounded answers** — every claim tied to a source document.
- **Access control** — answers respect the user's document permissions.
- **Privacy options** — ability to run models on-prem for sensitive data.
- **Cost control** — not every query needs an expensive hosted model.
- **Trust** — a way to evaluate quality before and after shipping.

## What I built

### Document ingestion & auto-sync

SharePoint ingestion with **auto-sync** keeps the vector store fresh without manual re-imports. A background pipeline converts documents to text, chunks them, and generates embeddings stored in **Milvus** (purpose-built vector database). Retry controls and failed-sync recovery mean a flaky source never silently drops content.

### Embedding pipeline

A typed, observable embedding pipeline that runs on a schedule and on webhooks. Re-embeds only what changed. Tracks provenance so a citation always points back to the exact source chunk.

### RBAC-scoped retrieval

Retrieval is filtered by the calling user's permissions **before** it ever reaches the LLM — so the model physically cannot surface a document the user isn't allowed to see. This is enforced at the query layer, not as a prompt instruction.

### Grounded citations & hallucination management

Every answer includes inline citations linking back to the source document and chunk. An **evaluation gate** scores responses before they're returned; low-confidence answers are routed to human review instead of shown. This is what made it ship-ready for enterprise.

### Cost-aware model routing

A routing layer chooses between **local models (Ollama)** and **hosted models (Azure OpenAI / OpenAI)** per deployment and per query type — balancing privacy, latency, and cost. Sensitive deployments can run fully on-prem; cost-sensitive flows can use a smaller local model.

### Admin, licensing, and governance

A full admin panel, per-deployment licensing, and audit trails — the operational surface an enterprise needs to actually deploy and manage the product.

## Why it matters

Knogen.ai is the kind of AI product that works **because** of the engineering around the model, not despite it: retrieval that respects permissions, citations that build trust, evaluation that catches bad answers, and routing that controls cost. It's in production with real enterprise deployments.

## My role

End-to-end ownership — from sitting in customer discovery calls to translate "we want to search our documents with AI" into concrete requirements, through architecture and implementation, to deployment, observability, and iteration from production behaviour.
