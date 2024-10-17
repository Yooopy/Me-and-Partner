class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}, ${this.age} years from ${this.city }`);
    }
}

class Cat {
    constructor(name ,age ,color ) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    pet() {
        console.log(`${this.name} is purrinnnnggggg`);
    }
}

const person1 = new Person("Vahid", 23, "Tehran");
const person2 = new Person("Ali", 25, "Tehran");
const cat1 = new Cat("Tom", 2, "black");
const cat2 = new Cat("Jerry", 1, "white");

cat1.pet();
cat2.pet();
person1.sayHello();
person2.sayHello();