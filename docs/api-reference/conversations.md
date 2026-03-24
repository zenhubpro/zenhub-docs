---
sidebar_position: 8
sidebar_label: Conversations (ZenChat)
---

# Conversations (ZenChat)

Interagir com conversas do ZenChat — listar, ler mensagens e responder.

## Listar conversas

<span class="api-method api-method--get">GET</span> `/v1/conversations`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `status` | string | `open`, `pending`, `resolved`, `snoozed` |
| `assignee_id` | uuid | Filtrar por atendente |
| `page` | number | Pagina |
| `per_page` | number | Itens por pagina |

```bash
curl -H "x-api-key: $API_KEY" \
  "https://api.zenhub.pro/api/v1/conversations?status=open&per_page=10"
```

---

## Obter conversa

<span class="api-method api-method--get">GET</span> `/v1/conversations/:id`

Retorna detalhes da conversa incluindo ultima mensagem.

---

## Listar mensagens

<span class="api-method api-method--get">GET</span> `/v1/conversations/:id/messages`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `before` | string | Cursor para paginacao (ID da mensagem) |
| `per_page` | number | Quantidade (padrao: 25) |

---

## Enviar mensagem

<span class="api-method api-method--post">POST</span> `/v1/conversations/:id/messages`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `content` | string | Sim | Conteudo da mensagem |
| `content_type` | string | Nao | Tipo: `text` (padrao), `image`, `video`, `audio`, `document` |
| `private` | boolean | Nao | Nota privada (nao visivel ao contato) |

```bash
curl -X POST -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"content": "Obrigado pelo contato!"}' \
  "https://api.zenhub.pro/api/v1/conversations/CONV_ID/messages"
```
