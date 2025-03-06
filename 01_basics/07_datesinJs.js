// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

// let myCreateDate = new Date(2025, 3, 16)
// console.log(myCreateDate.toDateString())


// let myCreateDate = new Date(2025, 3, 16, 5, 3)
// console.log(myCreateDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-14") // yy-mm-dd
let myCreatedDate = new Date("01-14-2023") // mm-dd-yy
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp); // milisecond
// console.log(myCreatedDate.getTime()) // milisecond me come  any number
// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000)) // remove decimal

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

// ${newDate.getDate()} and the time

newDate.toLocaleString('default', {
    weekday: "long"
})
