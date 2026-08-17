# CaliForge — 12-Month Roadmap

> Working plan. Each phase has an **exit criterion**: the phase is done only
> when it's met and demoed to the product owner. We never start phase N+1
> while phase N's exit criterion is red.

Time budget: 5–15 h/week shared. Assume ~12 productive days/month.

---

## Phase 0 — Foundations (Weeks 1–4)

**Goal:** toolchain, repo, CI, design system, domain skeleton, and *validated*
product assumptions.

### Deliverables
- [ ] GitHub repo, branch protection, GitHub Project board, issue templates
- [ ] Next.js + TS + Tailwind project boots, runs locally, deploys to Vercel
- [ ] CI pipeline green: typecheck, lint, unit tests, Playwright smoke
- [ ] Design system (colors, typography, spacing, components) — dark theme
- [ ] `packages/domain` skeleton with skill-tree & XP engines + first tests
- [ ] **Validation closed:** ≥ 50 survey responses analyzed (see `SURVEY.md`),
      results documented in `RESEARCH.md`, roadmap adjusted accordingly
- [ ] Landing page live (from `landing/`) with waitlist collecting emails

### Exit criterion
The pipeline is green, the landing page is live, and we have a written
validation report that confirms or kills the core assumptions before Phase 1.

---

## Phase 1 — Core loop: Skill tree + Tracker (Weeks 5–12)

**Goal:** a single user can sign up, see a skill tree, log a workout, and see
their progress update. No gamification yet, no social.

### Deliverables
- [ ] Auth (email + Google OAuth), profiles, onboarding flow
- [ ] Content: seed ~100 skills × progressions (curated from real progression
      guides; reviewed by the product owner / community)
- [ ] Skill tree UI: interactive, filters by category, status badges
- [ ] Session logging: quick form (< 20 s), sets/reps/hold/RPE, offline-tolerant
- [ ] Personal records detection (rep PR, hold PR)
- [ ] Stats page: weekly volume, per-skill history (charts)
- [ ] RLS policies + tests for all new tables

### Exit criterion
**A fresh user goes from signup → first logged session → skill marked
"in progress" in under 3 minutes**, with their data persisted and reloadable.
Demo to product owner.

---

## Phase 2 — Gamification engine (Weeks 13–20)

**Goal:** XP, levels, achievements, streaks, daily quests — deterministic and fair.

### Deliverables
- [ ] XP engine wired into session logging (reason-tagged xp_events)
- [ ] Level curve, level-up UX (animation, unlock banner)
- [ ] Achievement system (criteria engine) + ~25 initial achievements
- [ ] Streak tracking + streak freeze mechanic (as per validated design)
- [ ] Daily quests (rotation) + quest progress UI
- [ ] Titles/badges shown on profile
- [ ] E2E: log 3 sessions → level up → achievement unlocked

### Exit criterion
XP totals, levels and achievements are **identical whether computed by the
domain engine, the DB, or a manual recount** (property test). A user feels the
"game" loop within a week of use. Demo to product owner.

---

## Phase 3 — Social layer (Weeks 21–28)

**Goal:** squads, challenges, leaderboards, activity feed.

### Deliverables
- [ ] Squads: create/join/leave, member list, invite links
- [ ] Challenges: skill race, volume battle, streak battle; scoring engine;
      start/end dates; results view
- [ ] Leaderboards: global, squad, friends (fair, filtered by level bands)
- [ ] Activity feed: skill unlocked, PR, challenge won, level up
- [ ] Public profiles (opt-in) with skill badge display
- [ ] Notifications (in-app; email later)
- [ ] E2E: two users → squad → challenge → winner shown on both feeds

### Exit criterion
Two real beta users can challenge each other and see the outcome reflected in
leaderboards and feeds without manual data fixes. Demo to product owner.

---

## Phase 4 — Monetization & hardening (Weeks 29–36)

**Goal:** pay the bills + make the product dependable.

### Deliverables
- [ ] Stripe subscriptions (checkout, portal, webhooks, entitlement checks)
- [ ] Pro features: advanced analytics, extra quest lines, priority support
- [ ] Privacy/GDPR: export + delete account flows, privacy policy page
- [ ] Error monitoring (Sentry), basic product analytics events
- [ ] Performance pass: Core Web Vitals green on mobile & desktop
- [ ] Accessibility pass (WCAG A/AA basics)
- [ ] i18n: French translations (second locale) via next-intl

### Exit criterion
A paying Pro user on test Stripe can subscribe, access Pro features, cancel,
and re-subscribe — with entitlements honored server-side. Demo to product owner.

---

## Phase 5 — Beta & community (Weeks 37–44)

**Goal:** real users, real feedback, iterate.

### Deliverables
- [ ] Invite beta cohort (waitlist emails) — 50–200 users
- [ ] Onboarding funnel analytics + first-30-days retention report
- [ ] Weekly feedback loop: survey + interviews (product owner leads)
- [ ] Bug triage & prioritization; at least 2 meaningful iterations
- [ ] Content expansion based on usage data (top requested skills/quests)
- [ ] Community presence: subreddit/Discord seed, launch content

### Exit criterion
Decision gate: **go / pivot / stop** based on activation, D30 retention and
social engagement numbers against `PROJECT.md` targets.

---

## Phase 6 — Public launch & post-launch (Weeks 45–52)

**Goal:** public release, growth experiments, and the 6-month revenue plan.

### Deliverables
- [ ] Final QA pass, release checklist, tag v1.0
- [ ] Public launch (product hunt, r/calisthenics, r/bodyweightfitness,
      French communities), press kits
- [ ] Post-launch support rotation & hotfix process
- [ ] Growth experiments (referral loop, squad invites, shareable skill badges)
- [ ] Revenue dashboard (Stripe + Supabase) reviewed monthly
- [ ] v1.1 planning: pick the next big bet from validated data

### Exit criterion
v1.0 is public, metrics dashboard live, first growth experiment shipped.

---

## Guardrails

1. **Nothing enters v1 that wasn't in this roadmap** unless we document a
   change in the decision log and re-scope something else out.
2. **Every phase ends with a demo.** No silent weeks.
3. **Tests before features** in CI: red CI = blocked PR, always.
4. **0 € budget is a constraint, not a limit** — if a paid tool is ever
   justified, we add it to the decision log and agree first.
