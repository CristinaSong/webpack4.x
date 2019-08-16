// 向外暴露一个打包的配置对象，因为webpack是基于Node构建的，所有webpack支持所有Node API和语法
module.exports = {
    mode: 'production' // development production
    // webpack4.x提供了约定大于配置的概念；目的为了尽量减少配置文件的体积，默认的打包入口路径是src->index.js
}

// // 行不行？目前不行 // 这是ES6中向外导出模块的API与之对应的是 import ** from ‘标识符’
// export default {}
// 哪些特性Node支持呢? 如果chrome浏览器支持哪些，Node就支持哪些，node.js是基于Chrome V8引擎的JS运行环境

// webpack-dev-server打包好的main.js是托管到了内存中，所以项目根目录中看不到
//但是我们可以认为，在项目根目录中，有一个看不见的main.js