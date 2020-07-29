//#region 使用this.setState修改state上的数据
// import React from 'react' // 创建组件，虚拟DOM，生命周期

// export default class BindEvent extends React.Component {
//     constructor() {
//         super()
//         // 私有属性
//         this.state = {
//             msg: '哈哈哈',
//             qqq: 'qqq',
//             sss: 'sss'
//         }
//     }

//     render() {
//         return <div>
//             <button onClick = {() => this.show('🐷','🐶')}>按钮</button>
//             <h3>{this.state.msg}</h3>
//         </div>
//     }

//     // 这是一个实例方法
//     show=(s1, s2) => {
//        // 在React中，推荐使用this.setState({})修改状态值
//        this.setState({
//            msg: '123' + s1 + s2
//        }, function(){
//             console.log(this.state.msg,'this.state.msg')
//        })
//     }
// }
//#endregion

import React from 'react' // 创建组件，虚拟DOM，生命周期

export default class BindEvent extends React.Component {
    constructor() {
        super()
        // 私有属性
        this.state = {
            msg: '哈哈哈',
        }
    }

    render() {
        return <div>
            <button onClick = {() => this.show('🐷','🐶')}>按钮</button>
            <h3>{this.state.msg}</h3>


            {/* 如果我们只是把文本框的value属性绑定到了state状态，但是不提供onChange处理函数的话，得到的文本框将会是一个只读的文本框，当为文本框绑定value值以后，要么同时提供一个readOnly,要么提供一个onChange处理函数 */}
            <input type="text" style={{width: '100%'}} value={this.state.msg} onChange={(e)=>this.txtChanged(e)} ref="txt"/>
        </div>
    }

    // 每当文本框的内容变化，必然会调用这个txtChanged
    txtChanged = (e) => {
        // 在onChange事件中，获取文本框的值，有两种方案
        // 方案1: 通过事件参数e来获取
        // console.log(e.target.value)
        // 方案2: 通过ref获取
        // console.log(this.refs.txt.value)
        const newVal = e.target.value;
        this.setState({
            msg: newVal
        })

    }

    // 这是一个实例方法
    show=(s1, s2) => {
       // 在React中，推荐使用this.setState({})修改状态值
       this.setState({
           msg: '123' + s1 + s2,
           info: {
               age: 3,
               name: 'gsx-3',
               color: 'blue',
           }
       }, function(){
            console.log(this.state.msg,'this.state.msg')
       })}


}

