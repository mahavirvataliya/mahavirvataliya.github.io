---
title: Meydan Free Zone — AI Voice Agent
tagline: An AI phone agent that calls leads, qualifies them in conversation, and logs the results to a CRM. Sub-800ms latency, on real UAE phone lines.
category: AI
period: 2024 – 2025
role: Architect & builder — telephony, voice AI, and CRM integration
client: Meydan Free Zone (UAE)
featured: false
order: 40
accent: violet
stack:
  - LiveKit (WebRTC)
  - FreeSWITCH
  - Asterisk
  - Yeastar PBX
  - Azure Speech (STT/TTS)
  - Azure OpenAI
  - Python
highlights:
  - "Outbound AI calls conduct structured lead qualification conversations"
  - "Sub-800ms latency with barge-in handling for natural conversation"
  - "Bridged LiveKit WebRTC agent rooms to real UAE phone lines"
  - "Adopted Yeastar PBX for UAE carrier compliance and local DID numbers"
  - "Full call transcription logging and structured lead scoring to CRM"
metrics:
  - { label: "Latency", value: "<800ms" }
  - { label: "Telephony", value: "Real UAE lines" }
  - { label: "Conversation", value: "Barge-in" }
  - { label: "Output", value: "CRM-scored" }
description: A production AI voice agent for Meydan Free Zone (UAE) — outbound qualification calls via LiveKit, Yeastar PBX, and Azure Speech/LLM, with sub-800ms latency and CRM logging.
---

## Overview

I built a **production AI voice agent** for **Meydan Free Zone**, a UAE business-setup consultancy. The flow: a website visitor fills a lead-capture form (name, area of interest, business activity, country), and the system **triggers an outbound AI phone call**. The voice agent conducts a structured qualification conversation — capturing the lead's details, asking qualifying follow-up questions, scoring lead intent, and logging everything (structured answers + score) back to the CRM for prioritised human sales follow-up.

This wasn't a chatbot. It was real **AI making real phone calls to real people in the UAE**, and it had to feel natural.

## The challenge

Conversational AI over telephony is brutally hard. The requirements:

- **Real phone lines in the UAE** — not a sandbox; real PSTN connectivity with carrier compliance.
- **Natural conversation** — sub-800ms latency, or callers hang up.
- **Barge-in** — the agent must react when the caller interrupts, like a real human.
- **Structured output** — the call must capture specific data and a score, not just a transcript.
- **Reliability** — appliance-grade telephony, because dropped calls mean lost leads.

## What I built

### Voice AI stack

**LiveKit WebRTC** agent rooms as the conversational backbone, bridged to **real UAE phone lines**. **Azure Speech** for STT/TTS and **Azure OpenAI** for LLM turn-taking with tool calling — so the agent can ask, capture, and confirm structured information during the call.

### Telephony: why Yeastar

I evaluated **FreeSWITCH** and **Asterisk** for SIP/PSTN connectivity, but adopted **Yeastar PBX** in production for UAE-specific needs: **local UAE DID numbers**, appliance-grade reliability, and carrier compliance. The right tool for the regulatory and reliability context — a classic build-vs-buy decision.

### Conversation quality

Sub-800ms end-to-end latency so the conversation feels live. **Barge-in handling** so the agent stops and listens when the caller speaks over it — the difference between "creepy robot" and "natural assistant." Full call **transcription logging** for every call.

### Structured lead capture → CRM

The agent doesn't just talk — it **captures**: name, area of interest (company setup, licensing, banking), company/business area. It asks **qualifying follow-up questions to score lead intent**, then logs all structured answers plus the score back to the CRM. Sales gets a prioritised queue, not a raw transcript.

### Evaluated alternatives

I evaluated **Pipecat** as a potential conversational framework during the build — the kind of option-weighing that's normal when you're on the edge of a new capability.

## Why it matters

Voice AI in production, on real phone lines, with natural conversation and structured business output — is one of the hardest "AI product" problems to ship. This one ran in production for a paying client with real compliance constraints.

## My role

Architect and builder — the telephony bridging, the voice AI pipeline (LiveKit + Azure Speech/LLM), the structured conversation design, and the CRM integration.
