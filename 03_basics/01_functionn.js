
function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
    
}

// sayMyName()

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
//     }
function addTwonumbers(number1, number2){
    //    let result = number1 + number2 
    //    return result
         return number1 + number2
    }

    const result = addTwonumbers(3, 5)
    // console.log("result: ", result);
    
    function loginUserMessage (username = "nega"){
        if(username === undefined){ 
            console.log("please enter a username");
            return
            }
        return `${username} just logged in`
    }

    //  console.log(loginUserMessage("Negative"))
     console.log(loginUserMessage("negative"))