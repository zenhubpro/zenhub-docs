---
sidebar_position: 4
sidebar_label: Integracao com IA
---

# Integracao com IA

O ZenHub CLI foi projetado para ser usado por IAs que rodam terminal — Claude Code, Codex, Copilot, OpenClaw e outros.

## Como funciona

Adicione `--json` a qualquer comando para output que IAs parseiam nativamente:

```bash
zenhub campaigns list --json
zenhub chat list --status pending --json
```

## Exemplo: fluxo completo com IA

Imagine pedir para a IA: *"Responda todas as conversas pendentes do ZenChat"*

A IA executaria:

```bash
# 1. Buscar conversas pendentes
zenhub chat list --status pending --json

# 2. Para cada conversa, ler mensagens
zenhub chat messages <conversation_id> --json

# 3. Compor e enviar resposta
zenhub chat reply <conversation_id> -m "Obrigado pelo contato!" --json
```

## Exemplo: criar campanha e agendar

```bash
# 1. Criar campanha
zenhub campaigns create -n "Lancamento Produto" --json

# 2. Agendar mensagem
zenhub schedules create \
  -c <campaign_id> \
  -m "Ola! O produto esta disponivel." \
  -d "2026-03-25T10:00:00" --json

# 3. Verificar status
zenhub campaigns stats <campaign_id> --json
```

## Uso em VPS (headless)

O CLI funciona em servidores sem display. O `zenhub login` exibe uma URL que voce abre em qualquer dispositivo:

```
$ zenhub login

  Codigo: ABCD-1234
  Ou acesse: https://www.zenhub.pro/cli-auth?session=xxx
  Aguardando autorizacao...
```

Isso permite usar o ZenHub CLI dentro de ferramentas como **OpenClaw** rodando em VPS.

## Plataformas compativeis

| Plataforma | Compativel | Observacao |
|------------|:----------:|-----------|
| Claude Code | Sim | Roda `zenhub` direto no terminal |
| OpenAI Codex | Sim | Via terminal integrado |
| OpenClaw | Sim | Funciona em VPS |
| GitHub Copilot CLI | Sim | Via shell |
| Scripts bash/cron | Sim | Use `ZENHUB_API_KEY` env var |
