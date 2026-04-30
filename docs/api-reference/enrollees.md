---
sidebar_position: 16
sidebar_label: Enrollees (Compradores)
---

# Enrollees / Buyers

Database de compradores da organizacao. Usado para verificacao automatica de acesso a campanhas (Hotmart, Eduzz, Kiwify, integracoes externas).

## Listar

<span class="api-method api-method--get">GET</span> `/enrollees`

Query: `search`, `tag`, `imported_from`, `page`, `per_page`.

## Buscar por telefone

<span class="api-method api-method--get">GET</span> `/enrollees/phone/:phone`

Telefone em formato E.164 (ex: `+5511999990000`).

## Estatisticas

<span class="api-method api-method--get">GET</span> `/enrollees/stats`

Retorna totais por origem (Hotmart, Eduzz, Kiwify, manual, CSV).

## Imports

<span class="api-method api-method--get">GET</span> `/enrollees/imports`

Lista jobs de importacao (CSV, planilha, webhook).

<span class="api-method api-method--get">GET</span> `/enrollees/imports/:id`

Status de um job especifico.

## Importar CSV

<span class="api-method api-method--post">POST</span> `/enrollees/import`

`Content-Type: multipart/form-data`

| Campo | Descricao |
|---|---|
| `file` | CSV com headers `phone`, `name`, `email`, `product_name` (opcional) |
| `tag` | Tag aplicada a todos os registros |

Retorna `import_id` para polling em `/enrollees/imports/:id`.

## CRUD

| Verbo | Endpoint | Descricao |
|---|---|---|
| GET | `/enrollees/:id` | Detalhes |
| POST | `/enrollees` | Criar manualmente |
| PATCH | `/enrollees/:id` | Atualizar |
| DELETE | `/enrollees/:id` | Remover |

## Vinculo a campanhas

<span class="api-method api-method--post">POST</span> `/enrollees/campaign-links`

```json
{
  "enrollee_ids": ["..."],
  "campaign_id": "...",
  "auto_grant_access": true
}
```

<span class="api-method api-method--get">GET</span> `/enrollees/:id/campaigns`

## Adicionar via API publica (n8n / Make / Zapier)

Para integracoes externas use o endpoint publico — ver [Buyers](/api-reference/buyers).
