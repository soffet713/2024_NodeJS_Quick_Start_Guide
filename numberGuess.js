const num = Math.floor(Math.random() * 10) + 1;
process.stdout.write(`Guess a number from 1 – 10\n`);
process.stdin.on('data', data => {
	let guess = data;
	process.stdout.write(`Your guess is ${guess}`);
	if(guess == num) {
		process.stdout.write(`Correct! It was ${num}.\n`);
		process.exit();
	} else {
		process.stdout.write(`Wrong guess of ${guess} – please guess again.\n`);
	}
});
