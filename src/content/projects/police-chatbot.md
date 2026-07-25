---
title: Police Department AI Chatbot
tagline: Production LLM product for a major US police department — two retrieval flows (documents + crime data), citations, caching, and feedback logging.
category: AI
period: "2025"
role: Builder — retrieval design, embedding pipeline, and production safeguards
client: Major US police department
featured: false
order: 50
accent: amber
stack:
  - PHP
  - OpenAI
  - Ollama
  - Embeddings
  - SQL
highlights:
  - "Two retrieval flows: embeddings for documents, strict SQL for crime data"
  - "Background embedding pipeline with retry controls"
  - "Citations in every response for verifiability"
  - "Response caching for performance and cost"
  - "User feedback logging for continuous improvement"
metrics:
  - { label: "Retrieval", value: "Dual-flow" }
  - { label: "Answers", value: "Cited" }
  - { label: "Pipeline", value: "Retry-safe" }
  - { label: "Improvement", value: "Feedback-logged" }
description: A production LLM product for a major US police department — dual retrieval flows (document embeddings + strict SQL), citations, response caching, and user feedback logging.
---

## Overview

A **production LLM product** for a **major US police department**. It's a chatbot, but the interesting engineering is in the **retrieval design**: two completely different retrieval flows depending on what the user is asking, because documents and structured crime data need fundamentally different handling.

The unifying principle across both flows is **trust** — every answer must be grounded, citable, and improvable based on real usage.

## The challenge

A police department's data is a mix of **unstructured documents** (policies, reports, manuals) and **structured crime data** (records, statistics, queries). One retrieval strategy can't serve both well. On top of that:

- **Answers must be verifiable** — citations are non-negotiable for a government context.
- **The pipeline must be resilient** — embedding large document sets can't fail silently.
- **Performance and cost matter** — not every repeat question should hit the LLM.
- **It must improve over time** — feedback is how you find the gaps.

## What I built

### Dual retrieval flows

- **Document Q&A** uses an **embeddings-based** flow — semantic retrieval over unstructured documents, so users can ask natural-language questions and get the relevant passages back.
- **Crime-data Q&A** uses **strict SQL** — the LLM generates a query against the structured database rather than "recalling" facts, so the answer is exact and auditable, never hallucinated.

Choosing the right retrieval strategy per question type is what made this product trustworthy.

### Background embedding pipeline

A background pipeline processes documents into embeddings with **retry controls** — so a large document set ingests reliably and failed items get retried rather than dropped.

### Citations

Every response includes **citations** pointing back to the source — essential for a context where an answer's provenance matters as much as the answer itself.

### Response caching

Caching repeated responses for **performance and cost** — so identical or near-identical questions don't re-run the expensive pipeline.

### Feedback logging

**User feedback logging** captures thumbs-up/down and corrections, feeding a continuous-improvement loop — the foundation for evaluating and refining the product over time.

## Why it matters

This is a textbook "AI in a high-stakes, low-tolerance-for-hallucination" context. The product works because of the retrieval discipline (two flows, not one), the production safeguards (retries, citations), and the improvement loop (feedback). It's the opposite of a vibe-coded chatbot.

## My role

Builder — the dual-flow retrieval design, the embedding pipeline, the citation and caching layer, and the feedback-logging system.
