class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.1) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    let counter = 0;
  while(true){
    try{
        return primitiveMultiply(a, b);
    }catch (e) {
        console.log(counter);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64