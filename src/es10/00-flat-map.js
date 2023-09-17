// flat

const array = [1,2,3,4,5,[1,2,3,4,5,[1,2,3,4]]];

console.log(array.flat(2))

console.log(array.flat(2))


// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *2]));