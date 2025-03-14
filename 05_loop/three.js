// =======================> for of

// ["", "", ""]
// [{}, {}, {}]


// SYNTAX  for of:
/*
for (const element of object) {
    
}
*/


/*
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
    */


/*
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
    */




//============================> Maps:
/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);
*/

// "OUTPUT:" 
//   Map(3) {
//       'IN' => 'India',
//       'USA' => 'United States of America',
//       'Fr' => 'France'
//   }

/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // <-----------------------

console.log(map);
*/

// "UPER WALE KA SAME output"   lekin CODE CHANGE HAI



/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
*/

// "OUTPUT:"  IN :- India
//            USA :- United states of America
//            Fr  :- France



/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key of map) {
    console.log(key);
}
*/




/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
 for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
}
*/
// PLEASE TAKE A ERROR 
// THIS ERROE SOLVE NEXT FILE 
// four.js

