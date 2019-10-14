import React from 'react' // 创建组件，虚拟DOM元素，生命周期
// 第一层封装:将样式对象和UI结构分离
const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
const userStyle = {fontSize: '14px'}
const contentStyle = {fontSize: '12px'}

// 第二层封装：合并成一个大的样式对象
// const styles = {
//     item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//     user: {fontSize: '14px'},
//     contend: {fontSize: '12px'}
// }


// 经过实验发现，直接导入css样式表，默认是在全局上，整个项目都生效
// Vue组件中的样式表可以使用<style scoped></style>解决样式冲突的问题
// 但是React没有类似scoped这样的指令，因为在React中根本没有指令的概念
// 第三层封装：抽离为单独的样式表模块
// import styles from '@/components/styles'

// 模块化样式表
import cmtItem from '@/css/cmtItem.css' // .css文件记得写后缀名
console.log(cmtItem,'cmtItem')

export default function CmtItem(props) {
    return <div className={cmtItem.item}>
    <h2>111</h2>
    <h1 className={cmtItem.user}>评论人：{props.user}</h1>
    <p className={cmtItem.contend}>评论内容：{props.content}</p>
</div>
}

