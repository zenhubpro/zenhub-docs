---
sidebar_position: 1
sidebar_label: Catalogo de Erros
---

# Catalogo de Erros

Toda resposta de erro segue o padrao:

```json
{
  "statusCode": 403,
  "message": "API key does not have write permission",
  "error": "InsufficientScope",
  "code": "API_KEY_READ_ONLY"
}
```

Quando disponivel, o campo `code` da um identificador estavel para tratamento programatico.

## Autenticacao (401 / 403)

| Code | Status | Quando |
|---|---|---|
| `API_KEY_MISSING` | 401 | Header `x-api-key` ausente |
| `API_KEY_INVALID` | 401 | Chave nao existe ou foi revogada |
| `API_KEY_EXPIRED` | 400 | Chave passou da data de expiracao |
| `API_KEY_READ_ONLY` | 403 | Tentativa de POST/PUT/DELETE com scope `read` |
| `ORG_INACTIVE` | 403 | Assinatura cancelada/expirada |
| `JWT_EXPIRED` | 401 | Token JWT expirado (dashboard) |
| `JWT_INVALID` | 401 | Token JWT corrompido ou nao assinado |

## Validacao (400)

| Code | Status | Quando |
|---|---|---|
| `VALIDATION_FAILED` | 400 | DTO invalido — `message` lista os campos |
| `PHONE_INVALID` | 400 | Numero fora do padrao E.164 |
| `INVALID_DATE_RANGE` | 400 | `scheduled_at` no passado ou range invertido |
| `MEDIA_TYPE_UNSUPPORTED` | 400 | Tipo de midia nao suportado pelo provider |

## Limites (403 / 429)

| Code | Status | Quando |
|---|---|---|
| `PLAN_LIMIT_REACHED` | 403 | Limite do plano atingido (campanhas, conexoes, etc) |
| `RATE_LIMIT_EXCEEDED` | 429 | Mais de 1000 GET ou 100 write por minuto |
| `WHATSAPP_RATE_LIMIT` | 429 | WhatsApp aplicou rate limit ao numero |

## Recursos (404 / 409)

| Code | Status | Quando |
|---|---|---|
| `RESOURCE_NOT_FOUND` | 404 | Recurso nao existe ou foi deletado |
| `RESOURCE_CONFLICT` | 409 | Tentativa de criar duplicata (telefone, identifier) |
| `CAMPAIGN_INACTIVE` | 409 | Operacao em campanha desativada |

## WhatsApp / Provider (502 / 503)

| Code | Status | Quando |
|---|---|---|
| `CONNECTION_DISCONNECTED` | 503 | Numero WhatsApp desconectou — escanear QR |
| `PROVIDER_TIMEOUT` | 502 | Evolution API/UazAPI nao responderam em 30s |
| `GROUP_NOT_FOUND_REMOTE` | 502 | Grupo existe no DB mas nao no WhatsApp |
| `MEMBER_NOT_IN_GROUP` | 409 | Tentativa de remover quem ja saiu |

## Como tratar

```javascript
const res = await fetch(url, options);
const json = await res.json();

if (!res.ok) {
  switch (json.code) {
    case 'RATE_LIMIT_EXCEEDED':
      const reset = Number(res.headers.get('X-RateLimit-Reset')) * 1000;
      await new Promise(r => setTimeout(r, Math.max(reset - Date.now(), 1000)));
      // retry...
      break;
    case 'CONNECTION_DISCONNECTED':
      // notify user to re-scan QR
      break;
    case 'PLAN_LIMIT_REACHED':
      // show upgrade modal
      break;
    default:
      throw new Error(json.message);
  }
}
```
