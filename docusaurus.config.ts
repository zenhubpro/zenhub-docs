import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZenHub Docs',
  tagline: 'Documentação da plataforma ZenHub — API, CLI e automação WhatsApp',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.zenhub.pro',
  baseUrl: '/',

  organizationName: 'zenhubpro',
  projectName: 'zenhub-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ZenHub',
      logo: {
        alt: 'ZenHub',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          to: '/api-reference/overview',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/cli/getting-started',
          label: 'CLI',
          position: 'left',
        },
        {
          href: 'https://www.zenhub.pro',
          label: 'Dashboard',
          position: 'right',
        },
        {
          href: 'https://github.com/zenhubpro/zenhub-cli',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            { label: 'Getting Started', to: '/' },
            { label: 'API Reference', to: '/api-reference/overview' },
            { label: 'CLI', to: '/cli/getting-started' },
          ],
        },
        {
          title: 'Produto',
          items: [
            { label: 'ZenHub', href: 'https://www.zenhub.pro' },
            { label: 'Preços', href: 'https://www.zenhub.pro/#pricing' },
          ],
        },
        {
          title: 'Developers',
          items: [
            { label: 'GitHub CLI', href: 'https://github.com/zenhubpro/zenhub-cli' },
            { label: 'Status', href: 'https://status.zenhub.pro' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ZenHub. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
