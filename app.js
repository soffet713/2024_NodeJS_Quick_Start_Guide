//let val = 'Hello World! Welcome to NodeJS.';
//console.log(val);

global.console.log('Hello');
console.log(__dirname);
console.log(__filename);
console.log(process.argv);

const first = process.argv[2];
const last = process.argv[3];

console.log(first);
console.log(last);

let message = `Hi, ${first} ${last}`;
console.log(message);

//console.log(__dirname);
//console.log(__filename);
//console.log(process);