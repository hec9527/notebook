class Person {
    hobby: string;
    constructor(hobby: string) {
        this.hobby = hobby;
    }

    sayHello() {
        console.log('我就喜欢：' + this.hobby);
    }
}
const person = new Person('看书，习武，书法，旅游');
person.sayHello();
