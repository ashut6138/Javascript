/*
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
*/


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//------------- reference
// sayMyName

// --------------- REFERENCE execute with ----- > ()
// sayMyName()


/*
function addTwoNumbers(number1, number2){       // number1, number2 <-------  both are "PARAMETER"
    console.log(number1 + number2);
}

//   3, 4 <--------------------- both are "ARGUMENT" means  --- jo ham value pass karte hai

addTwoNumbers(3, 4)     // "OUTPUT:"  7
addTwoNumbers(3, "4")   // "OUTPUT:" 34
addTwoNumbers("3", "4") // "OUTPUT:" 34
addTwoNumbers("3", "a") // "OUTPUT:" 3a
addTwoNumbers(3, null)  // "OUTPUT:" 3  


const result = addTwoNumbers(3, 5)      // 8

console.log("result: ", result); //             result: undefined
*/


/*
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    console.log("hitesh");          //  yes this line is print "BECAUSE" before return 
    return result
    console.log("hitesh"); // "KABHI PRINT NAHI HOGA" kyoki aap return ke baad likh rahe hai
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);  // "OUTPUT:"  Result: 8
*/


function addTwoNumbers(number1, number2){

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);        // Result: 8


/*
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))      // "OUTPUT:"  hitesh just logged in
console.log(loginUserMessage(""))           // "OUTPUT:"  just logged in
console.log(loginUserMessage());            // "output:"  undefined just logged in
*/

/*
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
// "OUTPUT:" Please enter a username
//           undefined just logged in
*/


/*
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
// "OUTPUT:" Please enter a username
//           undefined
*/



/*
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
// "OUTPUT:" Please enter a username
//           undefined
*/







































































