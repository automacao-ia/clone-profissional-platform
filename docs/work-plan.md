# Clone Profissional Platform — Plano de Trabalho

**Data:** 2026-04-06
**Squad:** clone-profissional-squad
**Referência:** [PRD v1.0](./prd.md)

---

## Agentes do Squad e Suas Responsabilidades

| Agente | Persona | Responsabilidade Principal | Epics |
|--------|---------|--------------------------|-------|
| **@framework-librarian** (Vera) | 📚 Curadora | Biblioteca de frameworks verificados | E2 |
| **@clone-builder** (Forjador) | 🧬 Arquiteto | Wizard de criação em 5 etapas | E3 |
| **@prompt-generator** (Nexus) | ⚡ Engenheiro | Geração e exportação de system prompts | E4 |
| **@turing-tester** (Oracle) | 🔬 Avaliador | Turing Test 2.0 e validação de qualidade | E5 |
| **@clone-manager** (Atlas) | 🗂️ Gestor | Dashboard, versioning, exportação/importação | E6 |
| **@self-clone-specialist** (Espelho) | 🪞 Especialista | Fluxo de auto-clonagem | E8 |
| **@dev (Dex)** | AIOX Core | Implementação de código (todas as features) | Todos |
| **@qa (Quinn)** | AIOX Core | Testes e quality gates | Todos |
| **@architect (Aria)** | AIOX Core | Arquitetura, tech stack, design de BD | E1–E4 |
| **@data-engineer (Dara)** | AIOX Core | Schema do banco de dados | E1, E2, E3 |
| **@ux-design-expert (Uma)** | AIOX Core | Design e UX do wizard e dashboard | E3, E5, E6 |
| **@devops (Gage)** | AIOX Core | CI/CD, deploy, git push | Todos |

---

## Plano de Trabalho por Epic

---

### E1 — Autenticação e Gestão de Conta
**Prioridade:** P0 | **Agente líder:** @architect → @dev
**Estimativa:** Sprint 1

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E1.1 | Registro/login com email e senha | @dev | Usuário cria conta, faz login, recebe JWT |
| E1.2 | Login com Google OAuth | @dev | Usuário autentica via Google, sessão criada |
| E1.3 | Dashboard pessoal (lista de clones vazia) | @dev + @ux | Dashboard renderiza com zero clones |
| E1.4 | Planos Free/Pro/Agency com controle de limites | @dev | Free: 1 clone max; Pro: 10; Agency: ilimitado |
| E1.5 | Schema de banco — users e subscriptions | @data-engineer | Migrations criadas e validadas |

---

### E2 — Biblioteca de Frameworks Verificados
**Prioridade:** P0 | **Agente líder:** @framework-librarian → @dev
**Estimativa:** Sprint 1–2

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E2.1 | Catálogo navegável de frameworks com filtros | @dev + @ux | Filtro por pessoa e tipo funciona, resultados < 300ms |
| E2.2 | Pré-carga de 35+ frameworks verificados | @framework-librarian + @dev | Seed com todos os frameworks mapeados no PRD |
| E2.3 | Busca full-text na biblioteca | @dev | Busca retorna frameworks relevantes por palavra-chave |
| E2.4 | Preview completo de framework (fórmula + exemplo) | @dev + @ux | Modal/drawer com todos os campos visíveis |
| E2.5 | Adicionar framework customizado (com validação de fonte) | @dev | Bloqueia sem fonte verificável; salva com sucesso |
| E2.6 | Schema de banco — frameworks e sources | @data-engineer | Tabelas com constraint de source obrigatório |

---

