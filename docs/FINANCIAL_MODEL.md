# CaliForge — Financial Model

> A working model, updated as we get real data (beta will replace assumptions
> with numbers). All figures in EUR. Conservative by design.

---

## 1. Revenue model

| Stream | How | When |
|---|---|---|
| **Pro subscription** (main) | Free tier + Pro at **€5.99/month** or **€49.99/year** (~30% off) | Phase 4 (month 9-10) |
| Supporter tier | One-time "Supporter" badge, no gated features | Optional, post-launch |
| Affiliate (gear) | Contextual links to bars/rings/straps | Optional, post-launch |

Only Pro is modeled. Others are upside, not counted.

## 2. Cost model (before Pro revenue)

| Item | Free phase | Scale phase |
|---|---|---|
| Vercel hosting | 0 € | 20 €/mo once free tier exceeded |
| Supabase | 0 € | 25 €/mo (free tier: 500 MB DB, 50k MAU) |
| GitHub | 0 € | 0 € (public repo) |
| Domain | ~12 €/yr | ~12 €/yr |
| Stripe fees | — | 2.9% + 0.30 € per charge |
| Total | **~1 €/mo** | **~45-60 €/mo** once we pass free tiers |

**→ 0 € until we have thousands of MAU. The project cannot burn money.**

## 3. Assumptions (to be replaced by beta data)

| Assumption | Value | Source |
|---|---|---|
| Free → Pro conversion | **3%** (base) | Industry norm for fitness apps: 2-5% |
| Pro plan split | 60% monthly, 40% yearly | Common mix |
| Average subscription life | 8 months (monthly subs) | Conservative; yearly assumed 1 yr |
| Waitlist → signup | 40% | Email-list conversion norm |
| Signup → active (D30) | 35% | Our MVP target (conservative side) |
| Infra threshold | Supabase free ≤ 50k MAU; Vercel free ≤ ~100 GB | Vendor limits |

## 4. Scenarios (12 months after launch)

**Users = active (D30) users, from community + waitlist (CAC ≈ 0 €, organic).**

| Metric | Conservative | Base | Optimistic |
|---|---|---|---|
| Active users (month 12) | 400 | 2,000 | 6,000 |
| Pro subscribers (3% / 4%) | 12 | 60 | 240 |
| **Monthly Pro revenue (gross)** | **~€64** | **~€320** | **~€1,280** |
| Stripe + infra fees | ~€4 | ~€12 | ~€35 |
| **Net monthly** | **~€60** | **~€308** | **~€1,245** |
| Annualized (run-rate) | ~€720 | ~€3,700 | ~€15,000 |

*On yearly plans revenue is higher per sub (~€50 vs ~€48 LTV at 8 mo) but
delayed. Net effect ≈ neutral in month 12, better in year 2.*

## 5. Unit economics

- **CAC = 0 €** (organic community growth — the discipline lives on TikTok/IG
  where content is free to reach).
- **LTV (monthly sub):** €5.99 × 8 months = **~€47.90** gross → ~€45 net
  (Stripe ~2.9% + €0.30).
- **LTV (yearly sub):** €49.99 → ~€47.50 net.
- **LTV:CAC = ∞** at current model (no paid acquisition). The moment we ever
  buy ads, the budget decision goes in `DECISIONS.md` first.

## 6. Break-even

| Level | Net/month | Status |
|---|---|---|
| 0 → ~10 subs | 0 → +€50 | Covers domain + fees → **net zero** |
| ~60-80 subs | ~€300 | Covers infra at scale (Vercel+Supabase) |
| ~150 subs | ~€750 | Real salary-equivalent side income (EU part-time) |

**Break-even on all costs ≈ 60-80 Pro subscribers** — realistic within the
first 3-6 months post-launch if Base scenario holds.

## 7. The 3 things that kill this model (watch them)

1. **Retention < 15% D30** → nobody reaches Pro. *Mitigation: MVP is exactly
   built to test this before we spend months on social/payments.*
2. **Conversion < 1%** → Pro won't cover infra. *Mitigation: pricing A/B at
   beta, generous free tier keeps users even if conversion is low.*
3. **We build past MVP without users** → the classic trap. *Mitigation: gates
   in ROADMAP.md; nothing new ships until beta data says so.*

## 8. Financial gates (decision points)

| Gate | When | Decision |
|---|---|---|
| G1 | MVP beta, D30 report | Go/Pivot/Stop (see MVP.md) |
| G2 | Pro launch + 90 days | Keep pricing / change pricing / drop Pro |
| G3 | Month 12 post-launch | Scale (ads/team) / stay indie / reassess |
