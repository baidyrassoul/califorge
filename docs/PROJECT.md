# CaliForge — Product Blueprint

> **Status:** Planning — v0.1
> **Horizon:** 12 months (start → public launch)
> **Budget:** 0 € (100% open-source / free-tier stack)
> **Team:** 2 (product owner + developer)

---

## 1. Vision

CaliForge turns calisthenics training into a real game. Every athlete — from
their first push-up to the full planche — gets a **personal skill tree**, an
**XP & level system**, **quests**, and **challenges against friends**.

We are not another generic workout tracker. We are the **RPG of bodyweight
training**: progression is our core mechanic, because calisthenics is the one
sport where progression genuinely IS a skill tree.

## 2. Problem

1. Calisthenics has the best natural progression system in fitness (pull-up →
   chest-to-bar → muscle-up → ...) but nobody owns it digitally.
2. Existing apps are either generic gym trackers or video libraries. None treat
   skills as a game or make progression *visible* and *social*.
3. Practitioners quit during plateaus: no feedback loop, no "what's next",
   no recognition of progress that doesn't happen linearly.

## 3. Product (v1 — 12 months)

A progressive web app (installable on phone + desktop), English-first with
French support, containing:

| System | Description |
|---|---|
| **Skill tree engine** | Domain model of ~100 skills across categories (Push, Pull, Core, Legs, Handstand, Straight-arm). Each skill = a ranked chain of progressions with prerequisites and unlock criteria. |
| **Training tracker** | Log sessions in seconds: sets, reps, hold time, RPE, notes. PR detection, volume & strength analytics. |
| **Gamification engine** | XP for training + achievements, levels, titles, badges, streaks, daily quests. Deterministic, auditable rules. |
| **Social layer** | Squads (groups), 1v1 and group challenges, leaderboards (global, squad, friends), lightweight activity feed. |
| **Accounts & profiles** | Email + OAuth sign-in, public profile with skill badge display ("3 pull-ups", "front lever in progress"). |
| **Monetization** | Pro subscription (Stripe): advanced analytics, additional quest lines, priority features. Free tier is genuinely useful. |
| **Admin / ops** | Content management for skills & quests, user moderation, basic usage analytics. |

## 4. What we are NOT building (v1)

- No user-generated video hosting (costs thousands €/month — deferred).
- No native iOS/Android apps (PWA covers v1; revisit with React Native/Expo
  post-launch if traction justifies it).
- No real-time chat (squads use challenges + feed; chat = stretch goal).
- No marketplace/coaching bookings in v1.

## 5. Success metrics (launch + 6 months)

- **Activation:** ≥ 60% of signups complete onboarding (pick skill tree + first log).
- **Retention:** ≥ 35% D30 for users who log a session in week 1.
- **Social:** ≥ 25% of active users are in a squad or have completed a challenge.
- **Revenue:** ≥ 5% conversion to Pro, positive gross margin, payback < 12 months.
- **Quality:** < 1% crash/session rate; no P1 bugs open > 3 days.

## 6. Product principles

1. **Progression is the product.** Every screen answers: *"what do I do next?"*
2. **Speed of logging wins.** A session must be loggable in < 20 seconds.
3. **Fair, deterministic gamification.** No pay-to-win, no artificial grind.
   XP rules are documented and computed in one engine (testable).
4. **Works offline-first.** Your training log must never depend on a network.
5. **Privacy by default.** Public profiles are opt-in; no data sold, no spam.
6. **Accessible & cheap.** Free tier is genuinely useful; Pro is a real upgrade.

## 7. Team responsibilities

| Role | Person | Duties |
|---|---|---|
| Product owner | You | Vision, feature priority, community outreach, validation interviews, launch |
| Developer | Me (opencode) | Architecture, implementation, tests, CI/CD, deployment, technical docs |

Weekly rhythm: **1 planning session + 1 review** (see `WORKFLOW.md`).
