---
sidebar_position: 5
sidebar_label: Messages
---

# Messages

Enviar mensagens imediatas para grupos, campanhas ou em lote.

## Enviar para um grupo

<span class="api-method api-method--post">POST</span> `/v1/messages/send`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `group_id` | string | Sim | JID do grupo ou ID interno |
| `message` | string | Sim | Conteudo da mensagem |
| `media_url` | string | Nao | URL da midia (imagem, video, etc) |
| `connection_id` | uuid | Nao | Conexao especifica para envio |

```bash
curl -X POST -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"group_id": "120363...@g.us", "message": "Ola grupo!"}' \
  "https://api.zenhub.pro/api/v1/messages/send"
```

---

## Enviar para campanhas

<span class="api-method api-method--post">POST</span> `/v1/messages/send-to-campaigns`

Envia a mesma mensagem para todos os grupos de uma ou mais campanhas.

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `campaign_ids` | string[] | Sim | Lista de IDs de campanhas |
| `message` | string | Sim | Conteudo da mensagem |
| `media_url` | string | Nao | URL da midia |

---

## Envio em lote

<span class="api-method api-method--post">POST</span> `/v1/messages/bulk`

Envia mensagens para multiplos grupos com delay configuravel.

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `message` | string | Sim | Conteudo da mensagem |
| `group_ids` | string[] | Sim | Lista de IDs dos grupos |
| `delay_ms` | number | Nao | Delay entre envios em ms (padrao: 1000) |
