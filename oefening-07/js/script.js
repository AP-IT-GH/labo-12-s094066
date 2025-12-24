"use strict"

const startingValue = 100;
const interest = 2;
const time = 7;
const endValue = startingValue * (1 + interest)^time;

console.log(`Op een periode van ${time} jaar stijgt je bezit van ${startingValue} naar ${endValue.toFixed()}`);