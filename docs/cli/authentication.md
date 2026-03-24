---
sidebar_position: 2
sidebar_label: Autenticacao
---

# Autenticacao do CLI

## Device Flow (recomendado)

```bash
zenhub login
```

1. CLI cria uma sessao de autenticacao
2. Abre o navegador em `zenhub.pro/cli-auth`
3. Voce faz login e seleciona a organizacao
4. CLI detecta a autorizacao automaticamente
5. Credenciais salvas em `~/.zenhub/credentials.json`

## Verificar status

```bash
zenhub status
# ou
zenhub whoami
```

Saida:
```
  ✓ Autenticado
  Conta:        usuario@email.com
  Organizacao:  Minha Empresa
  Logado em:    24/03/2026, 15:00:00
```

## Deslogar

```bash
zenhub logout
```

## API Key (alternativa)

Para CI/CD ou ambientes sem browser:

```bash
export ZENHUB_API_KEY=agwpp_live_sua_chave_aqui
zenhub campaigns list
```

A variavel de ambiente tem prioridade sobre credenciais salvas.

## Endpoints customizados

Para ambientes de desenvolvimento:

```bash
zenhub login --api-url http://localhost:3000/api --web-url http://localhost:5173
```
