import React from 'react' // 创建组件，虚拟DOM元素，生命周期

import CmtItem from '@/components/CmtItem'

// 使用class关键字定义父组件
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            commentList: [
                {id: 1, user: '张三', content:'哈哈，沙发'},
                {id: 2, user: '张四', content:'哈哈，板凳'},
                {id: 3, user: '张五', content:'哈哈，凉席'},
                {id: 4, user: '张六', content:'哈哈，砖头'},
                {id: 5, user: '张七', content:'哈哈，优秀'},
            ]
        }
    }
    render() {
        return <div>
            {/* 注意:在jsx中，如果想写行内样式，不能为style设置字符串值 */}
            {/* 而是应该这么写 style={{color:'red'}} 等价于HTML中<h1 style="color:red">评论列表</h1> */}
            {/* 在行内样式中，如果是数值类型的样式，则可以不用引号包裹，如果是字符串类型的样式值，则必须使用引号包裹 */}
            <h1 style={{color:'red',fontSize:'35px',zIndex: 1, fontWeight: 500, textAlign: "center"}}>评论列表</h1>
            {/* map控制的是CmtItem组件 */}
            {this.state.commentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)}
         </div>
    }
}