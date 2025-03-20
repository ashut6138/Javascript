/*
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
}
console.log(user.username);
*/


/*
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}
console.log(user.username);
console.log(user.getUserDetails);
*/


/*
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
    }
}
console.log(user.username);
console.log(user.getUserDetails);
*/


/*
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails);
*/



/*
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
    }
}
console.log(user.username);
console.log(this);
*/



/*
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =  isLoggedIn

    return this
}

const userOne = User ("hitesh", 12, true)
console.log(userOne);
*/


/*
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =  isLoggedIn

    return this
}

const userOne = User ("hitesh", 12, true)
const userTwo = User("ChaiAurCode", 11, false)
console.log(userOne);
*/



/*
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =  isLoggedIn

    return this
}

const userOne = new User ("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
*/


/*
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =  isLoggedIn

}

const userOne = new User ("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
*/




/*
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =  isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this

}

const userOne = new User ("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
*/





/*
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn =  isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this

}

const userOne = new User ("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
*/

