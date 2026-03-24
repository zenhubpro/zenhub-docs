---
sidebar_position: 2
sidebar_label: Campaigns
---

# Campaigns

Gerenciar campanhas WhatsApp — criar, listar, atualizar, executar e ver estatisticas.

## Listar campanhas

<span class="api-method api-method--get">GET</span> `/v1/campaigns`

**Query parameters:**

| Parametro | Tipo | Padrao | Descricao |
|-----------|------|--------|-----------|
| `page` | number | 1 | Pagina |
| `per_page` | number | 20 | Itens por pagina |

```bash
curl -H "x-api-key: $API_KEY" \
  "https://api.zenhub.pro/api/v1/campaigns?page=1&per_page=10"
```

**Resposta:**

```json
{
  "success": true,
  "data": [
    {
      "id": "3fd457cb-3759-4c1c-83bd-b779280f84ef",
      "name": "Lancamento Produto X",
      "is_active": true,
      "distribution_mode": "sequential",
      "auto_create_groups": true,
      "default_member_limit": 450,
      "cached_group_count": 5,
      "cached_total_members": 120,
      "is_community": false,
      "access_list_enabled": false,
      "created_at": "2026-03-01T10:00:00.000Z"
    }
  ],
  "pagination": { "total": 1, "page": 1, "per_page": 10, "pages": 1 }
}
```

---

## Obter campanha

<span class="api-method api-method--get">GET</span> `/v1/campaigns/:id`

```bash
curl -H "x-api-key: $API_KEY" \
  "https://api.zenhub.pro/api/v1/campaigns/3fd457cb-..."
```

---

## Criar campanha

<span class="api-method api-method--post">POST</span> `/v1/campaigns`

**Body:**

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `name` | string | Sim | Nome da campanha |
| `description` | string | Nao | Descricao |
| `primary_connection_id` | uuid | Nao | Conexao WhatsApp principal |
| `distribution_mode` | string | Nao | `sequential` ou `random` |
| `auto_create_groups` | boolean | Nao | Criar grupos automaticamente |
| `default_member_limit` | number | Nao | Limite de membros por grupo (padrao: 450) |

```bash
curl -X POST -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "Lancamento", "auto_create_groups": true}' \
  "https://api.zenhub.pro/api/v1/campaigns"
```

---

## Atualizar campanha

<span class="api-method api-method--patch">PATCH</span> `/v1/campaigns/:id`

Aceita os mesmos campos do POST. Somente campos enviados sao atualizados.

---

## Deletar campanha

<span class="api-method api-method--delete">DELETE</span> `/v1/campaigns/:id`

---

## Estatisticas da campanha

<span class="api-method api-method--get">GET</span> `/v1/campaigns/:id/stats`

Retorna metricas consolidadas: grupos, membros, agendamentos, mensagens.

```json
{
  "success": true,
  "data": {
    "campaign_id": "3fd457cb-...",
    "campaign_name": "Lancamento",
    "groups": 5,
    "members": 120,
    "schedules": { "total": 10, "pending": 2, "completed": 8 },
    "messages": { "total": 50, "sent": 48, "failed": 2 }
  }
}
```

---

## Executar campanha

<span class="api-method api-method--post">POST</span> `/v1/campaigns/:id/execute`

Dispara a execucao imediata da campanha (envia mensagens pendentes, cria grupos se configurado).
