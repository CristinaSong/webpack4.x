// 导入包
// import React, {Component} from 'react' // 可以按需加载
import React from 'react' // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放到页面上展示


import CmtList from '@/components/CmtList'

ReactDOM.render(<div>111
    <CmtList></CmtList>
</div>, document.getElementById('app'))



