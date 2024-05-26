const pathMod = require('path');
console.log(__filename)
console.log(pathMod.basename(__filename));

const utilMod = require('util');
//console.log(utilMod);

const first = require('./Mods/firstMod.js');
first();

const randNum = require('./Mods/randomNumber.js');
console.log(randNum.random(50));