"use strict";

let print = (...param1) => console.log(...param1);


class MenuItems {
    #menuItem1
    #menuItem1Price
    #amount1
    #menuItem2
    #menuItem2Price
    #amount2
    constructor(menuItem1, menuItem1Price, amount1, menuItem2, menuItem2Price, amount2) {
        this.#menuItem1 = menuItem1;
        this.#menuItem1Price = menuItem1Price;
        this.#amount1 = amount1;
        this.#menuItem2 = menuItem2;
        this.#menuItem2Price = menuItem2Price;
        this.#amount2 = amount2;
    }

    calculateTotal() {
        if (this.#amount1 > 0 && this.#amount2 > 0) {
            return (this.#amount1 * this.#menuItem1Price) + (this.#amount2 * this.#menuItem2Price);
        }
    }
    get getTotal() {
        print("You ordered", this.#menuItem1, "and", this.#menuItem2 + ", your total is R" + this.calculateTotal());
    }
}

let bagleAndCoffee = new MenuItems("Bagles", 18, 3, "Coffee", 33, 2);
bagleAndCoffee.getTotal;

let burgersAndFries = new MenuItems("Burgers", 120, 2, "fries", 21, 3);
burgersAndFries.getTotal;

let milkshakesAndIcecream = new MenuItems("Milkshakes", 56, 2, "Ice-Cream", 17, 4);
milkshakesAndIcecream.getTotal;
