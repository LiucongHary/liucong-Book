# loader的使用 
webpack默认只能打包处理js文件，打包其他文件需要借助loader

loader的使用 执行顺序 从下到上 从右到左 (作用：完成不同文件的打包)

    在配置文件中设置
    module:{
        rules:[
            {
                test:/\.jpg$/, // 打包jpg结尾的文件
                use:{
                    loader:'url-loader|file-loader', // 需要先安装 npm i file-loader -D
                	options:{
                		name:'[name].[ext]'， // 保证打包的名字不变 placeholder占位符
                		outputPath:'images/', // 打包到 dist/images 文件夹中
                		limit:2048,  // 只有url-loader才有此设置
                	}
                }
            }， {
                test:/\.vue$/, //打包vue的文件
                use:{loader:'vue-loader', // 需要先安装 npm i vue-loader -D}
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
    
    问题一：file-loader底层执行原理：
    1 先把文件拷贝到打包文件dist目录下，但是名字变化了
    2 给原文件中返回文件路径
    问题二： file-loader 和url-loader的区别
    url-loader:图片在打包文件中生成一个base64的文件，不会额外生成文件，设置limit的作用是，在大于limit值的时候，会和file-loader一样，小于limit值的话，图片打包在输出文件中
    
    问题三：打包css
    style-loader: 把打包文件挂载到head中
    css-loader: 分析多个css之间的关系，从而合并成一段css
    
    引入scss文件
    需要的loader: ['style-loader','css-loader','scss-loader','postcss-loader']
    postcss-loader: 添加厂商前缀
    	配置： 文件中 postcss.config.js
    		module.export = {
                plugins:[
                    require('autoprefixer') ; // 需要安装autoprefixer的插件  npm i autoprefixer -D
                ]
    		}
    	
    	
    css-loader中添加 
    	option:{
    	  importLoader:2, // scss样式中引入的scss，如果不写会直接走css-loader,加上此项话，则先执行下面的2个loader
    	  modules:true, //css模块化，只在引入的文件中起作用 
    	  引入方式 import style from './index.css' 模块引入
    	  		  import  from './index.css' 全局引用
    	}
    	
    打包字体图标的loader
    {
        test:/\.(eot|ttf|svg)$/,
        use:{
            loader:'file-loader
        }
    }
    

