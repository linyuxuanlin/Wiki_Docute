/* globals Docute*/

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    
    {
      title: 'About',
      link: '/about'
    }
    
  ],
  sidebar: [
   /*
    {
      title: 'Guide',
      links: [
       
        {
          title: 'HAL 库开发笔记（三）- 外部中断',
          link: '/HAL库开发笔记（三）-外部中断'
        }
      ]
    }*/
    {title: 'Home', link: '/',},
    {
      title: '电路设计',
      
      links: [
        {title: 'AirForce-充满灵性的电机驱动模块', link: 'AirForce-充满灵性的电机驱动模块',},
        {title: '如何设计一款单片机的最小系统', link: '如何设计一款单片机的最小系统',},
        {title: 'SwiftCtrl-蓝牙手柄', link: 'SwiftCtrl-蓝牙手柄',},
        {title: 'TinyDVR-小巧身材，满载动力', link: 'TinyDVR-小巧身材，满载动力',},
        {title: 'ZenDriver-高性能的电机驱动', link: 'ZenDriver-高性能的电机驱动',},
        {title: 'PCB布线规范', link: 'PCB布线规范',},
        {title: 'PCB元件布局规范', link: 'PCB元件布局规范',},
        {title: 'PCB线宽与电流的关系', link: 'PCB线宽与电流的关系',},
        {title: '函数思想在电路设计中的应用', link: '函数思想在电路设计中的应用',},
        {title: '基本元器件选型', link: '基本元器件选型',},
        {title: '锂电池的选型', link: '锂电池的选型',},
        {title: '电源的设计', link: '电源的设计',},
        {title: 'AD小技巧整理', link: 'AD小技巧整理',},
        {title: 'AD入门系列一：环境搭建', link: 'AD入门系列一：环境搭建',},
        {title: 'AD入门系列二：基础知识', link: 'AD入门系列二：基础知识',},
        {title: 'AD入门系列三：原理图绘制', link: 'AD入门系列三：原理图绘制',},
        {title: 'AD入门系列四：PCB绘制', link: 'AD入门系列四：PCB绘制',},
        {title: 'AD入门系列五：库文件绘制', link: 'AD入门系列五：库文件绘制',},
        {title: '自制CMSIS-DAP', link: '自制CMSIS-DAP',},
        {title: 'PCB名片设计', link: 'PCB名片设计',},
        {title: '常用的防反接电路', link: '常用的防反接电路',},
        {title: '什么是金手指', link: '什么是金手指',},
        {title: '电路设计中常用的接口及关键点', link: '电路设计中常用的接口及关键点',},
        {title: 'AD使用Git的注意事项', link: 'AD使用Git的注意事项',},

      ],
    },

    {
      title: '队务管理',
      
      links: [
      //{title: '团队公开知识库的搭建', link: '团队公开知识库的搭建',},
        {title: '团队知识库的搭建-理论', link: '团队知识库的搭建-理论',},
        {title: '动员大会-经验总结', link: '动员大会-经验总结',},
        {title: '换届大会-经验总结', link: '换届大会-经验总结',},
        {title: '破冰活动-经验总结', link: '破冰活动-经验总结',},
        {title: '出展活动-经验总结', link: '出展活动-经验总结',},
      ],
    },
    {
      title: '嵌入式开发',
      
      links: [
        {title: 'C与STM32常用宏定义', link: 'C与STM32常用宏定义',},
      //{title: 'HAL系列教程1—GPIO', link: 'HAL系列教程1—GPIO',},
        {title: 'HAL库开发笔记（一）-环境配置', link: 'HAL库开发笔记（一）-环境配置',},
        {title: 'HAL库开发笔记（二）-GPIO', link: 'HAL库开发笔记（二）-GPIO',},
        {title: 'HAL库开发笔记（三）-外部中断', link: 'HAL库开发笔记（三）-外部中断',},
        {title: 'HAL库开发笔记（四）-串口通信', link: 'HAL库开发笔记（四）-串口通信',},
        {title: 'PlatformIO—一站式嵌入式开发工具', link: 'PlatformIO—一站式嵌入式开发工具',},
        {title: 'PlatformIO搭配CubeMX食用', link: 'PlatformIO搭配CubeMX食用',},
        {title: 'CubeMX的一些坑', link: 'CubeMX的一些坑',},
        {title: 'STM32的启动模式', link: 'STM32的启动模式',},
        {title: 'KeilMDK配置指南', link: 'KeilMDK配置指南',},
      //{title: 'STM32模块设计-LED', link: 'STM32模块设计-LED',},
        {title: '大疆N3飞控-参考资料', link: '大疆N3飞控-参考资料',},
        {title: 'ATTiny85调试记录', link: 'ATTiny85调试记录',},
        {title: 'T-Clock桌上小钟', link: 'T-Clock桌上小钟',},
      //{title: '小车游华广-比赛', link: '小车游华广-比赛',},
      //{title: '麦昆小车-测评', link: '麦昆小车-测评',},
        {title: '麦轮小车', link: '麦轮小车',},
        {title: '一个舵机的自我修养', link: '一个舵机的自我修养',},
      ],
    },

    {
      title: '高效工作',
      
      links: [
        {title: 'Windows初始化与软件推荐', link: 'Windows初始化与软件推荐',},
        {title: '为什么你需要一个知识库', link: '为什么你需要一个知识库',},
        {title: 'Docusaurus极简部署指南', link: 'Docusaurus极简部署指南',},
        {title: 'Hugo极简搭建指南', link: 'Hugo极简搭建指南',},
        {title: '如何在iPad上运行VSCode', link: '如何在iPad上运行VSCode',},
        {title: '使用Markdown进行高效写作', link: '使用Markdown进行高效写作',},
        {title: '团队知识库搭建记录-DokuWiki', link: '团队知识库搭建记录-DokuWiki',},
        {title: '个人知识库极简搭建指南-VuePress', link: '个人知识库极简搭建指南-VuePress',},
        {title: '用树莓派架设云打印服务器', link: '用树莓派架设云打印服务器',},
        {title: '文章排版规范', link: '文章排版规范',},
        {title: '基于docsify搭建个人Wiki', link: '基于docsify搭建个人Wiki',},
        {title: '用Graphviz绘制关系图', link: '用Graphviz绘制关系图',},
        {title: '博客转至GitBook', link: '博客转至GitBook',},
        {title: '浅谈Bitcron博客平台', link: '浅谈Bitcron博客平台',},
        {title: 'RSS-高效率的阅读方式', link: 'RSS-高效率的阅读方式',},
        {title: '把回忆放心交给GooglePhotos', link: '把回忆放心交给GooglePhotos',},
        {title: '构建知识管理系统', link: '构建知识管理系统',},
        {title: '回归博客', link: '回归博客',},
        {title: 'VSCode生产力指南-环境配置', link: 'VSCode生产力指南-环境配置',},
        {title: 'VSCode生产力指南-JupyterNotebook', link: 'VSCode生产力指南-JupyterNotebook',},
        {title: '在浏览器上运行VSCode（旧）', link: '在浏览器上运行VSCode（旧）',},
        {title: '如何配一台电脑', link: '如何配一台电脑',},
        {title: '用reveal.js制作幻灯片', link: '用reveal.js制作幻灯片',},
      ],
    },
    {
      title: '软件开发',
      
      links: [
        {title: 'CSS学习笔记', link: 'CSS学习笔记',},
        {title: 'HTML学习笔记', link: 'HTML学习笔记',},
        {title: 'JavaScript学习笔记', link: 'JavaScript学习笔记',},
        {title: 'Docker简易指南', link: 'Docker简易指南',},
        {title: 'DockerCompose-更优雅的打开方式', link: 'DockerCompose-更优雅的打开方式',},
        {title: '自适应网页设计', link: '自适应网页设计',},
        {title: '前端开发-环境搭建', link: '前端开发-环境搭建',},
        {title: 'BookJourney-二手书商城小程序', link: 'BookJourney-二手书商城小程序',},
        {title: 'Git学习笔记', link: 'Git学习笔记',},
      ],
    },


    {
      title: '产品经理',
      
      links: [
        {title: '产品经理的日常', link: '产品经理的日常',},
        {title: '中台的概念', link: '中台的概念',},
        {title: '画图基础', link: '画图基础',},
        {title: '智能硬件产品经理的技术要求', link: '智能硬件产品经理的技术要求',},
        {title: '如何撰写一份BRD', link: '如何撰写一份BRD',},
        {title: '软件开发中的注意事项', link: '软件开发中的注意事项',},
        {title: '专业与分工', link: '专业与分工',},
        {title: '关于复盘', link: '关于复盘',},
      //{title: '智能硬件产品开发流程', link: '智能硬件产品开发流程',},
      ],
    },
    {
      title: '生活经历',
      
      links: [
      //{title: '书摘与读书笔记', link: '书摘与读书笔记',},
      //{title: '华广爬楼指北', link: '华广爬楼指北',},
        {title: '读《黑客与画家》', link: '读《黑客与画家》',},
        {title: '英语六级-备考', link: '英语六级-备考',},
        {title: '音乐相关', link: '音乐相关',},
        {title: '谈谈未来的职业选择', link: '谈谈未来的职业选择',},
        {title: 'THEHack2019黑客马拉松', link: 'THEHack2019黑客马拉松',},
        {title: 'Hack.init()黑客马拉松', link: 'Hack.init()黑客马拉松',},
        {title: '焊接大赛培训及总结', link: '焊接大赛培训及总结',},
        {title: '为什么要「站在巨人的肩膀上」', link: '为什么要「站在巨人的肩膀上」',},
        {title: '如何不被AI取代', link: '如何不被AI取代',},
        {title: '一些观点', link: '一些观点',},

      ],
    },

    {
      title: '小技巧',
      
      links: [

        {title: '如何为公众号文章增加特效', link: '如何为公众号文章增加特效',},
        {title: '如何在Linux下使用微信', link: '如何在Linux下使用微信',},
        {title: '如何打印出手写效果的文字', link: '如何打印出手写效果的文字',},
        {title: '如何从乐曲中分离音轨', link: '如何从乐曲中分离音轨',},
        {title: '如何高效制作幻灯片', link: '如何高效制作幻灯片',},
        {title: '卡片式写作', link: '卡片式写作',},
        {title: 'npm和Yarn换源加速国内访问', link: 'npm和Yarn换源加速国内访问',},
        {title: 'Vue.js小技巧', link: 'Vue.js小技巧',},
        {title: '正则表达式实用语句', link: '正则表达式实用语句',},
        {title: 'LaTeX希腊字母对照表', link: 'LaTeX希腊字母对照表',},
        {title: 'GitHub改Host', link: 'GitHub改Host',},
        {title: 'Linux用户操作', link: 'Linux用户操作',},
        {title: 'MSI主板开启虚拟化的方法', link: 'MSI主板开启虚拟化的方法',},
        {title: 'Git配置代理', link: 'Git配置代理',},
        {title: '删除GitHub仓库中某个文件夹', link: '删除GitHub仓库中某个文件夹',},
        {title: '定制SublimeText3', link: '定制SublimeText3',},
        {title: '如何保存易逝的文字', link: '如何保存易逝的文字',},
      //{title: 'Excel批量激活链接并转为图片', link: 'Excel批量激活链接并转为图片',},
        {title: '用Vercel加速Pages服务', link: '用Vercel加速Pages服务',},
        {title: 'Doxygen注释规范', link: 'Doxygen注释规范',},
        {title: 'AltiumDesigner安装库文件', link: 'AltiumDesigner安装库文件',},
        {title: 'CentOS配置OhMyZsh', link: 'CentOS配置OhMyZsh',},
        {title: '如何快速制作一个启动盘', link: '如何快速制作一个启动盘',},
        {title: '使用VSCode进行远程开发', link: '使用VSCode进行远程开发',},
        {title: 'Node.js和npm的安装与卸载（MacOS）', link: 'Node.js和npm的安装与卸载（MacOS）',},
      //{title: 'Bash基础', link: 'Bash基础',},
      //{title: 'Linux基础（CentOS）', link: 'Linux基础（CentOS）',},
      //{title: '从零搭建视觉开发环境（Docker-Linux）', link: '从零搭建视觉开发环境（Docker-Linux）',},
      ],
    },

  ]
})
