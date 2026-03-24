---
sidebar_position: 1
sidebar_label: API Keys
---

# API Keys

Toda chamada a API do ZenHub requer autenticacao via API Key.

## Criando uma API Key

1. Acesse **Configuracoes > Integracoes > Chaves de API** no dashboard
2. Clique em **"Nova chave"**
3. Defina um nome descritivo (ex: "Integracao CRM", "Bot WhatsApp")
4. Escolha os scopes (permissoes)
5. Copie a chave gerada

:::caution
A chave completa so e exibida **uma unica vez** na criacao. Se perder, revogue e crie uma nova.
:::

## Enviando a API Key

Inclua a chave no header de cada request:

```bash
# Header preferido
x-api-key: agwpp_live_sua_chave_aqui

# Alternativa (Bearer token)
Authorization: Bearer agwpp_live_sua_chave_aqui
```

### Exemplo com cURL

```bash
curl -X GET "https://api.zenhub.pro/api/v1/campaigns" \
  -H "x-api-key: agwpp_live_sua_chave_aqui" \
  -H "Content-Type: application/json"
```

### Exemplo com JavaScript

```javascript
const response = await fetch('https://api.zenhub.pro/api/v1/campaigns', {
  headers: {
    'x-api-key': 'agwpp_live_sua_chave_aqui',
    'Content-Type': 'application/json',
  },
});

const data = await response.json();
```

### Exemplo com Python

```python
import requests

response = requests.get(
    'https://api.zenhub.pro/api/v1/campaigns',
    headers={'x-api-key': 'agwpp_live_sua_chave_aqui'}
)

data = response.json()
```

## Formato da chave

Todas as chaves seguem o formato:

```
agwpp_live_ + 64 caracteres hexadecimais
```

Exemplo: `agwpp_live_45aa63ee37539c205a1a6fbfb11c62bd9e262cb625081c89ea3791f296a1c106`

## Seguranca

- Nunca compartilhe sua API key em repositorios publicos
- Use variaveis de ambiente para armazenar a chave
- Revogue chaves comprometidas imediatamente
- Crie chaves separadas para cada integracao (facilita revogar individualmente)
- Use scope `read` quando nao precisar de escrita

## Erros de autenticacao

| Status | Mensagem | Causa |
|--------|----------|-------|
| `401` | API key required | Header `x-api-key` ausente |
| `401` | API key invalida | Chave nao existe ou foi revogada |
| `400` | API key expirada | Chave passou da data de expiracao |
| `403` | Organization is inactive | Assinatura cancelada ou expirada |
| `403` | API key does not have write permission | Tentando POST/PUT/DELETE com scope `read` |
