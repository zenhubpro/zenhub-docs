---
sidebar_position: 1
sidebar_label: Changelog
---

# Changelog

Historico de mudancas relevantes da API publica v1.

## 2026-04 — MCP server + monorepo CLI

- **Novo** servidor MCP stdio (`zenhub-mcp` no npm) para Claude Desktop, Codex, Cursor, VS Code Copilot
- **Novo** comando `zenhub mcp` no CLI inicia o servidor sem instalacao separada
- Cobertura MCP: 100% das 73 rotas v1 publicas nao-admin
- Bug fix: prefixo duplicado `/api/api/v1/public/...` agora aceita ambos `/v1/public` e `/api/v1/public` (alias)

## Versionamento da API

A API segue versionamento via prefixo de URL (`/v1/`). Mudancas breaking exigem nova major (`/v2/`). Adicoes nao-breaking sao listadas aqui sem incrementar versao.

### Politica de deprecation

- Endpoints marcados como deprecated continuam funcionando por **6 meses** apos o aviso
- Resposta inclui header `Sunset: <RFC 1123 date>` quando o endpoint esta proximo do fim
- Avisos sao publicados aqui e por email para contas com uso recente do endpoint
