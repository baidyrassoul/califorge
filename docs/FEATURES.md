# CaliForge — Feature Inventory & Opportunity Map

> The complete map of what we can build. Knowing the whole terrain lets us
> pick the right battles — and spot the gaps nobody covers.
>
> **Priority legend:** P0 = core loop (must exist for v1) · P1 = strong value
> (v1 if budget allows) · P2 = post-launch · P3 = stretch/future.
> **Status:** ⬜ todo · 🟡 in progress · ✅ done.

---

## Part A — Feature inventory by system

### A1. Onboarding & Auth (Phase 1)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| Sign-up / sign-in | Email + Google OAuth (Supabase Auth) | P0 | 1 | ⬜ |
| Onboarding wizard | 4 steps: level → goal skill → equipment → avatar | P0 | 1 | ⬜ |
| Level self-assessment | "Can you do X?" → seeds your skill tree | P0 | 1 | ⬜ |
| Profile page | Level, XP bar, badges, skills in progress | P0 | 2 | ⬜ |
| Public profile (opt-in) | Shareable "skill card" (export image) | P1 | 3 | ⬜ |
| Delete/export account | GDPR | P0 | 4 | ⬜ |

### A2. Skill tree engine (Phase 1)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| Skill data model | ~100 skills, 6 categories, ranked progressions | P0 | 1 | ⬜ |
| Interactive tree UI | Filter, expand, status badges, "next step" highlight | P0 | 1 | ⬜ |
| Unlock logic | Auto-unlock when target reps/hold met (validated) | P0 | 1 | ⬜ |
| Skill detail page | Criteria, demo video embed, tips | P0 | 1 | ⬜ |
| Search skills | Text + filter by muscle group | P1 | 1 | ⬜ |
| Custom skills | Users define their own skill + progression chain | P2 | 5 | ⬜ |
| Skill difficulty rating | Community votes (easy→expert) | P2 | 5 | ⬜ |

### A3. Training tracker (Phase 1)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| Quick log | Sets/reps/hold/RPE, < 20 s, works offline | P0 | 1 | ⬜ |
| Session management | Edit/delete, timer, notes, location | P0 | 1 | ⬜ |
| PR detection | Rep PR + hold PR per progression, badges | P0 | 1 | ⬜ |
| History | Per-skill and per-session history | P0 | 1 | ⬜ |
| Stats dashboard | Weekly volume, minutes, per-muscle load | P1 | 1 | ⬜ |
| Charts | Trends over 4/12/52 weeks | P1 | 2 | ⬜ |
| RPE tracking | Effort vs output correlation | P2 | 4 | ⬜ |
| Post-session mood | "How do you feel? 1-10" micro-form (differentiator + wellness data) | P1 | 5 | ⬜ |
| Deload detection | Fatigue warnings from volume spikes | P3 | 6 | ⬜ |
| Google Fit / HealthKit sync | Import steps/heart rate | P2 | 6 | ⬜ |

### A4. Gamification engine (Phase 2)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| XP system | Deterministic, reason-tagged, auditable | P0 | 2 | ⬜ |
| Level curve | Flat-ish early, gentle curve; no hard wall | P0 | 2 | ⬜ |
| Level-up UX | Banner + unlock celebration | P0 | 2 | ⬜ |
| Achievements | ~25 initial (first PR, 7-day streak, skill ranks...) | P0 | 2 | ⬜ |
| Streaks | Days trained + streak-freeze (validated mechanic) | P0 | 2 | ⬜ |
| Titles | Unlockable profile titles | P1 | 2 | ⬜ |
| Daily quests | Rotating objectives → XP bonus | P1 | 2 | ⬜ |
| Skill quest-lines | "Front lever path": multi-week guided quest | P1 | 4 | ⬜ |
| Leaderboard fairness | Level-band filtered so beginners compete fairly | P0 | 3 | ⬜ |
| Rest days count | Rest/active-recovery rewarded, not punished | P1 | 5 | ⬜ |

