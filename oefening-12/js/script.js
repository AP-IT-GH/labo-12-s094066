"use strict"

const name = "Yannick";
const lastName = "Vermeiren";

const shortName = name.substring(0,1);
const pointName = shortName.replace("a",".");

console.log(`de naam "${name} ${lastName}" zal worden afgekort als "${pointName} ${lastName}"`);