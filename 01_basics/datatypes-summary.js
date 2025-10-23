// primitive

//  7 types : String, number, boolean, null, undefined, Symbol, BigInt

const value = 100
const scorevalue = 100.5

const isLoggedIn = false
const outsidetemp = null

let userEmail;

const id = Symbol ('123')
const Anotherid = Symbol ('123')

console.log( id === Anotherid )

const bignumber = 13181722424511157458n

// non primitive

// 3 types : Array, Objects, functions

const heroes = [ "leaonard", "sheldon", "howard" ];

let myobj = {
    name: "nikhil",
    age: 22,
}

const myfucntion = function (){
console.log("hello world");
    } 
 
console.log( typeof big);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// two types of memories 

// 1 stack memory (primitive)
// 2 heap memory (non primitive)

let myconsolename = "negative"

let anothername = myconsolename
 anothername = "whatever"

console.log( anothername );
console.log( myconsolename );

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "nikhil@google.com"

console.log( userone.email);
console.log( usertwo.email);

