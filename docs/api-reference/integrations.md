---
sidebar_position: 19
sidebar_label: Integrations
---

# Integrations

Bridges com Google Sheets e Chatwoot.

## Google Sheets

OAuth flow conectando uma conta Google a organizacao para auto-export de membros, agendamentos e relatorios.

| Verbo | Endpoint | Descricao |
|---|---|---|
| GET | `/integrations/google-sheets/auth-url` | Gera URL OAuth |
| GET | `/integrations/google-sheets/callback` | Callback do OAuth |
| GET | `/integrations/google-sheets/status` | Status da conexao |
| POST | `/integrations/google-sheets/credentials` | Salvar credenciais (admin) |
| DELETE | `/integrations/google-sheets/disconnect` | Desconectar |
| PUT | `/integrations/google-sheets/auto-create` | Toggle auto-create de planilha por campanha |
| PUT | `/integrations/google-sheets/folder` | Definir pasta default |
| GET | `/integrations/campaigns/:campaignId/sheets` | Planilhas da campanha |
| POST | `/integrations/campaigns/:campaignId/sheets/create` | Criar planilha vinculada |
| POST | `/integrations/google-sheets/read` | Ler aba/range |
| POST | `/integrations/google-sheets/tabs` | Listar abas |

## Chatwoot

Bridge bidirecional — mensagens recebidas no ZenHub aparecem no Chatwoot e vice-versa.

| Verbo | Endpoint | Descricao |
|---|---|---|
| GET | `/integrations/chatwoot/status` | Conexao ativa? |
| GET | `/integrations/chatwoot/config` | Config atual |
| GET | `/integrations/chatwoot/inboxes` | Inboxes Chatwoot |
| GET | `/integrations/chatwoot/conversations` | Conversas |
| GET | `/integrations/chatwoot/conversations/:id` | Detalhe |
| GET | `/integrations/chatwoot/conversations/:id/messages` | Mensagens |
| POST | `/integrations/chatwoot/conversations/:id/messages` | Enviar |
| POST | `/integrations/chatwoot/conversations/:id/assignments` | Atribuir agente |
| GET | `/integrations/chatwoot/agents` | Agentes |
| GET | `/integrations/chatwoot/contacts` | Contatos |
| GET | `/integrations/chatwoot/contacts/search` | Busca |
| GET | `/integrations/chatwoot/contacts/:id` | Detalhe |
| POST | `/integrations/chatwoot/contacts` | Criar |
| PUT | `/integrations/chatwoot/contacts/:id` | Atualizar |
| GET | `/integrations/chatwoot/labels` | Labels |
| POST | `/integrations/chatwoot/labels` | Criar label |
| GET | `/integrations/chatwoot/conversations/:id/labels` | Labels da conversa |
| POST | `/integrations/chatwoot/conversations/:id/labels` | Aplicar labels |
| GET | `/integrations/chatwoot/contacts/:id/labels` | Labels do contato |
| POST | `/integrations/chatwoot/contacts/:id/labels` | Aplicar labels |

:::tip
Como alternativa ao Chatwoot, considere usar o **ZenChat** nativo — mesmas funcionalidades, sem precisar manter outra plataforma.
:::
