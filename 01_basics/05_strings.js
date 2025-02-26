// ........string declaration:

const name = "hitesh"
const repoCount = 50

//bad practice:
// console.log(name + repoCount + "Value"); // hitesh50Value
// console.log(name + repoCount + " Value"); // hitesh50 Value


// :::best practice:::
// { ``--> this is a backticks "stringinterpulation" ye banate h placeholder jisse jo bhi value ho use aap direct indect kar panye"}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// Hello my name is hitesh and my repo cont is 50

// undestand difference:
console.log('repoCount') // repoCount
console.log("repoCount") // repoCount
console.log(repoCount); // 50



// ONE MORE RULE: TO DECLARE A STRING

const gameName = new String('hiteshchaudhary')

console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 15
console.log(gameName.toUpperCase()); // HITESHCHAUDHARY
console.log(gameName.charAt(8)); // a
// BY DEFAULT it takes a ZERO (0) index
console.log(gameName.indexOf('t')) // 2
console.log(gameName.indexOf()); // -1




// PROTOTYPE of STRING  all are its "FUNCTION" --> ()
/*
anchor()
at()
big()
blink()
bold()
CharAt()
charCodeAt()
codePointAt()
Concat()
String()
endWith()
fixed()
fontcolor()
fontsize()
includes()
indexOf()
isWellLLFormed()
italics()
lastindex()
length --> not a function
link()
localCompare()
match()
matchAll()
normalize()
padEnd()
repeat()
replace()
replaceAll()
search()
slice()
small()
split()
startsWith()
strike()
sub()
substr()
substring()
sup()
toLocaleLowerCase()
toLocalUpperCase()
toLowerCase()
toString()
toUpperCase()
toWellFormed()
trim()
trimEnd() --> trimRight
trimStart() --> trimLeft
trimEnd() --> trimEnd
trimStart() --> trimStart
valueOf()
[Symbol.iterator]() --> Symbol(Symbol.iterator)
*/
