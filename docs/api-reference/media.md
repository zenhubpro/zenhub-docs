---
sidebar_position: 14
sidebar_label: Media
---

# Media

Upload de arquivos para usar em campanhas, agendamentos e mensagens.

## Upload (multipart)

<span class="api-method api-method--post">POST</span> `/media/upload`

`Content-Type: multipart/form-data`

| Campo | Descricao |
|---|---|
| `file` | Arquivo binario |
| `purpose` | `campaign`, `schedule`, `message` |

Retorna URL publica + metadata (size, mime, hash SHA-256).

## Upload (base64)

<span class="api-method api-method--post">POST</span> `/media/upload-base64`

```json
{
  "data": "data:image/png;base64,iVBOR...",
  "filename": "promo.png",
  "purpose": "campaign"
}
```

Util para integracoes que nao suportam multipart.

## Listar midias

<span class="api-method api-method--get">GET</span> `/media`

Filtros: `purpose`, `mime_type`, `page`, `per_page`.

## Deletar

<span class="api-method api-method--delete">DELETE</span> `/media`

Body: `{ "id": "uuid" }` ou `{ "url": "https://..." }`.

## Storage

Arquivos sao armazenados em **Cloudflare R2**. URLs servidas via CDN com cache de 30 dias. Deduplicacao automatica por SHA-256 — uploads iguais retornam o mesmo URL.

## Limites

| Plano | Tamanho max por arquivo | Storage total |
|---|---|---|
| Free | 5 MB | 50 MB |
| Starter | 25 MB | 1 GB |
| Pro | 100 MB | 10 GB |
| Enterprise | 500 MB | 100 GB |
