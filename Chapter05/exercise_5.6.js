"use strict";

let newArr = [];

for (let i = 0; i < 10; i++) {
    newArr.push(i);
}

console.log(newArr);

for (let j = 0; j < newArr.length; j++) {
    console.log(newArr[j]);
}

for (let n of newArr) {
    console.log("index of newArr: " + n);
}
