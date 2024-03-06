"use strict";

let print = (...param1) => console.log(...param1);

let duplicateArr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

let sortedArr = duplicateArr.filter((e, i, arr) => {return arr.indexOf(e) === i});

print(sortedArr);