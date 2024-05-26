const lodash = require(`lodash`);
let random1 = lodash.random(100);
console.log(random1);
let random2 = lodash.random(50,100);
console.log(random);

const arr = [3,4,56,77,'test',791,34,23,134];
console.log(lodash.shuffle(arr));
console.log(lodash.shuffle(arr));

lodash.times(10,() => {
    console.log(lodash.random(50,100));
})