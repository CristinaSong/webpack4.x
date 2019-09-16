const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入 在内存中自动生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象，因为webpack是基于Node构建的，所有webpack支持所有Node API和语法
// webpack默认只能打包处理.js后缀名类型的文件；像.png .vue无法主动处理，所有要配置第三方的loader
module.exports = {
    mode: 'production', // development production
    // webpack4.x提供了约定大于配置的概念；目的为了尽量减少配置文件的体积，默认的打包入口路径是src->index.js
    plugins: [
        htmlPlugin
    ],
    module: { // 所有第三方 模块的配置规则
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}, // 千万不要忘记添加exclude排除项,不然会报错
            // 可以在css-loader之后，通过？追加参数,参数和参数通过&连接
            // 其中，有个固定参数，叫做modules，表示为普通的css样式表，启动模块化
            {   test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {localIdentName:'[path][name]-[local]-[hash:base64:5]'}
                        }
                    }]
            }, // 打包处理css样式表的第三方loader
            // {test: /\.css$/, use:['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']}, // 打包处理css，新版weppackApi不支持这种写法

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名导入的时候可以省略不写
        alias: {
            '@': path.join(__dirname, './src') // 这样@就表示项目根目录中src这一层路径
        }
    }
}

// // 行不行？目前不行 // 这是ES6中向外导出模块的API与之对应的是 import ** from ‘标识符’
// export default {}
// 哪些特性Node支持呢? 如果chrome浏览器支持哪些，Node就支持哪些，node.js是基于Chrome V8引擎的JS运行环境

// webpack-dev-server打包好的main.js是托管到了内存中，所以项目根目录中看不到
//但是我们可以认为，在项目根目录中，有一个看不见的main.js