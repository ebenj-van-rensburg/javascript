"use strict";

let prize = prompt("Pick a random prize (1-10): "),
    response = "Your Prize is: \n";

switch (parseInt(prize)) {
    case 1:
        response += "A used Car";
        break;
    case 2:
        response += "Deflated Balloon";
        break;
    case 3:
        response += "Rabies in a can";
        break;
    case 4:
        response += "the Plague";
        break;
    case 5:
        response += "A kick in the shin";
        break;
    case 6:
        response += "5 cents";
        break;
    case 7:
        response += "A gold bar";
        break;
    case 8:
        response += "10 angry rabbits in your car";
        break;
    case 9:
        response += "Your ear will now always be wet";
        break;
    case 10:
        response += "Nothing, life is a prize";
        break;
    default:
        response += "AHHHHHH!"
        break;
}

console.log(response);
