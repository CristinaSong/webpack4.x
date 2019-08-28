function Person(name,age) {
    this.name = name
    this.age = age
}
// info属性，直接挂载给了构造函数，所以是静态属性
Person.info = 'aaa'

const p1 = new Person('王多多', 18)
console.log(p1)
// 实例属性: 通过new出来的实例，访问到的属性
// console.log(p1.name)
// console.log(p1.age)
// 静态属性: 通过构造函数，直接访问到的属性
// console.log(this.info) //undefined
console.log(Person.info) // aaa

// -----------分割线-----------
console.log(' -----------分割线-----------')

// 创建一个动物类
class Animal{
    // 每一个类，都有一个构造器，如果我们程序员没有手动指定构造器，那么,可以认为类内部有个隐形的、看不见的空构造器，类似于constructor(){}
    // 构造器的作用就是每当new这个类的时候，必然会优先执行构造器中的代码
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
    }
    // 静态属性：在class内部，通过static修饰的属性
    // static info = "eee"
    static info = 'eee'
}
const a1 = new Animal('大黄', 3)
console.log(a1)
// console.log(a1.name) // 实例属性
// console.log(a1.age) // 实例属性
console.log(Animal.info) // info是Animal的静态属性
