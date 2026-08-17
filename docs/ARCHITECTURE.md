# CaliForge — Technical Architecture

> Living document. Update it as decisions are made (see `WORKFLOW.md` § Decision log).

## 1. Stack (100% free tier)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | SSR/SSG for landing & public pages, API routes for the small backend logic we own, one codebase |
| UI | **Tailwind CSS + shadcn/ui** | Fast, consistent design system, dark-first |
| Data & auth | **Supabase** (hosted Postgres, Auth, Storage) | Free tier: 500 MB DB, 50k MAU auth, generous — zero-ops |
| Client data | **TanStack Query + Zustand** | Server-state cache + lightweight client state |
| Payments | **Stripe** (subscriptions) | Industry standard, generous free tier (no monthly fee) |
| Testing | **Vitest** (unit/domain) + **Playwright** (E2E) | Fast, CI-friendly |
| CI/CD | **GitHub Actions** + **Vercel** | Free for public repos; preview deployments per PR |
| Observability | **Sentry** (free tier) + **Supabase** analytics | Errors + basic usage events |
| SEO/analytics | **Vercel Analytics** | Free, privacy-friendly |
| i18n | **next-intl** | EN first, FR second, scalable to more |

## 2. High-level flow

```
Browser (PWA)
   │  Next.js App Router (React)  ── TanStack Query cache
   │        │
   │        ├── Server components / SSR (landing, public profiles)
   │        ├── API routes (webhooks, Stripe, admin, server-only logic)
   │        └── Supabase client (RLS-protected)
   ▼
Supabase
   ├── Postgres (source of truth, Row Level Security)
   ├── Auth (email + OAuth)
   └── Storage (avatars, future media)
        ▲
        └── Stripe (subscriptions, webhooks → Postgres)
```

## 3. Data model (Postgres)

```sql
-- Identity & profile
users            (id uuid pk, email, display_name, created_at)
profiles         (user_id fk, level int, xp_total int, bio, avatar_url,
                  is_public bool, country, timezone)

-- Skills domain (the heart of the product)
categories       (id, slug, name, sort_order)          -- push, pull, core, legs, handstand, straight-arm
skills           (id, category_id fk, slug, name, description,
                  muscle_groups text[], demo_video_url, sort_order)
progressions     (id, skill_id fk, rank int, name, criteria jsonb,
                  prerequisite_progression_id fk null,      -- must unlock before this rank
                  target_reps int null, target_hold_sec int null,
                  xp_reward int)

-- User progression
user_skills      (id, user_id fk, skill_id fk, current_progression_id fk,
                  status enum('none','in_progress','unlocked','mastered'),
                  unlocked_at timestamptz, best_score jsonb,
                  unique(user_id, skill_id))
user_achievements(user_id fk, achievement_id fk, unlocked_at, unique(user_id, achievement_id))

-- Training log
workout_sessions (id, user_id fk, started_at, duration_min int, notes text,
                  location text, source enum('app','manual'))
session_exercises(id, session_id fk, progression_id fk, skill_id fk,
                  sets int, reps int, hold_sec int, rpe numeric(2,1),
                  notes text, is_pr bool)

-- Gamification
xp_events        (id, user_id fk, amount int, reason enum(...), ref_id, created_at)  -- append-only, auditable
achievements     (id, slug, name, description, criteria jsonb, xp_reward int, icon)
levels           (level int pk, xp_required int)                                    -- lookup table
streaks          (user_id fk, current int, best int, last_active date)
quests           (id, slug, name, description, type enum('daily','skill'), criteria jsonb,
                  xp_reward int, active bool)
quest_progress   (user_id fk, quest_id fk, progress jsonb, completed_at, unique(user_id, quest_id))

-- Social
squads           (id, slug, name, owner_id fk, created_at, max_members int)
squad_members    (squad_id fk, user_id fk, role enum('owner','member'), joined_at, unique)
challenges       (id, creator_id fk, title, challenge_type enum('skill','volume','streak'),
                  criteria jsonb, starts_at, ends_at, squad_id fk null)
challenge_participants (challenge_id fk, user_id fk, score jsonb, updated_at, unique)
leaderboards     (computed views / scheduled refresh)     -- global, squad, friends
feed_events      (id, user_id fk, type enum('skill_unlocked','pr','challenge_won','level_up'),
                  payload jsonb, created_at)

-- Monetization & ops
subscriptions    (user_id fk, stripe_customer_id, stripe_sub_id, status, plan, current_period_end)
audit_log        (id, actor, action, target, payload, created_at)
```

### Key rules
- **RLS everywhere.** Every table has Row Level Security; the client never sees
  data it shouldn't. Rules are written in SQL and tested.
- **XP is computed in one engine** (a pure TS module, mirrored by DB triggers
  for integrity) so rewards are deterministic and unit-testable.
- **Append-only** `xp_events` and `audit_log` for accountability.

## 4. Domain engine (pure TypeScript)

Kept as a **separate, dependency-free package** (`packages/domain`):

- `skillTree.ts` — skill/progression graph, unlock validation, next-step logic
- `xp.ts` — XP calculation & level curve
- `achievements.ts` — condition evaluation
- `quests.ts` — quest progress evaluation
- `scoring.ts` — challenge score computation (volume, best-hold, streak)

Why a pure package: unit-testable without a DB, reusable by web UI, future
mobile clients, and server functions.

## 5. Security & privacy

- Supabase RLS as the security boundary (not client-side gating).
- Passwords never stored by us (Supabase Auth handles it).
- Stripe webhooks verified via signature; secrets in env only (Vercel).
- Rate limiting on auth & public endpoints.
- GDPR-minded: export/delete-user capability in admin.

## 6. Testing strategy

| Layer | Tool | Coverage goal |
|---|---|---|
| Domain engine | Vitest | ~100% of XP/achievement/skill-tree logic |
| API routes | Vitest + supertest | auth, quotas, webhook handling |
| Components | React Testing Library | critical flows (log form, skill tree render) |
| E2E | Playwright | onboarding → first log → level up; auth; payment flow (test mode) |
| DB | Supabase local / pgTAP | RLS policies, triggers |

CI runs: `typecheck → lint → unit → e2e` on every PR. **No PR merges to `main`
with red CI.**

## 7. Deployment

- **Vercel** (production): automatic on merge to `main`.
- **Preview deployments** on every PR (for you to review in-browser).
- **Supabase** (prod + staging projects).
- **Stripe** (test + live modes).
- Environment secrets scoped per environment; never committed.
