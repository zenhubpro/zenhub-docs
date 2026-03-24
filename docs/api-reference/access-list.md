---
sidebar_position: 9
sidebar_label: Access List
---

# Access List (Whitelist)

Controlar quem pode acessar grupos de uma campanha. Util para produtos pagos — apenas compradores verificados entram.

## Listar entradas

<span class="api-method api-method--get">GET</span> `/v1/access-list/:campaignId`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `page` | number | Pagina |
| `per_page` | number | Itens por pagina |

---

## Conceder acesso

<span class="api-method api-method--post">POST</span> `/v1/access-list/:campaignId`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `phone` | string | Sim | Telefone (ex: `5511999990000`) |
| `name` | string | Nao | Nome do comprador |
| `expires_at` | string | Nao | Data de expiracao ISO 8601 |

```bash
curl -X POST -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"phone": "5511999990000", "name": "Joao", "expires_at": "2026-06-01T00:00:00"}' \
  "https://api.zenhub.pro/api/v1/access-list/CAMPAIGN_ID"
```

---

## Conceder acesso em lote

<span class="api-method api-method--post">POST</span> `/v1/access-list/:campaignId/bulk`

```json
{
  "entries": [
    {"phone": "5511999990000", "name": "Joao"},
    {"phone": "5511888880000", "name": "Maria", "expires_at": "2026-06-01"}
  ]
}
```

---

## Verificar acesso

<span class="api-method api-method--post">POST</span> `/v1/access-list/:campaignId/check`

```json
{"phone": "5511999990000"}
```

Resposta:
```json
{"has_access": true, "expires_at": "2026-06-01T00:00:00.000Z"}
```

---

## Renovar acesso

<span class="api-method api-method--post">POST</span> `/v1/access-list/:campaignId/renew`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `phone` | string | Sim | Telefone |
| `expires_at` | string | Sim | Nova data de expiracao |

---

## Revogar acesso

<span class="api-method api-method--delete">DELETE</span> `/v1/access-list/:campaignId/:phone`

---

## Estatisticas

<span class="api-method api-method--get">GET</span> `/v1/access-list/:campaignId/stats`

Retorna totais de acessos ativos, expirados e revogados.
