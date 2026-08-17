# CaliForge — Session Journal

> **The single place we check at the start of every session.** It answers two
> questions in 30 seconds: *where did we stop?* and *what do we do now?*

## How to use

1. **Start of a session:** read "Current snapshot" + "Next session checklist".
2. **During the session:** update the checklist as you go.
3. **End of the session:** add a `## Session` entry (see template), then update
   the snapshot so the next session starts with zero guesswork. If you leave
   anything half-finished, say so explicitly under "HALF-DONE".
4. Never delete old entries — the log is history; the snapshot is now.

---

## Current snapshot

> Last updated: **2026-08-14 (Session 2)**

### Where we stopped
**Phase 0 in progress.** Monorepo scaffolded, waiting for user to run init commands.

### Done so far
- ✅ Project planning docs: `PROJECT.md`, `ARCHITECTURE.md`, `ROADMAP.md`,
  `WORKFLOW.md`, `DECISIONS.md`, `RESEARCH.md`, `FEATURES.md`
- ✅ Validation survey (EN + FR) ready in `docs/SURVEY.md`
- ✅ Landing page + waitlist (HTML/CSS/JS) in `landing/` — NOT yet deployed
- ✅ Session journal (`JOURNAL.md`) + full feature inventory (`FEATURES.md`)
- ✅ Monorepo scaffold: root config, `apps/web` (Next.js+TS+Tailwind),
  `packages/domain` (XP engine + tests), supabase migrations skeleton

### In progress
- ⏳ Shell/EPERM still broken → fallback mode (I write files, user runs commands)
- ⏳ Waiting on: `pnpm install`, `git init`, GitHub repo creation, first commit

### HALF-DONE / to be careful about
- Domain engine has only `xp.ts` + tests — Week 2 will add skill-tree, achievements,
  quests, scoring engines.
- Supabase migration `001_initial_schema.sql` has only `users` + `profiles` tables
  + basic RLS. Full schema comes in Week 2.

### Blockers
- 🚧 **Shell EPERM persists** — confirmed in Session 2. Using file-tools fallback.

### Next session checklist (Session 3 — day 2 of Week 1)
- [ ] User runs init commands (see Session 2 notes below)
- [ ] Verify: `pnpm dev` boots, `pnpm test:unit` passes
- [ ] First commit on `main`, push to GitHub (private repo `califorge`)
- [ ] CI pipeline setup (GitHub Actions: typecheck/lint/test)
- [ ] Update this journal at end of session

> The rest of Week 1 lives in the **Week plan** below — we take it one step per
> session, never everything at once.

---

## Week plan

### Week 1 — Toolchain, repo, landing live (~5-15 h)
| Day / step | Task | Est. |
|---|---|---|
| 1 | Fix terminal, verify node/npm/git, create GitHub repo | 1-2 h |
| 2 | Scaffold monorepo `apps/web` (Next.js+TS+Tailwind) + `packages/domain`, first commit, app boots locally | 2-3 h |
| 3 | CI pipeline (typecheck/lint/test) green + branch protection | 2-3 h |
| 4 | Supabase project (free) + first migration skeleton | 1-2 h |
| 5 | Deploy landing page to Vercel + connect waitlist (Formspree) + publish survey (PO) | 1-2 h |
| — | End of week: update journal, close session 2-3 | 0.5 h |

### Week 2 — Domain engines + design system (~5-15 h)
- `packages/domain`: skill-tree types + unlock logic + XP engine + unit tests
- Design system: Tailwind config, color/typography tokens, core components
- Supabase: schemas for `skills`, `progressions`, `users`, `profiles` + RLS

### Week 3 — Remaining engines + validation analysis (~5-15 h)
- `packages/domain`: quests + achievements + scoring engines + tests
- Survey analysis → `RESEARCH.md` report (≥50 responses target)
- Landing page refinements based on waitlist feedback

### Week 4 — Phase 0 exit (~5-15 h)
- **Decision gate:** go / pivot / stop on Phase 1 (based on RESEARCH.md)
- Phase 1 task breakdown (sprint-level) + board ready
- Phase 0 exit demo + journal update

---

## Session log

### Session template (copy-paste at the end of every session)

```
## SESSION N — YYYY-MM-DD (X h) — <one-line title>
**Done:**
- [ ] ...

**Learnings / decisions:**
- (→ add to DECISIONS.md if it's a decision)

**HALF-DONE (exact state):**
- ...

**Next session:**
- [ ] ...
- [ ] ...

**Blockers:**
- ...

**Energy/morale (1-10) + note:** _
```

---

## SESSION 1 — 2026-08-13 (planning kickoff)

**Done:**
- [x] Researched calisthenics science & market (RESEARCH.md)
- [x] Analyzed both ideas (TikTok-like app / game) → merged into one product:
      gamified skill-tree web app "CaliForge"
- [x] Product owner context: budget 0€, 5-15h/week, goal = business/revenue,
      English-first
- [x] Wrote full project foundation: PROJECT, ARCHITECTURE, ROADMAP (7 phases,
      12 months), WORKFLOW, DECISIONS (2 entries), RESEARCH, SURVEY (EN+FR),
      FEATURES, JOURNAL
- [x] Built landing page (dark theme, waitlist form with local + Formspree
      fallback, survey section)

**Learnings / decisions:**
- Decision: product = PWA web app, skill-tree + XP + squads/challenges.
- Decision: English primary, FR second.
- Market gaps identified: progression-game positioning is barely covered
  (only CaliQuest, mobile-only, small traction); log UX complaints everywhere.

**HALF-DONE:**
- None. Landing page is built but **not deployed** (next session).

**Next session:**
- [ ] Fix shell/toolchain, create GitHub repo, scaffold monorepo, CI
- [ ] Supabase project + migrations skeleton
- [ ] Deploy landing page + publish survey
- [ ] Update journal

**Blockers:**
- Bash/shell EPERM in dev environment.

**Morale:** 9/10 — la direction est claire, on avance avec méthode.

---

## SESSION 2 — 2026-08-14 (1.5 h) — Monorepo scaffold

**Done:**
- [x] Confirmed shell EPERM persists → switched to file-tools fallback
- [x] Created monorepo scaffold: root `package.json`, `pnpm-workspace.yaml`,
      `tsconfig.base.json`, `.gitignore`, `.prettierrc`, `.npmrc`
- [x] Created `apps/web`: Next.js 15 + App Router + Tailwind v4 + TypeScript
- [x] Created `packages/domain`: XP engine (`xp.ts`) + unit tests (`xp.test.ts`)
- [x] Created `supabase/migrations/001_initial_schema.sql` (users + profiles + RLS)
- [x] Updated `README.md` with repo layout and getting started instructions

**Learnings / decisions:**
- Decision: repo GitHub = **privé** (user preference)
- Decision: monorepo manager = **pnpm workspaces** (standard, fast, good for monorepos)
- Tailwind v4 uses `@tailwindcss/postcss` plugin (not the old `tailwindcss` PostCSS plugin)

**HALF-DONE:**
- User must run init commands in their terminal (EPERM prevents me from doing it)

**Next session:**
- [ ] User runs: `pnpm install`, `git init`, GitHub repo, first commit
- [ ] Verify: `pnpm dev` boots, `pnpm test:unit` passes
- [ ] CI pipeline (GitHub Actions)
- [ ] Update journal

**Blockers:**
- Shell EPERM persists — workaround: I write files, user runs commands manually

**Morale:** 9/10 — le scaffold est propre, on avance malgré le blocage shell.
