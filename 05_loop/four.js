/*
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(key);
}
*/
// "OUTPUT:"
//  js
//  cpp
//  rb
//  swift



/*
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(myObject[key]);
}
*/
/* output:
        javascript      
        C++
        ruby
        swift by apple
*/




/*
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/
/* output:
    js shortcut is for javascript
    cpp shortcut is for C++
    rb shortcut is for ruby
    swift shortcut is for swift by apple
*/    



/*
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}
*/
/* output:
    0
    1
    2
    3
    4
*/    


/*
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
*/
/* output:
    js
    rb
    py
    java
    cpp
*/    




const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

// koi output nahi de raha hai "BECAUSE"
// for in loop iteration me lagta hai 