### A5. Social layer (Phase 3)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| Squads | Create/join groups, invite links, roles | P0 | 3 | ⬜ |
| Challenges | Skill race / volume battle / streak battle | P0 | 3 | ⬜ |
| Challenge scoring | Deterministic engine (best hold, total volume...) | P0 | 3 | ⬜ |
| Leaderboards | Global / squad / friends, band-filtered | P0 | 3 | ⬜ |
| Activity feed | Unlock, PR, challenge won, level up | P0 | 3 | ⬜ |
| In-app notifications | Challenge invites, results, streak warnings | P1 | 3 | ⬜ |
| Email notifications | Weekly recap, challenge results | P2 | 5 | ⬜ |
| Follow friends | Lightweight friend graph | P1 | 3 | ⬜ |
| Shareable cards | Generated image "I unlocked the front lever" | P2 | 5 | ⬜ |
| Live chat | Squad chat (deferred; needs moderation) | P3 | 6+ | ⬜ |
| Spot map | Community-verified calisthenics parks (geo) | P3 | 6+ | ⬜ |

### A6. Monetization (Phase 4)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| Free tier | Fully usable core loop | P0 | 4 | ⬜ |
| Pro subscription | Advanced analytics + quest lines + priority | P0 | 4 | ⬜ |
| Stripe checkout/portal | Subscriptions + self-service cancel | P0 | 4 | ⬜ |
| Entitlement enforcement | Server-side checks, not just UI hiding | P0 | 4 | ⬜ |
| Referral program | Free Pro weeks for invites | P2 | 6 | ⬜ |
| Gear affiliate links | Bars/rings/straps (contextual, honest) | P2 | 6 | ⬜ |
| One-time supporter tier | "Supporter" badge, no features gated | P2 | 6 | ⬜ |

### A7. Ops & platform (Phase 4+)
| Feature | Description | Priority | Phase | Status |
|---|---|---|---|---|
| Admin panel | Content (skills/quests), user moderation | P1 | 4 | ⬜ |
| Sentry errors | Crash/error monitoring | P0 | 4 | ⬜ |
| Product analytics | Activation, D30 retention, funnels | P0 | 4 | ⬜ |
| PWA install | Offline-capable installable app | P0 | 4 | ⬜ |
| i18n FR | French locale (next-intl) | P1 | 4 | ⬜ |
| Accessibility | WCAG A/AA basics | P1 | 4 | ⬜ |
| Core Web Vitals | Green on mobile+desktop | P0 | 4 | ⬜ |
| Dark/light theme | Theme toggle | P2 | 5 | ⬜ |
| Native mobile | React Native/Expo (only post-launch if traction) | P3 | 6+ | ⬜ |

---

## Part B — Market gaps to exploit (our edge)

From desk research (see `RESEARCH.md`). These are the "failles" we target:

1. **Progression-game positioning is nearly empty.** Only CaliQuest (mobile,
   small) does skill-tree+XP. Nobody owns "the RPG of bodyweight training" on
   the web with cross-platform reach. → Our core differentiator.
2. **Logging UX is universally criticized.** "Rep tracking is finicky", "no
   voice/alerts", "workouts wiped". → < 20 s log, offline-first, bulletproof
   save = headline trust feature.
3. **Onboarding is hostile to beginners.** Thenx = "lots of content, confusing
   for beginners". → Guided wizard + auto-seeded tree wins beginners.
4. **Beginners are underserved in leaderboards.** Fair band-filtered
   competition = no "I can't compete" churn.
5. **Streak mechanics punish rest days** (in most apps). → Design that rewards
   intelligent rest = credibility with real athletes.
6. **Health integration gap.** Google Fit/HealthKit rarely synced. → Post-launch
   differentiator.
7. **Community is distributed** across TikTok/IG/Reddit/Discord. → A dedicated
   place with game mechanics is a *retention* play, not a discovery play.
   Discovery stays on existing platforms (free growth).

---

## Part C — Feature ideas vault (P3 / future)

Ideas parked for later. Nothing here is promised; picked only if data supports it.

- **Video upload** (with infra budget): < 30 s skill demos, form checks
- **AI form feedback** from video (vision model) — big differentiator, later
- **AI coach** summarizing weekly training (tracali-style)
- **Training plan builder** shared by coaches (community economy)
- **Season / league system** (monthly leagues with promotion/relegation)
- **Guild raids** (collective volume goals for squads)
- **NFT-free skill badges as verifiable "credentials"** (integrity play)
- **Park/spot heatmaps** by usage
- **Widgets** (home-screen training streak widget)
- **Web push** for streak reminders
- **Wearable / smartwatch app**
- **E2E challenge economy** with real prizes (sponsored)

---

## Rules of engagement

1. Only P0/P1 in the v1 scope (12 months) unless decided otherwise in
   `DECISIONS.md`.
2. A feature from Part C enters the roadmap only with a written rationale +
   the product owner's explicit yes.
3. When we cut scope, we cut features — never quality (tests, RLS, docs).
