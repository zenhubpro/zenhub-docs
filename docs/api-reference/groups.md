---
sidebar_position: 3
sidebar_label: Groups
---

# Groups

Gerenciar grupos WhatsApp dentro de campanhas — listar, criar, membros e sync.

## Listar grupos

<span class="api-method api-method--get">GET</span> `/v1/groups`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `campaign_id` | uuid | Filtrar por campanha |
| `page` | number | Pagina |
| `per_page` | number | Itens por pagina |

---

## Obter grupo

<span class="api-method api-method--get">GET</span> `/v1/groups/:id`

---

## Listar grupos de uma campanha

<span class="api-method api-method--get">GET</span> `/v1/campaigns/:campaignId/groups`

---

## Criar grupo em campanha

<span class="api-method api-method--post">POST</span> `/v1/campaigns/:campaignId/groups`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `name` | string | Sim | Nome do grupo |
| `member_limit` | number | Nao | Limite de membros (padrao: 450) |

---

## Remover grupo de campanha

<span class="api-method api-method--delete">DELETE</span> `/v1/campaigns/:campaignId/groups/:groupId`

---

## Listar membros do grupo

<span class="api-method api-method--get">GET</span> `/v1/campaigns/:campaignId/groups/:groupId/members`

---

## Adicionar membros

<span class="api-method api-method--post">POST</span> `/v1/campaigns/:campaignId/groups/:groupId/members`

```json
{
  "phones": ["5511999990000", "5511888880000"]
}
```

---

## Remover membro

<span class="api-method api-method--delete">DELETE</span> `/v1/campaigns/:campaignId/groups/:groupId/members/:phone`

---

## Sincronizar membros

<span class="api-method api-method--post">POST</span> `/v1/campaigns/:campaignId/sync-members`

Sincroniza a lista de membros com o WhatsApp real para todos os grupos da campanha.

---

## Listar todos os membros da campanha

<span class="api-method api-method--get">GET</span> `/v1/campaigns/:campaignId/members`

Retorna membros unicos de todos os grupos da campanha (sem duplicatas).