### E3 — Wizard de Criação de Clone (5 Etapas)
**Prioridade:** P0 | **Agente líder:** @clone-builder → @dev + @ux-design-expert
**Estimativa:** Sprint 2–4 (Epic mais complexo)

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E3.1 | Etapa 1: Definição da Persona (UI + validação) | @dev + @ux | 7 estilos cognitivos, slider de emoção, save parcial |
| E3.2 | Etapa 2: Protocolo forense — input de decisões | @clone-builder + @dev | Formulário por decisão, validação de fonte, contador |
| E3.3 | Etapa 2: Detecção de padrões entre decisões | @dev | Sistema destaca repetições, sugere agrupamentos |
| E3.4 | Etapa 2: Extração guiada de frameworks (5 sub-passos) | @clone-builder + @dev | Fluxo 5 passos funcional, framework salvo com qualidade |
| E3.5 | Etapa 3: Configuração Layer 1 (Primary) | @dev + @ux | Drag-and-drop de 3–5 frameworks da biblioteca |
| E3.6 | Etapa 3: Configuração Layer 2 (Situational triggers) | @dev + @ux | 5 triggers padrão + custom, mapeamento trigger→framework |
| E3.7 | Etapa 3: Configuração Layer 3 (Meta-rules) | @dev + @ux | 4 meta-regras editáveis, exemplos pré-preenchidos |
| E3.8 | Etapa 4: Calibração Think-Feel-Respond | @clone-builder + @dev | 12 arquiteturas de resposta, callbacks emocionais |
| E3.9 | Etapa 4: Matriz de resposta contextual (FR-007) | @dev + @ux | 5 contextos padrão + custom com preview |
| E3.10 | Etapa 5: Builder visual da fórmula de assinatura | @dev + @ux | 4–5 passos sequenciais, templates pré-prontos funcionais |
| E3.11 | Save/resume wizard (estado persistido) | @dev | Wizard pode ser retomado em qualquer etapa |
| E3.12 | Schema de banco — clones, layers, tfr_config | @data-engineer | Estrutura completa do clone persistida |

---

### E4 — Geração e Exportação de System Prompt
**Prioridade:** P0 | **Agente líder:** @prompt-generator → @dev
**Estimativa:** Sprint 3–4

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E4.1 | Motor de geração de system prompt (todas as seções) | @prompt-generator + @dev | Prompt gerado < 3s com todas as 8 seções |
| E4.2 | Preview do prompt antes de exportar | @dev + @ux | Modal com syntax highlighting e scroll |
| E4.3 | Estimativa de tokens em tempo real | @dev | Contador de tokens atualiza conforme config muda |
| E4.4 | Exportação para ChatGPT (plain text) | @dev | Download .txt formatado para ChatGPT system prompt |
| E4.5 | Exportação para Claude (plain text) | @dev | Download .txt formatado para Claude system prompt |
| E4.6 | Exportação JSON estruturado | @dev | JSON com toda config do clone + prompt |
| E4.7 | Modo compacto (≤ 2K tokens) preservando Layer 3 + TFR | @prompt-generator + @dev | Compacto ≤ 2K tokens, Layer 3 e TFR intactos |

---

### E5 — Turing Test 2.0 Suite
**Prioridade:** P1 | **Agente líder:** @turing-tester → @dev + @ux-design-expert
**Estimativa:** Sprint 4–5

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E5.1 | Interface do Turing Test (5 testes, input de respostas) | @turing-tester + @ux | Usuário cola resposta para cada teste, UI clara |
| E5.2 | Motor de scoring por rubrica (T1–T5) | @turing-tester + @dev | Score calculado conforme rubrica, breakdown visível |
| E5.3 | Classificação automática (4 níveis) | @dev | Badge Indistinguível/Profissional/Funcional/Recalibrar |
| E5.4 | Relatório de qualidade completo | @turing-tester + @dev + @ux | Relatório com score total, breakdown e sugestões |
| E5.5 | Sugestões de melhoria por teste falho | @turing-tester + @dev | Sugestões específicas referenciando layer/tfr a corrigir |
| E5.6 | Histórico de testes por versão | @dev | Timeline de scores v1→v2→v3 visível |
| E5.7 | Bloqueio de exportação se score < 20 | @dev | @prompt-generator *export-prompt bloqueado com mensagem |

---

### E6 — Gestão de Clones e Versioning
**Prioridade:** P1 | **Agente líder:** @clone-manager → @dev
**Estimativa:** Sprint 5

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E6.1 | Dashboard de clones (tabela com score, status, data) | @clone-manager + @ux | Tabela com todas as colunas do PRD |
| E6.2 | Versioning de clone (v1→v2→v3) | @clone-manager + @dev | Nova versão criada, histórico preservado |
| E6.3 | Comparação entre versões (diff de config + scores) | @dev + @ux | Diff visual lado a lado |
| E6.4 | Duplicar clone | @dev | Clone duplicado com sufixo -copy |
| E6.5 | Arquivar/desarquivar clone | @dev | Clone arquivado some do dashboard, visível com filtro |
| E6.6 | Exportar clone em JSON | @clone-manager + @dev | JSON com config completa + histórico Turing |
| E6.7 | Importar clone de JSON | @clone-manager + @dev | Validação de schema antes de aceitar |

