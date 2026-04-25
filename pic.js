const readlinesync = require("readline-sync");
let user = readlinesync.question("enter a string")
let index = readlinesync.question("enter an index number: ");
let character = user[index];
console.log("character index is" + index +  ' '  + character);
