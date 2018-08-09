const input = require('./input');

async function main() {
	const name = await input(`What is your name? `);
	console.log(`Welcome ${name}`);
  
	const age = await input(`What is your age? `);
  console.log(`Woohoo! ${name} is ${age}!`);
}

main();
