// declarando
/*class User {
    // metodos
    greeting() {
        return 'Hello';
    }
}*/

//Instancia de una clase
/*const newUser = new User()
console.log(newUser.greeting())*/

//Construtor

/*class User {
    constructor() {
        console.log("Nuevo Usuario")
    }
    greeting() {
        return 'Hello';
    }
}

const newUser = new User()
//console.log(newUser.greeting())*/

// this
/*class User {
    constructor(name) {
        this.name = name
    }

    // metodos
    speak() {
        return "Hello";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const user = new User("Yoselin")
console.log(user.greeting())*/

class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return "Hello";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age
    }

    set uAge(n){
        this.age = n;
    }
}

const user = new User("Yoselin",10)
console.log(user.uAge)
console.log(user.uAge = 20)