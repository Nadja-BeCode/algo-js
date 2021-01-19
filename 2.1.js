const readline = require("../node_modules/readline-sync");
let age = readline.question ("What's your age?");

if (age>= 18) {
    console.log("You're an adult"); // if true
   } else {
    console.log("You're a child"); // if false
   }
