function decider(){
    var result = Math.floor(Math.random() * 11);
    if (result > 5){return true;}
    return false;
}

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

