let prompt = require("prompt-sync")({ sigint:true })
let num = prompt("Enter a number: ")
num = num


for (let i = num-1; i > 1; i--) {
    num = num*i
}

console.log(num)