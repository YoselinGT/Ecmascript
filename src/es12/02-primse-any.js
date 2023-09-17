const promise1 = new Promise((resolve, reject) => reject("Reject"))
const promise2 = new Promise((resolve, reject) => resolve("Resolve"))
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"))


Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))

Promise.all([promise1,promise2,promise3])
    .then(response => console.log(response))
    .catch(error => {
        console.error("Al menos una promesa se ha rechazado", error)
    })