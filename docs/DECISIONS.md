# Decision Log

Every significant decision is recorded here (chronological). Format:

```
## YYYY-MM-DD — <Decision>
- **Decision:** ...
- **Reason:** ...
- **Alternatives considered:** ...
- **Status:** confirmed / superseded by ...
```

---

## 2026-08-13 — Product direction: gamified skill-tree web app (CaliForge)

- **Decision:** Build a PWA web app (Next.js + Supabase) centered on a
  calisthenics skill tree with XP/levels, quests and squad challenges.
  Deferred: user video hosting, native mobile apps, live chat, marketplace.
- **Reason:** The two original ideas ("TikTok for calisthenics", "a calisthenics
  game") share one core strength — the game-like progression system — and two
  fatal costs when pursued alone (video infra cost & niche game audience).
  The fused concept delivers the game feel with near-zero infra cost and a
  realistic path to revenue.
- **Alternatives considered:** (a) vertical video social app — rejected: needs
  massive infra budget + cold-start network effects; (b) standalone video game —
  rejected: unfeasible in 12 months at 0 € budget, unclear audience; (c) generic
  workout tracker — rejected: no differentiation.
- **Status:** confirmed.

## 2026-08-13 — Primary language: English (with FR as second locale)

- **Decision:** Product UI/UX in English first; French added in Phase 4.
- **Reason:** Largest calisthenics audience and revenue potential is
  English-speaking (US, UK, international street-workout communities);
  content and existing communities are predominantly EN. FR added later since
  the product owner is francophone and can validate FR quality.
- **Alternatives considered:** FR-first, simultaneous EN+FR.
- **Status:** confirmed.

## 2026-08-14 — GitHub repo: private

- **Decision:** Create the `califorge` repository as **private** on GitHub.
- **Reason:** Product owner preference; more control over visibility during
  pre-launch phase. Can switch to public later if desired.
- **Alternatives considered:** Public repo — rejected for now: privacy preferred
  during development. Can be made public post-launch.
- **Status:** confirmed.

## 2026-08-14 — Monorepo manager: pnpm workspaces

- **Decision:** Use pnpm workspaces for the monorepo (apps/web + packages/domain).
- **Reason:** pnpm is fast, disk-efficient, and has native workspace support.
  Industry standard for JS/TS monorepos. No need for Turborepo at this scale
  (can add later if needed).
- **Alternatives considered:** npm workspaces — rejected: slower, less strict;
  Yarn — rejected: less active; Turborepo — overkill for 2 packages.
- **Status:** confirmed.
