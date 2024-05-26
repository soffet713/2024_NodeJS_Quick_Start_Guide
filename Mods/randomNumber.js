module.exports.random = (max) => {
	let rand = Math.floor(Math.random()*max+1);
	return rand;
}