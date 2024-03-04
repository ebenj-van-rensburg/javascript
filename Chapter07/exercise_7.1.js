"use strict";

let print = (...param1) => console.log(...param1);

class Person {
    constructor(firstName = "John/Jane", lastName = "Doe") {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        print("Hey", this.firstName, "how's it going?");
    }

    compliment(friendFriend, aCompliment) {
        return this.firstName + " " + this.lastName + " said that " + friendFriend + " is " + aCompliment + "!"
    }
}

let dave = new Person("Dave", "Koen"),
    akira = new Person("Akira", "Khaotic"),
    randPerson = new Person();

print(dave.compliment("Sheryl", "awesome"));
akira.greet();
randPerson.greet();
