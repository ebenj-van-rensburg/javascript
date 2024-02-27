"use strict";

let arrOfNums = [2, 3, 5, 6, 9, 10, 15];
arrOfNums.splice(0, 0, 1);
arrOfNums.splice(3, 0, 4);
arrOfNums.splice(6, 0, 7, 8);
arrOfNums.splice(10, 0, 11, 12, 13, 14);

console.log(arrOfNums);