"use strict"

const email = "yannick.vermeiren@dhl.com";
const nameFromEmail = email.substring(0,17).toUpperCase;
const name = nameFromEmail.replace("."," ");

console.log(`De eigenaar van ${email} is ${name}.`);
