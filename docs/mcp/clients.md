---
sidebar_position: 2
sidebar_label: Setup por Cliente
---

# Setup do servidor MCP por cliente

Snippets prontos. Substitua `agwpp_live_...` pela sua API key gerada em **Configuracoes > Integracoes > Chaves de API**.

## Claude Desktop

`~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) ou `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "zenhub": {
      "command": "npx",
      "args": ["-y", "zenhub-mcp"],
      "env": { "ZENHUB_API_KEY": "agwpp_live_..." }
    }
  }
}
```

Reinicie o Claude Desktop. As ferramentas aparecem no menu de ferramentas (icone do plugue).

## Claude Code

```bash
claude mcp add zenhub --env ZENHUB_API_KEY=agwpp_live_... -- npx -y zenhub-mcp
```

Ou edite `~/.claude.json`:

```json
{
  "mcpServers": {
    "zenhub": {
      "command": "npx",
      "args": ["-y", "zenhub-mcp"],
      "env": { "ZENHUB_API_KEY": "agwpp_live_..." }
    }
  }
}
```

## Codex CLI

`~/.codex/config.toml`:

```toml
[mcp_servers.zenhub]
command = "npx"
args = ["-y", "zenhub-mcp"]
env = { ZENHUB_API_KEY = "agwpp_live_..." }
```

## Cursor

`.cursor/mcp.json` (projeto) ou `~/.cursor/mcp.json` (global):

```json
{
  "mcpServers": {
    "zenhub": {
      "command": "npx",
      "args": ["-y", "zenhub-mcp"],
      "env": { "ZENHUB_API_KEY": "agwpp_live_..." }
    }
  }
}
```

## VS Code (Copilot / Continue)

`.vscode/mcp.json`:

```json
{
  "servers": {
    "zenhub": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "zenhub-mcp"],
      "env": { "ZENHUB_API_KEY": "agwpp_live_..." }
    }
  }
}
```

## Verificacao

Em qualquer cliente, peca a IA: **"Liste minhas campanhas usando ZenHub MCP"**. A IA deve invocar `campaigns_list` e retornar JSON com suas campanhas.

Smoke test direto via terminal:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | \
  ZENHUB_API_KEY=$ZENHUB_API_KEY npx zenhub-mcp
```

Deve retornar JSON com 50+ tools.

## Troubleshooting

| Sintoma | Causa | Solucao |
|---|---|---|
| `ZENHUB_API_KEY environment variable is required` | Env nao carregada | Confirme `env` no config do cliente |
| Tools nao aparecem | Cache do cliente | Reinicie o cliente |
| `HTTP 401 — API key invalida` | Chave revogada/errada | Gerar nova no dashboard |
| `HTTP 403 — Organization is inactive` | Assinatura cancelada | Reativar no billing |
