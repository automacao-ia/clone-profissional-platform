# Clone Profissional Squad

Squad para criação sistemática de clones cognitivos profissionais, implementando a metodologia **Clone Profissional** completa.

## Agentes

| Agente | Persona | Responsabilidade |
|--------|---------|-----------------|
| `@framework-librarian` | 📚 Vera | Biblioteca de frameworks verificados |
| `@clone-builder` | 🧬 Forjador | Wizard de criação em 5 etapas |
| `@prompt-generator` | ⚡ Nexus | Geração e exportação de system prompts |
| `@turing-tester` | 🔬 Oracle | Turing Test 2.0 (score 0–50) |
| `@clone-manager` | 🗂️ Atlas | Dashboard, versioning, export/import |
| `@self-clone-specialist` | 🪞 Espelho | Fluxo de auto-clonagem |

## Fluxo Principal

```
[Biblioteca] → @framework-librarian *catalog-frameworks
[Criar Clone] → @clone-builder *start-clone (wizard 5 etapas)
[Gerar Prompt] → @prompt-generator *generate-prompt
[Validar] → @turing-tester *run-turing-test
[Exportar] → @prompt-generator *export-prompt
```

## Documentação

- **PRD:** `docs/prd.md`
- **Plano de Trabalho:** `docs/work-plan.md`
- **Workflow principal:** `workflows/clone-creation-sdc.md`
- **Blueprint do squad:** `squads/.designs/clone-profissional-squad-design.yaml`
