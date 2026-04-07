# Clone Profissional Platform — PRD v1.0

**Status:** Draft
**Owner:** @pm (Morgan)
**Data:** 2026-04-06
**Versão:** 1.0

---

## 1. Problema & Contexto

### O Problema

Frameworks de tomada de decisão de empreendedores world-class estão documentados publicamente — em livros, podcasts, cartas a acionistas — mas existem de forma fragmentada e não-estruturada. Criar um clone cognitivo de alta qualidade hoje exige:

- Centenas de horas de pesquisa manual por pessoa clonada
- Expertise em engenharia de prompts
- Calibração por trial-and-error sem metodologia definida
- Sem métrica de qualidade padronizada para avaliar o resultado

O resultado: um mercado saturado de "GPT persona wrappers" genéricos que falham sob questionamento e não passam no Turing Test.

### A Oportunidade

A metodologia **Clone Profissional** resolve esse problema com um protocolo estruturado testado em produção:

- Protocolo forense de extração de frameworks em 5 passos
- Sistema de 3 camadas de frameworks (Primary, Situational, Meta)
- Modelo de calibração Think-Feel-Respond
- Fórmulas de resposta por assinatura com elementos característicos
- Turing Test 2.0 com score padronizado (escala 0-50)

A metodologia foi validada com clones que geram de R$800 a R$88.000 por clone, para pessoas como Hormozi, Naval Ravikant, Buffett, Munger, Musk, Jobs e Dalio.

---

## 2. Usuários-Alvo (Personas)

### Persona 1: O Criador de Conteúdo / Criador de Cursos
- Quer criar um clone de si mesmo para responder perguntas dos alunos 24/7
- Tem conteúdo documentado mas não sabe como extrair frameworks sistemáticos
- Disposto a pagar R$500–R$2.000/clone para economizar horas de suporte manual

### Persona 2: O Consultor / Coach
- Precisa escalar atendimento sem contratar mais pessoas
- Quer um clone que aplique seus frameworks de consultoria com consistência
- Precisa que o clone passe no Turing Test com clientes reais

### Persona 3: O Estudante de Modelos Mentais
- Quer aprender com os melhores usando a metodologia Clone Profissional
- Busca clones de Hormozi, Naval, Buffett para consultar diariamente
- Começa com clones pré-fabricados da biblioteca

### Persona 4: O Agente de IA / Prompt Engineer
- Cria clones para clientes como serviço (5–20 clones/mês)
- Precisa de plataforma para produzir clones mais rápido e com qualidade mensurável
- Volume alto exige dashboard de gestão e exportação em JSON

---

## 3. Objetivos & Não-Objetivos

### Objetivos — IN SCOPE (v1.0)

- **G1:** Implementar protocolo forense de extração de frameworks (5 passos)
- **G2:** Implementar sistema de 3 camadas (Primary, Situational, Meta)
- **G3:** Implementar calibração Think-Feel-Respond (7 estilos cognitivos, 12 arquiteturas de resposta)
- **G4:** Gerar system prompts exportáveis para GPT/Claude
- **G5:** Executar Turing Test 2.0 automatizado (score 0–50)
- **G6:** Prover biblioteca de frameworks pré-verificados (Hormozi, Naval, Buffett, Munger, Musk, Jobs, Dalio)
- **G7:** Permitir criação de clone do próprio usuário (self-clone)

### Não-Objetivos — OUT OF SCOPE (v1.0)

- Chat integrado na plataforma — usuário usa o prompt exportado no ChatGPT/Claude externamente (decisão confirmada)
- Treinamento fine-tuning de modelos customizados
- Marketplace de clones (compra/venda entre usuários)
- Mobile app nativo
- Análise automática de áudio/vídeo de entrevistas

---

## 4. Requisitos Funcionais

### FR-001 — Autenticação e Contas

