// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true
// console.log(2 != 2) // false


// console.log("2" > 1) // true
// console.log("02" > 1) // true

// ........Below this types of conversion id AVOID in javascript..... (14 TO 31)

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true


// NOTE'S
/*
The reason is that an equality check == and comparison 
>, <, >=, <= work differently.
Comparison convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/


// let undefine;
// console.log(undefine == 0); // false
// console.log(undefine > 0); // false
// console.log(undefine < 0) // false


// === --> (strict) use

console.log("2" === 2);