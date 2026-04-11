-- Migration 002: Clones table
-- Story E1.5 — Schema de Banco (base para E1.4 — limite por plano)

CREATE TABLE IF NOT EXISTS public.clones (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  description TEXT,
  status      TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),

  -- Configuração do clone (preenchida pelo wizard E3)
  persona     JSONB DEFAULT '{}',
  layers      JSONB DEFAULT '{}',
  tfr_config  JSONB DEFAULT '{}',
  signature   JSONB DEFAULT '{}',

  -- Turing Test
  turing_score INT,
  turing_level TEXT,

  -- Versioning
  version     INT NOT NULL DEFAULT 1,
  parent_id   UUID REFERENCES public.clones(id),

  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_clones_user_id ON public.clones(user_id);
CREATE INDEX IF NOT EXISTS idx_clones_status  ON public.clones(status);

-- RLS
ALTER TABLE public.clones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuário vê apenas seus clones"
  ON public.clones FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuário cria seus próprios clones"
  ON public.clones FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuário atualiza seus próprios clones"
  ON public.clones FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuário deleta seus próprios clones"
  ON public.clones FOR DELETE
  USING (auth.uid() = user_id);

-- Trigger: updated_at automático
CREATE TRIGGER set_clones_updated_at
  BEFORE UPDATE ON public.clones
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- View útil: contagem de clones ativos por usuário (para enforcement de plano)
CREATE OR REPLACE VIEW public.user_clone_counts AS
SELECT
  user_id,
  COUNT(*) FILTER (WHERE status != 'archived') AS active_count
FROM public.clones
GROUP BY user_id;
