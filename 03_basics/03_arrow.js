/*
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()   // hitesh , welcome to website
user.username = "san"
user.welcomeMessage()   // san , welcome to website
*/


/*
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()   // hitesh , welcome to website
user.username = "san"
user.welcomeMessage()   // san , welcome to website
*/

/*      "OUTPUT:" 
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
san , welcome to website
{
  username: 'san',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

/*
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
console.log(this);
*/
//      "OUTPUT:"
//      {}


// "NOTE:" BROWSER  ke andar this "window" aata hai
//          editor ke andar "{} -- EMPTY" aata hai



/*
function chai() {
    console.log(this);
}
chai()
*/


/*
function chai() {
    let username = "hitesh"
    console.log(this.username);     // undefined
}
chai()
*/


/*
const chai = function() {
    let username = "hitesh"
    console.log(this.username);     // undefined
}
chai()
*/


/*
const chai = () => {
    let username = "hitesh"
    console.log(this.username);     // undefined
}
chai()
*/


/*
const chai = () => {
    let username = "hitesh"
    console.log(this);     // {}
}
chai()
*/


//============================explicit return:
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));      // 7
*/


//=============================implicit return:
/*
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3, 4))       // 7
*/


/*
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))       // 7   
*/


/*
const addTwo = (num1, num2) => {username: "hitesh"}
console.log(addTwo(3, 4))       // undefined 
*/


/*
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))       // { username: 'hitesh' }
*/


// "NOTE:"  jab value pana  ho to () iske andar rakhna 


// IMMEDIATELY INVOKED FUNCTION EXPRESSION (ITFE)

/*
function chai() {
    console.log(`DB CONNECTED`);        // DB CONNECTED
}
chai()
*/


// function chai() {
//     console.log(`DB CONNECTED`);        // ERROR
// }()


/*
(function chai() {
    console.log(`DB CONNECTED`);        // DB CONNECTED
})()
*/

/*
(function chai() {
    console.log(`DB CONNECTED`);        // DB CONNECTED
})();
(function aurcode() {
    console.log(`DB CONNECTED TWO`);        // DB CONNECTED TWO
} )()
*/


/*
(function chai() {
    console.log(`DB CONNECTED`);        // DB CONNECTED
})();
( () =>  {
    console.log(`DB CONNECTED TWO`);        // DB CONNECTED TWO
} )()
*/



// di ITFE ek sadh me 
(function chai() {
    // name ITFE
    console.log(`DB CONNECTED`);        // DB CONNECTED
})();

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);        // DB CONNECTED TWO hitesh
} )('hitesh')


// 6:00:00 TO 6:22:00 only copy writing video