/*
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00
console.log(balance.toFixed(1)); // 100.0



const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // 23.9

const another_Number = 1123.8966
console.log(another_Number.toPrecision(3)) // 1.12e+3

const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3)) // 124


const otherNewNumber = 1234.8966
console.log(otherNewNumber.toPrecision(4)) // 1235

const other_Number = 123.8966
console.log(other_Number.toPrecision(4)) // 123.9
 
const new_Hundreds = 1000000
console.log(new_Hundreds.toLocaleString('en-IN')); // 10,00,000

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000

*/

// +++++++++++++++++++++ "MATH'S" +++++++++++++++++++++++++++++++

/*
console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)) // 4 'negative to positive'
console.log(Math.abs(4)) // 4 "but positive to positive"  not negative
console.log(Math.round(8.6)) // 9
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9)) // 4  
console.log(Math.min(4, 5, 6, 3, 8)) // 3
console.log(Math.min(4, 9, 8, 7)) // 4

console.log(Math.random()) // " Its value will always be between 0 and 1"
console.log(Math.random() * 10 + 1) // ex: 0.1 aa gaya isliye +1 karenge line no. 48
console.log(Math.random() * 10)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random() * 10) + 1) // 4  "0 To 9"
*/


const min = 10
const max = 20

console.log(Math.random()  * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*
E : 2.718281828459045
LN2 :  0.6931471805599453
LN10 :  2.302585092994046
LOG2E :  1.4426950408889634
LOG10E :  0.4342944819032518
PI : 3.141592653589793
SQRT1_2 :  0.7071067811865476
SQRT2  : 1.4142135623730951
abs()
acos()
acosh()
asin()
asinh()
atan()
atan2()
atanh()
cbrt()
ceil()
clz32()
cos()
cosh()
exp()
expm1()
floor()
fround()
hypot()
imul()
log()
log1p()
log2()
log10()
max()
min()
pow()
random()
round()
sign()
sin()
sinh()
sqrt()
tan()
tanh()
trunch()
SVGSymbolElement(Symbol.toStringTag): "Math"
[[prototype]] : Object
 */