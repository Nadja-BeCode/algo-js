const readline = require("readline-sync")
let favoriteNumber = readline . question ("What's your favorite number ? ");

if (favoriteNumber != 42) {
    console.log(" Are you sure?");
    let favoriteNumber = readline . question ("What's your favorite number ? ");
}


// BE BACK !!! 