---
sidebar_position: 2
sidebar_label: Quick Start
---

# Quick Start

Faca sua primeira chamada a API do ZenHub em 2 minutos.

## 1. Crie sua API Key

Acesse o dashboard: **Configuracoes > Integracoes > Chaves de API**

Clique em **"Nova chave"** e copie a chave gerada. Ela comeca com `agwpp_live_`.

:::caution Importante
A chave so e exibida uma vez. Salve em local seguro.
:::

## 2. Faca sua primeira chamada

### Via cURL

```bash
curl -X GET "https://api.zenhub.pro/api/v1/campaigns" \
  -H "x-api-key: agwpp_live_sua_chave_aqui"
```

### Via CLI

```bash
# Instalar
npm install -g zenhub-cli

# Logar (abre o navegador)
zenhub login

# Listar campanhas
zenhub campaigns list
```

## 3. Resposta

```json
{
  "success": true,
  "data": [
    {
      "id": "3fd457cb-...",
      "name": "Minha Campanha",
      "is_active": true,
      "cached_group_count": 3,
      "cached_total_members": 45
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "per_page": 20,
    "pages": 1
  }
}
```

## Proximo passo

- [Autenticacao](/auth/api-keys) — Como gerar e gerenciar API keys
- [API Reference](/api-reference/overview) — Todos os endpoints disponiveis
- [CLI](/cli/getting-started) — Automatize via terminal
