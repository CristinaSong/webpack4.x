class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 打招呼的实例方法
    sayHello() {
        console.log('大家好');
    }
}

// 这是子类 美国人
// 在class类中，可以使用extends关键字，实现子类继承父类
// 语法: class 子类extend父类{}
class American extends Person {

}

const a1 = new American('Jack', 20);
console.log(a1);
a1.sayHello();

class Chinese extends Person {}
const c1 = new Chinese('张三', 22);
console.log(c1);
c1.sayHello();
