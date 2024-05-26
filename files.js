function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fs = require('fs');

const myFiles = fs.readdirSync('./Mods');
console.log(myFiles);

fs.readdir('./Mods',(error,files) => {
	if(error){throw error;}
	console.log('readdir');
	console.log(files);
})

const getSec = fs.readFileSync('./test01.txt','UTF-8');
console.log(getSec);

fs.readFile('./test01.txt','UTF-8',(error,output) => {
	if(error) {throw error;}
	console.log(output);
});


sleep(1000).then(() => { 
	const myText = `This is new text in a new file.`; 
	fs.writeFile('./secret.txt',myText,error => {
		if(error) {throw error;}
		console.log('File ready');
	});
});
