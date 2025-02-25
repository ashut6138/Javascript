// let score = "33abc" // string
// let score = 33 //number
// let score = null // 0
// let score = undefined; // NaN
// let score = true // 1
// let score = false // 0

let score = "division"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // null -> 0
// console.log(valueInNumber); // string -> NaN (not a number)
// console.log(valueInNumber) // undefine -> NaN
// console.log(valueInNumber); // true -> 1 AND false -> 0

// "NOTES"
/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
*/      

// let isLoggedIn = 1 // true
// let isLoggedIn = "division" // true
let isLoggedIn = "" // false

let booleanIsLoggedIn  = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// "NOTES"
/*
1 => true
0 => false
"" => false
"division" => true
*/

let someNumber = 33

let stringNumber = Number(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);