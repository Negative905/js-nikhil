//dates

 let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let mycreatedDate = new Date(2025, 0, 21, 5, 2)
let mycreatedDate = new Date("2025-01-21")
// console.log(mycreatedDate.toLocaleString());

// let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

// `${newdate.getDay()} and the time`

newdate.toLocaleString('default', {
    weekday: "long"
})
