const coding = ["js", "rb", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const Newnums = myNums.filter( (num)=> {
//     return num > 4
// })

// console.log(Newnums);

const Newnums = []

myNums.forEach( (num) => {
    if (num > 4) {
        Newnums.push(num)
    }
} )

console.log(Newnums);

