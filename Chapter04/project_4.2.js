"use strict";

let checkFriend = document.getElementById("checkFriend");

checkFriend.onclick = friendOrStranger;

function friendOrStranger() {
    let nameToCheck = document.getElementById("nameInput").value,
        friendDisplay = document.getElementById("friendDisplay");


    switch (nameToCheck) {
        case "David":
            friendDisplay.innerHTML = "Hey David, it's good to see you!";
            break;
        case "Donga":
            friendDisplay.innerHTML = "Hey Donga, it's good to see you!";
            break;
        case "Eddie":
            friendDisplay.innerHTML = "Hey Eddie, it's good to see you!";
            break;
        case "Sheryl":
            friendDisplay.innerHTML = "Hey Sheryl, it's good to see you!";
            break;
        case "Rishen":
            friendDisplay.innerHTML = "Hey Rishen, it's good to see you!";
            break;
        case "Precious":
            friendDisplay.innerHTML = "Hey Precious, it's good to see you!";
            break;
        case "Katlego":
            friendDisplay.innerHTML = "Hey Katlego, it's good to see you!";
            break;
        case "Pierre":
            friendDisplay.innerHTML = "Hey Pierre, it's good to see you!";
            break;
        case "Jurie":
            friendDisplay.innerHTML = "Hey Jurie, it's good to see you!";
            break;
        case "Marcus":
            friendDisplay.innerHTML = "Hey Marcus, it's good to see you!";
            break;
        case "Nyakallo":
            friendDisplay.innerHTML = "Hey Nyakallo, it's good to see you!";
            break;
        case "Kamva":
            friendDisplay.innerHTML = "Hey Kamva, it's good to see you!";
            break;
        case "Lindelwe":
            friendDisplay.innerHTML = "Hey Lindelwe, it's good to see you!";
            break;
        case "Marvelous":
            friendDisplay.innerHTML = "Hey Marvelous, it's good to see you!";
            break;
        case "Arnold":
            friendDisplay.innerHTML = "Hey Arnold, it's good to see you!";
            break;
        case "Savvas":
            friendDisplay.innerHTML = "Hey Savvas, it's good to see you!";
            break;
        case "Thabo":
            friendDisplay.innerHTML = "Hey Thabo, it's good to see you!";
            break;
        case "Happy":
            friendDisplay.innerHTML = "Hey Happy, it's good to see you!";
            break;
        case "Luvuyo":
            friendDisplay.innerHTML = "Hey Luvuyo, it's good to see you!";
            break;
        default:
            friendDisplay.innerHTML = "Welcome stranger, glad to make a new friend!";
            break;
    }
}
