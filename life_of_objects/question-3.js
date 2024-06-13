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

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

class GroupIterator {
    constructor(group) {
      this.group = group.arr;
    }
  
    next() {
      if (!this.group.length) {
        return {done: true};
      }
      let value = this.group[0];
      this.group.shift();
      return {value, done: false};
    }
  }



for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
// → a
// → b
// → c