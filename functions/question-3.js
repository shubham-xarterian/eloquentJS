function countBs(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "B") counter++
    }
    return counter;
}

function countChar(str, letter){
    let counter = 0;
    for(let  i = 0;i < str.length;i++){
        if(str[i] == letter) counter++
    }
    return counter;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
