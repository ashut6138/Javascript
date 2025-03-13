//========================= if ====================

/*
if (true){
    // inside the loop
}
*/


/*
if (false){
    // no nside the loop
}
*/    


/*
const isUserloggedIn = true

if(isUserloggedIn) {
    console.log("executed");        // executed
}

// <, >, <=, >=, ==, !=, ===, !==

// "===" this operator work type and number both are equal's

if (2 == "2") {
    console.log("executed");        // ececuted
}

if (2 === "2") {
    console.log("executed")         // kuch nahi aa raha (use common'sense)
}

if (2 != 3){
    console.log("executed")         // executed
}
*/


const isUserloggedIn = true
const temperature = 41

/*
if (temperature < 50){
    console.log("less than 50");
}
console.log("temperature is greature than 50");

// output:      less than 50
//              temperature is greater than 50
*/



/*
if (temperature === 41){
    console.log("less than 50");
}
console.log("temperature is greature than 50");

// output:      less than 50
//              temperature is greater than 50
*/


/*
if (temperature === 41){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Executed")
*/
// output:      less than 50
//              Executed


/*
if (temperature === 40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Executed")
*/
// output:          temperature is greater than 50
//                  Executed


/*
const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);            // User power: fly
}
*/



//==== ERROR
/*
const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);        // power is not defined
}
console.log(`User power: ${power}`); 
*/



/*
const score = 200

if (score > 100) {
    var power = "fly"                   // replace const ---> var
    console.log(`User power: ${power}`);     
}
console.log(`User power: ${power}`); 
*/
// "OUTPUT:" User power: fly
//          User poweer: fly



///=============================>>> "NESTED LOOP":

/*
const balance = 1000

//  if (baance > 500) console.log("test"),console.log("test2"); ------>   BAD PRACTICE 

if (balance < 500){
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
}  else {
    console.log("less than 1200")
}
*/
// "OUTPUT:" less than 1200


/*
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

// Allow to buy course

*/


/*
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}else {
    console.log("Error")
}

// Error

*/




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}

// "OUTPUT:"        User logged in
