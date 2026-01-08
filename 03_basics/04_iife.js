// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    //named iife (with name)
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //simple iife (no name)
     console.log(`DB CONNECTED TWO ${name}`);
} )('NEGATIVE')




