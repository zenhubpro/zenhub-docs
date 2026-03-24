---
sidebar_position: 10
sidebar_label: Blacklist
---

# Blacklist

Gerenciar numeros bloqueados da organizacao.

## Listar bloqueados

<span class="api-method api-method--get">GET</span> `/v1/blacklist`

| Parametro | Tipo | Descricao |
|-----------|------|-----------|
| `search` | string | Buscar por numero |
| `page` | number | Pagina |
| `limit` | number | Itens por pagina |

---

## Verificar numero

<span class="api-method api-method--get">GET</span> `/v1/blacklist/check/:phone`

```json
{"is_blocked": true, "reason": "Spam"}
```

---

## Bloquear numero

<span class="api-method api-method--post">POST</span> `/v1/blacklist`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `phone` | string | Sim | Telefone |
| `reason` | string | Nao | Motivo |

---

## Bloquear em lote

<span class="api-method api-method--post">POST</span> `/v1/blacklist/bulk`

```json
{
  "phones": ["5511999990000", "5511888880000"],
  "reason": "Spam"
}
```

---

## Desbloquear

<span class="api-method api-method--delete">DELETE</span> `/v1/blacklist/:id`
