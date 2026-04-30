---
sidebar_position: 15
sidebar_label: Automations
---

# Automations

Auto-responders e gatilhos automaticos por campanha. Reagem a mensagens recebidas, eventos de grupo (entrada/saida) ou webhooks de provider.

## Listar automacoes da campanha

<span class="api-method api-method--get">GET</span> `/campaigns/:campaignId/automations`

## Criar automacao

<span class="api-method api-method--post">POST</span> `/campaigns/:campaignId/automations`

```json
{
  "name": "Boas-vindas",
  "trigger": "member_joined",
  "action": "send_message",
  "config": {
    "message": "Ola {{name}}, seja bem-vindo!",
    "delay_seconds": 5
  },
  "is_active": true
}
```

### Triggers suportados

| Trigger | Quando dispara |
|---|---|
| `member_joined` | Membro entrou no grupo |
| `member_left` | Membro saiu |
| `message_received` | Qualquer mensagem no grupo |
| `keyword_match` | Mensagem contem keyword (case-insensitive) |
| `cron` | Horario fixo (cron expression) |

### Actions suportadas

| Action | Comportamento |
|---|---|
| `send_message` | Envia texto/midia para o grupo |
| `add_to_blacklist` | Bloqueia o membro |
| `remove_from_group` | Remove do grupo |
| `forward_to_team` | Encaminha para um time do ZenChat |
| `tag_contact` | Aplica tag ao contato |

## Deletar

<span class="api-method api-method--delete">DELETE</span> `/automations/:id`

## Variaveis disponiveis

| Variavel | Valor |
|---|---|
| `{{name}}` | Nome do membro |
| `{{phone}}` | Numero de telefone |
| `{{group_name}}` | Nome do grupo |
| `{{campaign_name}}` | Nome da campanha |
| `{{date}}` | Data formatada `DD/MM/YYYY` |
| `{{time}}` | Hora `HH:MM` |
