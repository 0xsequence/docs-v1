const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.palenight;

// darkCodeTheme.plain.backgroundColor = '#000'
// lightCodeTheme.plain.backgroundColor = '#ffffff'

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
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  clientModules: [
    require.resolve('./src/load.js')
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
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
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
      image: 'img/sequence-banner.jpeg',
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `❤️ To follow Sequence product updates, follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xsequence" >Twitter</a>`
      },
      navbar: {
        logo: {
          alt: 'Sequence logo',
          src: 'img/sequence-composite.svg',
        },
        items: [
          {
            href: 'https://github.com/0xsequence',
            label: 'github',
          },
          {
            href: 'https://discord.gg/sequence',
            label: 'discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/0xsequence',
            label: 'twitter',
            position: 'right',
          },
          {
            href: 'https://sequence.xyz',
            position: 'right',
            label: 'wallet'
          },
          {
            href: 'mailto:hello@horizon.io',
            label: 'email',
          },
          {
            href: '/support',
            label: 'faq',
          },
        ],
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