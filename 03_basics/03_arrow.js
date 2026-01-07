const user = {
    username: "nikhil",
    price: 999,

    welcomeMessage: function(){
        console.log(` ${this.username} , welcome to website `);
        console.log(this);
        
    }
}

    // user.welcomeMessage()
    // user.username = "sam"
    // user.welcomeMessage()
    
    console.log(this);

    // function chai(){
        
    //     let username = "negative"
    //     console.log(this.username);
    // }
     
    //     chai()

    const chai = () => {
        let username = "negative"
        console.log(this.username);
        
    }
    //  chai()
    
    // const addtwo = (num1 , num2) => {
    //     return num1 + num2
    // }
    //  console.log(addtwo(3 , 4));

   //------  implicit return ------=

    // const addtwo = (num1 , num2) =>  num1 + num2
    
    const addtwo = (num1 , num2) =>  ({username: "nikhil"})
    
     console.log(addtwo(3 , 4));

     const myarray = [2, 4, 6, 8, 10]

     myarray.forEach (() => {})
     
