# CaliForge

The RPG of bodyweight training. Skill trees, XP, quests and challenges —
built for calisthenics athletes, by athletes.

## Quick navigation

| Doc | Purpose |
|---|---|
| [docs/PROJECT.md](docs/PROJECT.md) | Vision, product definition, success metrics |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Stack, data model, security, testing strategy |
| [docs/ROADMAP.md](docs/ROADMAP.md) | 12-month plan with exit criteria per phase |
| [docs/WORKFLOW.md](docs/WORKFLOW.md) | How we work: rhythm, git flow, definition of done |
| [docs/SURVEY.md](docs/SURVEY.md) | Validation questionnaire (EN + FR) |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Decision log (chronological) |
| [docs/RESEARCH.md](docs/RESEARCH.md) | Validation findings (from surveys/interviews) |
| [docs/JOURNAL.md](docs/JOURNAL.md) | **Session journal** — where we stopped, what's next |
| [docs/FEATURES.md](docs/FEATURES.md) | Full feature inventory + market gaps + ideas vault |
| [docs/ESTIMATE.md](docs/ESTIMATE.md) | Time estimate per phase + calendar + slip warnings |
| [docs/MVP.md](docs/MVP.md) | MVP definition — exactly what's in/out + success criteria |
| [docs/FINANCIAL_MODEL.md](docs/FINANCIAL_MODEL.md) | Revenue/cost model, scenarios, break-even, gates |
| [landing/](landing/) | Marketing landing page (waitlist) |

## Repository layout

```
califorge/
├── apps/
│   └── web/              # Next.js app (App Router, TS, Tailwind)
├── packages/
│   └── domain/           # Pure domain engine: skill-tree, XP, quests, scoring
├── supabase/
│   ├── migrations/       # SQL migrations (schema + RLS)
│   ├── functions/        # Edge/DB functions if needed
│   └── seeds/            # Skills & progression content
├── tests/
│   ├── e2e/              # Playwright
│   └── fixtures/
└── docs/
```

## Getting started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Run domain engine tests
pnpm test:unit
```

## Status

**Phase 0 — Foundations** (see `docs/ROADMAP.md`). Current milestone: set up
toolchain and close validation.
