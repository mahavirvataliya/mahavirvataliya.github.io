---
title: "Evaluation gates: keeping hallucinations out of production LLM products"
description: "Demos are easy. Production is a different sport. How we gate LLM answers with retrieval scoping, mandatory citations, confidence evaluation, and human-in-the-loop review."
pubDate: 2026-08-05
tags: ["AI", "Production", "RAG"]
relatedProject: knogen-ai
---

Everyone can build an LLM demo. The gap between a demo and a production product is where the actual engineering lives. On Knogen.ai — an enterprise agentic RAG platform I architected — we serve answers grounded in company documents, with role-based access control, to users who will act on what we tell them. That last part changes everything about how you build.

Here are the four gates that made it shippable.

## Gate 1: Scope retrieval before the model ever runs

Most "RAG leaks" aren't the model's fault — they're retrieval's fault. If the vector search can surface a document the user isn't allowed to see, no amount of prompt engineering saves you.

So we enforce RBAC **at the query layer**: retrieval filters by the calling user's permissions *before* anything is passed to the LLM. The model physically cannot quote what it was never given. Access control belongs in code, not in the prompt.

## Gate 2: No citations, no answer

Every response includes inline citations linking back to the exact source document and chunk. This does two things:

1. **Users can verify** — trust in an enterprise tool is built one clickable citation at a time.
2. **It constrains the model** — generation anchored to specific passages drifts far less than open-ended answering.

If the retrieval step can't find grounding passages, the product says "I don't have anything on that" instead of improvising. A refusal is a feature.

## Gate 3: Evaluate confidence before the user sees it

We score responses before they're returned. Low-confidence answers don't reach the screen — they route to human review. Think of it as a merge check for generated content: CI for text.

This is also where hallucination management becomes measurable. You're no longer arguing about vibes; you're watching a gate metric and tightening retrieval or prompts until it passes.

## Gate 4: Route by cost and privacy, per deployment

Not every query needs the biggest hosted model. We route between local models (Ollama) and hosted ones per deployment and per query type — sensitive installations run fully on-prem, cheap flows run small. AI cost control is an architecture decision, not an afterthought.

## The mental model

Treat the LLM like a brilliant new hire with zero institutional context: you wouldn't let them answer customers unsupervised on day one. You'd give them exactly the files they need (scoped retrieval), require them to cite sources, review their drafts until they earn trust (evaluation gates), and decide which questions are worth their expensive time (routing).

That's the whole trick. The model is the easy part.
