"use strict";

let shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

let lastItem = shoppingList.pop();
console.log(lastItem);

shoppingList.sort();

console.log(shoppingList.indexOf("Milk"));

shoppingList.splice(1, 0, "Carrots", "Lettuce");

let newList = ["Juice", "Pop"];

let newShopList = shoppingList.concat(newList.concat(newList));

console.log(newShopList);

console.log(newShopList.lastIndexOf("Pop"));

