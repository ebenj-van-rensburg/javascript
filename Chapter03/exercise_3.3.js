"use strict";

let myArr = [1, 2, 3];

let myArrOfArrs = [myArr, myArr, myArr];

console.log(myArrOfArrs[1][1]); // the value 2 from the second (index[1]) array
console.log(myArrOfArrs[0][2]); // 3 from the first myArr
console.log(myArrOfArrs[2][0]); // 1 from the last myArr
