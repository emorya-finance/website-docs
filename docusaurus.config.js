// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'This website is still under construction',
    tagline: 'We will finish it as fast as we can :)',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://emorya.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'emorya-finance', // Usually your GitHub org/user name.
    projectName: 'website-docu', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            // Replace with your project's social card
            navbar: {
                title: '',
                logo: {
                    alt: 'Emorya Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    // {
                    //     type: 'doc',
                    //     docId: 'documentation/overview',
                    //     label: 'Documentation',
                    //     position: 'left',
                    // },
                    { 
                        type: 'doc', 
                        docId: 'whitepaper/introduction',
                        label: 'Whitepaper', 
                        position: 'left' 
                    },
                    {
                        href: 'https://github.com/emorya-finance',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Developers',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/emorya-finance',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/GHmXYncE8F',
                            },
                            {
                                label: 'Telegram',
                                href: 'https://t.me/EmoryaFinanceInternational',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/EmoryaFinance',
                            },
                            {
                                label: 'Facebook',
                                href: 'https://www.facebook.com/emoryafinance/',
                            },
                        ],
                    },
                    {
                        title: 'About',
                        items: [
                            {
                                label: 'Emorya',
                                href: 'https://emorya.com',
                            },
                            {
                                label: 'Team',
                                href: 'https://emorya.com/#team',
                            },
                            {
                                label: 'Whitepaper',
                                href: 'https://emorya.com/emorya-white-paper/',
                            },
                            {
                                label: 'Legal',
                                href: 'https://emorya.com/legal/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Emorya Finance &mdash; support@emorya.com`,
            },
        }),
};

module.exports = config;
