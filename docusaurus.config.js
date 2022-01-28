module.exports = {
  title: 'Estraad Documentation',
  tagline: 'Support and technical documentation for Estraad',
  url: 'https://docs.estraad.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'estraad', // Usually your GitHub org/user name.
  projectName: 'estraad-docs', // Usually your repo name.
  favicon: '/img/favicon.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nb', 'de'],
  },
  themeConfig: {
    metadata: [{name: 'keywords', content: 'vr, metaverse, documentation, support'}],
    navbar: {
      title: 'Estraad Documentation',
      logo: {
        alt: 'Purple letter E in a circle',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Homepage',
              to: 'https://estraad.com',
            },
            {
              label: 'Meet',
              to: 'https://meet.estraad.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/estraad/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Estraad / Garnes Data AS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
