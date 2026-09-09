---
title: "The system is part of the model"
pubDatetime: 2026-06-18T09:00:00-07:00
description: "A useful model is not a component with a score; it is a changing loop between representations, decisions, feedback, and people."
kind: essay
tags:
  - recommendation-systems
  - ml-systems
  - evaluation
---

It is tempting to describe a recommendation system by naming its model: a ranker, a retrieval model, a sequence encoder, an LLM. That description is useful for locating a paper, but incomplete for explaining the behavior users actually see.

A deployed learning system is a loop. It chooses what to show. Those choices shape which interactions are observed. The observations become the next training data. The next model then inherits the history of the previous system’s decisions.

That simple loop has a few practical consequences.

First, a representation is valuable only relative to the decision it supports. A richer user embedding may improve a benchmark while contributing very little if the candidate set already excludes the relevant item. Conversely, a modest retrieval improvement can matter greatly when it gives the ranker a choice it did not have before.

Second, evaluation is not the last step. It determines which changes the team learns from. A metric should be treated as an instrument: it has blind spots, a response time, and a domain in which it is reliable. Multiple measures are not bureaucracy; they are a way to notice when one good-looking number is hiding a tradeoff elsewhere.

Third, operational details deserve intellectual attention. Freshness, feature availability, latency budgets, fallback behavior, and debugging tools can all change the effective model. They determine what signals are present when a decision is made and what can be learned after it fails.

None of this makes individual modeling work less important. It changes the question from _Which model is best?_ to _Which part of the loop is limiting the user outcome right now?_ That is usually the more actionable question—and often the more interesting one.
