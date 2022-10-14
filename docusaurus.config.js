const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sequence',
  tagline: '',
  url: 'https://docs.sequence.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],
  organizationName: '0xsequence', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl: 'https://github.com/0xsequence/docs/edit/master/',
          exclude: ['docs-todo/**']
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss')
        }
      })
    ]
  ],
  plugins: [
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     entryPoints: ['./sequence.js/packages/0xsequence/src/index.ts'],
    //     tsconfig: './sequence.js/tsconfig.json',
    //     sidebar: {
    //       categoryLabel: 'API Reference',
    //       position: 100
    //     }
    //   }
    // ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        docsRouteBasePath: '/'
      }
    ],
    'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sequence-banner.jpg',
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `❤️ To follow Sequence product updates, follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xsequence" >Twitter</a>`
      },
      navbar: {
        title: '',
        logo: {
          alt: 'logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg'
        },

        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro/overview',
          //   position: 'left',
          //   label: 'Overview'
          // },
          {
            href: 'https://github.com/0xsequence',
            position: 'left',
            label: 'Github'
          },
          {
            href: 'https://discord.gg/sequence',
            position: 'left',
            label: 'Discord'
          },
          // {
          //   href: 'https://blog.sequence.xyz',
          //   position: 'left',
          //   label: 'Blog & Guides'
          // },
          {
            type: 'doc',
            docId: 'support/contact',
            position: 'right',
            label: 'Support'
          },
          // {
          //   href: 'https://github.com/0xsequence',
          //   className: 'navbar-item-github',
          //   position: 'right'
          // },
          {
            href: 'https://twitter.com/0xsequence',
            className: 'navbar-item-twitter',
            position: 'right'
          }
        ]
      },
      footer: {
        logo: {
          alt: 'Horizon Blockchain Games',
          src: '/img/horizon-light-mode.svg',
          href: 'https://horizon.io',
          srcDark: '/img/horizon-dark-mode.svg'
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/'
              },
              {
                label: 'Getting Started',
                to: '/getting-started'
              }
            ]
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sequence'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xsequence'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0xsequence'
              }
            ]
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto: hello@horizon.io'
              },
              {
                label: 'Support',
                href: 'https://support.sequence.xyz'
              }
            ]
          }
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Horizon Blockchain Games Inc`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'typescript',
          'go',
          'markdown',
          'json',
          'jsx',
          'python',
          'csharp'
        ]
      },
      colorMode: {
        defaultMode: 'dark'
      }
    })
}
