const readline = require("readline-sync")
var a = new Number (0)
a = readline . question ("Write a number between 1 and 7 please. ")

if (a == 1) {
    console.log("Monday");
} else if (a == 2) {
    console.log("Tuesday");
} else if (a == 3) {
    console.log("Wednesday");
} else if (a == 4) {
    console.log("Thursday");
} else if (a == 5) {
    console.log("Friday");
} else if (a == 6) {
    console.log("Saturday");
} else if (a == 7) {
    console.log("Sunday");
}


// DOESN'T WORK. Don't know why