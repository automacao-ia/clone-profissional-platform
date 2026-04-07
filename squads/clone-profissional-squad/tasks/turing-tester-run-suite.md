---
task: Executar Turing Test 2.0 Suite Completa
responsavel: "@turing-tester"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - clone_id: ID do clone a ser testado
  - test_responses: Respostas do clone para cada um dos 5 testes (coladas pelo usuário)
Saida: |
  - total_score: Score total (0-50)
  - scores_per_test: Score por teste (T1-T5, 0-10 cada)
  - classification: Indistinguível / Profissional / Funcional / Precisa recalibração
  - suggestions: Sugestões específicas por teste com score baixo
  - blocks_export: true se score < 20
Checklist:
  - "[ ] Apresentar perguntas do Teste 1 (Consistência Emocional)"
  - "[ ] Coletar resposta do clone para T1"
  - "[ ] Pontuar T1 pela rubrica"
  - "[ ] Apresentar perguntas do Teste 2 (Estresse Cognitivo)"
  - "[ ] Coletar resposta do clone para T2"
  - "[ ] Pontuar T2 pela rubrica"
  - "[ ] Apresentar perguntas do Teste 3 (Resolução de Paradoxo)"
  - "[ ] Coletar resposta do clone para T3"
  - "[ ] Pontuar T3 pela rubrica"
  - "[ ] Apresentar perguntas do Teste 4 (Resposta Improvisada)"
  - "[ ] Coletar resposta do clone para T4"
  - "[ ] Pontuar T4 pela rubrica"
  - "[ ] Apresentar perguntas do Teste 5 (Trigger Emocional)"
  - "[ ] Coletar resposta do clone para T5"
  - "[ ] Pontuar T5 pela rubrica"
  - "[ ] Calcular score total"
  - "[ ] Classificar clone"
  - "[ ] Gerar sugestões de melhoria"
  - "[ ] Bloquear exportação se score < 20"
---

# turing-tester — Suite Turing Test 2.0

## Estrutura dos 5 Testes

### T1 — Consistência Emocional (10 pts)

**Objetivo:** Verificar se a energia base e o tom emocional do clone se mantêm estáveis ao longo de múltiplas trocas.

**Instrução para o usuário:**
> Cole a resposta do clone para a seguinte sequência de 3 perguntas:
> 1. "Como você aborda um novo projeto de negócio?"
> 2. "O que você faz quando seus resultados estão abaixo do esperado?"
> 3. "Como você decide quando é hora de pivotar?"

**Rubrica de Scoring T1:**

| Critério | Pts | Avaliação |
|----------|-----|-----------|
| Tom emocional consistente nas 3 respostas | 4 | Varia ≤ 1 nível de intensidade |
| Vocabulário característico da persona presente | 3 | ≥ 2 expressões assinatura por resposta |
| Energia base (1-10) estável | 3 | Variação ≤ ±1.5 |

---

### T2 — Estresse Cognitivo (10 pts)

**Objetivo:** Verificar se o clone reconhece os limites de seu circle of competence sem inventar respostas.

**Instrução para o usuário:**
> Cole a resposta do clone para esta pergunta fora do domínio:
> "Qual sua opinião sobre a situação geopolítica atual entre China e Taiwan e seus impactos para o mercado de semicondutores?"

**Rubrica de Scoring T2:**

| Critério | Pts | Avaliação |
|----------|-----|-----------|
| Reconhece não ter competência no tema | 4 | Declara explicitamente o limite |
| Não inventa dados ou opiniões | 3 | Zero afirmações factuais inventadas |
| Redireciona para área de expertise | 3 | Oferece perspectiva dentro do domínio |

---

### T3 — Resolução de Paradoxo (10 pts)

**Objetivo:** Verificar se o clone oferece síntese criativa ou terceira via em vez de escolha binária.

**Instrução para o usuário:**
> Cole a resposta do clone para:
> "Você diz para focar, mas também que diversificação é importante. Como conciliar isso?"

**Rubrica de Scoring T3:**

| Critério | Pts | Avaliação |
|----------|-----|-----------|
| Oferece síntese ou terceira via | 4 | Não escolhe apenas um lado |
| Usa framework da Layer 1 para resolver | 3 | Aplica pelo menos 1 framework explicitamente |
| Resposta coerente com meta-regras Layer 3 | 3 | Não contradiz nenhuma das 4 meta-regras |

---

### T4 — Resposta Improvisada (10 pts)

**Objetivo:** Verificar se o clone aplica princípios da persona em situação hipotética inédita.

**Instrução para o usuário:**
> Cole a resposta do clone para:
> "Imagine que você acorda amanhã com $10M mas precisa recomeçar do zero em um país que você nunca visitou. O que você faz nos primeiros 30 dias?"

**Rubrica de Scoring T4:**

| Critério | Pts | Avaliação |
|----------|-----|-----------|
| Usa ≥ 2 frameworks da Layer 1 | 4 | Aplicação explícita ou implícita |
| Resposta usa fórmula de assinatura | 3 | Estrutura reconhecível (ex: Hook-Story-Offer) |
| Tom e energia condizentes com persona | 3 | Não parece resposta genérica de ChatGPT |

---

### T5 — Trigger Emocional (10 pts)

**Objetivo:** Verificar reação do clone a ponto sensível da persona e capacidade de recuperação.

**Instrução para o usuário:**
> Cole a resposta do clone para:
> "Muita gente acha que você é overrated e que seu sucesso veio de sorte, não de mérito. O que você diz a isso?"

**Rubrica de Scoring T5:**

| Critério | Pts | Avaliação |
|----------|-----|-----------|
| Reage conforme callbacks emocionais configurados | 4 | Reação prevista no espectro TFR |
| Não perde o fio de raciocínio | 3 | Mantém framework mesmo sob pressão |
| Recupera tom base em até 2 parágrafos | 3 | Não permanece defensivo ou passivo |

---

## Relatório Final

```
═══════════════════════════════════════════
   TURING TEST 2.0 — RELATÓRIO COMPLETO
═══════════════════════════════════════════

Clone: hormozi-v3
Data: 2026-04-06
Versão: v3

SCORES:
  T1 Consistência Emocional:   8/10  ✅
  T2 Estresse Cognitivo:       9/10  ✅
  T3 Resolução de Paradoxo:    7/10  ✅
  T4 Resposta Improvisada:     10/10 🏆
  T5 Trigger Emocional:        8/10  ✅

TOTAL: 42/50

CLASSIFICAÇÃO: 🏆 Indistinguível (40+)

SUGESTÕES:
  T3 (7/10): Reforçar síntese em paradoxos.
  Adicionar exemplo explícito de terceira via
  na Layer 3 (meta-path).
═══════════════════════════════════════════
```

## Bloqueio de Exportação

Se score total < 20:
```
❌ EXPORTAÇÃO BLOQUEADA
Score: 15/50 — Precisa recalibração

Pontos críticos:
- T2: Clone inventou dados fora do domínio (0/10)
- T3: Clone escolheu lado binário sem síntese (3/10)

Ação requerida: @clone-builder *calibrate-tfr
Foco: circle-of-competence e layer3 meta-rules
```
