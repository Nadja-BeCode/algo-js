const readline = require("readline-sync")
let size = readline . question ("What's  your shoe size?");
let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are and adult");
}