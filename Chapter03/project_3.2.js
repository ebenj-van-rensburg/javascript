"use strict";

let inventory = [];

let plasticChair = {
    name: "BendyzPlastic Chair",
    model: "0008",
    cost: 10,
    quantity: 53
},  
    woodChair = {
    name: "Bustin'Wood Chair",
    model: "0027",
    cost: 25,
    quantity: 19
},  
    steelChair = {
    name: "Stellar-Steel Chair",
    model: "1025",
    cost: 80,
    quantity: 7
};

inventory.push(plasticChair, woodChair, steelChair);

console.log(inventory);
console.log(inventory[2].quantity);

// accessing more elements from the data:

// 0008
console.log(inventory[0].model);

// "Bustin'Wood Chair"
console.log(inventory[1].name);

// quantites
let quantites = [];
for (let i = 0; i < inventory.length; i++) {
    quantites.push(inventory[i].quantity);
}
console.log(quantites);
