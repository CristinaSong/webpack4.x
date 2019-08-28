import React from 'react' // 创建组件，虚拟DOM元素，生命周期

import CmtItem from '@/components/comment'
import Comment from '@/components/comment'

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
            <h1>评论列表</h1>
            {/* map控制的是CmtItem组件 */}
            {this.state.commentList.map(item=><CmtItem {...item}  key={item.id}></CmtItem>)}
         </div>
    }
}