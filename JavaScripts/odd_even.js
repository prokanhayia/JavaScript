let prompt = require("prompt-sync")({ sigint:true })
let num = Number.parseInt(prompt("Enter a number: "))

if (num%2==0) {
    console.log(num,"is an even number.")
}
else{
    console.log(num,"is an odd number.")
}