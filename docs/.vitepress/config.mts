import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: {
      title: 'PogHub',
      lang: 'zh-CN',
      label: '简体中文',
      description: '知识库',
      themeConfig: {
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        lastUpdated: {
          text: '最后更新于',
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
      },
    },
  },
  themeConfig: {
    logo: '/logo.png',
    outline: {
      level: 'deep', // 等价于[2, 6]
      label: '页面导航',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详细列表',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    editLink: {
      pattern:
        'https://github.com/pogyang/pogyang.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      collapsed: true,
    }),
  },
})
