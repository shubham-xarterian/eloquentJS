console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));


function arrayToList(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list; 
}

function listToArray(list){
    const arr = [];
    for(let node = list; node; node = node.rest){
        arr.push(node.value)
    }
    return arr;
}

function prepend(num, list){
   return {value: num, rest : {list}}     
}

function nth(list, number){
    let val;
    for(let node = list; node; node = node.rest){
       val = node.value;
       number--;
    if(number == -1){
        return val;
    }
    }
}