---

### E7 — Matriz de Resposta Contextual
**Prioridade:** P1 | **Agente líder:** @clone-builder → @dev + @ux-design-expert
**Estimativa:** Sprint 5–6

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E7.1 | UI da matriz CONTEXTO→THINK→FEEL→RESPOND | @ux + @dev | 5 linhas padrão visíveis e editáveis |
| E7.2 | Adicionar contextos customizados | @dev | Usuário adiciona linha custom à matriz |
| E7.3 | Preview de resposta por contexto | @dev + @ux | Simula resposta do clone para contexto selecionado |

---

### E8 — Self-Clone Flow
**Prioridade:** P2 | **Agente líder:** @self-clone-specialist → @dev + @ux-design-expert
**Estimativa:** Sprint 6–7

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E8.1 | Fluxo especial "Clonar a mim mesmo" (entry point) | @ux + @dev | CTA no dashboard leva ao fluxo self-clone |
| E8.2 | Questionário guiado de decisões pessoais | @self-clone-specialist + @dev | 5+ perguntas guiadas, save incremental |
| E8.3 | Detecção automática de padrões nas decisões pessoais | @self-clone-specialist + @dev | Padrões destacados com confiança % |
| E8.4 | Frameworks pessoais em primeira pessoa | @self-clone-specialist + @dev | Template em 1a pessoa, exemplo obrigatório |
| E8.5 | Validação final ("Este clone representa como você pensa?") | @dev + @ux | 3 opções (sim/parcialmente/não) com ação correspondente |

---

### E9 — Planos e Billing
**Prioridade:** P1 | **Agente líder:** @dev + @architect
**Estimativa:** Sprint 6

#### Stories

| Story | Descrição | Agente | Critério de Aceite |
|-------|-----------|--------|-------------------|
| E9.1 | Página de pricing (Free/Pro/Agency) | @ux + @dev | Tabela comparativa, CTA para upgrade |
| E9.2 | Integração com Stripe | @dev | Checkout funcional, webhook de confirmação |
| E9.3 | Controle de limite por plano (clones) | @dev | Free bloqueado no 2o clone com upsell |
| E9.4 | Portal de billing (cancelar, mudar plano) | @dev | Usuário gerencia assinatura sem contatar suporte |

---

## Ordem de Execução Sugerida

```
Sprint 1 (Fundação):
  E1 — Autenticação completa
  E2 — Biblioteca de frameworks (seed + UI básica)

Sprint 2-3 (Core):
  E3 — Wizard Etapas 1–3 (Persona + Extração + Layers)

Sprint 3-4 (Core):
  E3 — Wizard Etapas 4–5 (TFR + Assinatura)
  E4 — Geração e exportação de prompts

Sprint 4-5 (Qualidade):
  E5 — Turing Test 2.0 completo
  E6 — Gestão e versioning de clones

Sprint 5-6 (Refinamento):
  E7 — Matriz de resposta contextual
  E9 — Billing e planos

Sprint 6-7 (Extensão):
  E8 — Self-Clone flow
```

---

## Handoffs entre Agentes (Fluxo de Trabalho)

```
@framework-librarian ──────────────────────────────────┐
  (E2: seed + catálogo)                                │
                                                       ▼
@clone-builder ─────────────► @prompt-generator ──► EXPORT
  (E3: wizard 5 etapas)          (E4: generate + export)
       │                              │
       │                              ▼
       └──────────────► @turing-tester
                          (E5: score 0-50)
                               │
                               ▼
                       Score >= 20? ──► @clone-manager
                                         (E6: version + save)

@self-clone-specialist ──► @clone-builder (retoma etapas 3-5)
  (E8: self-clone flow)
```

---

## Critérios de Done (Definition of Done)

Para cada story ser marcada como **Done**:
1. Código implementado por `@dev`
2. Testes unitários passando (`npm test`)
3. Lint e typecheck OK (`npm run lint && npm run typecheck`)
4. QA gate aprovado por `@qa` (score ≥ 7/10)
5. PR criado por `@devops`
6. Story checkbox atualizado no arquivo de story

---

*Plano gerado por @squad-creator (Craft) + @pm (Morgan) — 2026-04-06*
