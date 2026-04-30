---
sidebar_position: 13
sidebar_label: API Keys
---

# API Keys

Gerenciar chaves de API programaticamente. Requer JWT do dashboard (nao e exposto via API key por seguranca).

## Listar chaves

<span class="api-method api-method--get">GET</span> `/api-keys`

## Obter chave

<span class="api-method api-method--get">GET</span> `/api-keys/:id`

## Criar chave

<span class="api-method api-method--post">POST</span> `/api-keys`

```json
{
  "name": "Integracao CRM",
  "scopes": ["read", "write"],
  "expires_at": "2027-01-01T00:00:00Z"
}
```

A chave completa so e retornada na criacao.

## Atualizar chave

<span class="api-method api-method--patch">PATCH</span> `/api-keys/:id`

Permite renomear, alterar scopes ou expiracao. Nao regenera o segredo.

## Revogar chave

<span class="api-method api-method--delete">DELETE</span> `/api-keys/:id`

## Estatisticas de uso

<span class="api-method api-method--get">GET</span> `/api-keys/:id/usage`

Retorna contagem de chamadas por endpoint nas ultimas 24h, 7d, 30d.
