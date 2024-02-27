"use strict";

let myCar = {
    make: "Subaru",
    model: "Forester",
    color: "silver",
    year: 2015,
    bodyStyle: "Compact SUV",
    price: "$$$",
    running: true
};

let propColor = "color";

myCar[propColor] = "white";

propColor = "forSale";

myCar[propColor] = false;

console.log(myCar.make, myCar.model);

console.log(myCar.forSale);


