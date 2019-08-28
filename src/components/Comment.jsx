import React from 'react' // 创建组件，虚拟DOM元素，生命周期

export default function CmtItem(props) {
    return <div>
    <h2>评论人：{props.user}</h2>
    <p>评论内容：{props.content}</p>
</div>
}

