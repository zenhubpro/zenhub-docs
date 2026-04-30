---
sidebar_position: 1
sidebar_label: Web Chat Widget
---

# Web Chat Widget

Widget embedavel para receber mensagens diretamente do seu site dentro do ZenChat.

## Embed snippet

Cole antes de `</body>`:

```html
<script>
  (function(d,s,id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://cdn.zenhub.pro/webchat/widget.js';
    js.dataset.inbox = 'inbox_xxxxxxxxxxxx';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'zenhub-webchat'));
</script>
```

Substitua `inbox_xxxxxxxxxxxx` pelo ID do seu inbox (Configuracoes > Inbox > Web Chat).

## Customizacao

```html
<script>
  window.ZenHubWebChat = {
    inbox: 'inbox_xxxxxxxxxxxx',
    primaryColor: '#ff88be',
    position: 'bottom-right',
    locale: 'pt-BR',
    welcomeMessage: 'Como posso ajudar?',
    user: {
      identifier: 'user_123',
      name: 'Joao Silva',
      email: 'joao@example.com'
    }
  };
</script>
```

| Opcao | Default | Descricao |
|---|---|---|
| `primaryColor` | `#ff88be` | Cor de destaque do widget |
| `position` | `bottom-right` | `bottom-right` ou `bottom-left` |
| `locale` | `pt-BR` | `pt-BR` ou `en` |
| `welcomeMessage` | — | Mensagem inicial automatica |
| `user.identifier` | — | ID estavel para deduplicar visitas |
| `user.name` | — | Pre-preenche nome do contato |
| `user.email` | — | Pre-preenche email |

## API JavaScript

```javascript
// Abrir widget programaticamente
window.ZenHubWebChat.open();

// Fechar
window.ZenHubWebChat.close();

// Atualizar usuario logado
window.ZenHubWebChat.setUser({
  identifier: 'user_456',
  name: 'Maria Santos'
});

// Reset (logout)
window.ZenHubWebChat.reset();

// Eventos
window.ZenHubWebChat.on('open', () => console.log('aberto'));
window.ZenHubWebChat.on('message:received', (msg) => console.log(msg));
```

## Tamanho

77 KB gzipped. Carregado de forma assincrona — nao bloqueia o page load.

## Visitor token

Para integracao server-side (autenticar visitor com identidade verificada), gere um token via:

<span class="api-method api-method--post">POST</span> `/api/zenchat/webchat/inboxes/:inboxId/token`

```json
{
  "identifier": "user_123",
  "name": "Joao Silva",
  "email": "joao@example.com",
  "expires_in": 3600
}
```

Passe o token retornado em `window.ZenHubWebChat.token`.
