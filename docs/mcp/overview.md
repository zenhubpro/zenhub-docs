---
sidebar_position: 1
sidebar_label: Visao Geral
---

# MCP — Model Context Protocol

O ZenHub publica um servidor **MCP** que expoe ~50 ferramentas para qualquer cliente compativel: Claude Desktop, Claude Code, Codex CLI, Cursor, GitHub Copilot (VS Code MCP), Continue e outros.

Pense no MCP como uma "API para IAs" — o modelo conhece o schema completo de cada ferramenta antes de executar, valida argumentos e invoca chamadas tipadas.

## Setup em 1 linha — peca pra IA fazer

Cole isso no **Claude Desktop / Claude Code / Cursor / Codex / VS Code**:

```
Configure o ZenHub MCP no meu cliente seguindo as instrucoes em
https://github.com/zenhubpro/zenhub-cli
```

A IA vai:

1. Ler o README do repositorio (que contem instrucoes especificas para agentes).
2. Perguntar qual cliente voce usa (se nao for obvio do contexto).
3. Pedir sua API key (`agwpp_live_...`).
4. Editar o config file correspondente (Claude Desktop / Code / Cursor / Codex / VS Code).
5. Pedir pra reiniciar o app.
6. Validar com "List my WhatsApp connections via ZenHub MCP".

**~30 segundos** end-to-end, sem voce abrir arquivo de config.

Se preferir setup manual, va para [Setup por cliente](/mcp/clients).

## API key

Gere em https://www.zenhub.pro/settings/integrations. Use scope `write` se voce quer que a IA execute acoes (criar campanhas, agendar mensagens, etc); use `read` se quer apenas leitura.

## Os 2 publicos principais

| Caso | Cliente recomendado | Por que |
|---|---|---|
| **Power user gerenciando WhatsApp** | Claude Desktop, Cursor | Interface grafica, MCP roda em background |
| **Dev / engenheiro** | Claude Code, Codex CLI | Terminal, pode misturar comandos `zenhub` (CLI) + tools MCP |

Os dois sao stdio — npm package `zenhub-mcp` rodando localmente. Nao precisa servidor proprio.

## Transports suportados

| Cliente | Transport | Setup |
|---|---|---|
| Claude Desktop | stdio | npm + config |
| Claude Code | stdio | `claude mcp add` |
| Codex CLI | stdio | `~/.codex/config.toml` |
| Cursor | stdio | `.cursor/mcp.json` |
| VS Code (Copilot/Continue) | stdio | `.vscode/mcp.json` |
| HTTP (avancado) | StreamableHTTP | `https://api.zenhub.pro/api/mcp` + Bearer |
| Claude.ai (Connectors) | HTTP/SSE remoto | em desenvolvimento — exige OAuth |

## Proximos passos

- [Setup por cliente](/mcp/clients) — snippets prontos
- [Tools disponiveis](/mcp/tools) — lista completa
- [HTTP transport](/mcp/http) — para integracoes server-side
- [Conector remoto Claude.ai](/mcp/claude-ai) — em construcao
