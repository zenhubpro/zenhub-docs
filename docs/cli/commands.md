---
sidebar_position: 3
sidebar_label: Comandos
---

# Referencia de Comandos

Todos os comandos aceitam `--json` para output estruturado.

## Campaigns

```bash
zenhub campaigns list                       # Listar campanhas
zenhub campaigns get <id>                   # Detalhes da campanha
zenhub campaigns create -n "Nome"           # Criar campanha
zenhub campaigns update <id> -n "Novo nome" # Atualizar
zenhub campaigns delete <id>                # Deletar
zenhub campaigns stats <id>                 # Estatisticas
zenhub campaigns execute <id>               # Executar agora
```

## Groups

```bash
zenhub groups list                          # Listar todos os grupos
zenhub groups list -c <campaign_id>         # Grupos de uma campanha
zenhub groups get <id>                      # Detalhes do grupo
zenhub groups create <campaign_id> -n "VIP" # Criar grupo
zenhub groups members <camp_id> <group_id>  # Listar membros
zenhub groups add-member <c> <g> --phones 5511999990000,5511888880000
zenhub groups remove-member <c> <g> <phone> # Remover membro
zenhub groups sync-members <campaign_id>    # Sincronizar com WhatsApp
```

## Schedules

```bash
zenhub schedules list                       # Listar agendamentos
zenhub schedules list -c <campaign_id>      # Filtrar por campanha
zenhub schedules get <id>                   # Detalhes
zenhub schedules create -c <id> -m "Msg" -d "2026-03-25T10:00:00"
zenhub schedules update <id> -m "Nova msg"  # Atualizar
zenhub schedules delete <id>                # Deletar
```

## Messages

```bash
zenhub messages send -g <group_id> -m "Ola!"
zenhub messages send-to-campaigns -c <id1>,<id2> -m "Broadcast"
zenhub messages bulk --groups <id1>,<id2> -m "Msg" --delay 2000
```

## Conversations (ZenChat)

```bash
zenhub chat list                            # Todas as conversas
zenhub chat list --status open              # Filtrar por status
zenhub chat get <id>                        # Detalhes
zenhub chat messages <id>                   # Mensagens da conversa
zenhub chat reply <id> -m "Resposta"        # Responder
```

## Contacts

```bash
zenhub contacts list                        # Listar contatos
zenhub contacts list -q "Joao"              # Buscar
zenhub contacts get <id>                    # Detalhes
zenhub contacts create --phone +5511999990000 -n "Joao"
zenhub contacts update <id> -n "Joao Silva" # Atualizar
zenhub contacts delete <id>                 # Deletar
```

## Connections

```bash
zenhub connections list                     # Listar conexoes WhatsApp
zenhub connections get <id>                 # Detalhes + status
```

## Stats

```bash
zenhub stats dashboard                      # Overview da organizacao
zenhub stats campaign <id>                  # Metricas de campanha
```

## Access List (Whitelist)

```bash
zenhub acl list <campaign_id>               # Listar entradas
zenhub acl grant <campaign_id> --phone 5511999990000
zenhub acl check <campaign_id> <phone>      # Verificar acesso
zenhub acl renew <campaign_id> --phone <phone> --expires 2026-06-01
zenhub acl revoke <campaign_id> <phone>     # Revogar
zenhub acl stats <campaign_id>              # Estatisticas
```

## Blacklist

```bash
zenhub blacklist list                       # Listar bloqueados
zenhub blacklist check <phone>              # Verificar
zenhub blacklist add --phone 5511999990000  # Bloquear
zenhub blacklist remove <id>                # Desbloquear
```
