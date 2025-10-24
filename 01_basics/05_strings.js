const name  = "nikhil"
const repocount  = 10

// console.log( name + repocount + "value" );

console.log( `hello my name is ${name} and my repocount is ${repocount}` );

const gamename = new String ('Negative-nc-com')

console.log( gamename [0]);
console.log( gamename .__proto__);

// console.log( gamename.length);
// console.log( gamename.toUpperCase());

console.log( gamename.charAt('3'));
console.log( gamename.indexOf('t'));

const newstring = gamename.substring ( 0 , 4 )
console.log( newstring );

const anotherstring = gamename.slice (-8 , 4)
console.log(anotherstring);

const newstringone = "   nikhil   "
console.log(newstringone);
console.log( newstringone.trim());

const url = "http://negative.com/nikhil%20chauhan"

console.log(url.replace ('%20', '-'));

console.log( url.includes ('nikhil'));
console.log(gamename.split ('-') );



