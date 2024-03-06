"use strict";

let print = (...param1) => console.log(...param1);

print(Math.PI);
print(Math.ceil(5.7), Math.floor(5.7), Math.round(5.7))
print(Math.random());
print(Math.floor(Math.random() * 11));
print(Math.floor(Math.random() * 10 + 1));
print(Math.floor(Math.random() * 100 + 1));

function randNum() {
    let minVal = 1,
        maxVal = 100;
    return Math.floor(Math.random() * maxVal + minVal);
}

for (let i = 0; i < 100; i++) {
    print(randNum());
}