// arrays destructuring

let fruits = ["Apple","Banana"]
let [a,b] = fruits
console.log(a,b)

//Object desctructuring
let user = {username: 'Oscar', age: 34}
let {username,age} = user
console.log(username,user.age)

// spread operator
let person = {name: 'Oscar', age: 28}
let country = "MX"

let data = {...person,country}
console.log(data)

// rest
function sum(num, ...values){
    console.log(values)
    console.log(num +values[0])
}