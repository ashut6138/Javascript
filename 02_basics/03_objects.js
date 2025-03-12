// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // if you are use the symbol inside the Square bracket of mySym like --> [mySym]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym); // Symbol
// console.log(typeof JsUser.mySym); // symbol

// console.log(JsUser[mySym]) // mykey1 -------------------

JsUser.email = "hitesh@chatgpt.com"
 // Object.freeze(JsUser)       // -->  aange koi changes nahi hoga agar karo ge to
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello Js User
console.log(JsUser.greetingTwo()); // Hello Js user, Hitesh

// NOTE:
            //  object ko access karenge [] bracket 
            // rare case me . se bhi access kar sakte hai