// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react' // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放到页面上展示


// 2. 创建虚拟DOM元素
// 参数1: 创建的元素类型，字符串，表示元素的名称(标签名)
// 参数2: 是一个对象或null,表示当前这个DOM元素的属性
// 参数3: 子节点（包括其它 虚拟DOM 获取文本子节点）
// 参数n: 其它子节点
// <h1 id="myh1" title='this is a h1'>这是一个大大的H1</h1>
// const myh1 = React.createElement('h1', null, '这是一个大大的H1')
const myh1 = React.createElement('h1', {id: 'myh1', title: 'his is a h1'}, '这是一个大大的H1')


// 3. 使用ReactDOM把虚拟DOM渲染到页面上
// 参数1: 要渲染的那个虚拟DOM元素
// 参数2: 指定页面上的DOM元素，当作容器
ReactDOM.render(myh1, document.getElementById('app'))
// #app 会报Target container is not a DOM element 经过分析，猜测第二个参数接收的应该是一个DOM元素而不是选择器

// vue的渲染方法
// const vm = new Vue({
//     data: {},
//     el: '#app',
//     methods: {}
// })