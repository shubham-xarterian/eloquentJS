function isEven(num){
    if(num < 0 ){
        return "input is invalid"
    }
    if(num == 0){
        return true
    }
    if(num == 1) {
        return false;
    }
    return isEven(num - 2);
}
console.log(isEven(-2));