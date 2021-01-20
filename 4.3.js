function rand10() {
    return Math.floor (Math.random() * (10 - 1 + 1) + 1)
}



const readline = require("readline-sync")
var n = new Number(0)
n = Math.floor(readline . question (" Write a random number "));

function multiRand(n) {
array = []
while (n != 0) {
array.push (rand10());
n --;
}
return array }


console.log(multiRand(n));

//DON'T UNDERSTAND WELL