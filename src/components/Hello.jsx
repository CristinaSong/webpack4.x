import React from 'react' // 创建组件，虚拟DOM元素，生命周期

// 第一种创建组件的方式：函数式组件
// 在构造函数中接收外界传递过来的数据
export default function Hello(props) {
    // 如果在一个组件中return一个null,则表示此组件是空的，什么都不会渲染
    // return null
    // 在组件中，必须返回一个合法的JSX虚拟DOM元素
    // 结论：不论是Vue还是React，组件中的props永远都是只读的，不能被重新赋值
    return <div>这是Hello组件 --- {props.name} --- {props.age} --- {props.food}</div>
}

// 把组件暴露出去
// export default Hello