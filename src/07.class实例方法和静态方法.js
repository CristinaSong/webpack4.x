function Person(name,age) {
    this.name = name // 实例属性
    this.age = age
}
Person.info = 'aaa' // 静态属性

// 实例方法：如果放在内部，每一个实例上都有一个say方法，浪费内存，所以要挂载到原型上
Person.prototype.say = function() {
    console.log('这是Person的实例方法')
}
// 静态方法：在原型的构造器里
Person.show = function() {
    console.log('这是Persion的静态show方法')
}

const p1 = new Person('王多多', 18)
console.log(p1)
p1.say() // 这是实例方法
Person.show() // 这是静态方法

// -----------分割线-----------
console.log(' -----------分割线-----------')

// 创建一个动物类
// 注意1：在class的 {}  区间内，只能写 构造器、静态方法和静态属性、实例方法(实例属性写在构造器里)
// 注意2： class 关键字内部，还是用原来的配方实现的，所以说，我们把class关键字，称作语法糖(用起来比较方便，看的比较顺眼，但是本质未被改变，还是用function实现的)
class Animal{
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
    }
    // 静态属性：在class内部，通过static修饰的属性
    // static info = "eee"
    static info = 'eee' // (今后用得不多)
    // 这是动物的实例方法:也是挂载到原型对象上的实例方法(今后会经常 实例方法)
    jiao() {
        console.log('动物的实例方法')
    }
    // 这是动物类的静态方法（今后用得不多）
    static show() {
        console.log('这是Animal的静态show方法')
    }
}
const a1 = new Animal('大黄', 3)
console.log(a1)
a1.jiao()
Animal.show()


