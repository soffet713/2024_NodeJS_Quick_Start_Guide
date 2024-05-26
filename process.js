process.stdout.write('Johnny\n');
process.stdout.write('Storm\n');

const arr = ["Dog", "Cat", "Orca", "Monkey", "Donkey", "Chicken"]

const output = function(val=0){
	process.stdout.write(`${arr[val]}\n`)
}

const num = Math.floor(Math.random()*6);
output(num);

process.stdin.on('data', data => {
	process.stdout.write(`You wrote ${data}\n`);
	process.exit();
})