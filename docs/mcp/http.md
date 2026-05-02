---
sidebar_position: 5
sidebar_label: HTTP transport
---

# MCP HTTP transport

Alternativa ao stdio quando voce precisa rodar o MCP em servidor remoto, integracao server-side, ou cliente que aceita Bearer token (Cursor remote, Continue remote, scripts custom).

**Endpoint:** `POST https://api.zenhub.pro/api/mcp`

**Auth:** mesma API key do `/v1` — `x-api-key: agwpp_live_...` ou `Authorization: Bearer agwpp_live_...`

**Modo:** Streamable HTTP stateless (spec MCP 2025-03-26). Cada POST e uma chamada JSON-RPC completa, sem sessao persistente.

`GET` e `DELETE` retornam `405 Method Not Allowed`.

## Smoke test (cURL)

```bash
export KEY=agwpp_live_...
export URL=https://api.zenhub.pro/api/mcp

# Handshake
curl -sX POST $URL \
  -H "x-api-key: $KEY" \
  -H "accept: application/json, text/event-stream" \
  -H "content-type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"smoke","version":"0.1"}}}'

# Listar tools
curl -sX POST $URL \
  -H "x-api-key: $KEY" \
  -H "accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'

# Chamar tool
curl -sX POST $URL \
  -H "x-api-key: $KEY" \
  -H "accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"stats_dashboard","arguments":{}}}'
```

## Cursor (remote MCP)

`.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "zenhub-http": {
      "url": "https://api.zenhub.pro/api/mcp",
      "headers": { "x-api-key": "agwpp_live_..." }
    }
  }
}
```

## Claude Code (remote)

```bash
claude mcp add zenhub-http --transport http \
  --header "x-api-key: agwpp_live_..." \
  https://api.zenhub.pro/api/mcp
```

## Claude Desktop (via mcp-remote bridge)

Claude Desktop ainda nao suporta HTTP nativo. Workaround:

```json
{
  "mcpServers": {
    "zenhub": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.zenhub.pro/api/mcp",
        "--header",
        "x-api-key: agwpp_live_..."
      ]
    }
  }
}
```

Para Claude Desktop, **stdio direto** (`zenhub-mcp`) e mais simples.

## OAuth

Claude.ai connectors exigem OAuth 2.1 + PKCE — em desenvolvimento. Use stdio ou Bearer enquanto isso.
