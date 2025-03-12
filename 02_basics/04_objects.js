// -----------> SINGLETON OBJECT
// const tinderUser = new Object()
// console.log(tinderUser); // {}


// -----------> NON-SINGLETON
// const tinderUser = {}
// console.log(tinderUser); // {}



const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);    // OUTPUT: { id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname); // "OUTPUT" { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname); // "OUTPUT"  { firstname: 'hitesh', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname); // hitesh

/* NOTE: 
            firstname? --> ye wali baate aange jake karenge
            MEANS: agar h to show kardo nahi hai to mat karo
*/


/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = { obj1, obj2 }
console.log(obj3)  // "OUTPUT" { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
*/


/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3) // "OUTPUT" { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/

/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/


/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3) // "output:"  { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
*/


/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = {...obj1, ...obj2} // -------------- SPREAD
console.log(obj3);  // "OUTPUT:"   { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    
]
users[1].email
console.log(tinderUser); // "OUTPUT:"  { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // "OUTPUT:" [ 'id', 'name', 'isLoggedIn' ]
