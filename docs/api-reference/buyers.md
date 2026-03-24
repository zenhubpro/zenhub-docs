---
sidebar_position: 12
sidebar_label: Buyers
---

# Buyers

Adicionar compradores a lista da organizacao (processamento assincrono).

## Adicionar comprador

<span class="api-method api-method--post">POST</span> `/v1/public/buyers`

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|:-----------:|-----------|
| `phone` | string | Sim | Telefone do comprador |
| `name` | string | Nao | Nome |
| `email` | string | Nao | Email |
| `product` | string | Nao | Produto comprado |
| `platform` | string | Nao | Plataforma: `hotmart`, `eduzz`, `kiwify`, `manual` |

```bash
curl -X POST -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "5511999990000",
    "name": "Maria Silva",
    "email": "maria@email.com",
    "product": "Curso XYZ",
    "platform": "hotmart"
  }' \
  "https://api.zenhub.pro/api/v1/public/buyers"
```

:::info Processamento assincrono
O comprador e adicionado a uma fila e processado em background. A resposta confirma o enfileiramento, nao a conclusao.
:::

## Verificar via ping

<span class="api-method api-method--post">POST</span> `/v1/public/ping`

Verifica se a API Key e valida sem efeitos colaterais. Util para testar a conexao.

```json
{"success": true, "message": "pong"}
```
