# plugins 插件

	作用：可以在webpack运行到某个时刻的时候，帮你做一些事情

    插件一：
    1>安装插件
    npm install -D html-webpack-plugin 
    // 会在打包结束后，自动生成一个HTML文件，并把打包生成的js自动引入到html中
    2>引入插件
    let HtmlWebpackPlugin = require('html-webpack-plugin)
    3>使用插件
    plugins:[new HtmlWebpackPlugin(
    	{
            template:'src/index.html' , //创建一个打包模板
    	}
    )]
    
    插件二：
    clean-webpack-plugin 
    plugins:[new CleanWebpackPulgin(['dist])]
    // 打包前会删除dist下的文件
    
    插件三
    
    

