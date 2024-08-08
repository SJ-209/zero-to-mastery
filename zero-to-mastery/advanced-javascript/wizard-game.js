var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

const object4 = {
    a: function() {
        console.log(this);
    }
}

class player{
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, Im a ${this.type}`);
    }
}

class Wizard extends player {
    constructor(name, type) {
        super(name, type)
    }
    play(){
        console.log(`WEEEEE Im a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');