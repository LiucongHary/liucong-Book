# 其他配置
entry和output的基本配置

    entry:'./index.js' ==>entry:{main:'./index.js'}
    多入口打包
    entry:{
        main:'./index.js',
        sub:'./index.js',
    }
    output:{
        publicPath:'http://cdn.com.cn', //引入的文件中加上前缀
        filename:'[name].js', //用占位符打包出mian.js和sub.js文件
        path:path.resolve(__dirname,'dist')
    }

sourceMap配置

是一个映射关系，它知道dist目录文件实际上对应的是src目录那个文件

在开发环境默认配置了sourceMap

未配置，报错，只知道dist目录下错误的行数，并不知道源代码中在哪里报错

    webpack.config.js中
    devtool:'source-map' // 
    cheap-module-eval-source-map // 开发 development
    cheap-module-source-map  // 线上 production
    
    source.map dist中会生成 .map 文件
    inline .map文件会合并到main.js中
    cheap 只报行错不报列错
    module 也会报loader和第三方映射的错误代码
    eval  加快打包速度

webpack-dev-server 开启web服务器  放于电脑内存中

    npm i webpack-dev-server -D 热更新
    1 package.json
       webpack --watch 改变原文件 刷新页面刷新
    2  自动启动服务器，页面自动更新
     devServer:{
         contentBase: './dist', // 服务器的根路径起在哪里
         open:true , // 自动打开服务器地址
         proxy:{
             '/api':'http://localhost:3000' // 是因为webpack使用了 webpack-dev-server
         }
     }
     package.json
     start:"webpack-dev-server"
     
     ===========
     package.json 使用node启动服务
     "middleware":"node server.js"
     
    service.js
    const express = require('express');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('./webpack.config.js');
    const complier = webpack(config); // webpack结合配置文件随时做编译
    
    const app = express();
    app.use(webpackDevMiddleware(complier));
    app.listen(3000, () => {
      console.log('App listening on port 3000!');
    });

Hot Module Replacement 热模块替代

    比如：改变页面样式，只改变样式，不从新刷新页面
      方便css，js方便
      html不更新，是因为loader中内置了删除html代码，所以不用自己删除  
    webpack.config.js
    const weback = require('webpack')
    devServer:{
        ...
        hot:true, // 开启 hot module Replacement 功能
        hotOnly:true, // 即使html不生效，也不重新刷新
    }
    plugins:[
        ...,
        new webpack.HotModuleReplacementPlugin()
    ]
    
    
    js代码中
    if(module.hot){ // 如果项目开启了hot module replacement
        module.hot.accept('路径',()=>{
            todo...
        })
    }

weback通过babel识别es6语法 https://babeljs.io/setup

    bable执行顺序 从下往上 从右往左
    @babel/polyfill 识别类似于map，some。promise等es6语法。。。 全部都转义S
    
    webpack中babel配置
    options:{
        presets:[["@babel/preset-env",{
            useBuiltIns:'usage' // 项目中那个ES6组要转化就转那个，不要全部都转移
        }]]
    }
    
    注意：
    写业务代码的时候，可以使用@babel/polyfill，它引入的是全局变量会污染环境；
    写类库代码的时候，要使用@babel/plugin-transform-runtime 它会已闭包的形式引入，不会污染全局变量



tree shaking

只支持 ES module 模块引入

    作用：只打包有用的代码
    webpack.config.js
    
    plugins:[
        ...,
        optimization:{
            usedExports:true // 开发环境 ； 生产环境不用写，会自动tree shaking
        }
    ]
    
    package.json
    sideEffects:["@babel/polly-fill"] // 可以会把 @babel/polly-fill 忽略掉，因为它是挂载到window上的
    sideEffects:false, 不需要特殊配置
    



development 和 production 模式的区分打包

    package.json
    script:{
    	dev: "webpack-dev-server --config webpack.dev.js"
    	build:"webpack --config webpack.prod.js"
    }
    
    把开发环境配置和生产环境配置的公共代码提出来
    在通过webpack-merge进行配置合并导出
    
    npm install webpack-merge -D
    config.dev.js
    const merge = require('webpck-merge')
    moudule.exports = merge(配置对象1,配置对象2)
    