| ID | Requisito |
|----|-----------|
| FR-001.1 | Registro/login com email ou Google OAuth |
| FR-001.2 | Dashboard pessoal com todos os clones do usuário |
| FR-001.3 | Planos de assinatura: Free (1 clone), Pro (10 clones), Agency (ilimitado) |

---

### FR-002 — Biblioteca de Frameworks Pré-verificados

| ID | Requisito |
|----|-----------|
| FR-002.1 | Catálogo navegável de frameworks por pessoa (Hormozi, Naval, Buffett, Munger, Musk, Jobs, Dalio) |
| FR-002.2 | Para cada framework: Nome, Criador, Categoria, Fonte verificável (livro/página ou podcast/timestamp), Fórmula, Exemplo real documentado |
| FR-002.3 | Filtro por tipo: Analysis, Decision, Creation, Solution, Communication |
| FR-002.4 | Busca full-text na biblioteca |
| FR-002.5 | Pré-carga de 35+ frameworks verificados no lançamento (5 por pessoa × 7 pessoas) |

**Frameworks a incluir na pré-carga:**

| Pessoa | Frameworks |
|--------|-----------|
| **Hormozi** | Value Equation, Grand Slam Offer Stack, LTGP (Lifetime Gross Profit), Core Four, Bottleneck Theory |
| **Naval** | Specific Knowledge Test, Leverage Hierarchy, Permissionless Principle, Wealth Formula, Builder vs Talker |
| **Munger** | Inversion, Lollapalooza Effect, Fat Pitch, Mental Model Lattice, Opportunity Cost |
| **Buffett** | Circle of Competence, Economic Moat, Mr. Market, Margin of Safety, Owner Earnings |
| **Musk** | First Principles, Question Requirements → Simplify → Accelerate |
| **Jobs** | Remove Until It Hurts, Problem → Magic → One More Thing |
| **Dalio** | Identify Pattern → Create System, Radical Transparency |

---

### FR-003 — Criação de Clone (Wizard em 5 Etapas)

#### Etapa 1: Definição da Persona

| ID | Requisito |
|----|-----------|
| FR-003.1 | Nome do clone, pessoa de referência (selecionável da lista ou livre) |
| FR-003.2 | Descrição do domínio de especialidade |
| FR-003.3 | Estilo cognitivo primário (7 opções): Analytic-Linear, Systemic-Holistic, First-Principles, Analogic-Metaphoric, Data-Driven-Iterative, Intuitive-Pattern, Narrative-Experiential |
| FR-003.4 | Emoção base com slider de intensidade (1–10) |

#### Etapa 2: Extração de Frameworks (Protocolo Forense)

| ID | Requisito |
|----|-----------|
| FR-003.5 | Interface para documentar decisões reais verificáveis: Situação/contexto, Decisão tomada, Fonte verificável (URL, livro + página, podcast + timestamp), Resultado obtido |
| FR-003.6 | Mínimo de 5 decisões documentadas (aviso se < 10, bloqueio se < 3) |
| FR-003.7 | Sistema de detecção de padrão entre decisões (highlight de repetições) |
| FR-003.8 | Extração guiada de framework a partir das decisões — 5 passos: (1) Identificar padrão comum, (2) Mapear sequência lógica, (3) Nomear o framework, (4) Documentar critério de decisão, (5) Adicionar exemplo real aplicado |

#### Etapa 3: Configuração das 3 Camadas

| ID | Requisito |
|----|-----------|
| FR-003.9 | **Layer 1 (Primary)** — Selecionar 3–5 frameworks sempre ativos da biblioteca ou customizados |
| FR-003.10 | **Layer 2 (Situational)** — Mapear triggers → frameworks: growth, innovation, leverage, negotiation, timing. Suporte a triggers customizados |
| FR-003.11 | **Layer 3 (Meta)** — 4 meta-regras invioláveis configuráveis: Meta-output, Meta-path, Meta-stupidity, Meta-clarity |

#### Etapa 4: Calibração Think-Feel-Respond

