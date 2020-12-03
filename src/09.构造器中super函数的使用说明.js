class Person {
    constructor(name, age) { // 3
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
    // 问题1:为什么一定要在constructor中调用super:因为如果一个子类，通过extends关键字继承了子类，那么在子类的constructor构造函数中，必须优先调用一下super()
    // 问题2: super是什么：super是一个函数，而且他是父类的构造器，子类中的super其实就是父类中constructor的一个引用,所以调用了super()之后，a1实例的name和age都变成了undefined了,除非传相应的参数
    constructor(name, age) { // 1
        super(name, age); // 2
    }
}

const a1 = new American('Jack', 20);
console.log(a1);
a1.sayHello();

class Chinese extends Person {
    // IDNumber身份证号(中国人独有的就不适合挂载到父类上)
    constructor(name, age, IDNumber) {
        // 语法规范：在子类中，this只能放到super之后使用
        super(name, age);
        this.IDNumber = IDNumber;
    }
}
const c1 = new Chinese('张三', 22, '420**********');
console.log(c1);
c1.sayHello();
