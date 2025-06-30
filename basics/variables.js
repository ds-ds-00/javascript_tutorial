const accId=144553
let accEmail="suvam@google.com"
var accPass = "1234"
accCity="kolkata"
let accState;

// accId=2  //not allowed for constant

accEmail="suvam@dss.com"
accPass="23456"//got changed
accCity="chandigarh"


console.log(accId);


/*
prefer not to use var
because of issue in block scope and functional scope
 */

console.log();
console.table([accId,accEmail,accPass,accCity,accState]);