webpack 和 code splitting(代码分割)

    1 有的代码会把webpack的配置环境放在根目录的build文件夹下，这时候打打包需要注意
     配置环境
     输入文件
     entry:'./src/index.js'
     输入文件：
     output:{
         filename:'[name].js',
         path:path.resolve(__dirname,'../dist')
     }
     
     new cleanWebpackPlugin(['../dist'],{
         root:path.resolve(__dirname,'../')
     })
    
    代码分割：
    1 自己手动分割代码 
    引入多个入口，打包出多个js入口
     第三方引入js文件一个入口文件，业务逻辑一个js入口文件
     当页面业务逻辑发生变化，只需要加载业务逻辑js文件即可
     
     
    2 webpack自带的插件可以做 code splitting 
      因为webpack自动和splitChunksPugin插件绑定
       webpack自动分割同步同步引入的第三方库，需要自己做optimization的配置
       js文件中
       import _ form 'lodash'
    	optimization:{
            splitChunks:{
                chunks:'all'
            }
    	}
    2 webpack异步载入组件方式，不需要做任何配置，代码会自动进行分割 
     import('lodash').then(({default:_})=>{
         todo...
     })
    
    webpack代码之所以可以做分割，是因为底层使用了SplitChunksPlugin 
    如何做SplitChunksPlugin的配置参数
    
    异步加载文件 默认打出 0.js 如何改变导出的名字？
     import(/* webpackChunkName:"lodash" */ 'lodash').then(({default:_})=>{
         todo...
     })
     
     optimization:{
       splitChunks:{
         chunks:'async', // 只对异步代码进行代码分割
         minSize:30000, // 引入代码 大于100b 时才做代码分割
         maxSize:50000, // 可以不选 如果引入文件大于50kb 会对文件判断是否可以二次拆分，如果可以二次拆分，拆成n个50kb的文件
         minChunks:1, // 引入文件大于1时才做代码拆分
         maxAsyncRequests:5, // 引入的类库最多只能拆分5个
         maxInitialRequests:3, 入口文件做代码分割，最多只能做3个代码分割
         automaticNameDelimiter:'~', // 组和文件生成的连接符
         name:true; // 打包生成的文件，是否可以改变名字
         cacheGroups:{ // 缓存组  设置代码分割的文件放入地方 
             
         }
         
        }
     }
      
      
     chunks:'all' , 
     cacheGroups:{ 
     // 打包同步代码需要配置 同步代码时会根据cachaGrops的配置确定代码会放在哪个组里面
         vendors:{
             test:/\\//node_modules[\\/]/,
             priority:-10, // 打包优先级 
             filename:'vendors.js' // 导出文件名
         }
         default:{
             priority:-20,
             reuseExistingChunk:true， // 假如a模块中引入了b模块，b代码会跟随a代码打包到同一个组中；b代码不会再单独打包，会复用之前b代码的打包
             filename:'common.js',
         }
     }
     
     
    
    npm install lodash -S  功能集合，有许多工具方法
    
    index.js
    import _ from 'loadsh'
    console.log(_.join(['a','b','c'],'***'))
    
    

Lazy Loading 懒加载

    不是webpack概念 是es Module中的概念
    通过import异步加载模块，使用的在调用，babel-loader内置了promise，使用异步加载可以直接使用 async...await

chunk 是什么

    1 打包后生成的每个文件都是一个chunk

打包分析、Preloading, Prefetching 分析打包是否合理

1 https://github.com/webpack/analyse

2 webpack 官网 code splitting

    代码分割只能是第二次加载的时候提高加载速度，如何首次加载的时候就可以提高代码速度？
    
    当网络带宽空闲的时候加载此文件
    import(/* webpackPrefetch:true */ '引入文件的路径').then((fun)=>{fun()})
    
    webpackLoad:和引入的核心代码一块加载
    



如何查看代码利用率

    打开谷歌控制台
    1 ctrl+shift+p 
    2 选择 show coverage
    3 点击 黑色圆圈



css代码分割

    output:{
        filename:'[name].js', // 入口文件命名
        chunkFilename: '[name].chunk.js', // 代码分割的非入口文件命名
    }
    
    通过 MiniCssExtractPlugin 插件

