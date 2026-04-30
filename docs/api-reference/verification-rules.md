---
sidebar_position: 18
sidebar_label: Verification Rules
---

# Verification Rules

Regras automaticas que validam acesso de membros a grupos com base em listas de compradores, tags ou janelas de tempo.

## CRUD

| Verbo | Endpoint | Descricao |
|---|---|---|
| GET | `/verification-rules` | Listar |
| GET | `/verification-rules/:id` | Detalhe |
| POST | `/verification-rules` | Criar |
| PATCH | `/verification-rules/:id` | Atualizar |
| PATCH | `/verification-rules/:id/toggle` | Ativar/desativar |
| DELETE | `/verification-rules/:id` | Deletar |

### Anatomia de uma regra

```json
{
  "name": "Acesso 30d apos compra Hotmart",
  "trigger_id": "...",
  "condition": {
    "source": "enrollee",
    "tags": ["hotmart"],
    "expires_after_days": 30
  },
  "actions": [
    { "type": "send_message", "config": { "message": "Bem-vindo!" } },
    { "type": "remove_if_invalid", "config": { "grace_period_hours": 24 } }
  ]
}
```

## Templates de mensagem

<span class="api-method api-method--get">GET</span> `/verification-rules/template/variables`

Lista variaveis disponiveis em templates.

<span class="api-method api-method--post">POST</span> `/verification-rules/template/preview`

```json
{
  "template": "Ola {{name}}, seu acesso vence em {{expires_in_days}} dias",
  "context": { "name": "Joao", "expires_in_days": 5 }
}
```

<span class="api-method api-method--post">POST</span> `/verification-rules/template/validate`

Valida sintaxe + variaveis nao reconhecidas.

## Atribuir a campanhas

<span class="api-method api-method--get">GET</span> `/verification-rules/:id/campaigns`

<span class="api-method api-method--put">PUT</span> `/verification-rules/:id/campaigns`

```json
{ "campaign_ids": ["..."] }
```

## Verificar agora

<span class="api-method api-method--post">POST</span> `/verification-rules/campaigns/:campaignId/verify-now`

Dispara verificacao manual para todos os membros da campanha.

## Acoes disponiveis

| Type | Descricao |
|---|---|
| `send_message` | Mensagem privada |
| `remove_if_invalid` | Remove do grupo apos `grace_period_hours` |
| `add_to_blacklist` | Bloqueia o numero |
| `tag_contact` | Aplica tag |
| `webhook` | POST para URL externa |
