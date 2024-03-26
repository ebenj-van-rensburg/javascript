let exp = "Hope you enjoy JavaScript";
console.log(exp.match(/ ([a-e])\w+/g))

/* 1. What will the following regex expression return from the following words? ["enjoy"]
Expression / ([a-e])\w+/g
"Hope you enjoy JavaScript" */


// 2. Are cookies part of the document object? yes


// 3. What will the following code do to a JavaScript cookie? 
const mydate = new Date();
mydate.setTime(mydate.getTime() - 1);
document.cookie = "username=; expires=" + mydate.toGMTString();


// 4. What is the output in the console from the following code? "hello world"
const a = "hello world";
(function () {
const a = "JavaScript";
})();
console.log(a);


// 5. What is the output in the console from the following code? a is not defined
"use strict";
myFun();
console.log(a);
function myFun() {
a = "Hello World";
}



// 6. What is the output of the following code? a c b
console.log("a");
setTimeout(() => {
console.log("b");
}, 0);
console.log("c");