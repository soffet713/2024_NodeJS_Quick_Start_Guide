const http = require('http');
const fs = require('fs');

const port = 8080;
const host = '127.0.0.1';

const server = http.createServer((request,response)=> {
	fs.readFile('./Mods/index.html',(error,html)=> {
		if(error){throw error;}
		response.writeHead(200,{'Content-Type':'text/html'})
		response.write(`<script>alert('Hello there!');</script>`);
		response.write(html);
		response.end();
	});
})

server.listen(port,host,()=>{
	console.log('Ready');
})
