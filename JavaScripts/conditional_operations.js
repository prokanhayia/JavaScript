let prompt = require("prompt-sync")({ sigint:true });
let age = prompt("Enter a number: ");

if (age>=18) {
    console.log("You are an adult.");
}

else if (age>=13 && age<18) {
    console.log("You are a teenager")
}

else if (age>=3 && age<13) {
    console.log("You are a kid")
}
else if (age>=0 && age<3) {
    console.log("You are a genius baby")
}

else {
    console.log("You are not even born")
}