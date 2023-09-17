function* iterate(array){
    for (let value of array){
        yield value
    }
}

const it = iterate(["Yoselin","David","Ana","Ulises","Jennifer"])
console.log(it.next().value)
console.log(it.next().value)