// 导入包
// import React, {Component} from 'react' // 可以按需加载
import React from 'react' // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放到页面上展示

// import '@/09.构造器中super函数的使用说明'

// class关键字创建组件
class Movie extends React.Component {
    // 构造器
    constructor() {
        // 由于Movie组件，继承了React.Component这个父类，所以自定义构造器中必须调用super()
        super()
        // 只有调用了super()以后，才能使用this关键字
        this.state = { // this.state = {}相当于Vue中data(){return{}}
            msg: '大家好，我是class创建的Movie组件'
        }
    }

    // 在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需接收，直接通过this.props.***访问即可
    render() { // 实例方法
    // 注意：不论是class还是普通function创建的组件，它们props都是只读的
        // this.props.name = "李四"

        // 在class创建组件中，this.state上的数据都是可读可写的
        this.state.msg = "msg的值被我们修改了！"
        return <div>
            {/* 注意：在class组件内部，this表示当前组件的实例对象 */}
            这是movie组件----{this.props.name}
            <h1>{this.state.msg}</h1>
            </div>
    }
}
const dog = {
    name: '小可爱',
    age: 3,
    food: '狗粮'
}

ReactDOM.render(<div>123
    {/* <Movie name={dog.name} age={dog.age} food={dog.food}></Movie> */}
    <Movie {...dog}></Movie>
</div>, document.getElementById('app'))
