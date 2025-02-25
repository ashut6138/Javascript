const accountId = 144552
let accountEmail = "hitesh@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// variable  --> can be define two keywords "let" and "var"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2 // not changed OR not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121222"
accountCity = "Bengluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
