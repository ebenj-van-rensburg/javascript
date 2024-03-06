"use strict";

// let print = (...param1) => console.log(...param1);
let print = console.log;

let myDate = new Date(2025, 2, 1),
    myDateStr = myDate.toDateString();

function countDown(endDate) {
    let totalMSeconds = Date.parse(endDate) - new Date(),
        days = Math.floor(totalMSeconds / 86400000),
        hours = Math.floor((totalMSeconds / 3600000) % 24),
        mins = Math.floor((totalMSeconds / 60000) % 60),
        secs = Math.floor((totalMSeconds / 1000) % 60);
    return {
        days,
        hours,
        mins,
        secs
    }; 
}

function update() {
    let temp = countDown(myDate),
        dateStr = "";
    for (let prop in temp) {
        dateStr += `${prop}: ${temp[prop]}\n`
    }
    print(dateStr);
    setTimeout(update, 1000);
}

update();