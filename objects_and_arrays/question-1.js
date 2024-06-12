console.log(sum(range(1, 10, 2)));
console.log(range(5, 2, -1));

function range(a, b, steps = 1){
    const array = new Array();
    if(a < b){
        for(let i = a; i <= b; i = i + steps){
            array.push(i);
        }
    }else {
        console.log("else")
        for(let i = a; i >= b; i = i + steps){
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}