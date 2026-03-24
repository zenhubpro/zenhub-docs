---
sidebar_position: 1
sidebar_label: Visao Geral
---

# API Reference

A API REST do ZenHub permite gerenciar campanhas, grupos, agendamentos, mensagens, contatos e mais.

## Base URL

```
https://api.zenhub.pro/api/v1
```

## Autenticacao

Todas as chamadas requerem o header `x-api-key`:

```bash
curl -H "x-api-key: agwpp_live_sua_chave" https://api.zenhub.pro/api/v1/campaigns
```

## Formato de resposta

Todas as respostas seguem o padrao:

### Sucesso

```json
{
  "success": true,
  "data": { ... },
  "pagination": {
    "total": 42,
    "page": 1,
    "per_page": 20,
    "pages": 3
  }
}
```

### Erro

```json
{
  "statusCode": 400,
  "message": "Descricao do erro",
  "error": "BadRequest"
}
```

## Paginacao

Endpoints que retornam listas aceitam:

| Parametro | Padrao | Descricao |
|-----------|--------|-----------|
| `page` | `1` | Numero da pagina |
| `per_page` | `20` | Itens por pagina (max 100) |

## Endpoints disponiveis

| Recurso | Endpoint base | Descricao |
|---------|--------------|-----------|
| [Campaigns](/api-reference/campaigns) | `/v1/campaigns` | Gerenciar campanhas |
| [Groups](/api-reference/groups) | `/v1/groups` | Gerenciar grupos WhatsApp |
| [Schedules](/api-reference/schedules) | `/v1/schedules` | Agendamento de mensagens |
| [Messages](/api-reference/messages) | `/v1/messages` | Envio de mensagens |
| [Contacts](/api-reference/contacts) | `/v1/contacts` | Gerenciar contatos |
| [Connections](/api-reference/connections) | `/v1/connections` | Conexoes WhatsApp |
| [Conversations](/api-reference/conversations) | `/v1/conversations` | ZenChat inbox |
| [Access List](/api-reference/access-list) | `/v1/access-list` | Whitelist por campanha |
| [Blacklist](/api-reference/blacklist) | `/v1/blacklist` | Numeros bloqueados |
| [Stats](/api-reference/stats) | `/v1/stats` | Dashboard e analytics |
| [Buyers](/api-reference/buyers) | `/v1/public/buyers` | Adicionar compradores |
