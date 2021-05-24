module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  sidebar: 'auto',
  docsDir: 'www',
  docsBranch: 'master',
  repo: 'https://github.com/hec9527/notebook',
  repoLabel: '查看源码',

  editLinks: true,
  editLinkText: '帮助我们改善此页面！',

  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }
  ],

  markdown: {
    // lineNumbers: true,
    toc: { includeLevel: [1, 2] }
  },
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ]
  }
};
