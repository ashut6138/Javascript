// ........string declaration:

const name = "hitesh"
const repoCount = 50

//bad practice: "AVOID"
// console.log(name + repoCount + "Value"); // hitesh50Value
// console.log(name + repoCount + " Value"); // hitesh50 Value


// :::best practice:::
// { ``--> this is a backticks "stringinterpulation" ye banate h placeholder jisse jo bhi value ho use aap direct indect kar panye"}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// Hello my name is hitesh and my repo cont is 50

// undestand difference:
console.log('repoCount') // repoCount
console.log("repoCount") // repoCount
console.log(repoCount); // 50



//.........................ONE MORE RULE: TO DECLARE A STRING

const gameName = new String('hiteshchaudhary')

console.log(gameName[0]); // h

console.log(gameName.__proto__); // {}

console.log(gameName.length); // 15

console.log(gameName.toUpperCase()); // HITESHCHAUDHARY

console.log(gameName.charAt(8)); // a // BY DEFAULT it takes a ZERO (0) index

console.log(gameName.indexOf('t')) // 2

console.log(gameName.indexOf()); // -1

// const newString = gameName.substring(0, 4)
// console.log(newString); // hite 
/* 0 means startIndex and 4(not include) means endIndex */

const newString = gameName.substring(-8, 4)
console.log(newString); // hite
// "subString" ke andar negative value nahi de sakte wo as a positive treat kar raha h 

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // ite


const greeting = "   Hello world!   ";
console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!"; --> Helloworld!

/*  NOTES:
The trim() method of String values removes whitespace from both 
ends of this string and returns a new string, without modifying the 
original string.
*/


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
// Expected output:  https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) // true

console.log(url.includes('sundar')) // false

const newgameName = new String('hitesh-hc-com')
console.log(newgameName.split('-')) // [ 'hitesh', 'hc', 'com' ]


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]); // fox

const chars = str.split("");
console.log(chars[8]); // k

const strCopy = str.split();
console.log(strCopy); // [ 'The quick brown fox jumps over the lazy dog.' ]




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
