---
sidebar_position: 17
sidebar_label: Custom Fields
---

# Custom Fields

Campos customizados anexaveis a contatos e usados em variaveis de mensagens (`{{custom.field_name}}`).

## CRUD

| Verbo | Endpoint | Descricao |
|---|---|---|
| GET | `/custom-fields` | Listar todos |
| GET | `/custom-fields/:id` | Detalhe |
| POST | `/custom-fields` | Criar |
| PUT | `/custom-fields/:id` | Atualizar |
| DELETE | `/custom-fields/:id` | Deletar (apaga valores em todos os contatos) |

### Body de criacao

```json
{
  "name": "City",
  "key": "city",
  "type": "text",
  "options": null
}
```

| `type` | Aceita |
|---|---|
| `text` | string livre |
| `number` | numero |
| `date` | ISO 8601 |
| `select` | um valor de `options[]` |
| `multiselect` | varios de `options[]` |
| `boolean` | true/false |

## Atribuicao a campanhas

<span class="api-method api-method--get">GET</span> `/custom-fields/campaigns/:campaignId`

Lista campos configurados na campanha.

<span class="api-method api-method--put">PUT</span> `/custom-fields/campaigns/:campaignId`

```json
{ "field_ids": ["..."] }
```

Substitui o conjunto de campos exigidos pela campanha (usado no formulario de invite e CSV import).
