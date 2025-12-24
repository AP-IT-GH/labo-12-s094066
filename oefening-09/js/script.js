"use strict"

const amountToPay = 43;

const numberOf50s = Math.ceil(amountToPay % 50);

const change = (numberOf50s * 50) - amountToPay;

console.log(`To pay ${amountToPay} you will need ${numberOf50s} times a note of 50. Your change will be ${change}.`)