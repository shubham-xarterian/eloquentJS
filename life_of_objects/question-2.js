class Group {

    constructor() {
        this.arr = [];
    }

    add(val){
        if(!this.arr.includes(val))
            this.arr.push(val)
    }

    static from(input) {
        const group = new Group();
        for(let value of input){
            group.add(value);
        }
        return group;
    }

    has(val) {
        return this.arr.includes(val)
    }

    delete(val) {
        if(this.has(val)){
            this.arr = this.arr.filter((curr) => curr !== val);
        }
    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

