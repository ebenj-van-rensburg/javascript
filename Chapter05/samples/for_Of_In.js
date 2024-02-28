"use strict";

// for in loop: used to loop through objects' keys and return their values
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

for (let prop in car) {
    console.log(car[prop]);
}

// for of loop: used to loop through arrays' indexes and return their values
let entries = Object.entries(car);

console.log(entries);

for (let e of entries) {
    console.log(e[0], e[1]);
}
