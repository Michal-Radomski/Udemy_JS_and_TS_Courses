"use strict";

const utils = require("./utils");
// console.log("utils:", utils)

const name = "Hancock, Steven";

console.log("This is the main file: app.js");
console.log("name:", utils.upperCaseName(utils.formatName(name)));
