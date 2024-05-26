const timer = 5000;
const outputInterval = 1000;
let val = 0;

const ready = () => {
	output(`Ready`);
	clearInterval(myInt);
	process.stdout.write('\n');
}

const counter = () => {
	val++;
	//process.stdout.write(`${(timer/1000)-val}`);
	output(`${(timer/1000)-val} seconds left`);
}

const output = (mes) => {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(mes);
}

output(`${timer/1000} second delay`);
const myInt = setInterval(counter,outputInterval);
setTimeout(ready,timer);

