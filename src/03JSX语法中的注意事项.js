// 1.导入包
import React from 'react'; // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的 组件 和 虚拟DOM 放到页面上展示

// // 2. 创建虚拟DOM元素
// // 回顾：什么是虚拟DOM 用JS对象的形式，来表示DOM和DOM之间的嵌套关系
// // const mydiv = React.createElement('div',{ id: 'mydiv', title: 'div aaa'}, '这是一个div元素')


// // HTML是最优秀的标记语言
// // 注意: 在JS文件中，默认不能写这种类似于HTML的标记，否则 打包会失败；
// // 可以使用babel来转换这些JS中的标签
// // 注意：在JS中，混合写入类似于HTML的语法，叫做JSX语法（符合XML规范的JS）
// // 注意：JSX语法的本质，还是在运行的时候，被转换成了React.createElement形式来执行的
// const  mydiv = <div id="mydiv" title="div aaa">这是一个div元素
// <div>这是一个div子元素</div>
// </div>
const a = 10;
const str = '你好，中国';
const boo = false;
const title = '999';
const h1 = <h1>红红火火恍恍惚惚</h1>;
const arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
];
const arrStr = ['AA', 'BB', 'CC'];

// 定义一个空数组，将来用来存放名称 标签
// 方案1: 手动在外面for循环
const nameArr = [];
// 注意：React中，需要把key添加给被forEach或map或for循环直接控制的元素
arrStr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>;
    nameArr.push(temp);
});

// // 数组的map方法，map中必须写return
// const result = arrStr.map(item=>{
//     return item +'~~'
// })

// 调用render函数渲染 jsx XML比HTML严格多了
// 什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到{}中
ReactDOM.render(<div>
    {a + 2}
    <hr/>
    {str}
    <hr/>
    {boo ? '条件为真' : '条件为假'}
    <hr/>
    {h1}
    <hr/>
    <p tilte = {title}>这是P标签</p>
    <hr/>
    {arr}
    <hr/>
    {arrStr}
    <hr/>
    {/* // 方案2: 使用map */}
    {/* {arrStr.map(item => {
        return <h3>{item}</h3>
    })} */}
    {arrStr.map(item => <div key={item}><h3>{item}</h3></div>)}
    <hr/>
    <p className="myele">111</p>
    <label htmlFor="id1"></label>
</div>, document.getElementById('app'));
