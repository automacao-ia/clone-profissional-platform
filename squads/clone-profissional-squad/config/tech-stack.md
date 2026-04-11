# Clone Profissional Platform — Tech Stack

**Decisão:** @architect (Aria) — 2026-04-11

---

## Stack Principal

| Camada | Tecnologia | Versão | Motivo |
|--------|-----------|--------|--------|
| **Frontend** | Next.js (App Router) | 14 | SSR, RSC, API Routes, file-based routing |
| **Language** | TypeScript | 5.x | Type safety em toda a stack |
| **Styling** | Tailwind CSS | 3.x | Utility-first, design system consistente |
| **Components** | shadcn/ui | latest | Componentes acessíveis (WCAG 2.1 AA) |
| **Auth** | Supabase Auth | latest | Email + Google OAuth nativos |
| **Database** | Supabase (PostgreSQL) | latest | RLS, realtime, migrations |
| **ORM** | Supabase JS Client | 2.x | Query builder + RLS automático |
| **Deploy** | Vercel | — | Next.js nativo, edge functions |
| **Billing** | Stripe | latest | Checkout, webhooks, portal |

---

## Estrutura do Projeto

```
packages/web/          ← Next.js App
  app/
    (auth)/            ← Login, Register, OAuth callback
    (app)/             ← Dashboard, clones (autenticado)
    api/               ← Route handlers
  components/
    ui/                ← shadcn/ui components
    clone/             ← Clone-specific components
    wizard/            ← Wizard steps
  lib/
    supabase/          ← Client, server, middleware
    stripe/            ← Stripe integration
  types/               ← TypeScript types
  
supabase/
  migrations/          ← SQL migrations
  seed.sql             ← Seed data (frameworks)
```

---

## Variáveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```
