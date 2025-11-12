
// const nvidiauser = new Object()
const nvidiauser = {}

nvidiauser.id = "123abc"
nvidiauser.name = "nikhil"
nvidiauser.isLoggedIn = false

// console.log(nvidiauser);

const regularuser = {
    email: "nega@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nikhil",
            lastname: "chauhan"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        gmail: "n@gmail.com"
    },
    {
        id: 1,
        gmail: "n@gmail.com"
    },
    {
        id: 1,
        gmail: "n@gmail.com"
    },

]

users[1].gmail
console.log(nvidiauser);
console.log(Object.keys(nvidiauser));
console.log(Object.values(nvidiauser));
console.log(Object.entries(nvidiauser));

console.log(nvidiauser.hasownproperty('isLoggedIn'));




