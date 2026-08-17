# CaliForge — Working Agreement

This document defines *how we work* so the project never runs "au hasard".

## 1. Single source of truth

- **Roadmap:** `docs/ROADMAP.md` + GitHub Project board (Phase columns).
- **Product:** `docs/PROJECT.md`.
- **Technical:** `docs/ARCHITECTURE.md`.
- **Decisions:** append every significant decision to `docs/DECISIONS.md`
  (date, decision, reason, alternative considered).

If a doc and reality disagree, **fix the doc the same day**.

## 2. Rhythm

| When | What |
|---|---|
| Monday | Planning: pick the tasks for the week from the board (sprint of ~1 week) |
| Friday | Review/demo: what shipped, what blocked, what changed |

- Max 3 active work items at a time (WIP limit).
- A task is **done** only when its Definition of Done is met (below).

## 3. Repository & git flow

- Branches: `main` (protected) + feature branches `feat/xyz`.
- Every change = a PR with: description, what it solves, test evidence,
  screenshots when UI.
- **Do not merge with red CI.** Merges are squash-commits with conventional
  messages: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
- One commit per logical change; meaningful messages (the log is the history).

## 4. Definition of Done (every feature)

1. Code review done (2 reviewers: you + me — you review product sense, I review code).
2. Typecheck, lint, unit tests pass locally and in CI.
3. E2E test added/updated where a user-visible flow changed.
4. No console errors / no warnings introduced.
5. Feature works in the deployed **preview** URL (not just locally).
6. Docs updated if behavior or architecture changed.

## 5. Testing culture

- Write the test *with* the feature, not after.
- Domain logic (XP, skill tree, scoring) must be property-tested
  (e.g., "XP total = sum of xp_events" holds for random sequences).
- A bug = a failing test first, then the fix.

## 6. Communication

- You: product decisions, priorities, community, validation, final say on scope.
- Me: engineering, architecture, delivery, and honest estimates.
- When a milestone risks slipping: raise it **before** the Friday review,
  propose re-scope (cut scope, not quality).
- All decisions that change scope are written in `DECISIONS.md` with a date.

## 7. Validation & research (Phase 0)

- Surveys are the product owner's job (you); I provide the tooling.
- Every assumption we validate gets a dated note in `docs/RESEARCH.md` with the
  data that backs it. Unvalidated assumptions stay flagged in the roadmap.

## 8. Quality bars we never drop

- No secrets in the repo, ever (use env vars; `.env*` gitignored).
- RLS on every table; client never bypasses it.
- No pay-to-win or misleading gamification.
- Free tier stays genuinely useful.
