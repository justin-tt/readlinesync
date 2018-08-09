// a simple async/await exercise to make
// readline "synchronous", like python3's input()
const readline = require('readline');

function getResponse() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(`What's up?`, (answer) => {
      console.log(`Thank you for: ${answer}`);
      rl.close();
      resolve(answer);
    })
  })
}

async function main() {
  console.log('before');
	let response = await getResponse();
	console.log(`response was`, response);
	console.log('after');
  
  console.log('before2');
	response = await getResponse();
	console.log(`response was`, response);
	console.log('after2');
}

// this pattern doesn't work because since main is asynchronous, we'll console.log('after')
// even before main() finishes! we didn't block the loop!
/*
console.log('before');
main();
console.log('after');
*/
main();
// to have them in order, we'll need to put the console.log('after') INSIDE
// the async function!

// but what if we need to get multiple inputs?
// this doesn't work either!!

// I think this is where generators come in...
// actually maybe not? could just simply stack everything into main() and get it working...
