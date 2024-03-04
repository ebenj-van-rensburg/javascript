"use strict";

let print = (...param1) => console.log(...param1);

class Animal {
    constructor(type, species, legs, covering, sound) {
        this.type = type;
        this.species = species;
        this.legs = legs;
        this.covering = covering;
        this.sound = sound;
    }

    makeSound() {
        print("The", this.species, "goes", this.sound);
    }  
}

Animal.prototype.shed = function () {
    print("The", this.species, "loses it's", this.covering, "in the correct season");
}

let animal1 = new Animal("canine", "wolf", 4, "fur", "bark"),
    animal2 = new Animal("feline", "lion", 4, "fur", "roar");

print(animal1);
animal1.makeSound();
animal1.shed();
animal2.makeSound();