# CaliForge — MVP Definition

> **MVP = Minimum Viable Product:** the smallest thing we can put in real users'
> hands that proves our #1 assumption — *"a gamified skill tree keeps
> calisthenics practitioners coming back."*
>
> MVP ≠ Phase 1 only. MVP = Phases 1 + the core of Phase 2 (XP/levels/streaks),
> because gamification is the differentiator, not the tracker.

---

## The MVP in one sentence

> **"Sign up, see your skill tree, log a workout in 20 seconds, earn XP, level
> up, come back tomorrow."** — single user, web, English.

## What's IN the MVP (priority P0 only)

| # | Feature | Why it's in |
|---|---|---|
| 1 | Auth (email + Google) | Account = persistence of progress |
| 2 | Onboarding (4 steps) | Auto-seeds your skill tree from your level — no blank state |
| 3 | Skill tree (6 categories, **~50 skills** to start) | The heart of the product; proves the positioning |
| 4 | Session log (< 20 s, works offline) | The habit loop — must be frictionless |
| 5 | PR detection | Instant feedback = dopamine |
| 6 | XP + levels + streak | The "game" that drives the daily return |
| 7 | Simple profile (level, XP, skills in progress) | Identity + shareability of progress |

## What's OUT of the MVP (and why)

| Feature | Goes in | Reason it waits |
|---|---|---|
| Squads / challenges / leaderboards | Phase 3 | Only useful with critical mass; adds months |
| Payments / Pro tier | Phase 4 | Freemium needs an audience first |
| 100+ skills content | Phase 5 expansion | 50 well-curated beats 100 mediocre |
| i18n FR | Phase 4 | English validation is faster |
| Full achievements set | Phase 2 → keep ~5-8 in MVP | The XP loop is the driver, not the badge count |
| Public profiles / notifications | Phase 3 | No social yet |
| Admin panel | Phase 4 | We can seed via SQL early on |

## MVP success criteria (measured on 100 beta users, 30 days)

1. **Activation:** ≥ 60% of signups finish onboarding + log ≥ 1 session
2. **Retention:** ≥ 35% of week-1 active users are still active at day 30
3. **Loop time:** median "open → logged session" < 60 seconds
4. **Bugs:** no data-loss bugs (a lost log = a lost user); everything else triaged

If D30 ≥ 35% → invest in social + monetization (phases 3-4).
If D30 15-35% → iterate on the loop (more quests, better onboarding) before social.
If D30 < 15% → the core assumption is wrong: **pivot** (cheap, because MVP is small).

## MVP plan (from the roadmap)

| Phase | Duration | Delivers |
|---|---|---|
| 0 | Weeks 1-4 | Toolchain, repo, CI, domain engine, validation decision |
| 1 | Weeks 5-13 | The 7 MVP features above |
| 2 (core) | Weeks 13-16 | XP wiring, levels, streaks, first achievements |

→ **MVP live in beta ≈ Week 16** (then Phase 3+ continues behind or after).

## MVP cost & stack

- Budget: **0 €/month** (Vercel free, Supabase free, GitHub free)
- No Stripe needed (no payments in MVP)
- PWA so users can install it on their phone without a store
