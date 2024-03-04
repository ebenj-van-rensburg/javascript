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

    returnFullname() {
        return this.firstName + " " + this.lastName;
    }
}

let kamva = new Person("Kamva", "P"),
    rishen = new Person("Rishen", "E");

print(rishen.returnFullname());
print(kamva.returnFullname());

rishen.greet();

print(kamva.compliment("Eddie", "nice"))