| ID | Requisito |
|----|-----------|
| FR-003.12 | **THINK** — Seleção do estilo cognitivo com exemplo de aplicação |
| FR-003.13 | **FEEL** — Configuração do espectro emocional: energia base (slider 1–10), triggers emocionais, callbacks por estado do usuário (ex: frustração → reduzir 30%, excitação → aumentar 20%) |
| FR-003.14 | **RESPOND** — Seleção da arquitetura de resposta padrão (12 opções): Hook-Story-Offer, Problem-Agitation-Solution, Principle-Application-Example, Question-Exploration-Synthesis, Thesis-Antithesis-Synthesis, Setup-Conflict-Resolution, Data-Insight-Action, Vision-Obstacle-Path, Symptom-Diagnosis-Prescription, Observation-Hypothesis-Test, Context-Content-Conclusion, Provocation-Reflection-Transformation |
| FR-003.15 | Arquitetura condicional por contexto: técnico, estratégico, criativo, problema |

#### Etapa 5: Fórmula de Resposta por Assinatura

| ID | Requisito |
|----|-----------|
| FR-003.16 | Builder visual de fórmula com 4–5 passos sequenciais |
| FR-003.17 | Cada passo define: Nome, Duração estimada (segundos), Exemplo de texto |
| FR-003.18 | Templates de fórmulas pré-prontas: Hormozi "Value Multiplier" (5 passos), Naval "Paradox Revealer" (4 passos), Jobs "Elegant Revolution" (4 passos) |
| FR-003.19 | Elementos de assinatura: aberturas características, movimentos de desenvolvimento, closings poderosos |
| FR-003.20 | Checklist de validação da fórmula (7 itens) |

---

### FR-004 — Geração de System Prompt

| ID | Requisito |
|----|-----------|
| FR-004.1 | Geração automática de system prompt completo a partir de todas as configurações do clone |
| FR-004.2 | Seções geradas no prompt: Identidade e persona, Regras Layer 1 (sempre ativas), Regras Layer 2 (condicionais com triggers), Meta-regras Layer 3, Modelo Think-Feel-Respond configurado, Fórmula de resposta por assinatura, Callbacks emocionais, Critério de competência (circle of competence) |
| FR-004.3 | Preview do prompt antes de exportar |
| FR-004.4 | Exportação em formatos: ChatGPT (sistema), Claude (sistema), JSON estruturado |
| FR-004.5 | Estimativa de tokens do prompt gerado |
| FR-004.6 | Opção de prompt compacto (≤ 2K tokens) vs. completo (≤ 8K tokens) |

---

### FR-005 — Turing Test 2.0

| ID | Requisito |
|----|-----------|
| FR-005.1 | Suite de 5 testes padronizados (10 pontos cada, total 50): (1) Consistência Emocional — 10 perguntas, verifica se energia base se mantém; (2) Estresse Cognitivo — perguntas fora da expertise, verifica se admite não saber; (3) Resolução de Paradoxo — contradições apresentadas, verifica síntese vs. escolha; (4) Resposta Improvisada — evento fictício, verifica aplicação de princípios; (5) Trigger Emocional — toca ponto sensível, verifica reação e recuperação |
| FR-005.2 | Interface de teste: usuário cola resposta do clone, sistema analisa e pontua |
| FR-005.3 | Rubrica de scoring por teste com critérios explícitos |
| FR-005.4 | Relatório de qualidade com score total e por categoria |
| FR-005.5 | Classificação automática: Indistinguível (40+), Profissional (30–39), Funcional (20–29), Precisa recalibração (< 20) |
| FR-005.6 | Sugestões de melhoria baseadas nos testes que falharam |
| FR-005.7 | Histórico de testes por versão do clone |

---

### FR-006 — Gestão de Clones

