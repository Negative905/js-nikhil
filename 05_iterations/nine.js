const myNums = [1, 2, 3, 4]

// const mytotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval 
// }, 0)

// console.log(mytotal);


const mytotal = myNums.reduce( (acc, currval) => acc+currval, 0 )

console.log(mytotal);


const ShoppingCart = [
    {
        itemname : "Jscourse",
        price : 299
    },
    {
        itemname : "python",
        price : 399
    },
    {
        itemname : "react",
        price : 499
    },
    {
        itemname : "Dsa",
        price : 599
    },
]

const Pricetopay = ShoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(Pricetopay);
