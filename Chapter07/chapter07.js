"use strict";

let print = (...param1) => console.log(...param1);

// class Dog {
//     constructor(dogName, weight, color, breed, noise) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//         this.noise = noise;
//     }

//     bark() {
//         print(this.noise)
//     }
// }

// let chihuahua = new Dog("Smudge", 2.1, "white", "Chihuahua", "yap! yap!"),
//     jack_russel = new Dog("Milo", 5.2, "copper and white", "Jack Russel Terrier", "GRRR, woof woof!"),
//     ridgeback1 = new Dog("Leeu", 55, "greying copper", "South African Ridgeback", "BARK! WOOF!"),
//     ridgeback2 = new Dog("Simba", 38, "copper+", "Rhodesian Ridgeback", "Woofwoofwoofwoof!");

// print(jack_russel.dogName, "is a", jack_russel.breed + ".", "He weighs", jack_russel.weight, "kilograms, and he goes:", jack_russel.noise);
// jack_russel.bark();


class Vehicle {
    #maxSpeed
    constructor(maxSpeed, color, speed) {
        this.#maxSpeed = maxSpeed;
        this.color = color;
        this.speed = speed;
    }

    increaseSpeed(speedIncrease) {
        if (this.speed < this.#maxSpeed) {
            this.speed += speedIncrease;
        }
    }
}

class Car extends Vehicle{
    #make
    #model
    #year
    #bodyType
    constructor(make, model, year, bodyType, maxSpeed, color, speed) {
        super(maxSpeed, color, speed);
        this.#make = make;
        this.#model = model;
        this.#year = year;
        this.#bodyType = bodyType;
    }

    get make() {
        return this.#make;
    }
    set make(make) {
        make.length > 1 ? (this.#make = make) && (print("Forester make is now:", this.#make)) : print("make must be longer than 1 letter")
        this.#make = make;
    }

    get model() {
        return this.#model;
    }
    set model(model) {
        this.#model = model;
    }

    get year() {
        return this.#year;
    }
    set year(year) {
        this.#year = year;
    }

    get bodyType() {
        return this.#bodyType;
    }
    set bodyType(bodyType) {
        this.#bodyType = bodyType;
    }

    checkSpeed() {
        print("This", this.#make, this.#model, "is moving at", this.speed, "kilometers an hour!");
    }
}

let p911 = new Car("Porsche", "911", 1963, "2-Door Coupe", 300, "red", 0),
    forester = new Car("Subaru", "Forester", 2015, "SUV", 165, "silver", 0);

forester.checkSpeed();
forester.increaseSpeed(100);
forester.checkSpeed();
print(forester.make);
forester.make = "S";
forester.make = "Subauwu";

// forester.introduce(); // cannot be called before prototype.introduce is built

Car.prototype.checkModel = function () {
    print("This is a", this.make, this.model);
};

forester.checkModel();

