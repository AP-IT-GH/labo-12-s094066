"use strict"

let text = "Dit is mijn tekst";
let lengte = text.length;
let bovenkant = "/"+"-".repeat(lengte + 2) + "\\";
let midden = "|" + text + "|";
let onderkant = "\\" + "-".repeat(lengte + 2) + "/";

console.log(
    bovenkant + "\n" +
    midden + "\n" + 
    onderkant
);