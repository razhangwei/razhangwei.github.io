---
title: "Embedding quality has a job to do"
pubDatetime: 2026-08-06T09:00:00-07:00
description: "An embedding is not a product feature. Its quality depends on the decision it enables and the information it leaves behind."
kind: note
tags:
  - representations
  - recommendation-systems
  - ml-systems
  - research-notes
---

“Better embeddings” is an attractive phrase because it compresses several hard questions into one score. Better for what decision? At what point in the system? Under which constraints?

An embedding that groups semantically similar items may be excellent for retrieval. The same compression can be harmful when the next decision needs a fine distinction: a named entity, a freshness cue, a price range, or an unusual but important user intent.

The useful framing is to treat an embedding as a contract. It promises that some distinctions will be easy to recover downstream, while other information can be discarded. The right test is therefore not only nearest-neighbor quality or a representation benchmark. It is whether the embedding makes a specific later decision easier, faster, or more robust.

When an embedding fails, it is also worth asking whether the problem is representation quality at all. The required signal may be absent, stale, or unavailable at serving time. The candidate set may be too narrow. The decoder or ranker may not know how to use what the representation has preserved.

That diagnosis is slower than asking for a larger encoder. It is also much more likely to point to the right intervention.
