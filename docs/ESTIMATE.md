# CaliForge — Time Estimate

> Realistic estimate based on the feature inventory (`FEATURES.md`) and the
> roadmap (`ROADMAP.md`). Updated when we learn new things (actual speed).
>
> **Model:** you have 5–15 h/week. I code; you product-own (validation,
> content curation, community, priorities). Assumes no long breaks and an
> average of **~10 productive h/week** (the middle of your range).

---

## Grand total (v1, full scope)

| Effort | Hours | At 5 h/wk | At 10 h/wk | At 15 h/wk |
|---|---|---|---|---|
| **All phases 0→6** | **~440–560 h** | ~22–26 months | **~11–13 months** | ~7–9 months |

**Bottom line:** the 12-month roadmap assumes we hold ~10 h/week average.
At 5 h/week it stretches past 18 months. At 15 h/week we can finish early.

---

## Per-phase breakdown

| Phase | Work | Est. hours | Weeks @10h/wk |
|---|---|---|---|
| **0 — Foundations** | toolchain, repo, CI, design system, domain skeleton, validation close | 35–45 h | 3–4 |
| **1 — Core loop** | auth, onboarding, skill tree UI, content seed (~100 skills), log, PR, stats, RLS | 105–135 h | 10–13 |
| **2 — Gamification** | XP, levels, achievements, streaks, daily quests, titles | 60–80 h | 6–8 |
| **3 — Social** | squads, challenges, leaderboards, feed, profiles, notifications | 70–90 h | 7–9 |
| **4 — Monetization & hardening** | Stripe, Pro features, GDPR, monitoring, perf/a11y, i18n FR | 60–80 h | 6–8 |
| **5 — Beta & community** | cohort, funnels, feedback iterations, content expansion | 55–85 h | 6–8 |
| **6 — Launch** | QA, launch, growth experiments, revenue dashboard | 40–60 h | 4–6 |

**Σ ≈ 440–560 h** (≈ 12–14 months of the calendar at ~10 h/week, incl. buffer
for meetings, docs, unexpected friction — the roadmap's 12 months is achievable
if we cut smart when needed).

---

## Biggest time sinks (be careful)

1. **Content curation (~25–35 h, Phase 1):** curating ~100 skills × progressions
   with correct criteria is real work. Mitigation: you (PO) curate with me in
   parallel sessions; start early, it doesn't need the app to be done.
2. **Skill tree UI (~20–25 h):** the interactive tree is the showpiece. Plan for
   a few iterations on UX.
3. **Stripe integration (~16–20 h):** checkout + portal + webhooks + entitlement
   checks server-side. Tedious but well-trodden.
4. **i18n FR (~10–14 h):** all strings, date/plural handling. Cheap if we use
   next-intl from day 1 (not retrofitted).

---

## How to hit the estimate (protect the plan)

- **Hold ~10 h/week.** A 5 h/week month silently adds ~2 months to the plan.
- **Cut scope, never quality** (see `WORKFLOW.md` DoD). The P2 features in
  `FEATURES.md` are the safety valves.
- **Content curation starts in Week 2**, not Week 10.
- **One milestone at a time** — exit criteria in `ROADMAP.md` are the gates;
  no phase starts until the previous one is green.

---

## What a slip looks like (early-warning triggers)

- 2 consecutive weeks with < 5 h logged → add a buffer week, re-plan with PO.
- A phase overruns by > 25% → cut its P2 items at the next planning session.
- Validation (Phase 0) finds a weak assumption → we may pivot; pivoting *before*
  Phase 1 is cheap, pivoting after is expensive. That's why we validate first.

---

## Milestones on the calendar (nominal, 10 h/wk)

| Date (start) | Milestone | Phase |
|---|---|---|
| Week 1 | Repo + CI green + landing live | 0 |
| Week 4 | Validation decision (go/pivot/stop) | 0 |
| Week 13 | Core loop demo (signup → log → progress) | 1 |
| Week 20 | Gamification demo (XP, levels, achievements) | 2 |
| Week 28 | Social demo (squads + challenges) | 3 |
| Week 36 | Paying Pro flow demo | 4 |
| Week 44 | Beta decision gate | 5 |
| Week 52 | **Public launch** | 6 |
