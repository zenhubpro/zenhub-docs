---
sidebar_position: 6
sidebar_label: Contacts
---

# Contacts

Gerenciar contatos da organizacao — CRUD e tags.

## Listar contatos

<span class="api-method api-method--get">GET</span> `/v1/contacts`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `search` | string | Buscar por nome, email ou telefone |
| `page` | number | Pagina |
| `per_page` | number | Itens por pagina |

---

## Obter contato

<span class="api-method api-method--get">GET</span> `/v1/contacts/:id`

---

## Criar contato

<span class="api-method api-method--post">POST</span> `/v1/contacts`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `phone_number` | string | Sim | Telefone (ex: `+5511999990000`) |
| `name` | string | Nao | Nome |
| `email` | string | Nao | Email |
| `tags` | string[] | Nao | Tags |

---

## Atualizar contato

<span class="api-method api-method--patch">PATCH</span> `/v1/contacts/:id`

---

## Deletar contato

<span class="api-method api-method--delete">DELETE</span> `/v1/contacts/:id`
