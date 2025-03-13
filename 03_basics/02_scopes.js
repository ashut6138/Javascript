/*
let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)
*/

/*
var c = 3000
if (true)
{
    let a = 10
    const b = 20
    c = 30
}

// console.log(a)
// console.log(b)
console.log(c)      // 30
*/


/*
let a = 300
if (true) {
    let a = 10
    const b = 20
}
console.log(a);     // 300
*/


/*
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);      // 10
}
console.log(a);     300  
*/


//---------------"NESTED SCOPE"


/*
function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);      // hitesh
    }
    // console.log(website); // error

    two()
}

// one()
*/


/*
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube "
        console.log(username + website);        // hitesh youtube
    }
    // console.log(website);        // error
}
// console.log(username);      // error
*/


// +++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++

console.log(addone(5));         // 6
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num) {
    return num + 2
}






































































