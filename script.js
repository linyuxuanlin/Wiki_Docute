/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [{
      title: 'Home',
      link: '/'
    },
    /*
    {
      title: 'About',
      link: '/about'
    }
    */
  ],
  sidebar: [
    /*
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        },
        {
          title: 'HAL 库开发笔记（三）- 外部中断',
          link: '/HAL库开发笔记（三）-外部中断'
        }
      ]
    }
    */
    {
      title: '电路设计',
      links: [

        {
          link: 'AirForce-充满灵性的电机驱动模块',
        },
        {
          link: '如何设计一款单片机的最小系统',
        },
        {
          link: 'SwiftCtrl-蓝牙手柄',
        },
        {
          link: 'TinyDVR-小巧身材，满载动力',
        },
        {
          link: 'ZenDriver-高性能的电机驱动',
        },
        {
          link: 'PCB布线规范',
        },
        {
          link: 'PCB元件布局规范',
        },
        {
          link: 'PCB线宽与电流的关系',
        },
        {
          link: '函数思想在电路设计中的应用',
        },
        {
          link: '基本元器件选型',
        },
        {
          link: '锂电池的选型',
        },
        {
          link: '电源的设计',
        },
        {
          link: 'AD小技巧整理',
        },
        {
          link: 'AD入门系列一：环境搭建',
        },
        {
          link: 'AD入门系列二：基础知识',
        },
        {
          link: 'AD入门系列三：原理图绘制',
        },
        {
          link: 'AD入门系列四：PCB绘制',
        },
        {
          link: 'AD入门系列五：库文件绘制',
        },
        {
          link: '自制CMSIS-DAP',
        },
        {
          link: 'PCB名片设计',
        },
        {
          link: '常用的防反接电路',
        },
        {
          link: '什么是金手指',
        },
        {
          link: '电路设计中常用的接口及关键点',
        },
        {
          link: 'AD使用Git的注意事项',
        },

      ]
    },

  ]
})