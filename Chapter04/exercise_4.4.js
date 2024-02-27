"use strict";

let eightBallNum = Math.floor(Math.random() * 6),
    response = "Error",
    question = prompt("Ask the 8-ball for advice: ");

switch (eightBallNum) {
    case 0:
        response = "Signs point to yes";
        break;
    case 1:
        response = "The spirits say... perhaps not";
        break;
    case 2:
        response = "It could be likely";
        break;
    case 3:
        response = "It is certain!";
        break;
    case 4:
        response = "I can hear that it is not possible";
        break;
    case 5:
        response = "I see nothing but fire and destruction from this";
        break;
    default:
        break;
}

let reply = `You have asked ${question}.\nThe Magic 8-ball says: ${response}.`;
console.log(reply);
