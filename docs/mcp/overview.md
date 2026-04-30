---
sidebar_position: 1
sidebar_label: Visao Geral
---

# MCP — Model Context Protocol

O ZenHub publica um servidor **MCP** que expoe ~58 ferramentas para qualquer cliente compativel: Claude Desktop, Claude Code, Codex CLI, Cursor, GitHub Copilot (VS Code MCP), Continue e outros.

Pense no MCP como uma "API para IAs" — mais expressiva do que rodar comandos CLI, porque o modelo conhece o schema completo de cada ferramenta (Zod → JSON Schema) e os argumentos validos antes de executar.

## Transports suportados

| Cliente | Transport | Setup |
|---|---|---|
| Claude Desktop | stdio | npm + config |
| Claude Code | stdio | `claude mcp add` |
| Codex CLI | stdio | `~/.codex/config.toml` |
| Cursor | stdio | `.cursor/mcp.json` |
| VS Code (Copilot/Continue) | stdio | `.vscode/mcp.json` |
| Claude.ai (Connectors) | HTTP/SSE remoto | em desenvolvimento — `mcp.zenhub.pro` |

## Pacote stdio

```bash
npm install -g zenhub-mcp
# ou via npx (sem instalacao)
npx -y zenhub-mcp
```

Auth via env var `ZENHUB_API_KEY` (`agwpp_live_*`). Opcionalmente `ZENHUB_API_URL` para overrides.

## Proximos passos

- [Setup por cliente](/mcp/clients) — snippets prontos para copiar
- [Tools disponiveis](/mcp/tools) — lista completa com schemas
- [Conector remoto Claude.ai](/mcp/claude-ai) — em construcao
