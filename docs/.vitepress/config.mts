import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'PogHub',
  lang: 'zh',
  description: '知识库',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  locales: {
    root: {
      label: '中文',
      themeConfig: {
        docFooter: {
          prev: '上页',
          next: '下页',
        },
        lastUpdated: {
          text: '最后更新于',
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回顶',
        sidebarMenuLabel: '文库',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换浅色',
        darkModeSwitchTitle: '切换深色',
      },
    },
  },
  themeConfig: {
    logo: '/logo.png',
    outline: {
      level: 'deep', // 等价于[2, 6]
      label: '大纲',
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
              navigateText: '切换',
              selectText: '选择',
              closeText: '关闭',
            },
          },
        },
        miniSearch: {
          options: {
            tokenize: (term) => {
              if (typeof term === 'string') term = term.toLowerCase()
              const segmenter =
                Intl.Segmenter &&
                new Intl.Segmenter('zh', { granularity: 'word' })
              if (!segmenter) return [term]
              const tokens = []
              for (const seg of segmenter.segment(term)) {
                // @ts-ignore
                tokens.push(seg.segment)
              }
              return tokens
            },
          },
          searchOptions: {
            combineWith: 'AND',
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
