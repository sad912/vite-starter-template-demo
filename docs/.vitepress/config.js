const sidebar = {
  '/': [
    {
      text: '开始',
      items: [
        {
          text: '介绍', link: '/'
        },
        {
          text: '快速开始', link: '/'
        }
      ]
    },
    {
      text: '通用',
      items: [
        {
          text: 'Button 按钮', link: '/components/button/'
        },
      ]
    },
  ]
}
export default {
  title: 'UI-Demo',
  description: 'This is a demo UI',
  themeConfig: {
    sidebar,
  }
}