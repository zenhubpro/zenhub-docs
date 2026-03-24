---
sidebar_position: 2
sidebar_label: Eventos
---

# Eventos de Webhook

Lista completa de eventos disponiveis para assinatura.

## Campanhas

| Evento | Descricao |
|--------|-----------|
| `campaign.report` | Relatorio periodico da campanha (4x/dia) |

### campaign.report

```json
{
  "event": "campaign.report",
  "timestamp": "2026-03-24T12:00:00.000Z",
  "data": {
    "campaign_id": "3fd457cb-...",
    "campaign_name": "Lancamento",
    "report_period": "daily",
    "summary": {
      "total_members": 120,
      "total_groups": 5,
      "joined_today": 8,
      "left_today": 1,
      "link_clicks_today": 25,
      "unique_clicks_today": 20,
      "total_link_clicks": 340
    }
  }
}
```

## ZenChat

Eventos do ZenChat podem ser configurados em **Configuracoes > Inbox > Webhooks**.

| Evento | Descricao |
|--------|-----------|
| `message.created` | Nova mensagem recebida |
| `message.updated` | Status da mensagem alterado (sent → delivered → read) |
| `conversation.created` | Nova conversa iniciada |
| `conversation.updated` | Conversa atualizada (status, assignee) |
| `contact.created` | Novo contato criado |
| `contact.updated` | Contato atualizado |

### message.created

```json
{
  "event": "message.created",
  "timestamp": "2026-03-24T14:30:00.000Z",
  "data": {
    "conversation_id": "eddcf713-...",
    "message_id": "abc123",
    "content": "Ola, preciso de ajuda",
    "content_type": "text",
    "sender_type": "contact",
    "contact": {
      "id": "064800d7-...",
      "name": "Joao Silva",
      "phone": "5511999990000"
    }
  }
}
```
