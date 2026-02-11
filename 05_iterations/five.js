const coding = ["js", "rb", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach(  (val) => {
//     console.log(val);
// } )

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
    langname: 'javascript',
    langfile: 'js'
},
    {
    langname: 'python',
    langfile: 'py'
},
    {
    langname: 'ruby',
    langfile: 'rb'
},
]

myCoding.forEach( (item)=> {
    console.log(item.langfile);
    
} )