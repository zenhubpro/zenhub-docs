---
sidebar_position: 1
sidebar_label: Getting Started
---

# ZenHub CLI

O ZenHub CLI permite automatizar a plataforma via terminal. Funciona com qualquer IA que rode comandos (Claude Code, Codex, Copilot, OpenClaw).

## Instalacao

```bash
npm install -g zenhub-cli
```

**Requisito:** Node.js 18+

## Login

```bash
zenhub login
```

Abre o navegador para autenticacao. Voce faz login, seleciona a organizacao, e o CLI detecta automaticamente.

**Em servidores sem browser (VPS):** O CLI exibe uma URL. Abra em qualquer dispositivo para completar a autenticacao.

```
$ zenhub login

  ZenHub CLI — Login
  ─────────────────

  Codigo: ABCD-1234

  Abrindo navegador...
  Ou acesse: https://www.zenhub.pro/cli-auth?session=xxx

  Aguardando autorizacao no navegador... ⠋
```

## Primeiro comando

```bash
# Listar campanhas
zenhub campaigns list

# Ver status da conexao WhatsApp
zenhub connections list

# Dashboard
zenhub stats dashboard
```

## Output JSON

Adicione `--json` para output estruturado (ideal para scripts e IAs):

```bash
zenhub campaigns list --json
```
