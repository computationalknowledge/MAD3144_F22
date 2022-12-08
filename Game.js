function decider(){
    var result = Math.floor(Math.random() * 11);
    if (result > 5){return true;}
    return false;
}

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

////////////////////////////

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you? ', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
