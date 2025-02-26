// "Primitive"

// .......7 Types: 
// string, --- 
// Number, 
// Boolean, 
// Null(empty), 
// Undefined, 
// Symbol(Anything to make the value unique), 
// BigInt 

//...........delaration:

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // OR let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const bigNumber = 673686846286876n

//.........RETURN TYPES:

console.log(typeof score) // number
console.log(typeof scoreValue) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof outsideTemp) // object
console.log(typeof userEmail) // undefined
console.log(typeof id) // symbol
console.log(typeof anotherId) // symbol
 console.log(typeof bigNumber) // bigInt

// "Reference" (Non-Primitive)

//....... 3 Types: (All returns types are OBJECT)
// Array
//Objects
// Functions.--- (object function)
// master of javascript --> object, browser event.

// ................Declaration:

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//............Return types:

console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof myObj) // object


//STUDY
//  "https://262.ecma-international.org/5.1/#sec-11.4.3"


//***********MEMORY AllOCATION***************

// STACK ---> Primitive  (copy)
// HEAP ---> non-primitive (reference)

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename

console.log(anotherName); // hiteshchoudharydotcom

anotherName = "chaiaurcode"

console.log(anotherName); // chaiaurcode

console.log(myYoutubename) // hiteshchaudharydotcom
console.log(anotherName) // chaiaurcode


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email); // hitesh@google.com
console.log(userTwo.email); // hitesh@google.com


