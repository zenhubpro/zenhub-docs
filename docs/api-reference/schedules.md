---
sidebar_position: 4
sidebar_label: Schedules
---

# Schedules

Agendar mensagens para envio futuro em grupos de campanhas.

## Listar agendamentos

<span class="api-method api-method--get">GET</span> `/v1/schedules`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `campaign_id` | uuid | Filtrar por campanha |
| `status` | string | `pending`, `completed`, `failed`, `canceled` |
| `page` | number | Pagina |
| `per_page` | number | Itens por pagina |

---

## Obter agendamento

<span class="api-method api-method--get">GET</span> `/v1/schedules/:id`

---

## Criar agendamento

<span class="api-method api-method--post">POST</span> `/v1/campaigns/:campaignId/schedules`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `name` | string | Sim | Nome do agendamento |
| `execution_type` | string | Sim | Tipo: `text`, `image`, `video`, `audio`, `document`, `poll`, `multiple` |
| `scheduled_date` | string | Sim | Data ISO 8601 (ex: `2026-03-25T10:00:00`) |
| `group_ids` | string[] | Sim | IDs dos grupos alvo (use `__ALL__` para todos) |
| `message_content` | string | Nao | Conteudo de texto |
| `media_url` | string | Nao | URL da midia |
| `media_filename` | string | Nao | Nome do arquivo |
| `mention_all` | boolean | Nao | Mencionar todos os membros |
| `poll_question` | string | Nao | Pergunta da enquete (se `execution_type: poll`) |
| `poll_options` | string[] | Nao | Opcoes da enquete |

```bash
curl -X POST -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Boas vindas",
    "execution_type": "text",
    "scheduled_date": "2026-03-25T10:00:00",
    "group_ids": ["120363425073943432@g.us"],
    "message_content": "Bom dia a todos!"
  }' \
  "https://api.zenhub.pro/api/v1/campaigns/CAMPAIGN_ID/schedules"
```

---

## Atualizar agendamento

<span class="api-method api-method--patch">PATCH</span> `/v1/campaigns/:campaignId/schedules/:id`

---

## Deletar agendamento

<span class="api-method api-method--delete">DELETE</span> `/v1/campaigns/:campaignId/schedules/:id`

---

## Retentar agendamento falho

<span class="api-method api-method--post">POST</span> `/v1/campaigns/:campaignId/schedules/:id/retry`

Re-enfileira um agendamento com status `failed` para nova tentativa.
