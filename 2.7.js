const readline = require("readline-sync")
let n = readline . question (" Put a number n please. ");

let n2 =new Number (0);

while (n!=0) {
    n2=n2+ Math.floor (readline . question("Give me a number please"))
    n--;
} 
console.log(n2);

