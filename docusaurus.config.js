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
  themeConfig: {
    navbar: {
      title: 'Estraad Documentation',
      logo: {
        alt: 'Estraad E Logo',
        src: 'img/logo.svg',
      },
      items: [
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
          editUrl:
            'https://github.com/estraad/estraad-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
