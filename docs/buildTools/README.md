# webpack
    ES Moudule 
        注意：使用es6导入就必须使用ES6导出
        引入： import xx from './....'
        导出 export default xx
     commonJS
     	引入 require(路径)
     	导出 modules.exports= xx
     CMD
     ADM

webpack 4.X

        "webpack": "^4.43.0", / '4.26.0'
        "webpack-cli": "^3.3.11" / '3.1.2'



webpack 模块打包工具 (js翻译器 可以识别import和require引入)

	注意：引入的js文件和css文件打包的方式是不同的

wepack 安装 与 初始化

    webpack 不建议安装全局
    
    查看webpack的版本
    在工程目录下 npx webpack -v (npx在当前项目目录的node_modules目录下找webpack包，找不到之后再去全局中找)
    安装确定的版本号
    npm info webpack 查看webpack的版本信息
    npm install webpack@版本号 webpack-cli -D (webpack-cli作用:可以在命令行中使用webpack的命令)
    
    
    初始化
    1 npm init -y
    2 npm install webpack webpack-cli --save-dev
    3 npx webpack index.js  // 用webpack翻译xx 文件

webpack 中的package.json

    "private":true , // 私有
    "main":"index.js", // 向外暴露js文件
     "license":'',    //是否开源设置
     "script":{
         "built":"webpack"  // npm run webpack 可以直接打包
     }
     

webpack的配置

    默认配置 webpack.config.js
    const path = require('path);
    module.exports = {
    	mode:'production', // 默认模式  or值为development打包代码不会被压缩
        entry:'相对路径', // 打包入口文件  入口文件不简写情况下{main:'路径'} 
        output:{
            filename:'main.js', // 打包的文件名称 filename:{main:'main.js'}
            path:path.resolve(__dirname,'dist') //打包的文件夹 绝对路径
        }
    }
    
    运行 npx webpack 即可打包
    打包输出的信息
    Hash:本次打包唯一的hash值
    version:本次使用的webpack的版本
    time:整体打包耗时
    asset：打包出来的文件名
    size:打包出来文件的大小
    chunks: 文件对应的id值，和与打包文件有关的id值
    chunk name:对应文件的名字
    entrypoint: 入口文件
    本次文件打包文件
    
    
    不是默认文件名的情况下：
    不是默认文件 运行 npx webpack --config + 配置文件的名称

package.json

    script:{
        "bundle":"webpack"  // 会先在本地node_modules中找包，没有再去全局找
    }

	



webpack默认只能打包处理js文件，打包其他文件需要借助loader

