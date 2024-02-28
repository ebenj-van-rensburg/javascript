"use strict";

let myHome = {
    bedrooms: 3,
    garageSpots: 2,
    fullBath: 1
};

for (let props in myHome) {
    console.log(props, myHome[props]);
}

let myHomeArr = Object.keys(myHome);

// for (let elements in myHomeArr) {
//     console.log(myHomeArr[elements]);
// }

// for of loop works better, the exercise asked for the above For In loop
for (let elements of myHomeArr) {
    console.log(elements);
}