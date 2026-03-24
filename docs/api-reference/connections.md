---
sidebar_position: 7
sidebar_label: Connections
---

# Connections

Visualizar conexoes WhatsApp e seus status.

## Listar conexoes

<span class="api-method api-method--get">GET</span> `/v1/connections`

```json
{
  "success": true,
  "data": [
    {
      "id": "76d96522-...",
      "instance_name": "WhatsApp Principal",
      "phone_number": "5511999990000",
      "status": "connected",
      "profile_picture_url": "...",
      "created_at": "2026-01-31T04:55:06.082Z"
    }
  ]
}
```

### Status possiveis

| Status | Descricao |
|--------|-----------|
| `connected` | Online e funcional |
| `disconnected` | Desconectado |
| `connecting` | Tentando reconectar |
| `qr_code` | Aguardando leitura do QR Code |

---

## Obter conexao

<span class="api-method api-method--get">GET</span> `/v1/connections/:id`
