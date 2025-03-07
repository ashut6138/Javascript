// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0])
// console.log(myArr[1])

// ---------------------- Array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // sabse aange 9 aa jayega uske baad pura array
// myArr.shift() // sabe aange wala no. remove ho jaega

// console.log(myArr.includes(9)) // false
// console.log(myArr.indexOf(9)) // -1 because 9 is not present
// console.log(myArr.indexOf(4)) // 4

// const newArr = myArr.join()


// console.log(newArr) // 0, 1, 2, 3, 4, 5
// console.log(myArr) //  [ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof newArr) // string

// ----------- Slice , Splice

console.log("A ", myArr)        // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);                  // [ 1, 2 ]
console.log("B ", myArr)            // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)               //  [ 0, 4, 5 ]
console.log(myn2)                   // [ 1, 2, 3 ]
