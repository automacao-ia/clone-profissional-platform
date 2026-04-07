---
task: Extrair Frameworks via Protocolo Forense
responsavel: "@clone-builder"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - decisions_list: Lista de decisões documentadas (min: 3, aviso: <10)
  - person_name: Nome da pessoa sendo clonada
  - domain: Domínio de especialidade
Saida: |
  - detected_patterns: Padrões identificados entre as decisões
  - extracted_frameworks: Lista de frameworks extraídos com nome, fórmula e exemplo
  - extraction_quality_score: Score de qualidade (0-100) baseado em quantidade e consistência
  - warnings: Avisos de qualidade (se < 10 decisões)
Checklist:
  - "[ ] Validar mínimo de decisões (bloqueio se < 3, aviso se < 10)"
  - "[ ] Documentar decisões com fonte verificável"
  - "[ ] Identificar padrões comuns entre decisões"
  - "[ ] Mapear sequência lógica dos padrões"
  - "[ ] Nomear cada framework identificado"
  - "[ ] Documentar critério de decisão de cada framework"
  - "[ ] Adicionar exemplo real aplicado"
  - "[ ] Calcular extraction_quality_score"
  - "[ ] Exibir frameworks extraídos para revisão do usuário"
---

# clone-builder — Extração de Frameworks (Protocolo Forense)

## Protocolo Forense em 5 Passos

### Passo 1: Documentar Decisões Verificáveis

Para cada decisão, capturar:

```
Situação/Contexto: [O que estava acontecendo?]
Decisão Tomada:    [O que a pessoa decidiu fazer?]
Fonte Verificável: [URL / Livro + página / Podcast + timestamp]
Resultado Obtido:  [O que aconteceu depois?]
```

**Regras:**
- Mínimo de 3 decisões para prosseguir (BLOQUEIO)
- Aviso obrigatório se < 10 decisões
- Toda decisão deve ter fonte verificável

### Passo 2: Detectar Padrões

Após coletar decisões, analisar:
- Palavras/conceitos que se repetem
- Critérios de decisão recorrentes
- Sequências de raciocínio similares
- Valores implícitos consistentes

### Passo 3: Nomear Frameworks

Para cada padrão identificado:
```
Nome: [Verbo + Substantivo que descreve o framework]
Exemplo: "Value-First Filtering", "Bottleneck-First Attack"
```

### Passo 4: Documentar Critério de Decisão

```
Trigger: [Quando este framework é ativado?]
Processo: [Quais passos são seguidos?]
Critério: [Como a decisão é tomada?]
```

### Passo 5: Exemplo Real Aplicado

```
Exemplo: [Cite a decisão real que melhor ilustra este framework]
Fonte: [Referência verificável da decisão]
```

## Formato de Saída

```yaml
frameworks_extracted:
  - name: "Value-First Filtering"
    creator: "Alex Hormozi"
    category: Decision
    trigger: "Quando avaliando se perseguir oportunidade"
    formula: "Valor Líquido > Custo de Oportunidade × 3"
    steps:
      - "Calcular valor que o cliente recebe"
      - "Subtrair custo real de entrega"
      - "Comparar com próxima melhor alternativa × 3"
    example: "Hormozi rejeitou consultoria de $300k/ano para focar em equity deals"
    source: "$100M Offers, página 47"
    confidence: 0.94

extraction_quality_score: 87
warnings:
  - "Apenas 7 decisões documentadas. Recomendado: 10+"
```

## Avisos de Qualidade

| Decisões | Status | Mensagem |
|----------|--------|---------|
| < 3 | 🔴 BLOQUEADO | "Insuficiente para extração. Documente pelo menos 3 decisões." |
| 3–9 | 🟡 AVISO | "Clone de baixa fidelidade. Recomendado: 10+ decisões." |
| 10–19 | 🟢 OK | "Boa base para extração." |
| 20+ | 🏆 EXCELENTE | "Base sólida para clone de alta fidelidade." |
