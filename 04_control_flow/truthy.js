/*
const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/
// "OUTPUT:"    Got user email



/*
const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/
// "OUTPUT:"    Don't have user email



/*
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/
// "OUTPUT:"    Got user email




// =========== FALSY VALUE ==========================
/*
*   false
*   0
*   -0
*   BigInt
*   0n
*   ""
*   null
*   undefined
*   Nan
*/


// ===========  TRUTHY VALUE ============================
/*
*   "0"
*   'false
*   " "
*   []
*   {}
*   function(){}
*/


/*
const userEmail = [] 
if (userEmail.length === 0) {
    console.log("Array is Empty");      // Array is Empty
}
*/


/*
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty:")         // Object is Empty
}
*/    



// INSIDE THE BROWSER:
/*   
    false == 0 --- true
    false == '0' --- true
    0 == '' --- true
*/




// ========== Nullish Coalesing Operator (??): null undefined
/*
let val1;
val1 = 5 ?? 10
console.log(val1);          // 5
*/


/*
let val1;
val1 = null ?? 10
console.log(val1);          // 10
*/


/*
let val1;
val1 = undefined ?? 15
console.log(val1)           // 15
*/

/*
let val1;
val1 = null ?? 10 ?? 18
console.log(val1);          // 10
*/


// ====================== Terniary Operator

//----------- syntax:
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


// "OUTPUT:" more than 80    "<="
//           less than 80       ">="