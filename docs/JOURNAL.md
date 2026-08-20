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

> Last updated: **2026-08-20 (Session 5)**

### Where we stopped
**Phase 0 in progress — Week 1 COMPLETE.** Monorepo scaffolded, CI live,
Supabase deployed, landing page live on Vercel with working waitlist.

### Done so far
- ✅ Project planning docs: `PROJECT.md`, `ARCHITECTURE.md`, `ROADMAP.md`,
  `WORKFLOW.md`, `DECISIONS.md`, `RESEARCH.md`, `FEATURES.md`
- ✅ Validation survey (EN + FR) ready in `docs/SURVEY.md`
- ✅ Landing page deployed to Vercel: **https://califorge-landing.vercel.app**
- ✅ Waitlist connected to Formspree (endpoint: `https://formspree.io/f/mppakobz`)
- ✅ Session journal (`JOURNAL.md`) + full feature inventory (`FEATURES.md`)
- ✅ Monorepo scaffold: root config, `apps/web` (Next.js+TS+Tailwind),
  `packages/domain` (XP engine + tests), supabase migrations skeleton
- ✅ `pnpm install` — all packages installed
- ✅ `pnpm test:unit` — 3/3 tests pass (XP engine)
- ✅ `pnpm dev` — app boots on localhost:3000 (Next.js 15 + Turbopack)
- ✅ Git initialized + first commit
- ✅ GitHub CLI installed + authenticated (baidyrassoul)
- ✅ Repo public + pushed: `baidyrassoul/califorge` (branch `main`)
- ✅ CI pipeline: GitHub Actions (typecheck/lint/test on push + PR)
- ✅ Branch protection on `main` (status checks required)
- ✅ CI green — first PR merged (#1: eslint deps fix)
- ✅ Supabase project created (free tier, nano compute)
- ✅ Supabase CLI installed + linked + authenticated
- ✅ Migration `001_initial_schema.sql` deployed (users + profiles + RLS)
- ✅ `.env.local` with Supabase URL + anon key (gitignored)
- ✅ Vercel CLI installed + project `califorge-landing` created

### In progress
- ⏳ Publish survey (PO distributes link) — survey link still placeholder in `script.js`

### HALF-DONE / to be careful about
- Domain engine has only `xp.ts` + tests — Week 2 will add skill-tree, achievements,
  quests, scoring engines.
- Supabase schema has only `users` + `profiles` — full schema comes in Week 2.
- `.env.local` has real Supabase credentials — never commit this file.
- Survey link in `landing/script.js` is still `YOUR_SURVEY_ID` placeholder.

### Blockers
- 🚧 **Shell EPERM persists** — workaround confirmed: I write files, user runs commands.
  This is sustainable long-term.

### Next session checklist (Session 6 — Week 2, Day 1)
- [ ] Replace survey placeholder link in `landing/script.js` with real Tally.so/Google Forms URL
- [ ] Publish survey (PO distributes link)
- [ ] Start Week 2: `packages/domain` skill-tree types + unlock logic
- [ ] Design system: Tailwind config, color/typography tokens
- [ ] Update this journal at end of session

> Week 1 is done. Week 2 starts with domain engines + design system — see **Week plan** below.

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

## SESSION 2 — 2026-08-14 to 2026-08-17 (2.5 h) — Monorepo scaffold + GitHub

**Done:**
- [x] Confirmed shell EPERM persists → switched to file-tools fallback
- [x] Created monorepo scaffold: root `package.json`, `pnpm-workspace.yaml`,
      `tsconfig.base.json`, `.gitignore`, `.prettierrc`, `.npmrc`
- [x] Created `apps/web`: Next.js 15 + App Router + Tailwind v4 + TypeScript
- [x] Created `packages/domain`: XP engine (`xp.ts`) + unit tests (`xp.test.ts`)
- [x] Created `supabase/migrations/001_initial_schema.sql` (users + profiles + RLS)
- [x] Updated `README.md` with repo layout and getting started instructions
- [x] User installed pnpm (npm install -g pnpm) → v9.15.0
- [x] User ran `pnpm install` — 90 packages, all resolved
- [x] `pnpm test:unit` — 3/3 tests pass (XP engine)
- [x] `pnpm dev` — app boots on localhost:3000 (Next.js 15 + Turbopack)
- [x] Git init + first commit (46 files, conventional commit message)
- [x] GitHub CLI installed + authenticated (baidyrassoul, HTTPS)
- [x] Private repo created: `baidyrassoul/califorge`
- [x] Code pushed to GitHub (master branch)
- [x] Updated DECISIONS.md (2 new entries: private repo, pnpm workspaces)
- [x] Updated JOURNAL.md

**Learnings / decisions:**
- Decision: repo GitHub = **privé** (user preference)
- Decision: monorepo manager = **pnpm workspaces** (standard, fast, good for monorepos)
- Tailwind v4 uses `@tailwindcss/postcss` plugin (not the old `tailwindcss` PostCSS plugin)
- GitHub CLI PATH issue on Windows: installed at `C:\Program Files\GitHub CLI\gh.exe`,
  need to add to PATH manually or restart terminal
- User confirmed: security is top priority, quality over speed, take years if needed
- User confirmed: no characters/music in app — pure gamified fitness tracker

**HALF-DONE:**
- None. Session completed successfully.

**Next session:**
- [ ] Rename branch `master` → `main` (for consistency)
- [ ] CI pipeline (GitHub Actions: typecheck/lint/test)
- [ ] Branch protection on `main`
- [ ] Update journal

**Blockers:**
- Shell EPERM persists — workaround confirmed: I write files, user runs commands manually.
  This is sustainable. No blocker.

**Morale:** 9/10 — on a fait plus que prévu. Le toolchain fonctionne, le repo est en ligne, la base est solide.

---

## SESSION 3 — 2026-08-19 (1 h) — CI pipeline + branch cleanup

**Done:**
- [x] Renamed branch `master` → `main` locally
- [x] Updated default branch on GitHub to `main`
- [x] Deleted remote `master` branch
- [x] Created `.github/workflows/ci.yml` — GitHub Actions CI pipeline
      (typecheck, lint, test on push/PR to main, pnpm cache, concurrency control)
- [x] Repo made **public** (branch protection requires it on free tier)
- [x] Branch protection on `main` configured (status checks, stale review dismissal, enforce admins)
- [x] Updated JOURNAL.md

**Learnings / decisions:**
- Decision: repo is now **public** (no secrets in code, visibility beneficial)
- Branch protection requires GitHub Pro for private repos OR public repo
- PowerShell `Out-File -Encoding utf8` adds BOM → use `-Encoding ascii` for JSON files
- GitHub API branch protection needs full JSON body via `--input` flag, not `-f` for nested objects

**HALF-DONE:**
- CI workflow assumes `pnpm lint` works across all packages — domain package has
  `"lint": "tsc --noEmit"` which is fine, but verify no eslint errors on web package.

**Next session:**
- [ ] Verify CI passes on GitHub Actions (check first run)
- [ ] Supabase project (free tier) + first migration skeleton
- [ ] Update journal

**Blockers:**
- Shell EPERM persists — workaround confirmed: I write files, user runs commands.

**Energy/morale (1-10) + note:** 8/10 — on est bon, le toolchain est solide. Un peu de friction réseau mais rien de bloquant.

---

## SESSION 4 — 2026-08-19 (1.5 h) — CI green + Supabase deployed

**Done:**
- [x] Fixed CI pipeline (removed pnpm version conflict, added missing eslint deps)
- [x] Created PR #1, CI passed green, squash merged
- [x] Repo made public (branch protection requires it on free tier)
- [x] Branch protection on `main` configured
- [x] Supabase CLI installed + authenticated (token generated)
- [x] Linked to remote project (`mrfrnranqbrosqtobpfa`)
- [x] Migration `001_initial_schema.sql` deployed: users + profiles + RLS
- [x] Fixed `config.toml` (was JSON, converted to TOML)
- [x] Fixed migration: `uuid_generate_v4()` → `gen_random_uuid()`, added IF NOT EXISTS

**Learnings / decisions:**
- `pnpm/action-setup@v4` auto-reads `packageManager` from `package.json` — don't set `version` manually
- `eslint` + `eslint-config-next` must be explicit devDeps in `apps/web`
- `gen_random_uuid()` is native in Supabase (PostgreSQL 13+), no extension needed
- PowerShell `Out-File -Encoding ascii` avoids BOM issues for JSON files
- `supabase migration repair` resets migration tracking on remote
- Duplicate migration policies/tables need `IF NOT EXISTS` / `DROP POLICY IF EXISTS`

**HALF-DONE:**
- None. Session completed successfully.

**Next session:**
- [ ] Deploy landing page to Vercel
- [ ] Connect waitlist (Formspree or Supabase)
- [ ] Update journal

**Blockers:**
- Shell EPERM persists — workaround confirmed.

**Energy/morale (1-10) + note:** 9/10 — CI green, Supabase live, la base technique est solide.

---

## SESSION 5 — 2026-08-20 (0.5 h) — Landing page deployed + waitlist live

**Done:**
- [x] Created `landing/vercel.json` with security headers
- [x] Updated `landing/script.js` with Formspree endpoint (`https://formspree.io/f/mppakobz`)
- [x] Installed Vercel CLI (v59.1.4)
- [x] Deployed landing page to Vercel: **https://califorge-landing.vercel.app**
- [x] Waitlist form tested — Formspree integration working, email received
- [x] Updated JOURNAL.md

**Learnings / decisions:**
- Decision: waitlist backend = **Formspree** (free 50 emails/month, zero setup)
- Vercel auto-detects static sites — no build config needed for plain HTML/CSS/JS
- Vercel project name: `califorge-landing`, team: `agro-sen`

**HALF-DONE:**
- Survey link in `script.js` is still placeholder (`YOUR_SURVEY_ID`) — needs real URL next session.

**Next session:**
- [ ] Replace survey placeholder link with real URL
- [ ] Publish survey (PO distributes)
- [ ] Start Week 2: domain engines + design system
- [ ] Update journal

**Blockers:**
- Shell EPERM persists — workaround confirmed.

**Energy/morale (1-10) + note:** 9/10 — Week 1 terminée, landing live, waitlist opérationnelle. On entre dans le dev produit.