webpack与浏览器缓存(Caching)

    项目打包上线的时候，如果用户之前打开过项目，再次打开项目是走的浏览器缓存，如果代码改变重新上面，则看不到最新的代码
    线上环境打包配置
    output:{
        filename:'[name].[contenthash].js', 内容改变 hash值改变，html引入路径改变，则不会在走缓存
        chunkFilename:'[name].[contenthash].js'
    }

Shimming 代码兼容

    webpack config:
    const webpack = require('webpack');
    
    plugin:[
        new webpack.ProvidePlugin({
            $:'jquery', // 出现$符号，则自动引入jquery
        })
    ]
    

环境变量的使用

    package.json
    script:{
        "dev-build":"webpack --config webpcak.common.js" // 没有在全局传递env变量
        "build":"webpack --env.production --config webpcak.common.js" // 通过全局变量env，在webpack中传递一个production的属性 值默认为true
    }
    
    webpack.common.js
    
    const merger = require('webpack-merge') 
     todo....
     
     module.exports = (env)=>{
         // env为全局变量
         if(env && env.production){
             return merge(配置对象1，配置对象1) // 合并配置对象
         }else{
             return merge(配置对象1，配置对象3)
         }
     }



库代码通过webpack打包

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:[name].js,
        libraryTarget:'umd', // AMD CMD nodeModule 都可以引入此库
        library:'library', // 可以通过script标签引入，全局变量可以使用 library调用
    }
    
    自己写的库文件引入其他库，不打包其他库的配置。目的是其他人引入此库的时候，也使用了同一个其他库，造成引入2次库的问题
    externals:["库的名字"] // 打包的时候不会打包此库到库代码中  也可以配置为对象，具体参考文档
    
    上传npm 
    pageage.json
    main:'./dist/main.js', // 入口文件 
    license:'MIT' //MIT 表示开源协议
    
    在文件下 
    npm adduser // 添加用户名和密码
    npm publish // 把项目发布到npm仓库中
    
    其他人使用通过 npm install + pageage.json中的name名字

PWA 打包配置 Progressive Web Application

    模拟后台服务器
    安装 http-server 
    1 npm install http-server -D
    2 package.json
     script:{
         start:'http-server dist', // 在dist文件下开始 http-server
     }
     
     如何缓存 PWA
     npm i workbox-webpack-plugin -D 谷歌提供好的插件 
      线上配置
      const WorkboxPlugin = require('workbox-webpack-plugin');
      
      plugins:[
          new WorkboxPlugin.GenerateSw({
              clientsClaim:true,
              skipWaiting:true
          }); // PWA底层应用 serviceWorker
      ]
      
      打包之后会多出：
       prechache-manifest和service-worker.js 两个文件 这两个文件可以支持PWA
      
      js文件下
      if('serviceWorker' in navigator) {
          window.addEventListener('load',()=>{
              navigator.serviceWorker.register('/service-worker.js')
              .then(registration=>{
                  console.log('success serviceWorker')
              }).catch(error=>{
                  console.log('error serviceWorker')
              })
          })
      }
     
     

Typescript的打包

    安装 ts-loader
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader', // npm i ts-loader typescript -D
                exclude:/node_modules/
            }
        ]
    }
    
    tsconfig.json
    {
        "compilerOpition":{
            "outDir":"./dist",
            "modules":"es6",
            "target":"es5",
            "allowJS":true
        }
    }
    
    使用ts安装第三方文件，还需要安装第三方的类型文件 比如安装jquery
    npm i jquery -D
    npm i @types/jquery -D
    
    git.hub
    搜索 types --> DefinitelyTyped/DefinitelyTyped -->TypeSearch链接 查看是否有此模块的类型文件

使用WebpackDevServer实现请求的转发

    js
    axios.get('/react/api/header.json').then(res=>{
        console.log(res)
    })
    
    devServer:{
        proxy:{
            '/react/api':{
                target:'http://www.dell-lee.com', // 当请求 /react/api 是会代理到http..下拿数据
                secure:false, //如果是https 需要加上，才能实现请求的转发
                pathRewrite:{
                    'header.json':'demo.json'， // 遇到请求header.json起始请求的是demo.json
                }
            }
        }
    }


