// 导入包
import React from 'react' // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放到页面上展示

// 第一种创建组件的方式：函数式组件
// 在构造函数中接收外界传递过来的数据
function Hello(props) {
    // 如果在一个组件中return一个null,则表示此组件是空的，什么都不会渲染
    // return null
    // 在组件中，必须返回一个合法的JSX虚拟DOM元素
    // 结论：不论是Vue还是React，组件中的props永远都是只读的，不能被重新赋值
    return <div>这是Hello组件 --- {props.name} --- {props.age} --- {props.food}</div>
}
const dog = {
    name: '小可爱',
    age: 3,
    food: '狗粮'
}

ReactDOM.render(<div>
    123
    {/* 使用组件并为组件传递props数据 */}
    {/* <Hello name={dog.name} age={dog.age} food={dog.food}></Hello> */}
    {/* 使用展开运算符简化传递props数据的过程 */}
    <Hello {...dog}></Hello>
</div>, document.getElementById('app'))

// 展开运算符的使用
var o2 = {
    age: 22,
    address:'中国北京',
    phone: '123456'
}
var o1 = {
    name: 'zs',
    ...o2
}
console.log(o1)