const readline = require("readline-sync")
let min = readline . question ("What's your min number ? ");
let max = readline . question ("What's your max number ? ");
let current = readline . question ("What's your current number ? ");

if (((Number (current)) >= (Number (min))) && ((Number (current)) <= (Number (max)))) {
  console.log(current + " is between " +  min + "and " + max)
} else {
  console.log(current + " isn't between " +  min + "and " + max) }
if ((Number (min)) > (Number (max))) {
  console.log("Error this is not possible ");
}


