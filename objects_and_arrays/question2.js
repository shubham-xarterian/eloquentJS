
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


function reverseArray(array){
    const newArray = [];
    for(let i = array.length - 1; i >= 0 ; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array){
    const n = array.length;
    for(let i = 0; i < n / 2; i++){
        const temp = array[n - i - 1];
        array[n - i] = array[i];
        array[i] = temp;
    }
}
