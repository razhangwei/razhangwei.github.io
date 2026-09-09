---
title: "Evaluation is a product decision"
pubDatetime: 2026-09-02T09:00:00-07:00
description: "Metrics become part of the product when they determine which tradeoffs a learning system is allowed to make."
kind: note
tags:
  - evaluation
  - ml-systems
  - research-notes
---

Metrics do not merely describe a system. They direct attention, set thresholds for change, and eventually influence what gets built. In that sense, the evaluation stack is part of the product.

The risk is not that a metric is imperfect. Every metric is a projection of a richer outcome. The risk is forgetting what was left out of the projection.

For a recommendation system, an offline relevance measure can be a valuable early signal. But it cannot, by itself, tell us whether a change is useful over time, understandable to a person, safe under low confidence, or balanced across the population it serves. Those questions need their own instruments.

A healthy evaluation practice makes the intended tradeoffs visible:

- Which user outcome is this metric meant to proxy?
- What can move in the wrong direction while this metric improves?
- How quickly would we detect that failure?
- Which online or qualitative check closes the gap?

The goal is not a universal scoreboard. It is a decision process that keeps the team honest about what an apparent improvement really means.
