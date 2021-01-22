const readline = require("readline-sync")
let favSerie = readline . question ("Wat's the name of your favorite serie ? ");
let ProdOfYear = readline . question ("What's the production year ? ");
let namesOfCast = readline . question (" Give the names of the cast members ");


let askTvSerie() {
    console.log(" Name of your favorite serie is " + favSerie);
    console.log(" The production year was " + ProdOfYear);
    console.log( "The Names of th characters of your favorite serie are" + namesOfCast);

}