| ID | Requisito |
|----|-----------|
| FR-006.1 | Dashboard com lista de clones: nome, pessoa de referência, score Turing, data de criação, última edição |
| FR-006.2 | Versioning de clones (v1, v2, v3...) com comparação entre versões |
| FR-006.3 | Duplicar clone para criar variações |
| FR-006.4 | Arquivar/desarquivar clones |
| FR-006.5 | Exportar dados completos do clone em JSON |
| FR-006.6 | Importar clone de JSON exportado |

---

### FR-007 — Matriz de Resposta Contextual

| ID | Requisito |
|----|-----------|
| FR-007.1 | Configuração da matriz CONTEXTO → THINK → FEEL → RESPOND com mapeamentos padrão: pergunta técnica → Analítico → Neutro → Data-Insight-Action; pedido de ajuda → Empático → Suportivo → Problem-Solution; desafio/crítica → Defensivo → Assertivo → Evidence-Refutation-Reframe; oportunidade → Estratégico → Animado → Vision-Plan-Action; dúvida existencial → Filosófico → Contemplativo → Principle-Exploration-Insight |
| FR-007.2 | Possibilidade de adicionar contextos customizados |
| FR-007.3 | Preview de resposta por contexto |

---

### FR-008 — Self-Clone (Clone do Próprio Usuário)

| ID | Requisito |
|----|-----------|
| FR-008.1 | Fluxo especial para clonar a si mesmo |
| FR-008.2 | Questionário guiado para documentar as próprias decisões passadas |
| FR-008.3 | Identificação automática de padrões recorrentes nas decisões |
| FR-008.4 | Template de framework com linguagem em primeira pessoa |
| FR-008.5 | Validação final: "Este clone representa como você pensa?" |

---

## 5. Requisitos Não-Funcionais

| ID | Categoria | Requisito |
|----|-----------|-----------|
| NFR-001 | Performance | Geração de system prompt < 3 segundos |
| NFR-002 | Escalabilidade | Suportar 10.000 usuários simultâneos |
| NFR-003 | Segurança | Dados de frameworks e prompts criptografados em repouso (AES-256) |
| NFR-004 | Privacidade | Usuário controla visibilidade dos clones (privado/público) |
| NFR-005 | Acessibilidade | WCAG 2.1 AA |
| NFR-006 | Disponibilidade | 99.5% uptime SLA |
| NFR-007 | Compatibilidade | Chrome, Safari, Firefox, Edge (últimas 2 versões) |
| NFR-008 | Internacionalização | PT-BR nativo, EN como segunda língua |
| NFR-009 | Rastreabilidade | Toda afirmação nos frameworks deve ter fonte verificável |
| NFR-010 | Integridade | Sistema deve recusar frameworks sem fonte documentada |

---

## 6. User Stories Principais

**US-001:** Como criador de conteúdo, quero importar frameworks verificados do Hormozi para meu clone, para que meu clone responda com a lógica de valor dele.

**US-002:** Como consultor, quero documentar minhas 10 decisões mais impactantes e extrair meus próprios frameworks, para que meu clone pense como eu penso.

**US-003:** Como prompt engineer, quero exportar o clone em formato JSON e reimportá-lo em outro projeto, para que eu possa reutilizar trabalho entre clientes.

**US-004:** Como usuário, quero rodar o Turing Test 2.0 no meu clone e receber um score de 0–50 com diagnóstico, para que eu saiba o que melhorar antes de entregar ao cliente.

**US-005:** Como usuário iniciante, quero usar um template pré-pronto do Naval e apenas personalizar os triggers situacionais, para que eu crie meu primeiro clone em menos de 30 minutos.

---

## 7. Fluxos de Usuário Principais

### Fluxo 1: Clone a partir de biblioteca (~20 min)
```
Login → Dashboard → Novo Clone → Selecionar "Hormozi" →
Confirmar frameworks Layer 1 → Configurar triggers Layer 2 →
Ajustar meta-regras Layer 3 → Calibrar emoção base →
Preview prompt → Exportar → Done
```

