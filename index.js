let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


function deepEqual(a, b){
    if(a === b) return true;

    if(a == null || b == null || typeof a !== "object" || typeof b !== "object") return false;

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if(keysA.length !== keysB.length) return false;

    for(key of keysA){
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;

}