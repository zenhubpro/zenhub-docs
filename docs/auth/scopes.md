---
sidebar_position: 3
sidebar_label: Scopes e Permissoes
---

# Scopes e Permissoes

API Keys possuem scopes que controlam quais operacoes sao permitidas.

## Scopes disponiveis

| Scope | Metodos permitidos | Descricao |
|-------|--------------------|-----------|
| `read` | GET, HEAD | Somente leitura — listar, buscar, consultar |
| `write` | GET, HEAD, POST, PUT, PATCH, DELETE | Leitura e escrita — criar, atualizar, deletar |

## Como os scopes sao enforados

- **GET / HEAD** — Permitido com qualquer scope
- **POST / PUT / PATCH / DELETE** — Requer scope `write`

Se uma API Key com scope `read` tentar um POST:

```json
{
  "statusCode": 403,
  "message": "API key does not have write permission. Required scope: write",
  "error": "InsufficientScope"
}
```

## Boas praticas

- Use `read` para dashboards, monitoramento e integracao de leitura
- Use `write` apenas quando precisar criar/editar/deletar recursos
- Crie chaves separadas para cada integracao com o scope minimo necessario
