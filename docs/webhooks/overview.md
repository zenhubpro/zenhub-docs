---
sidebar_position: 1
sidebar_label: Visao Geral
---

# Webhooks

Receba notificacoes em tempo real quando eventos acontecem no ZenHub.

## Como funciona

1. Configure um endpoint no dashboard (**Configuracoes > Integracoes > Webhooks**)
2. Selecione os eventos que deseja receber
3. O ZenHub envia um POST para seu endpoint quando o evento ocorre

## Configuracao

| Campo | Descricao |
|-------|-----------|
| **URL** | Endpoint HTTPS que recebera os webhooks |
| **Secret** | Chave para verificacao HMAC-SHA256 da assinatura |
| **Eventos** | Lista de eventos para assinar |

## Verificacao de assinatura

Todo webhook inclui o header `X-ZenHub-Signature` com hash HMAC-SHA256:

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
```

## Retentativas

Se o endpoint retornar erro (status >= 400) ou timeout (30s), o ZenHub tenta novamente:

| Tentativa | Delay |
|-----------|-------|
| 1a | Imediato |
| 2a | 1 minuto |
| 3a | 5 minutos |
| 4a | 30 minutos |
| 5a | 2 horas |

Apos 5 tentativas falhas, o delivery e marcado como `failed`.

## Formato do payload

```json
{
  "event": "campaign.report",
  "timestamp": "2026-03-24T12:00:00.000Z",
  "data": {
    "campaign_id": "3fd457cb-...",
    "campaign_name": "Lancamento",
    "...": "..."
  }
}
```
