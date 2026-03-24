---
sidebar_position: 2
sidebar_label: Rate Limiting
---

# Rate Limiting

A API do ZenHub aplica limites de requisicoes para garantir estabilidade e uso justo.

## Limites por metodo

| Metodo | Limite |
|--------|--------|
| GET / HEAD | 1.000 req/min |
| POST / PUT / PATCH / DELETE | 100 req/min |

## Headers de resposta

Toda resposta inclui headers de rate limiting:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 987
X-RateLimit-Reset: 1711306800
```

| Header | Descricao |
|--------|-----------|
| `X-RateLimit-Limit` | Limite total no periodo |
| `X-RateLimit-Remaining` | Requisicoes restantes |
| `X-RateLimit-Reset` | Timestamp Unix de quando o limite reseta |

## Quando o limite e atingido

```json
{
  "statusCode": 429,
  "message": "Too many requests. Try again later.",
  "error": "TooManyRequests"
}
```

**Recomendacao:** Implemente retry com backoff exponencial:

```javascript
async function apiCallWithRetry(url, options, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const response = await fetch(url, options);

    if (response.status === 429) {
      const resetAt = response.headers.get('X-RateLimit-Reset');
      const waitMs = resetAt
        ? (parseInt(resetAt) * 1000 - Date.now())
        : (1000 * Math.pow(2, attempt));

      await new Promise(r => setTimeout(r, Math.max(waitMs, 1000)));
      continue;
    }

    return response;
  }
  throw new Error('Rate limit exceeded after retries');
}
```
