function decider(){
    var result = Math.floor(Math.random() * 11);
    if (result > 5){return true;}
    return false;
}

for (counter = 1; counter<11; counter++){
    var a = decider();
    console.log(a);}
