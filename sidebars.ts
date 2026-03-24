import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    'quick-start',
    {
      type: 'category',
      label: 'Autenticacao',
      items: [
        'auth/api-keys',
        'auth/rate-limiting',
        'auth/scopes',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/overview',
        'api-reference/campaigns',
        'api-reference/groups',
        'api-reference/schedules',
        'api-reference/messages',
        'api-reference/contacts',
        'api-reference/connections',
        'api-reference/conversations',
        'api-reference/access-list',
        'api-reference/blacklist',
        'api-reference/stats',
        'api-reference/buyers',
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        'cli/getting-started',
        'cli/authentication',
        'cli/commands',
        'cli/ai-integration',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'webhooks/overview',
        'webhooks/events',
      ],
    },
  ],
};

export default sidebars;
