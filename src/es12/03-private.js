class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    #speak() {
        return "Hello";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age
    }

    set #uAge(n){
        this.age = n;
    }
}

const user = new User("Yoselin",10)
console.log(user.uAge)
console.log(user.uAge = 20)