### Fluxo 2: Clone forense custom (~60–90 min)
```
Login → Novo Clone → Persona custom →
Adicionar 10+ decisões documentadas →
Sistema detecta padrões → Extrair 3 frameworks →
Configurar 3 camadas → Calibrar Think-Feel-Respond →
Criar fórmula de assinatura → Turing Test 2.0 →
Score ≥ 30? → Exportar
```

### Fluxo 3: Self-Clone (~45 min)
```
Login → Novo Clone → "Clonar a mim mesmo" →
Questionário de decisões passadas →
Extração guiada → Frameworks em primeira pessoa →
Turing Test → Exportar
```

---

## 8. Métricas de Sucesso

| ID | Métrica | Meta |
|----|---------|------|
| M1 | Clones que atingem score Turing ≥ 30/50 na primeira tentativa | 80% |
| M2 | Tempo médio para criar clone completo | < 60 minutos |
| M3 | Taxa de conclusão do funil (usuários que exportam o prompt) | 70% |
| M4 | NPS após 30 dias de uso | ≥ 50 |
| M5 | Frameworks verificados disponíveis no lançamento | ≥ 35 |
| M6 | Taxa de retenção mensal (usuários Pro) | ≥ 60% |

---

## 9. Estrutura de Epics

| Epic | Título | Prioridade |
|------|--------|-----------|
| E1 | Autenticação e Gestão de Conta | P0 |
| E2 | Biblioteca de Frameworks Verificados | P0 |
| E3 | Wizard de Criação de Clone (5 etapas) | P0 |
| E4 | Geração e Exportação de System Prompt | P0 |
| E5 | Turing Test 2.0 Suite | P1 |
| E6 | Gestão de Clones e Versioning | P1 |
| E7 | Matriz de Resposta Contextual | P1 |
| E8 | Self-Clone Flow | P2 |
| E9 | Planos e Billing | P1 |

---

## 10. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Violação de direitos autorais ao usar citações de livros | Média | Alto | Limitar a citações curtas + fonte obrigatória; orientar usuário sobre fair use |
| Clone passando em Turing Test gerar uso enganoso (impersonation) | Média | Alto | ToS claro proibindo uso para impersonation não-autorizada |
| Complexidade do wizard afastar usuários iniciantes | Alta | Médio | Modo "template rápido" com pré-preenchimento; onboarding guiado obrigatório |
| Qualidade dos frameworks subjetiva e difícil de validar | Baixa | Médio | Critério de fonte verificável obrigatório; curadoria editorial contínua |
| Prompt gerado ultrapassar limites de contexto da LLM | Baixa | Baixo | Modo compacto automático (≤ 2K tokens) + estimativa de tokens em tempo real |

---

## 11. Perguntas Abertas

| ID | Pergunta | Stakeholder |
|----|---------|------------|
| Q1 | A plataforma vai hospedar conversa direta com o clone (chat built-in) ou só gerar o prompt para uso externo? *(atualmente: só exportar)* | @pm + @architect |
| Q2 | Haverá marketplace para venda de clones entre usuários em versões futuras? | @pm + @po |
| Q3 | Qual LLM será usado para analisar automaticamente as respostas no Turing Test? | @architect |
| Q4 | Frameworks de pessoas vivas exigem disclaimer legal específico além do ToS? | Jurídico |
| Q5 | O self-clone terá integração para importar histórico de mensagens (WhatsApp, email) para extração automática de padrões em versões futuras? | @pm + @analyst |

---

## 12. Referências

| Documento | Localização | Descrição |
|-----------|-------------|-----------|
| Metodologia Clone Profissional | `CLONE PROFISSIONAL.md` | Material-fonte completo da metodologia (1.443 linhas) |
| Agentes AIOX | `AGENTS.md` | Configuração dos agentes do framework |
| PRD Template | `.aiox-core/product/templates/prd-tmpl.yaml` | Template base utilizado |

---

*PRD gerado por @pm (Morgan) — Synkra AIOX v2.0*
