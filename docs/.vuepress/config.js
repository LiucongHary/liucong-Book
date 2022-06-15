module.exports = {
    title: 'liucong',
    description: '个人笔记总结',
    base: '/', // 这是部署到github相关的配置
    themeConfig: {
        smoothScroll: true, //点击侧边栏滚动到指定位置的滚动效果
        nextLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        prevLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        lastUpdated: 'Last Updated', //最后更新时间
        // navbar: false, //禁用所有导航栏
        // 头部右侧导航栏链接
        nav: [{
            text: '常用构建工具',
            link: '/buildTools/',

        },
        {
            text:'基础知识',
            ariaLabel: 'Language Menu',
            items:[
                {
                    text:'html+css',
                    link:'/base/htmlcss',
                }
            ]
        },
        {
            text: 'js相关',
            ariaLabel: 'Language Menu',
            items: [{
                    text: '基本知识',
                    link: '/js/'
                }
            ]
        },
        {
            text:'面试',
            ariaLabel: 'Language Menu',
            items: [{
                    text:'浏览器相关',
                    link:'/interview/'
                }
            ]

        }
        ],
        //侧边栏
        sidebar: {
            '/buildTools/': [{
                title: 'webpack',
                collapsable: false,
                children: [
                    '/buildTools/webpack-1',
                    '/buildTools/webpack-2',
                    '/buildTools/webpack-3'

                ]
            },

            ],
            //基础知识
            '/base/':[
             {
                title:'基础知识储备',
                collapsable:false,
                children: [
                    '/base/htmlcss'
                ]
              }
            ],
            // js相关基本知识
            '/js/': [
                {
                    title: '数据结构',
                    collapsable: false,
                    children: [
                        '/js/Array',
                        '/js/String',
                        '/js/Symbol',
                        '/js/Generator',
                        '/js/Iterator',
                        '/js/Proxy',
                        '/js/set和map'
                    ]
                },
                {
                    title: 'Typescript',
                    collapsable: false,
                    path: '/js/typescript'
    
                },
                {
                    title: 'es6与node导出区别',
                    collapsable: false,
                    path: '/js/es6的文件输出'
    
                },
            ],
            // 面试
            '/interview/':[
                {
                    title:'browser',
                    collapsable: false,
                    children: [
                      '/interview/event',
                      '/interview/crossDomain'
                    ]
                }
            ]
        }
    },



};