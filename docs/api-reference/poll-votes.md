---
sidebar_position: 20
sidebar_label: Poll Votes
---

# Poll Votes

Enquetes WhatsApp e seus votos.

| Verbo | Endpoint | Descricao |
|---|---|---|
| POST | `/poll-votes/webhook` | Webhook do provider quando voto e registrado |
| GET | `/poll-votes` | Listar enquetes da org |
| GET | `/poll-votes/by-schedule/:scheduleId` | Enquete vinculada a um schedule |
| GET | `/poll-votes/:pollId` | Detalhe + votos |
| GET | `/poll-votes/group/:groupId` | Enquetes de um grupo |
| GET | `/poll-votes/:pollId/export` | Export CSV dos votos |

Para criar uma enquete, envie via `messages_send` com `type: "poll"` e os dados da enquete no payload.
