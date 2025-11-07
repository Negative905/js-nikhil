// Object literals

const mysym = Symbol("key1")
const Jsuser = {
    name: "nikhil",
    "full name": "nikhil chauhan",
    [mysym]: "mykey1",
    age: 21,
    location: "jaipur",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])

// console.log(Jsuser["full name"])
// console.log(Jsuser [mysym])

Jsuser.email = "nikhil@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "nikhil@microsoft.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("hello Js user");
}
Jsuser.greetingtwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

