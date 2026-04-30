---
sidebar_position: 21
sidebar_label: ZenChat Dashboard
---

# ZenChat — Endpoints Dashboard

Endpoints do ZenChat usados pelo dashboard (autenticacao JWT). Para consumo via API key, use os endpoints publicos em [Conversations](/api-reference/conversations).

## Conversations

`/zenchat/conversations`

| Verbo | Path | Descricao |
|---|---|---|
| GET | `/` | Listar |
| GET | `/:id` | Detalhe |
| PATCH | `/:id/status` | Mudar status (open/pending/resolved/snoozed) |
| PATCH | `/:id/read` | Marcar como lida |
| PATCH | `/:id/assign` | Atribuir agente/time |
| GET | `/:id/messages` | Mensagens |
| POST | `/:id/notes` | Nota privada (nao visivel ao contato) |
| DELETE | `/:conversationId/messages/:messageId` | Deletar mensagem |

## Contacts

`/zenchat/contacts`

| Verbo | Path |
|---|---|
| GET | `/` |
| GET | `/custom-fields` |
| POST | `/custom-fields` |
| PATCH | `/custom-fields/:fieldId` |
| DELETE | `/custom-fields/:fieldId` |
| GET | `/:id` |
| GET | `/:id/enrichment` |
| POST | `/` |
| POST | `/merge` |
| PATCH | `/:id/tags` |
| PATCH | `/:id` |
| DELETE | `/:id` |
| GET | `/:id/conversations` |
| PATCH | `/:id/custom-attributes` |

## Teams

`/zenchat/teams`

CRUD de times + gestao de membros.

| Verbo | Path |
|---|---|
| GET | `/` |
| GET | `/agents` |
| GET | `/:id` |
| POST | `/` |
| PATCH | `/:id` |
| DELETE | `/:id` |
| GET | `/:id/members` |
| POST | `/:id/members` |
| DELETE | `/:id/members/:userId` |

## Labels

`/zenchat/labels`

| Verbo | Path | Descricao |
|---|---|---|
| GET | `/` | Listar |
| POST | `/` | Criar |
| PATCH | `/:id` | Atualizar |
| DELETE | `/:id` | Deletar |
| POST | `/conversations/:conversationId` | Aplicar a conversa |
| DELETE | `/conversations/:conversationId/:label` | Remover |

## Canned Responses

`/zenchat/canned-responses`

CRUD de respostas rapidas.

## Inboxes

`/zenchat/inboxes`

| Verbo | Path | Descricao |
|---|---|---|
| POST | `/auto-setup` | Cria inboxes para todas as conexoes ativas |
| GET | `/` | Listar |
| GET | `/connections` | Conexoes disponiveis |
| PATCH | `/:id/toggle` | Ativar/desativar |
| PATCH | `/:id/deactivate` | Desativar |
| POST | `/refresh-webhooks` | Re-registrar webhooks no provider |

## Webhook Endpoints

`/zenchat/webhook-endpoints`

CRUD de endpoints externos que recebem eventos do ZenChat (HMAC-SHA256). Ver [Webhooks](/webhooks/overview).

## Scheduled Messages

`/zenchat/scheduled-messages`

| Verbo | Path | Descricao |
|---|---|---|
| POST | `/` | Agendar |
| GET | `/conversation/:conversationId` | Listar agendadas da conversa |
| DELETE | `/:id` | Cancelar |

## Assignment Rules

`/zenchat/assignment-rules`

CRUD de regras de auto-atribuicao (round-robin, condicional por canal/horario/keyword).

## Contact Tags

`/zenchat/contact-tags`

CRUD de tags aplicaveis a contatos.

## Imports

`/zenchat/contacts/import`

| Verbo | Path | Descricao |
|---|---|---|
| POST | `/preview` | Preview de CSV |
| POST | `/` | Importar CSV |
| POST | `/from-group` | Importar de grupo WhatsApp |
| POST | `/from-buyers` | Importar do database de compradores |
| GET | `/:id` | Status do job |
| GET | `/` | Lista de imports |

## Reporting

`/zenchat/reporting`

| Verbo | Path | Descricao |
|---|---|---|
| GET | `/overview` | KPIs gerais |
| GET | `/conversation-volume` | Volume por dia |
| GET | `/response-time` | Tempo medio de resposta |
| GET | `/resolution-time` | Tempo medio de resolucao |
| GET | `/agent-performance` | Performance por agente |

## Web Chat

`/zenchat/webchat`

<span class="api-method api-method--post">POST</span> `/inboxes/:inboxId/token`

Gera token de visitante para o widget de Web Chat embedado (ver [Web Chat Widget](/webchat/widget)).
