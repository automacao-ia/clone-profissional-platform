---
workflow: Clone Creation Story Development Cycle (SDC)
responsavel: "@clone-builder"
atomic_layer: workflow
---

# Clone Creation SDC — Fluxo Principal de Criação

## Visão Geral

Workflow primário da plataforma. Cobre os 3 fluxos documentados no PRD:
- **Fluxo 1:** Clone a partir de biblioteca (~20 min)
- **Fluxo 2:** Clone forense custom (~60–90 min)
- **Fluxo 3:** Self-Clone (~45 min via `self-clone-flow.md`)

---

## Fluxo 1 — Clone de Biblioteca (20 min)

```
ENTRADA: Usuário seleciona pessoa de referência (ex: Hormozi)

Etapa 1: @framework-librarian *catalog-frameworks --person hormozi
         → Exibe 5 frameworks verificados disponíveis

Etapa 2: @clone-builder *define-persona
         → Nome do clone, confirma domínio, seleciona estilo cognitivo

Etapa 3: @clone-builder *configure-layers
         → Layer 1: aceitar os 5 frameworks pré-verificados
         → Layer 2: configurar triggers (growth, innovation, leverage, negotiation, timing)
         → Layer 3: configurar 4 meta-regras invioláveis

Etapa 4: @clone-builder *calibrate-tfr
         → Selecionar arquitetura de resposta padrão
         → Configurar energia base e callbacks emocionais

Etapa 5: @clone-builder *build-signature
         → Selecionar template de fórmula (ex: Hormozi Value Multiplier)
         → Personalizar openings e closings

Etapa 6: @prompt-generator *generate-prompt
         → Gerar preview do system prompt

Etapa 7: @turing-tester *run-turing-test (opcional)
         → Score esperado: 35–45/50 com clone de biblioteca

Etapa 8: @prompt-generator *export-prompt --format chatgpt
         → Exportar prompt pronto para uso

SAÍDA: System prompt exportado + clone salvo com versão v1
```

---

## Fluxo 2 — Clone Forense Custom (60–90 min)

```
ENTRADA: Usuário quer clonar pessoa não-listada ou com profundidade maior

Etapa 1: @clone-builder *define-persona
         → Nome da pessoa, domínio, estilo cognitivo, emoção base

Etapa 2: @clone-builder *extract-frameworks
         → Protocolo forense: documentar 10+ decisões verificáveis
         → Sistema detecta padrões
         → Extrair 3–5 frameworks customizados

Gate 2A: decisions_count >= 3? → PROSSEGUIR
         decisions_count < 3?  → BLOQUEAR, solicitar mais decisões
         decisions_count < 10? → AVISAR, continuar com qualidade reduzida

Etapa 3: @clone-builder *configure-layers
         → Layer 1: frameworks extraídos + seleção da biblioteca
         → Layer 2: triggers customizados
         → Layer 3: meta-regras personalizadas

Etapa 4: @clone-builder *calibrate-tfr
         → Calibração detalhada Think-Feel-Respond
         → Matriz contextual (técnico/estratégico/criativo/problema)

Etapa 5: @clone-builder *build-signature
         → Builder visual da fórmula (4–5 passos)
         → Checklist de validação (7 itens)

Etapa 6: @prompt-generator *generate-prompt
         → Preview completo

Etapa 7: @turing-tester *run-turing-test
         → Score >= 30? → Exportar
         → Score 20-29? → Sugestões + decisão do usuário
         → Score < 20?  → BLOQUEAR exportação, recalibrar obrigatório

Gate 7A: score >= 20? → @prompt-generator *export-prompt
         score < 20?  → @clone-builder *calibrate-tfr (re-entrar na Etapa 4)

Etapa 8: @clone-manager *version-clone
         → Salvar clone com versão e score do Turing Test

SAÍDA: Clone completo (score ≥ 30) + system prompt exportado
```

---

## QA Loop (quando score < 30)

```
Iteração máxima: 3 tentativas de recalibração

Iteração 1:
  @turing-tester *suggest-improvements
  @clone-builder *calibrate-tfr (foco nos testes com menor score)
  @turing-tester *run-turing-test → novo score

Iteração 2 (se score ainda < 30):
  @clone-builder *extract-frameworks (adicionar mais decisões)
  @clone-builder *configure-layers (revisar Layer 1 e Layer 2)
  @turing-tester *run-turing-test → novo score

Iteração 3 (se score ainda < 30):
  Escalate: notificar usuário que clone precisa de mais material de fonte
  Sugestão: adicionar 10+ decisões documentadas

Após max_iterations: marcar clone como "needs_more_source_material"
```

---

## Diagrama de Decisão

```
                    ┌─────────────────────┐
                    │   Tipo de Clone?    │
                    └─────────────────────┘
                    /         |           \
                   /          |            \
        Biblioteca        Forense        Self-Clone
            │             Custom              │
            │                │               │
       20 min            60-90 min        45 min
     Fluxo 1 ↑          Fluxo 2 ↑     self-clone-flow.md
```
