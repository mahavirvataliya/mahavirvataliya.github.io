---
title: "From 4 seconds to 100ms: finding the real bottleneck with production traces"
description: "The database wasn't slow — one stored procedure was. Why guessing at performance almost always loses to production traces, and what the trace actually showed."
pubDate: 2026-06-10
tags: ["Performance", "Observability", "MySQL"]
relatedProject: codebasics-io
---

We had a "slow database." That was the diagnosis floating around: the platform serves 1M+ users, traffic keeps growing, obviously the database is the problem — time to shard, time to migrate, time for something dramatic.

The dramatic fix felt right. It was also wrong. The database wasn't slow. **One stored procedure was slow**, and traces proved it.

## Intuition is a hypothesis, not a diagnosis

When performance degrades, everyone has a theory. The problem with theories is that they're assembled from what people remember: that slow page last Tuesday, a spike in traffic, a release that shipped around then. Memory samples badly.

So before touching anything, we pulled traces — New Relic and CloudWatch on the hot paths — and ranked where time actually went. Near the top, one critical stored procedure averaging around **4 seconds**. Everything downstream queued behind it.

## What the trace showed

The usual suspects, in the usual lineup:

- A query plan that had drifted as data grew — an index that used to be selective wasn't anymore
- More rows scanned than the result set returned — the classic signature of a missing composite index
- Work being done inside the procedure that could've been a set operation

No exotic pathology. Just a query doing dramatically more work than it needed to, amplified by every request hitting it.

## The fix was boring. That's the point.

Indexes rewritten, the procedure restructured, the plan re-checked. **4 seconds to ~100ms.** Overall database performance improved **30%** — from one change, found by reading a trace instead of re-architecting.

The tempting alternative — shard the database, add a cache layer everywhere, migrate engines — would have cost weeks, added permanent complexity, and *not fixed the actual problem*.

## The rule I took from this

**Trace first, always.** Production traces are the only witness that doesn't speculate. On any performance issue, my sequence is:

1. Measure where time actually goes (traces, not memory)
2. Fix the single biggest consumer
3. Re-measure
4. Repeat if still worth it

Scaling infrastructure to hide an unindexed query is the most expensive way to change nothing.
