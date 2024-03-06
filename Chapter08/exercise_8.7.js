"use strict";

let print = (...param1) => console.log(...param1);

let oneThreeTwoTwo = new Date(2022, 2, 1);
print(oneThreeTwoTwo);
let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    day = oneThreeTwoTwo.getDay(),
    fullYear = oneThreeTwoTwo.getFullYear(),
    month = oneThreeTwoTwo.getMonth(),
    theDate = `${monthArr[month]} ${day} ${fullYear}`;;
print(theDate);
