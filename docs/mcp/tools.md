---
sidebar_position: 3
sidebar_label: Tools
---

# Tools MCP disponiveis

A lista canonica e a saida de `tools/list` no servidor — sempre execute o smoke test para ver schemas atualizados:

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | \
  ZENHUB_API_KEY=$ZENHUB_API_KEY npx zenhub-mcp | jq '.result.tools[].name'
```

## Por categoria

### Campaigns
- `campaigns_list`, `campaigns_get`, `campaigns_create`, `campaigns_update`, `campaigns_delete`
- `campaigns_stats`, `campaigns_execute`

### Groups
- `groups_list`, `groups_get`, `groups_members`, `groups_create`
- `groups_add_member`, `groups_remove_member`, `groups_sync_members`
- `groups_import`, `groups_remove_from_campaign`, `campaigns_members`

### Schedules
- `schedules_list`, `schedules_get`, `schedules_create`, `schedules_update`, `schedules_delete`, `schedules_retry`
- `campaign_schedules_list`, `campaign_schedules_create`, `campaign_schedules_get`
- `campaign_schedules_update`, `campaign_schedules_delete`

### Messages
- `messages_send` — single group
- `messages_send_to_campaigns` — broadcast pra varias campanhas
- `messages_bulk` — multiplos grupos com customizacao por destinatario

### ZenChat (Conversations)
- `conversations_list`, `conversations_get`, `conversations_messages`, `conversations_reply`

### Contacts
- `contacts_list`, `contacts_get`, `contacts_create`, `contacts_update`, `contacts_delete`

### Connections
- `connections_list`, `connections_get`

### Stats
- `stats_dashboard`, `stats_campaign`

### Access List (Whitelist)
- `access_list_list`, `access_list_grant`, `access_list_bulk_grant`
- `access_list_check`, `access_list_renew`, `access_list_revoke`, `access_list_stats`

### Blacklist
- `blacklist_list`, `blacklist_check`, `blacklist_add`, `blacklist_bulk_add`, `blacklist_remove`

### Buyers / Public
- `buyers_add` — usado por integracoes n8n/Make/Zapier
- `public_ping` — health check + valida API key

## Cobertura

100% das rotas v1 publicas nao-admin estao cobertas. Rotas administrativas (super-admin) nao sao expostas via MCP por seguranca.

## Schemas

Cada tool publica seu schema de input via JSON Schema (gerado de Zod). Exemplo `campaigns_create`:

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string", "description": "Campaign name" },
    "description": { "type": "string" },
    "primary_connection_id": { "type": "string" },
    "distribution_mode": { "type": "string", "enum": ["sequential", "random"] },
    "auto_create_groups": { "type": "boolean" },
    "default_member_limit": { "type": "number" }
  },
  "required": ["name"]
}
```

Os schemas Zod canonicos vivem em [`zenhubpro/zenhub-cli/packages/tools/src/tools/`](https://github.com/zenhubpro/zenhub-cli/tree/main/packages/tools/src/tools).
