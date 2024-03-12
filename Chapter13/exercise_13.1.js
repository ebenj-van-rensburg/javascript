function greet(fullName) {
    console.log(`Hello ${fullName[0]} ${fullName.slice(1).join(" ")}`)
}

function callbackGreet(fullName, callback) {
    nameArr = fullName.split(" ");
    console.log(nameArr);
    callback(nameArr);
} 

callbackGreet("Eben Janse van Rensburg", greet)
