// primitive datatype 

// 7catagories : string ,number, boolean,null,undefined,symbol,bigint


const id =Symbol('123')
const anotherid =Symbol('123')
console.log(id===anotherid);



// reference type(non primitive)

// Array , objects, Functions

const topic=["dev","recon","ops"];
let myobj={
    name:"github",
    age:20,
}

const myfunction=function (){
    // 
}
console.log(typeof myobj)
console.log(typeof myfunction)
console.log(typeof topic)
console.log(typeof id)

// it is a dynamic language