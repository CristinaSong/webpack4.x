// 导入包
import React from 'react' // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放到页面上展示

// 导入组件
// 默认，如果不做单独的配置的话，不能省略.jsx后缀名
// import Hello from './components/Hello'

import Hello from '@/components/Hello'


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